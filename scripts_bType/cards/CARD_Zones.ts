import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates zone definition cards for procedural generation.
 * Controls physical area characteristics and boundaries.
 * @param {string} type Zone configuration type
 * @param {number} [count=1] Card copies
 * @returns {Deck} Generation deck
 * @example
 * // Define desert zones
 * const desertZones = CARD_Zones("desert_config", 5);
 * @description
 * Governs:
 * - Terrain elevation
 * - Area dimensions
 * - Neighbor relationships
 * - Resource node placement
 */
export const CARD_Zones = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "zones_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("zones_card_library", type);
  }
};
