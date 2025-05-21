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
/* --- Structure: Civic --- */

/**
 * @constant {FactionActionBuildStructureCivic}
 * @description Constants for civic structure build actions.
 */
export const FACTION_BUILD_StructureCivic = {
  default: "build_structure_civic_default",
  town_center: "build_structure_civic_town_center",
  council: "build_structure_civic_council",
  hall: "build_structure_civic_hall",
  library: "build_structure_civic_library",
  archive: "build_structure_civic_archive",
} as const satisfies FactionActionBuildStructureCivic;
