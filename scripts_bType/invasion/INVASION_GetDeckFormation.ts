import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { INVASION_GetIntentionDeckInfo } from "./INVASION_GetIntentionDeckInfo.ts";

/**
 * Retrieves procedural formation data for faction invasion decks based on phase.
 * @param factionName Target faction identifier.
 * @param phase Target invasion phase number.
 * @returns {FactionActionAmount[]} Formation configuration array or empty on failure.
 * @defaultValue Empty array when intentionInfo is unresolved.
 * @remarks
 * Accesses faction deck configurations via INVASION_GetIntentionDeckInfo and phase-indexed formations.
 * Returns first available formation in formationByOrder array. Logs errors for invalid configurations.
 */
export const INVASION_GetDeckFormation = (
  factionName: FactionNameId,
  phase: number,
): FactionActionAmount[] => {
  const intentionInfo = INVASION_GetIntentionDeckInfo(factionName);
  if (intentionInfo !== undefined) {
    for (const formation of intentionInfo.phases[phase].formationByOrder) {
      // Returning the first one, no need for ordering of arrival anymore
      return formation.formation;
    }
  }

  FORESIGHT.error(
    `ATTENTION: RETURNING AN EMPTY ACTION POOL FOR ${factionName} amd phase ${phase}`,
  );
  return [];
};
