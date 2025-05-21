import { QUERY_GetAllFriendlyVillages } from "../queries/QUERY_GetAllFriendlyVillages.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";

/**
 * Retrieves entity group for Act 1's primary village.
 * @returns {EntityGroup} Collection containing the first village entity or empty group.
 * @remarks
 * Applies FILTER_ByTagFilter using ACT1_FlowVal.misc.firstVillageTag for identification.
 * Essential for initial progression systems and tutorial triggers.
 */
export const ACT1_GetFirstVillageEntity = (): EntityGroup => {
  return FILTER_ByTagFilter(
    QUERY_GetAllFriendlyVillages(),
    [ACT1_FlowVal.misc.firstVillageTag],
    [],
  );
};
