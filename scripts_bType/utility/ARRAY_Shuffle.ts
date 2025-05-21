import { NUMBER_RandomFloat } from "../number/NUMBER_RandomFloat.ts";

/**
 * Shuffles an array using the Fisher-Yates algorithm for uniform randomness.
 * This utility preserves the original array reference while rearranging elements.
 * Uses deterministic random number generation based on game seed for replayability.
 * @param {AnyArray} array The array to shuffle (will be modified in-place)
 * @returns {AnyArray} The shuffled array (same reference as input)
 * @example
 * // Shuffle loot pool
 * const loot = ["sword", "shield", "potion"];
 * ARRAY_Shuffle(loot); // e.g., ["potion", "sword", "shield"]
 * @description
 * Implements the modern Fisher-Yates algorithm:
 * 1. Start from the last element
 * 2. Randomly pick an element from the remaining pool
 * 3. Swap with current position
 * 4. Reduce remaining pool by 1
 *
 * The shuffle maintains referential integrity - useful for:
 * - Randomizing spawn sequences
 * - Mixing reward pools
 * - Procedural content generation
 *
 * Uses NUMBER_RandomFloat() for deterministic randomness based on game seed,
 * ensuring consistent behavior in replays and multiplayer.
 */
export const ARRAY_Shuffle = (array: AnyArray): AnyArray => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(NUMBER_RandomFloat() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
