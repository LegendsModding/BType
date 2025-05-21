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
/* --- Structure: Defensive --- */

/**
 * @constant {FactionActionBuildStructureDefensive}
 * @description Constants for defensive structure build actions.
 */
export const FACTION_BUILD_StructureDefensive = {
  default: "build_structure_defensive_default",
  wall: "build_structure_defensive_wall",
  tower: "build_structure_defensive_tower",
  gate: "build_structure_defensive_gate",
  barricade: "build_structure_defensive_barricade",
  moat: "build_structure_defensive_moat",
} as const satisfies FactionActionBuildStructureDefensive;
