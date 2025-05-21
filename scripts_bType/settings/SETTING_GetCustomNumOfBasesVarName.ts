import { SETTING_CustomGV } from "./SETTING_CustomGV.ts";

/**
 * Generates global variable name for faction base count configurations.
 * @param factionName Faction identifier.
 * @returns {ICustomSettingGV} Namespaced variable identifier.
 * @remarks Constructs keys using "gv_custom_setting_number_of_bases_{faction}" format. Used for procedural generation limits.
 */
export const SETTING_GetCustomNumOfBasesVarName = (
  factionName: FactionNameId,
): ICustomSettingGV => {
  return SETTING_CustomGV("number_of_bases_" + factionName);
};
