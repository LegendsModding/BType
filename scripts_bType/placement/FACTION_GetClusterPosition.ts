import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Retrieves cluster position entities for specified factions.
 * @param factionName Target faction identifier.
 * @returns {EntityGroup | null} Entity group containing cluster position or null if unresolved.
 * @remarks
 * Uses internal cluster name mappings for faction types. Returns null for factions without defined clusters or failed placement queries.
 */
export const FACTION_GetClusterPosition = (
  factionName: FactionNameId,
): EntityGroup | null => {
  // Define a mapping of faction names to their respective cluster slot names
  const factionClusterNames: Record<FactionNameId, string> = {
    [PIGLIN_FactionNames.horderunners]: "attack_cluster",
    [PIGLIN_FactionNames.unbreakables]: "defend_cluster",
    [PIGLIN_FactionNames.rotters]: "obstacle_cluster",
    [PIGLIN_FactionNames.frost]: "frost_cluster",
    [PIGLIN_FactionNames.blaze]: "blaze_cluster",
    "faction.mob.creeper": "creeper_cluster",
    "faction.mob.skeleton": "skeleton_cluster",
    "faction.mob.zombie": "zombie_cluster",
    "faction.culture.drylands": "drylands_cluster",
    "faction.culture.wetlands": "wetlands_cluster",
    "faction.culture.curselands": "curselands_cluster",
    "faction.player.campaign": "campaign_cluster",
    "faction.player.pvp": "pvp_cluster",
    "faction.end.ruined_portal": "",
    "faction.host.action": "",
    "faction.host.foresight": "",
    "faction.host.knowledge": "",
    "faction.undead.skeleton": "",
    "faction.undead.zombie": "",
  };

  // Retrieve the cluster slot name for the given faction
  const clusterSlotName = factionClusterNames[factionName];
  if (!clusterSlotName) {
    FORESIGHT.error(`[LFC] No cluster slot defined for faction ${factionName}`);
    return null;
  }

  // Attempt to find the position of the cluster slot
  OUTPUT_PlacementStart();
  OUTPUT_PlacementSlotTag(clusterSlotName);
  if (OUTPUT_PlacementExecute()) {
    return QUERY_PlacementResultPosition();
  } else {
    FORESIGHT.error(
      `[LFC] Couldn't find the cluster slot for faction ${factionName}`,
    );
    return null;
  }
};
