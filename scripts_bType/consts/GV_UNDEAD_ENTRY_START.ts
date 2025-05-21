import { UNDEAD_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Global variable namespace for undead faction entry tracking.
 * Maps undead faction names to their respective entry start flags.
 * Controls zombie/skeleton faction introductions during campaign.
 * @constant
 * type {Record<AnyUndeadFaction, string>}
 */
export const GV_UNDEAD_ENTRY_START = {
  [UNDEAD_FactionNames.skeleton]: "gv_faction_skeleton_entry_start",
  [UNDEAD_FactionNames.zombie]: "gv_faction_zombie_entry_start",
};
