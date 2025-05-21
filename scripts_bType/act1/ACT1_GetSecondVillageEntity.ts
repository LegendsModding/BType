import { QUERY_GetAllFriendlyVillages } from "../queries/QUERY_GetAllFriendlyVillages.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";

/**
 * Retrieves entity group for Act 1's secondary village.
 * @returns {EntityGroup} Collection containing the second village entity or empty group.
 * @remarks
 * Uses FILTER_ByTagFilter with ACT1_FlowVal.misc.secondVillageTag for identification.
 * Critical for quest progression and resource distribution systems.
 */
export const ACT1_GetSecondVillageEntity = (): EntityGroup => {
  return FILTER_ByTagFilter(
    QUERY_GetAllFriendlyVillages(),
    [ACT1_FlowVal.misc.secondVillageTag],
    [],
  );
};
