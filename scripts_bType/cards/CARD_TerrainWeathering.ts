import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates terrain weathering cards for environmental effects.
 * Simulates natural erosion and aging processes.
 * @param {string} type Weathering pattern
 * @param {number} [count=1] Card copies
 * @returns {Deck} Weathering configuration deck
 * @example
 * // Apply ancient ruins decay
 * const decay = CARD_TerrainWeathering("ancient_decay", 3);
 * @description
 * Controls:
 * - Structural decay rates
 * - Vegetation overgrowth
 * - Material degradation
 * - Historical layering
 */
export const CARD_TerrainWeathering = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "terrain_weathering_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "terrain_weathering_card_library",
      type,
    );
  }
};
