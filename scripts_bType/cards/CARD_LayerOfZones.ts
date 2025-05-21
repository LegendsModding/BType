import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates layered zone cards for vertical generation.
 * Manages multi-level terrain configurations.
 * @param {string} type Layer configuration
 * @param {number} [count=1] Card copies
 * @returns {Deck} Layered zone deck
 * @example
 * // Create canyon layers
 * const canyonLayers = CARD_LayerOfZones("canyon", 3);
 * @description
 * Used for:
 * - Cave systems
 * - Mountain tiers
 * - Underground layers
 * - Floating islands
 */
export const CARD_LayerOfZones = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "layer_of_zones_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("layer_of_zones_card_library", type);
  }
};
