import { INVASION_DrawData } from "./INVASION_DrawData.ts";

/**
 * Retrieves faction-specific invasion deck configuration.
 * @param factionName Target faction identifier.
 * @returns {InvasionDeck | undefined} Deck configuration or undefined if not found.
 * @remarks
 * Searches INVASION_DrawData.hordeDrawDeck for matching faction entries.
 * Returns undefined when no configuration exists for the specified faction.
 */
export const INVASION_GetIntentionDeckInfo = (
  factionName: FactionNameId,
): InvasionDeck | undefined => {
  const hordeIntentionDeckInfo = INVASION_DrawData.hordeDrawDeck;
  for (const intentionInfo of hordeIntentionDeckInfo) {
    if (intentionInfo.factionName === factionName) {
      return intentionInfo;
    }
  }
  return undefined;
};
