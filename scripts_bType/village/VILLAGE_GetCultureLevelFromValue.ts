import { CULTURE_THRESHOLDS } from "scripts_bType/consts/CULTURE_THRESHOLDS.ts";

/**
 * @name QUERY_GetCultureLevelFromValue
 * @description
 * Determines a culture level based on a numeric culture value using predefined thresholds.
 * @param cultureValue The numeric culture value.
 * @returns A number representing the culture level.
 * @example
 * const level = QUERY_GetCultureLevelFromValue(800);
 */
export const VILLAGE_GetCultureLevelFromValue = (
  cultureValue: number,
): number => {
  let rewardIndex = 0;
  while (
    rewardIndex < CULTURE_THRESHOLDS.length &&
    cultureValue >= CULTURE_THRESHOLDS[rewardIndex]
  ) {
    rewardIndex++;
  }
  return rewardIndex;
};
