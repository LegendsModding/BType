import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates a zone tag card deck for world generation.
 * Used to define area-specific behaviors and attributes.
 * @param {string} type Zone tag identifier
 * @param {number} [count=1] Number of card copies
 * @returns {Deck} Configured card deck
 * @example
 * // Create 3 copies of mountain zone tags
 * const mountainTags = CARD_ZoneTag("mountain_zone", 3);
 * @description
 * This function builds decks that control:
 * - Biome transitions
 * - Resource distribution
 * - Encounter probabilities
 * - Environmental effects
 *
 * Uses the "zone_tag_card_library" for standardized zone definitions.
 */
export const CARD_ZoneTag = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "zone_tag_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("zone_tag_card_library", type);
  }
};
