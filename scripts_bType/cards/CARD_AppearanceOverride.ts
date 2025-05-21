import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates appearance override cards for visual customization.
 * Affects structure and entity aesthetics.
 * @param {string} type Visual preset name
 * @param {number} [count=1] Card copies
 * @returns {Deck} Appearance deck
 * @example
 * // Apply ancient ruin visuals
 * const ruins = CARD_AppearanceOverride("ancient_ruins", 2);
 * @description
 * Controls:
 * - Building skins
 * - Environmental textures
 * - Seasonal variations
 * - Faction-specific appearances
 */
export const CARD_AppearanceOverride = (
  type: string,
  count: number = 1,
): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "appearance_override_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered(
      "appearance_override_card_library",
      type,
    );
  }
};
