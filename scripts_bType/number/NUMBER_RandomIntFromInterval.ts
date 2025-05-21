import { NUMBER_RandomFloat } from "./NUMBER_RandomFloat.ts";

/**
 * Generates random integers within specified bounds using default randomization.
 * @param min Minimum boundary value.
 * @param max Maximum boundary value.
 * @returns {number} Random integer within [min, max] range.
 * @remarks
 * Uses NUMBER_RandomFloat for value generation and range scaling.
 * Values are inclusive of both boundaries and suitable for general purpose randomization.
 */
export const NUMBER_RandomIntFromInterval = (
  min: number,
  max: number,
): number => {
  return Math.floor(NUMBER_RandomFloat() * (max - min) + min);
};
