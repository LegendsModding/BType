import { libraryIndices, libraryFilters } from "./DeckConsts.ts";

/**
 * Creates a deck from a library where card values are less than a threshold.
 * @param library The name of the library.
 * @param threshold The value threshold.
 * @returns A new deck containing cards with values less than the threshold.
 */
export const DECK_MakeDeckFromLibraryValueLess = (
  library: string,
  threshold: number,
): Deck => {
  const deck: Deck = [];
  const libraryIndex = libraryIndices[library];
  libraryFilters[library].forEach((card) => {
    if (card.value < threshold) {
      const combinedCard: [[number, number]] = [[libraryIndex, card.index]];
      deck.push(combinedCard);
    }
  });
  return deck;
};
