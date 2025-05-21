import { FACTION_Personality } from "scripts_bType/consts/FACTION_Personality.ts";
import { FACTION_PersonalityMap } from "scripts_bType/consts/FACTION_PersonalityMap.ts";
import { SETTING_GetCustomFactionPersonalityVarName } from "scripts_bType/settings/SETTING_GetCustomFactionPersonalityVarName.ts";
import { SETTING_IsFactionPersonalityKey } from "scripts_bType/settings/SETTING_IsFactionPersonalityKey.ts";

/**
 * Retrieves faction's AI personality strategy name.
 * @param factionName Target faction identifier.
 * @returns {string} Personality name from FACTION_PersonalityMap or "none" as default.
 * @remarks
 * Queries global personality variables via SETTING_GetCustomFactionPersonalityVarName.
 * Validates against SETTING_IsFactionPersonalityKey before mapping to human-readable names.
 */
export const FACTION_GetPersonalityName = (
  factionName: FactionNameId,
): string => {
  const factionPersonalityValue = QUERY_GetGlobalVariable(
    SETTING_GetCustomFactionPersonalityVarName(factionName),
  );
  if (SETTING_IsFactionPersonalityKey(factionPersonalityValue)) {
    return FACTION_PersonalityMap[factionPersonalityValue];
  }
  return FACTION_Personality.NONE;
};
