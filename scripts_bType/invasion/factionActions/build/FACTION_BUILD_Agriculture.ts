/* --- Agriculture --- */

/**
 * @constant {FactionActionBuildAgriculture}
 * @description Constants for agricultural build actions.
 */
export const FACTION_BUILD_Agriculture = {
  default: "build_agriculture",
  field: "build_agriculture_field",
  orchard: "build_agriculture_orchard",
  vineyard: "build_agriculture_vineyard",
  pasture: "build_agriculture_pasture",
  greenhouse: "build_agriculture_greenhouse",
} as const satisfies FactionActionBuildAgriculture;
