import { CULTURE_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Global variable namespace for culture faction entry tracking.
 * Maps culture faction names to their respective entry start flags.
 * Used to control faction introduction timing and progression.
 * @constant
 * type {Record<AnyCultureFaction, string>}
 * @example
 * // Check if Curselands culture has entered:
 * if(QUERY_GetGlobalVariable(GV_CULTURE_ENTRY_START.curselands)) {
 *   // Culture-specific logic
 * }
 */
export const GV_CULTURE_ENTRY_START: Record<AnyCultureFaction, string> = {
  [CULTURE_FactionNames.curselands]:
    "gv_faction_culture_curselands_entry_start",
  [CULTURE_FactionNames.drylands]: "gv_faction_culture_drylands_entry_start",
  [CULTURE_FactionNames.wetlands]: "gv_faction_culture_wetlands_entry_start",
};
