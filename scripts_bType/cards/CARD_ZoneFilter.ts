import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates zone filtering cards for content restriction.
 * Limits what elements appear in specific areas.
 * @param {string} type Filter rules
 * @param {number} [count=1] Card copies
 * @returns {Deck} Filter configuration deck
 * @example
 * // Restrict magic zones
 * const magicFilter = CARD_ZoneFilter("no_magic");
 * @description
 * Controls:
 * - Building restrictions
 * - Mob spawning limits
 * - Resource availability
 * - Environmental interactions
 */
export const CARD_ZoneFilter = (type: string, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies(
      "zone_filter_card_library",
      type,
      count,
    );
  } else {
    return DECK_MakeFromLibraryFiltered("zone_filter_card_library", type);
  }
};
