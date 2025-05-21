import { END_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Global variable namespace for end faction entry tracking.
 * Maps end faction names to their respective entry start flags.
 * Controls when end-game factions become active in the campaign.
 * @constant
 * type {Record<AnyEndFaction, string>}
 */
export const GV_END_ENTRY_START: Record<AnyEndFaction, string> = {
  [END_FactionNames.ruinedPortal]: "gv_faction_end_ruined_portal_entry_start",
};
