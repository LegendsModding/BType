import { DECK_MakeFromLibraryFiltered } from "scripts_bType/deck/DECK_MakeFromLibraryFiltered.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";

/**
 * Creates faction horde cards for procedural generation.
 * Builds decks representing horde configurations and strengths.
 * @param {FactionNameId} faction Target horde faction identifier
 * @param {number} [count=1] Number of card copies
 * @returns {Deck} Configured horde generation deck
 * @example
 * // Create piglin horde deck
 * const piglinHorde = CARD_Horde("piglin_red", 3);
 * @description
 * This function constructs decks using horde-specific card libraries ("hordeCards").
 * When count is specified, creates multiple copies for weighted generation.
 * Used for:
 * - Invasion force composition
 * - Faction army configurations
 * - Difficulty scaling
 * - World event setup
 */
export const CARD_Horde = (faction: FactionNameId, count: number = 1): Deck => {
  if (count !== undefined) {
    return DECK_MakeFromLibraryFilteredWithCopies("hordeCards", faction, count);
  } else {
    return DECK_MakeFromLibraryFiltered("hordeCards", faction);
  }
};
