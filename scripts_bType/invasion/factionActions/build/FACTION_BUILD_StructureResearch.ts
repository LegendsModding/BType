/* --- Research --- */

/**
 * @constant {FactionActionBuildResearch}
 * @description Constants for research build actions.
 */
export const FACTION_BUILD_StructureResearch = {
  default: "build_structure_research",
  laboratory: "build_structure_research_laboratory",
  library: "build_structure_research_library",
  observatory: "build_structure_research_observatory",
  academy: "build_structure_research_academy",
  archive: "build_structure_research_archive",
} as const satisfies FactionActionBuildResearch;
