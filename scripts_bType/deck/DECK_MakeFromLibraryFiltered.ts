import { libraryIndices, libraryFilters } from "./DeckConsts.ts";

/**
 * Creates filtered decks from libraries.
 * Selects cards matching specific criteria.
 * @param {string} library Source library
 * @param {string | string[]} filter Tag filter
 * @returns {Deck} Filtered card deck
 * @example
 * // Create desert biome deck
 * const desertDeck = DECK_MakeFromLibraryFiltered(
 *   "biomes",
 *   "desert"
 * );
 * @description
 * Filtering logic:
 * - Single tag: Any match
 * - Multiple tags: All must match
 * - Case-sensitive comparisons
 * - Library validation checks
 */
export const DECK_MakeFromLibraryFiltered = (
  library: string,
  filter: string | string[],
): Deck => {
  const deck: Deck = [];
  const libraryIndex = libraryIndices[library];
  libraryFilters[library].forEach((card) => {
    let matchesTag = true;

    if (Array.isArray(filter)) {
      matchesTag = filter.every((singleFilter) =>
        card.tags.some((tagObject) => tagObject.tag === singleFilter),
      );
    } else {
      matchesTag = card.tags.some((tagObject) => tagObject.tag === filter);
    }

    if (matchesTag) {
      const combinedCard: [[number, number]] = [[libraryIndex, card.index]];
      deck.push(combinedCard);
    }
  });

  if (!deck.length) {
    throw new Error(
      `Call to DECK_MakeFromLibraryFiltered with library '${library}' and filter yielded no cards. Double check the library is spelled correctly and the filter isn't too restrictive.`,
    );
  }
  return deck;
};
