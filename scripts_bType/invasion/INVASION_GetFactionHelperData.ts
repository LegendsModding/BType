import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { INVASION_HelperVal } from "./INVASION_HelperVal.ts";

/**
 * Retrieves faction-specific helper data for invasion systems.
 * @param factionName Target faction identifier.
 * @returns {IFactionData | null} Faction configuration object or null if not found.
 * @remarks
 * Performs lookup in INVASION_HelperVal.factionObjects registry using strict name matching.
 * Returns null for unregistered factions with error logging. Critical for accessing faction-specific
 * attributes like village archetypes and procedural generation parameters.
 */
export const INVASION_GetFactionHelperData = (
  factionName: FactionNameId,
): IFactionData | null => {
  const dict = INVASION_HelperVal.factionObjects;
  for (const key in dict) {
    if (dict[key].name === factionName) {
      return dict[key];
    }
  }
  FORESIGHT.error(
    "GetFactionData has failed to find the passed faction: " + factionName,
  );
  return null;
};
