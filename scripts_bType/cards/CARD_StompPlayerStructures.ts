import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates structure removal cards for area reset.
 * Destroys player-built structures in defined areas.
 * @param {string} type Destruction pattern
 * @param {number} [count=1] Card copies
 * @returns {Deck} Destruction instruction deck
 * @example
 * // Clear player bases for event
 * const resetArea = CARD_StompPlayerStructures("event_zone");
 * @description
 * Use cases:
 * - Event preparation
 * - Dynamic difficulty adjustment
 * - Area regeneration
 * - Tutorial resets
 */
export const CARD_StompPlayerStructures = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "stomp_player_structures_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "stomp_player_structures_card_library",
      type,
    );
  }
};
