import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates forced building placement cards.
 * Overrides normal placement rules for critical structures.
 * @param {string} type Building category
 * @param {number} [count=1] Card copies
 * @returns {Deck} Placement override deck
 * @example
 * // Force portal placement
 * const portalPlacement = CARD_ForceBuildingPlacement("end_portal");
 * @description
 * Use cases:
 * - Story-critical buildings
 * - Boss arena structures
 * - Puzzle-specific layouts
 * - Tutorial elements
 */
export const CARD_ForceBuildingPlacement = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "force_building_placement_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "force_building_placement_card_library",
      type,
    );
  }
};
