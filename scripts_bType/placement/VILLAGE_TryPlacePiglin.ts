import { SLOT } from "scripts_bType/consts/SLOT.ts";
import { END_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { MAP_InvasionRecap } from "scripts_bType/map/MAP_InvasionRecap.ts";
import { PLAYER_GetPlayers } from "scripts_bType/player/PLAYER_GetPlayers.ts";
import { SETTING_CustomGV } from "scripts_bType/settings/SETTING_CustomGV.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { VILLAGE_GetStampForFaction } from "scripts_bType/village/VILLAGE_GetStampForFaction.ts";
import { VILLAGE_SIZE } from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

import { BSHARP_Placement } from "../consts/BSHARP_Placement.ts";

import { FACTION_ClaimArea } from "./FACTION_ClaimArea.ts";
import { FACTION_GetClusterPosition } from "./FACTION_GetClusterPosition.ts";
import { FACTION_GetOccupationBases } from "./FACTION_GetOccupationBases.ts";
import { QUERY_GetVillagesWithStampToStomp } from "./QUERY_GetVillagesWithStampToStomp.ts";
import { QUERY_IsStompingWellhouses } from "./QUERY_IsStompingWellhouses.ts";
import { VILLAGE_PlacementConfig } from "./VILLAGE_PlacementConfig.ts";
import { VILLAGE_SpawnAtPosition } from "./VILLAGE_SpawnAtPosition.ts";

/**
 * Attempts strategic placement of piglin faction bases using procedural generation rules.
 * @param faction Target piglin faction identifier for base construction.
 * @param size Target base scale classification.
 * @param stompOptions Optional configuration for structure stomping behavior. @defaultValue undefined
 * @returns {boolean} True if base placement successfully executed.
 * @remarks
 * Executes multi-stage placement validation including cluster proximity checks,
 * dynamic claimed area radius calculations (scaling with customWorldScale via square root adjustment),
 * and texture stamp conflict avoidance.
 * Maintains separation from existing occupation bases, player positions, and Well of Fate structures
 * using VILLAGE_PlacementConfig parameters.
 * Integrates biome preference rules from VILLAGE_PlacementConfig.biomePreferences
 * and elevation constraints from VILLAGE_PlacementConfig.maxElevationAllowed.
 * Establishes exclusion zones around friendly villages and mob alliance territories.
 * Logs placement outcomes through FORESIGHT and triggers FACTION_ClaimArea/VILLAGE_SpawnAtPosition
 * on successful validation. Returns false for invalid cluster positions or failed placement executions.
 */
export const VILLAGE_TryPlacePiglin = (
  faction: FactionNameId,
  size: VillageSizeKey,
  stompOptions: StompOptions = undefined,
): boolean => {
  const clusterSlotPosition = FACTION_GetClusterPosition(faction);
  if (clusterSlotPosition === null) {
    FORESIGHT.error(
      `[LFC PLACEMENT] ABORTING BASE PLACEMENT - HORDE CLUSTER WASN'T FOUND`,
    );
    return false;
  }

  // Distances
  let claimedAreaRadius =
    VILLAGE_PlacementConfig.claimedAreaRadius[faction][size];
  if (claimedAreaRadius === undefined) {
    claimedAreaRadius =
      VILLAGE_PlacementConfig.claimedAreaRadius[faction].default;
  }

  const customWorldScale = QUERY_GetGlobalVariable(
    SETTING_CustomGV("world_world_size"),
  );
  let fatelandsDistance = VILLAGE_PlacementConfig.wofMinDistance;

  if (customWorldScale > 1) {
    const customScaleSqrt = Math.sqrt(customWorldScale);
    claimedAreaRadius = (claimedAreaRadius + 50) * customScaleSqrt;
    fatelandsDistance = (fatelandsDistance + 50) * customScaleSqrt;
  }

  const oceanMinDistance =
    VILLAGE_PlacementConfig.oceanMinDistance * claimedAreaRadius;

  // We'll reserve space for the largest base it'll become
  let textureStampToEvaluate = VILLAGE_GetStampForFaction(
    faction,
    size,
  ) as string;
  if (size === VILLAGE_SIZE.SMALL || size === VILLAGE_SIZE.MEDIUM) {
    textureStampToEvaluate = VILLAGE_GetStampForFaction(
      faction,
      VILLAGE_SIZE.LARGE,
    ) as string;
  }

  let textureStampPadding =
    VILLAGE_PlacementConfig.textureStampPadding[faction][size];
  if (textureStampPadding === undefined) {
    textureStampPadding =
      VILLAGE_PlacementConfig.textureStampPadding[faction].default;
  }

  // All villages in the game
  const allVillages = QUERY_GetAllVillages();
  const allVillagesAlive = QUERY_GetAllAliveVillages();

  // All horde villages
  const fellowBasesAlive = FILTER_ByFactionName(
    FILTER_ByVillageSize(allVillagesAlive, [
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.BOSS,
    ]),
    [faction],
  );
  const allFactionOccupationBases = FACTION_GetOccupationBases(faction);

  // All villages with texture stamp to avoid
  const villagesWithTextureStampToAvoid = OPER_Difference(
    allVillages,
    QUERY_GetVillagesWithStampToStomp(stompOptions),
  );

  // Players, WoF & etc.
  const friendlyVillagesFactions = QUERY_IsStompingWellhouses(stompOptions)
    ? [VILLAGE_SIZE.SMALL]
    : [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM];
  const friendlyVillages = FILTER_ByVillageSize(
    allVillagesAlive,
    friendlyVillagesFactions,
  );
  const endPortalVillage = FILTER_ByFactionName(allVillagesAlive, [
    END_FactionNames.ruinedPortal,
  ]);
  const players = PLAYER_GetPlayers();

  // EXPECTED EXPERIENCE: Bases are placed to form blobs
  OUTPUT_PlacementStart();
  OUTPUT_PlacementSlotTag(SLOT.BASE);

  // BBI-NOTE: (vryzhov) these lines were added in Day0 CL 293645...
  // Includes
  //OUTPUT_PlacementSetPrimaryProximityRule(clusterSlotPosition, 0, maxCenterDistance)
  //OUTPUT_PlacementAddIncludeProximityRule(fellowBasesAlive, 0, maxBaseDistance, 1)
  // BBI-NOTE: (vryzhov) ...but conflict with these lines from Main CL 292618:
  // Try to keep close to the cluster and the bases
  OUTPUT_PlacementAddClosestProximityRule(clusterSlotPosition, 49);
  OUTPUT_PlacementAddClosestProximityRule(fellowBasesAlive, 49);

  // force bases to be placed outside of the claimed area of the factions own bases
  // This, combined with the closest proximity rules above forces the bases to be placed
  // as close as possible to their faction's bases, but outside of their already claimed area

  if (customWorldScale > 1) {
    OUTPUT_PlacementAddExcludeProximityRule(
      fellowBasesAlive,
      claimedAreaRadius,
      BSHARP_Placement.requireAll,
    );
  }

  // Avoid all texture stamps of all villages
  OUTPUT_PlacementSetAvoidVillageTextureStampsRule(
    villagesWithTextureStampToAvoid,
    textureStampToEvaluate,
    textureStampPadding,
    false,
  );

  // Excludes (non-texture stamp related)
  OUTPUT_PlacementAddExcludeProximityRule(
    allFactionOccupationBases,
    VILLAGE_PlacementConfig.minDistanceToMobAllianceOccupationBases[faction],
    BSHARP_Placement.requireAll,
  );
  OUTPUT_PlacementAddExcludeProximityRule(
    endPortalVillage,
    fatelandsDistance,
    BSHARP_Placement.requireAll,
  );
  OUTPUT_PlacementAddExcludeProximityRule(
    players,
    VILLAGE_PlacementConfig.playersMinDistance,
    BSHARP_Placement.requireAll,
  );
  OUTPUT_PlacementAddExcludeProximityRule(
    friendlyVillages,
    claimedAreaRadius + VILLAGE_PlacementConfig.minDistanceToFriendlyVillages,
    BSHARP_Placement.requireAll,
  );

  // Elevation
  OUTPUT_PlacementAddMaxElevationRule(
    VILLAGE_PlacementConfig.maxElevationAllowed[faction],
  );

  // Biomes
  // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
  //OUTPUT_PlacementPreferBiomeRule(PLACEMENT_BASE_CONFIG.biomePreferences[horde])
  // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
  OUTPUT_PlacementPreferBiomeRule(
    VILLAGE_PlacementConfig.biomePreferences[faction],
    2,
  );
  OUTPUT_PlacementAddExcludeOceanProximityRule(oceanMinDistance);

  if (OUTPUT_PlacementExecute()) {
    // Put a claimed area in the middle
    FACTION_ClaimArea(
      faction,
      QUERY_PlacementResultPosition(),
      claimedAreaRadius,
    );
    VILLAGE_SpawnAtPosition(
      QUERY_PlacementResultPosition(),
      faction,
      size,
      true,
      MAP_InvasionRecap.BUILT_NEW_BASE,
    );
    FORESIGHT.info("[LFC PLACEMENT] Spawned a base successfully!");
    return true;
  }

  FORESIGHT.error("[LFC PLACEMENT] Could not spawn a base!");
  return false;
};
