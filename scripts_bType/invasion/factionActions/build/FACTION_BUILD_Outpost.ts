/**
 * =============================================================================
 * Faction Build Actions - Outposts
 * =============================================================================
 */

/**
 * @constant {FactionActionBuildOutpost}
 * @description Constants for faction outpost build actions.
 */
export const FACTION_BUILD_Outpost = {
  default: "build_outpost",
  defensive: "build_outpost_defensive",
  offensive: "build_outpost_offensive",
  alliance: "build_outpost_alliance",
  trade: "build_outpost_trade",
  surveillance: "build_outpost_surveillance",
  border: "build_outpost_border",
  command: "build_outpost_command",
} as const satisfies FactionActionBuildOutpost;
