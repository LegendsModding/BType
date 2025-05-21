import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { DECK_Count } from "./DECK_Count.ts";
import { DECK_DrawFromTop } from "./DECK_DrawFromTop.ts";
import { DECK_PutOnTopOf } from "./DECK_PutOnTopOf.ts";

/**
 * Logs a specified number of cards from a deck while preserving deck integrity.
 * @param {Deck} deck Deck to inspect
 * @param {boolean} includeSubCards Include nested card details in log output
 * @param {number} count Number of cards to log
 * @example
 * DebugLogDeckCount(environmentDeck, true, 5);
 */
export const DebugLogDeckCount = (
  deck: Deck,
  includeSubCards: boolean,
  count: number,
): void => {
  FORESIGHT.info(
    "[DECK] Logging " + count + " out of " + DECK_Count(deck) + " cards.",
  );
  const tempDeck = DECK_DrawFromTop(deck, count);
  OUTPUT_DebugLogDeck(tempDeck, includeSubCards);
  DECK_PutOnTopOf(tempDeck, deck);
};
