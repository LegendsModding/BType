import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates placement preference cards for entity positioning.
 * Guides procedural generation algorithms.
 * @param {string} type Placement rule set
 * @param {number} [count=1] Card copies
 * @returns {Deck} Placement rules deck
 * @example
 * // Prefer central monument placement
 * const centerBias = CARD_PlacementPreference("central_bias");
 * @description
 * Affects:
 * - Building alignment
 * - Resource clustering
 * - NPC patrol routes
 * - Encounter distribution
 */
export const CARD_PlacementPreference = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "placement_preference_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "placement_preference_card_library",
      type,
    );
  }
};
