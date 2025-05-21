import { RUINED_END_PORTAL_CARD } from "scripts_bType/consts/RUINED_END_PORTAL_CARD.ts";
import { STANDARD_DISTRICT_DECK } from "scripts_bType/consts/STANDARD_DISTRICT_DECK.ts";

import { DECK_CenterZone } from "./DECK_CenterZone.ts";
import { DECK_Empty } from "./DECK_Empty.ts";
import { DECK_HeartStructure } from "./DECK_HeartStructure.ts";
import { DECK_PutOnBottomOf } from "./DECK_PutOnBottomOf.ts";

/**
 * Constructs deck for ruined end portal village generation.
 * Combines core zone structure with standard district layouts.
 * @param {Deck} [baseDeck=DECK_Empty()] Base generation deck
 * @returns {Deck} Complete village generation deck
 * @example
 * const portalVillage = DECK_RuinedEndPortalVillage();
 */
export const DECK_RuinedEndPortalVillage = (baseDeck = DECK_Empty()): Deck => {
  const ruinedEndPortalDeck = baseDeck;
  const centerZoneDeck = DECK_CenterZone(1, 2);
  DECK_PutOnBottomOf(centerZoneDeck, ruinedEndPortalDeck);

  const ruinedEndPortalStructure = DECK_HeartStructure(RUINED_END_PORTAL_CARD);
  DECK_PutOnBottomOf(ruinedEndPortalStructure, ruinedEndPortalDeck);

  // Add standard(default) cardinal districts
  DECK_PutOnBottomOf(STANDARD_DISTRICT_DECK, ruinedEndPortalDeck);
  return ruinedEndPortalDeck;
};
