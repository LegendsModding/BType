import { SETTING_CustomGV } from "scripts_bType/settings/SETTING_CustomGV.ts";

/**
 * Generates global variable name for faction personality configurations.
 * @param factionName Faction identifier.
 * @returns {`gv_custom_setting_${string}`} Namespaced variable identifier.
 * @remarks Constructs keys using "gv_custom_setting_horde_personality_{faction}" format. Used for storing AI behavior profiles.
 */
export const SETTING_GetCustomFactionPersonalityVarName = (
  factionName: FactionNameId,
): `gv_custom_setting_${string}` => {
  return SETTING_CustomGV("horde_personality_" + factionName);
};
