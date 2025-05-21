import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Generates faction-specific intention decks from library templates.
 * @param faction Target faction identifier.
 * @param type Action category identifier.
 * @param count Optional copy multiplier for deck generation. @defaultValue undefined
 * @returns {Deck} Configured deck object with filtered cards.
 * @remarks
 * Uses DECK_MakeFromLibraryFilteredWithCopies when count is specified,
 * otherwise falls back to DECK_MakeFromLibraryFiltered.
 * Creates decks combining faction and type filters from "invasionCards" library.
 */
export const CARD_Intention = (
  faction: FactionNameId,
  type: string,
  count: number,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "invasionCards",
      [faction, type],
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("invasionCards", [faction, type]);
  }
};
