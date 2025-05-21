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
/* --- Bastion --- */

/**
 * @constant {FactionActionBuildBastion}
 * @description Constants for bastion build actions.
 */
export const FACTION_BUILD_Bastion = {
  default: "build_bastion",
  fortified: "build_bastion_fortified",
  forward: "build_bastion_forward",
  outlying: "build_bastion_outlying",
  alliance: "build_bastion_alliance",
  trade: "build_bastion_trade",
  siege: "build_bastion_siege",
  ambush: "build_bastion_ambush",
} as const satisfies FactionActionBuildBastion;
