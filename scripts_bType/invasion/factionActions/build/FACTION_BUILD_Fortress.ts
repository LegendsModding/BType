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
/* --- Fortress --- */

/**
 * @constant {FactionActionBuildFortress}
 * @description Constants for fortress build actions.
 */
export const FACTION_BUILD_Fortress = {
  default: "build_fortress",
  defensive: "build_fortress_defensive",
  expanded: "build_fortress_expanded",
  high_ground: "build_fortress_high_ground",
  alliance: "build_fortress_alliance",
  trade: "build_fortress_trade",
  siege: "build_fortress_siege",
  resilient: "build_fortress_resilient",
} as const satisfies FactionActionBuildFortress;
