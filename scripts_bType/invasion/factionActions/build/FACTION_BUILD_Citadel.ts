/**
 * =============================================================================
 * Faction Build Actions - Military Bases
 * =============================================================================
 *
 * We have three distinct military base types:
 *   • Fortress – a heavily fortified military stronghold.
 *   • Citadel  – a central command center with administrative functions.
 *   • Bastion  – a forward-positioned stronghold for rapid defense or ambush.
 */
/* --- Citadel --- */

/**
 * @constant {FactionActionBuildCitadel}
 * @description Constants for citadel build actions.
 */
export const FACTION_BUILD_Citadel = {
  default: "build_citadel",
  command: "build_citadel_command",
  secure: "build_citadel_secure",
  elevated: "build_citadel_elevated",
  alliance: "build_citadel_alliance",
  trade: "build_citadel_trade",
  reserve: "build_citadel_reserve",
  rapid: "build_citadel_rapid",
} as const satisfies FactionActionBuildCitadel;
