/**
 * =============================================================================
 * Faction Build Actions - Structures
 * =============================================================================
 *
 * Structures are subdivided into eight distinct categories. Each category
 * defines six different build types. These cover a comprehensive range of
 * construction options (resource, defensive, military, civic, religious, cultural,
 * infrastructure, and commercial).
 */
/* --- Structure: Commercial --- */

/**
 * @constant {FactionActionBuildStructureCommercial}
 * @description Constants for commercial structure build actions.
 */
export const FACTION_BUILD_StructureCommercial = {
  default: "build_structure_commercial_default",
  market: "build_structure_commercial_market",
  bazaar: "build_structure_commercial_bazaar",
  trade_post: "build_structure_commercial_trade_post",
  merchant: "build_structure_commercial_merchant",
  exchange: "build_structure_commercial_exchange",
} as const satisfies FactionActionBuildStructureCommercial;
