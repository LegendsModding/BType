/* --- Wonder --- */

/**
 * @constant {FactionActionBuildWonder}
 * @description Constants for wonder build actions.
 */
export const FACTION_BUILD_Wonder = {
  default: "build_wonder",
  monumental: "build_wonder_monumental",
  astronomical: "build_wonder_astronomical",
  historic: "build_wonder_historic",
  visionary: "build_wonder_visionary",
  epic: "build_wonder_epic",
} as const satisfies FactionActionBuildWonder;
