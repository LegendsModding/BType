import { TEAM } from "scripts_bType/consts/TEAM.ts";
import { TEXTURE_KEYS } from "scripts_bType/consts/TEXTURE_KEYS.ts";
import { INVASION_GetFactionHelperData } from "scripts_bType/invasion/INVASION_GetFactionHelperData.ts";
import { MAP_InvasionRecap } from "scripts_bType/map/MAP_InvasionRecap.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";
import { VILLAGE_GetStampForFaction } from "scripts_bType/village/VILLAGE_GetStampForFaction.ts";
import { VILLAGE_SizeMapping } from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

/**
 * Spawns defensive outpost at specified coordinates using faction-specific configuration rules.
 * @param positionEntity Target location entity for outpost placement.
 * @param factionName Owning faction identifier for the defensive structure.
 * @returns {VillageID} Identifier for the newly created outpost or invalid value on failure.
 * @remarks
 * Executes multi-stage construction process:
 * 1. Retrieves faction configuration data via INVASION_GetFactionHelperData
 * 2. Selects randomized outpost size from VILLAGE_SizeMapping.outpost.validSizes using group-based randomization
 * 3. Applies faction-specific texture stamps through VILLAGE_GetStampForFaction
 * 4. Registers outpost in invasion tracking system with MAP_InvasionRecap.BUILT_DEFENSIVE_OUTPOST
 * 5. Returns spawned village ID or invalid value when faction data is missing/unresolvable
 * Critical for establishing territorial defenses while maintaining procedural generation consistency.
 */
export const OUTPOST_SpawnDefensiveAtPosition = (
  positionEntity: SingleEntity,
  factionName: FactionNameId,
): VillageID => {
  const factionData = INVASION_GetFactionHelperData(factionName);
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
  OUTPUT_PlacementEntityUpdateTextureStamp(
    positionEntity,
    TEXTURE_KEYS.PRIMARY,
    VILLAGE_GetStampForFaction(factionName, randomSize) as string,
    true,
  );
  const base = OUTPUT_SpawnInvasionBase(
    positionEntity,
    factionData?.villageArchetypes[randomSize] as VillageSizeKey,
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
  return base;
};
