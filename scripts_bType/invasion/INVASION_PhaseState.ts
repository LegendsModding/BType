/**
 * Global variable registry for tracking invasion progression metrics.
 * @readonly
 * @remarks
 * Contains counters for completed mob alliances (MOB_ALLIANCES_COMPLETED_COUNT),
 * destroyed bases (BASES_DESTROYED_COUNT),
 * and Well of Fate upgrades (WOF_UPGRADES_PRESENT_COUNT).
 * Also tracks horde destruction states (ATTACK/DEFEND/OBSTACLE_HORDE_DESTROYED).
 * Persists through game sessions for analytics and system coordination.
 */
export const INVASION_PhaseState = {
  MOB_ALLIANCES_COMPLETED_COUNT: "gv_mob_alliance_completed_count",
  TOWERS_COMPLETED_COUNT: "gv_towers_completed_count",
  ALLIES_COMPLETED_COUNT: "gv_allies_completed_count",
  MOUNTS_COMPLETED_COUNT: "gv_mounts_completed_count",
  WOF_UPGRADES_PRESENT_COUNT: "gv_wof_upgrades_present_count",
  BASES_DESTROYED_COUNT: "gv_bases_destroyed_count",
  ATTACK_HORDE_DESTROYED: "gv_attack_horde_destroyed",
  DEFEND_HORDE_DESTROYED: "gv_defend_horde_destroyed",
  OBSTACLE_HORDE_DESTROYED: "gv_obstacle_horde_destroyed",
};
