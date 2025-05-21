import { DECK_MakeFromLibrary } from "scripts_bType/deck/DECK_MakeFromLibrary.ts";

/**
 * Creates heart cards for core biome configurations.
 * Represents the central hub areas of generated regions.
 * @returns {Deck} Heart configuration deck
 * @example
 * // Establish village center
 * const villageCore = CARD_Heart();
 * @description
 * Controls:
 * - Central monument placement
 * - Resource node density
 * - NPC spawn points
 * - Fast travel anchor points
 */
export const CARD_Heart = (): Deck => {
  return DECK_MakeFromLibrary("heart_card_library");
};
