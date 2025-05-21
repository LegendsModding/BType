import { NUMBER_RandomFloatGroup } from "./NUMBER_RandomFloatGroup.ts";

/**
 * Generates bounded random integers using group-based randomization.
 * @param min Minimum boundary value.
 * @param max Maximum boundary value.
 * @param group Randomization context identifier.
 * @returns {number} Random integer within specified range.
 * @remarks
 * Converts group-based floating point random values to integers through scaling operations.
 * Ensures uniform distribution across the defined numerical interval.
 */
export const NUMBER_RandomIntFromIntervalGroup = (
  min: number,
  max: number,
  group: string,
): number => {
  return Math.floor(NUMBER_RandomFloatGroup(group) * (max - min) + min);
};
