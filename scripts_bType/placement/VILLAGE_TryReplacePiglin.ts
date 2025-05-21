import { BSHARP_Placement } from "scripts_bType/consts/BSHARP_Placement.ts";
import {
  END_FactionNames,
  MOB_FactionNames,
} from "scripts_bType/FACTION_NAMES.ts";
import { MAP_InvasionRecap } from "scripts_bType/map/MAP_InvasionRecap.ts";
import { PLAYER_GetPlayers } from "scripts_bType/player/PLAYER_GetPlayers.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { VILLAGE_GetStampForFaction } from "scripts_bType/village/VILLAGE_GetStampForFaction.ts";
import { VILLAGE_SIZE } from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

import { FACTION_ClaimArea } from "./FACTION_ClaimArea.ts";
import { FACTION_GetClusterPosition } from "./FACTION_GetClusterPosition.ts";
import { FACTION_GetOccupationBases } from "./FACTION_GetOccupationBases.ts";
import { QUERY_GetVillagesWithStampToStomp } from "./QUERY_GetVillagesWithStampToStomp.ts";
import { QUERY_IsStompingWellhouses } from "./QUERY_IsStompingWellhouses.ts";
import { VILLAGE_PlacementConfig } from "./VILLAGE_PlacementConfig.ts";
import { VILLAGE_SpawnAtPosition } from "./VILLAGE_SpawnAtPosition.ts";

/**
 * Attempts strategic replacement of piglin faction bases using procedural generation rules.
 * @param horde Target piglin faction identifier for base replacement.
 * @param size Target base scale classification.
 * @param stompOptions Optional configuration for structure stomping behavior.
 * @returns {boolean} True if base replacement successfully executed.
 * @remarks
 * Executes multi-stage placement validation including cluster proximity checks,
 * claimed area radius calculations (defaulting to VILLAGE_PlacementConfig values),
 * and texture stamp conflict avoidance.
 * Requires available dead bases of LARGE/BOSS size for replacement operations.
 * Integrates biome preference rules from VILLAGE_PlacementConfig.biomePreferences
 * and elevation constraints from VILLAGE_PlacementConfig.maxElevationAllowed.
 * Maintains separation from player positions, friendly villages, and mob occupation bases
 * using VILLAGE_PlacementConfig.playersMinDistance and
 * VILLAGE_PlacementConfig.minDistanceToMobAllianceOccupationBases parameters.
 * Logs placement outcomes through FORESIGHT and triggers FACTION_ClaimArea/VILLAGE_SpawnAtPosition
 * on successful validation. Returns false for invalid cluster positions or failed placement executions.
 */
export const VILLAGE_TryReplacePiglin = (
  horde: FactionNameId,
  size: VillageSizeKey,
  stompOptions: StompOptions = undefined,
): boolean => {
  const clusterSlotPosition = FACTION_GetClusterPosition(horde);
  if (clusterSlotPosition === null) {
    FORESIGHT.error(
      `[LFC PLACEMENT] ABORTING BASE PLACEMENT - HORDE CLUSTER WASN'T FOUND`,
    );
    return false;
  }

  // Distances
  let claimedAreaRadius =
    VILLAGE_PlacementConfig.claimedAreaRadius[horde][size];
  if (claimedAreaRadius === undefined) {
    claimedAreaRadius =
      VILLAGE_PlacementConfig.claimedAreaRadius[horde].default;
  }
  const oceanMinDistance =
    VILLAGE_PlacementConfig.oceanMinDistance * claimedAreaRadius;

  // We'll reserve space for the largest base it'll become
  let textureStampToEvaluate = VILLAGE_GetStampForFaction(horde, size);
  if (size === VILLAGE_SIZE.SMALL || size === VILLAGE_SIZE.MEDIUM) {
    textureStampToEvaluate = VILLAGE_GetStampForFaction(
      horde,
      VILLAGE_SIZE.LARGE,
    ) as string;
  }

  let textureStampPadding =
    VILLAGE_PlacementConfig.textureStampPadding[horde][size];
  if (textureStampPadding === undefined) {
    textureStampPadding =
      VILLAGE_PlacementConfig.textureStampPadding[horde].default;
  }

  // All villages in the game
  const allVillages = QUERY_GetAllVillages();
  const allVillagesAlive = QUERY_GetAllAliveVillages();
  const allVillagesDead = OPER_Difference(allVillages, allVillagesAlive);

  // All horde villages
  const allBasesDead = FILTER_ByVillageSize(allVillagesDead, [
    VILLAGE_SIZE.LARGE,
    VILLAGE_SIZE.BOSS,
  ]);

  // Replacement only makes sense if there are dead bases present
  if (!QUERY_HasEntities(allBasesDead)) {
    FORESIGHT.error(
      "[LFC PLACEMENT] Could not replace a base - no dead bases present.",
    );
    return false;
  }
  const fellowBasesAlive = FILTER_ByFactionName(
    FILTER_ByVillageSize(allVillagesAlive, [
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.BOSS,
    ]),
    [horde],
  );

  const allMobFaction = MOB_FactionNames.all;
  const occupationBases: VillageID[] = [];

  allMobFaction.forEach((mobAlliance) => {
    const factionOccupationBases = FACTION_GetOccupationBases(mobAlliance);
    occupationBases.push(...factionOccupationBases);
  });

  // All villages with texture stamp to avoid
  const villagesWithTextureStampToAvoid = OPER_Difference(
    allVillages,
    QUERY_GetVillagesWithStampToStomp(stompOptions),
  );

  // Players, WoF & etc.
  const friendlyVillagesFactions = QUERY_IsStompingWellhouses(stompOptions)
    ? [VILLAGE_SIZE.SMALL]
    : [VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.SMALL];
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
  OUTPUT_PlacementVillageSlots(allBasesDead);

  // BBI-NOTE: (vryzhov) these lines were added in Day0 CL 293645...
  // Includes
  //OUTPUT_PlacementSetPrimaryProximityRule(clusterSlotPosition, 0, maxCenterDistance)
  //OUTPUT_PlacementAddIncludeProximityRule(fellowBasesAlive, 0, maxBaseDistance, 1)?    // BBI-NOTE: (vryzhov) ...but conflict with these lines from Main CL 292618:
  // Try to keep close to the cluster and the bases
  OUTPUT_PlacementAddClosestProximityRule(clusterSlotPosition, 49);
  OUTPUT_PlacementAddClosestProximityRule(fellowBasesAlive, 49);

  // Avoid all texture stamps of all villages
  OUTPUT_PlacementSetAvoidVillageTextureStampsRule(
    villagesWithTextureStampToAvoid,
    textureStampToEvaluate as string,
    textureStampPadding,
    true,
  );

  // Excludes (non-texture stamp related)
  OUTPUT_PlacementAddExcludeProximityRule(
    occupationBases,
    VILLAGE_PlacementConfig.minDistanceToMobAllianceOccupationBases[horde],
    BSHARP_Placement.requireAll,
  );
  OUTPUT_PlacementAddExcludeProximityRule(
    endPortalVillage,
    VILLAGE_PlacementConfig.wofMinDistance,
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
    VILLAGE_PlacementConfig.maxElevationAllowed[horde],
  );

  // Biomes
  // BBI-NOTE: (vryzhov) this line was added in Day0 CL 293645...
  //OUTPUT_PlacementPreferBiomeRule(PLACEMENT_BASE_CONFIG.biomePreferences[horde])
  // BBI-NOTE: (vryzhov) ...but conflicts with this line from Main CL 292618:
  OUTPUT_PlacementPreferBiomeRule(
    VILLAGE_PlacementConfig.biomePreferences[horde],
    2,
  );
  OUTPUT_PlacementAddExcludeOceanProximityRule(oceanMinDistance);

  if (OUTPUT_PlacementExecute()) {
    // Put a claimed area in the middle
    FACTION_ClaimArea(
      horde,
      QUERY_PlacementResultPosition(),
      claimedAreaRadius,
    );
    VILLAGE_SpawnAtPosition(
      QUERY_PlacementResultPosition(),
      horde,
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
