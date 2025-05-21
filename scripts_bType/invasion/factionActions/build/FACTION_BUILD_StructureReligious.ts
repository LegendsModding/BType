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
/* --- Structure: Religious --- */

/**
 * @constant {FactionActionBuildStructureReligious}
 * @description Constants for religious structure build actions.
 */
export const FACTION_BUILD_StructureReligious = {
  default: "build_structure_religious_default",
  temple: "build_structure_religious_temple",
  shrine: "build_structure_religious_shrine",
  monastery: "build_structure_religious_monastery",
  chapel: "build_structure_religious_chapel",
  cathedral: "build_structure_religious_cathedral",
} as const satisfies FactionActionBuildStructureReligious;
