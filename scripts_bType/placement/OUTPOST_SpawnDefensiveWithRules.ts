import { BSHARP_Placement } from "scripts_bType/consts/BSHARP_Placement.ts";
import { SLOT } from "scripts_bType/consts/SLOT.ts";
import { TEAM } from "scripts_bType/consts/TEAM.ts";
import { TEXTURE_KEYS } from "scripts_bType/consts/TEXTURE_KEYS.ts";
import { INVASION_GetFactionHelperData } from "scripts_bType/invasion/INVASION_GetFactionHelperData.ts";
import { MAP_InvasionRecap } from "scripts_bType/map/MAP_InvasionRecap.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";
import { PLAYER_GetPlayers } from "scripts_bType/player/PLAYER_GetPlayers.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { VILLAGE_GetStampForFaction } from "scripts_bType/village/VILLAGE_GetStampForFaction.ts";
import {
  VILLAGE_SIZE,
  VILLAGE_SizeMapping,
} from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

/**
 * Attempts strategic placement of defensive outposts using faction-specific procedural rules.
 * @param factionName Target faction identifier for outpost construction.
 * @param isInvasion Flag indicating invasion context for structure classification.
 * @param isInitialOutpost Toggle for initial outpost placement rules. @defaultValue false
 * @returns {boolean} True if outpost successfully placed, false on failure.
 * @remarks
 * Executes multi-stage validation and placement process:
 * 1. Retrieves faction configuration via INVASION_GetFactionHelperData
 * 2. Selects placement rules based on initial/regular outpost distinction
 * 3. Applies proximity constraints to own bases (using data.ownMinDistance/ownMaxDistance)
 * 4. Enforces separation from existing defensive outposts (data.outpostDistance)
 * 5. Maintains distance from other villages (data.otherDistance) and players (data.playerDistance)
 * 6. Uses VILLAGE_SizeMapping.outpost.validSizes for randomized size selection
 * 7. Applies texture stamps via VILLAGE_GetStampForFaction
 * 8. Registers outpost in invasion tracking systems when applicable
 * Returns false when faction data is missing, placement rules are unresolvable, or proximity constraints cannot be satisfied.
 */
export const OUTPOST_SpawnDefensiveWithRules = (
  factionName: FactionNameId,
  isInvasion: boolean,
  isInitialOutpost: boolean = false,
): boolean => {
  // Retrieve faction data and validate it
  const factionData = INVASION_GetFactionHelperData(factionName);
  if (!factionData) {
    FORESIGHT.error(
      `SpawnDefensiveOutpostWithRules: Failed to retrieve faction data for ${factionName}`,
    );
    return false;
  }

  // Validate placement data based on whether it's an initial outpost or not
  const placementData = isInitialOutpost
    ? factionData.initDefensiveOutpostPlacement
    : factionData.defensiveOutpostPlacement;

  if (!placementData || placementData.length === 0) {
    FORESIGHT.error(
      `SpawnDefensiveOutpostWithRules: No placement data found for ${factionName} (${
        isInitialOutpost ? "initial" : "regular"
      } defensive outpost)`,
    );
    return false;
  }

  // Retrieve all alive villages and filter by faction and type
  const allVillages = QUERY_GetAllAliveVillages();
  const ownBases = FILTER_ByVillageSize(
    FILTER_ByFactionName(allVillages, [factionName]),
    [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE],
  ); // Can change this to include frontlines if desired
  const defensiveOutposts = FILTER_ByVillageSize(
    allVillages,
    VILLAGE_SizeMapping.outpost.validSizes,
  );
  const otherVillages = OPER_Difference(
    OPER_Difference(allVillages, ownBases),
    defensiveOutposts,
  );
  const players = PLAYER_GetPlayers();

  // Attempt to place the outpost using the defined placement rules
  for (let i = 0; i < placementData.length; i++) {
    const data = placementData[i];
    OUTPUT_PlacementStart();
    OUTPUT_PlacementSlotTag(SLOT.BASE);

    // Include proximity to own bases (if applicable)
    if (
      data.ownMinDistance !== undefined &&
      data.ownMaxDistance !== undefined
    ) {
      OUTPUT_PlacementAddIncludeProximityRule(
        ownBases,
        data.ownMinDistance,
        data.ownMaxDistance,
        1,
      );
    }

    // Exclude proximity to own bases (if applicable)
    if (data.ownMinDistance !== undefined) {
      OUTPUT_PlacementAddExcludeProximityRule(
        ownBases,
        data.ownMinDistance,
        BSHARP_Placement.requireAll,
      ); // Ensure nothing is built close to own base
    }

    // Exclude proximity to defensive outposts (if applicable)
    if (data.outpostDistance !== undefined) {
      OUTPUT_PlacementAddExcludeProximityRule(
        defensiveOutposts,
        data.outpostDistance,
        BSHARP_Placement.requireAll,
      ); // Override for outpost (e.g., if you want to pack bases closer)
    }

    // Exclude proximity to other villages (if applicable)
    if (data.otherDistance !== undefined) {
      OUTPUT_PlacementAddExcludeProximityRule(
        otherVillages,
        data.otherDistance,
        BSHARP_Placement.requireAll,
      ); // The rest
    }

    // Exclude proximity to players (if applicable)
    if (data.playerDistance !== undefined) {
      OUTPUT_PlacementAddExcludeProximityRule(
        players,
        data.playerDistance,
        BSHARP_Placement.requireAll,
      ); // Away from players
    }

    // Execute placement
    if (OUTPUT_PlacementExecute()) {
      FORESIGHT.verbose(
        `SpawnDefensiveOutpostWithRules: Successful ${factionName} on try ${i + 1}`,
      );
      // Assuming settlementSizeMapping.outpost.validSizes is an array
      const validSizes = VILLAGE_SizeMapping.outpost.validSizes;

      // Generate a random index within the range of the array length
      const randomIndex = QUERY_RandomNumberGroup(
        0,
        validSizes.length - 1,
        "outpostSizes",
      );

      // Get the randomly chosen size
      const randomSize = validSizes[randomIndex];

      OUTPUT_PlacementUpdateTextureStamp(
        TEXTURE_KEYS.PRIMARY,
        VILLAGE_GetStampForFaction(factionName, randomSize) as string,
        false,
      );

      // Spawn the outpost based on whether it's part of an invasion
      if (isInvasion) {
        const base = OUTPUT_SpawnInvasionBase(
          QUERY_PlacementResultPosition(),
          factionData.villageArchetypes[randomSize],
          randomSize,
          factionName,
          TEAM.orange as TeamName,
          MAP_InvasionRecap.BUILT_DEFENSIVE_OUTPOST,
        );
        OUTPUT_MapSetKeyValue(
          base,
          MAP_Key.INVASION_RECAP,
          MAP_InvasionRecap.BUILT_DEFENSIVE_OUTPOST,
        );
      } else {
        OUTPUT_SpawnVillage(
          QUERY_PlacementResultPosition(),
          factionData.villageArchetypes[randomSize],
          randomSize,
          factionName,
          TEAM.orange as TeamName,
        );
      }
      return true;
    }
  }

  FORESIGHT.verbose(
    `SpawnDefensiveOutpostWithRules: No valid locations for ${factionName}`,
  );
  return false;
};
