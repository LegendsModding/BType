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
/* --- Structure: Resources --- */

/**
 * @constant {FactionActionBuildStructureResources}
 * @description Constants for resource structure build actions.
 */
export const FACTION_BUILD_StructureResource = {
  default: "build_structure_resources_default",
  farm: "build_structure_resources_farm",
  mine: "build_structure_resources_mine",
  lumber: "build_structure_resources_lumber",
  quarry: "build_structure_resources_quarry",
  water: "build_structure_resources_water",
} as const satisfies FactionActionBuildStructureResources;
