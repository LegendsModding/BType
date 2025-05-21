import { NUMBER_RandomFloatGroup } from "../number/NUMBER_RandomFloatGroup.ts";

/**
 * Shuffles an array using a specified random number group for deterministic results.
 * Implements the Fisher-Yates algorithm with context-aware random number generation for synchronized shuffling across systems.
 * @param {AnyArray} array Target array to shuffle (modified in-place)
 * @param {RandomNumberGroup} group Context identifier for random number generation
 * @returns {AnyArray} The shuffled array
 * @example // Shuffle loot pool for multiplayer synchronization
 * const shuffledItems = ARRAY_ShuffleGroup(rewards, "chest_123");
 * @see {@link NUMBER_RandomFloatGroup} for random number generation details
 */
export const ARRAY_ShuffleGroup = (
  array: AnyArray,
  group: RandomNumberGroup,
): AnyArray => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(NUMBER_RandomFloatGroup(group) * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
