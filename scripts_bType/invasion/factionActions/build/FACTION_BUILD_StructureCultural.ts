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
/* --- Structure: Cultural --- */

/**
 * @constant {FactionActionBuildStructureCultural}
 * @description Constants for cultural structure build actions.
 */
export const FACTION_BUILD_StructureCultural = {
  default: "build_structure_cultural_default",
  monument: "build_structure_cultural_monument",
  statue: "build_structure_cultural_statue",
  arena: "build_structure_cultural_arena",
  museum: "build_structure_cultural_museum",
  festival: "build_structure_cultural_festival",
} as const satisfies FactionActionBuildStructureCultural;
