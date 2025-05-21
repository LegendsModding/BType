/**
 * =============================================================================
 * Faction Build Actions - Camps
 * =============================================================================
 */

/**
 * @constant {FactionActionBuildCamp}
 * @description Constants for faction camp build actions.
 */
export const FACTION_BUILD_Camp = {
  default: "build_camp",
  trade: "build_camp_trade",
  siege: "build_camp_siege",
  war: "build_camp_war",
  scout: "build_camp_scout",
  resource: "build_camp_resource",
  expedition: "build_camp_expedition",
  rally: "build_camp_rally",
} as const satisfies FactionActionBuildCamp;
