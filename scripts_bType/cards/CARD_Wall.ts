import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates wall cards for defensive structures.
 * Builds perimeter defenses around generated areas.
 * @param {string} type Wall configuration
 * @param {number} [count=1] Card copies
 * @returns {Deck} Wall construction deck
 * @example
 * // Build castle walls
 * const defenses = CARD_Wall("castle_walls", 4);
 * @description
 * Configures:
 * - Wall height/thickness
 * - Material types
 * - Gate placements
 * - Defensive emplacements
 */
export const CARD_Wall = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "walls_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("walls_card_library", type);
  }
};
