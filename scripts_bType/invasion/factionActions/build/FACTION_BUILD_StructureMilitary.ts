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
/* --- Structure: Military --- */

/**
 * @constant {FactionActionBuildStructureMilitary}
 * @description Constants for military structure build actions.
 */
export const FACTION_BUILD_StructureMilitary = {
  default: "build_structure_military_default",
  barracks: "build_structure_military_barracks",
  armory: "build_structure_military_armory",
  training: "build_structure_military_training",
  command: "build_structure_military_command",
  parade: "build_structure_military_parade",
} as const satisfies FactionActionBuildStructureMilitary;
