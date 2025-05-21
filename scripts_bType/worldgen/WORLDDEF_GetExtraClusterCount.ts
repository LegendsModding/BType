import { SETTING_GetCustomNumOfBasesVarName } from "scripts_bType/settings/SETTING_GetCustomNumOfBasesVarName.ts";

import { WORLDDEF_GetSubclusterCount } from "./WORLDDEF_GetSubclusterCount.ts";

/**
 * Calculates additional clusters required beyond base difficulty allocation.
 * Used for extended faction base configurations and custom game modes.
 * @param {FactionNameId} factionName Target faction identifier
 * @returns {number} Extra clusters needed
 * @example
 * // Calculate extra clusters for piglin faction
 * const extra = WORLDDEF_GetExtraClusterCount("piglin_red");
 * @description
 * This helper function extends the base cluster count from WORLDDEF_GetSubclusterCount()
 * when factions have custom base quantities configured. Retrieves values from global
 * variables set during game initialization, ensuring proper scaling for modded content
 * and advanced difficulty modes. Uses SETTING_GetCustomNumOfBasesVarName() to resolve
 * faction-specific configuration variables.
 */
export const WORLDDEF_GetExtraClusterCount = (
  factionName: FactionNameId,
): number => {
  const numberOfBases = QUERY_GetGlobalVariable(
    SETTING_GetCustomNumOfBasesVarName(factionName),
  );

  // BBI-NOTE: (dplourde)
  // The number of sub-clusters that are already being used (defined above in 'GetSubclusterCount') generally fit
  // the max five bases that the regular campaign is configured with. We only want to add additional clusters for
  // bases beyond the first five.
  const defaultClusterCount = WORLDDEF_GetSubclusterCount();
  return Math.max(numberOfBases - defaultClusterCount, 0);
};
