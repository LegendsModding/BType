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
/* --- Structure: Infrastructure --- */

/**
 * @constant {FactionActionBuildStructureInfrastructure}
 * @description Constants for infrastructure structure build actions.
 */
export const FACTION_BUILD_Infrastructure = {
  default: "build_structure_infrastructure_default",
  road: "build_structure_infrastructure_road",
  bridge: "build_structure_infrastructure_bridge",
  aqueduct: "build_structure_infrastructure_aqueduct",
  gate: "build_structure_infrastructure_gate",
  tunnel: "build_structure_infrastructure_tunnel",
} as const satisfies FactionActionBuildStructureInfrastructure;
