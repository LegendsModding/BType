import { END_FactionNames } from "../FACTION_NAMES.ts";
import { QUERY_GetAllFriendlyVillages } from "../queries/QUERY_GetAllFriendlyVillages.ts";
import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";

/**
 *
 */
export const ACT1_FindAndTagVillages = (): void => {
  const allVillages = QUERY_GetAllFriendlyVillages();
  const ruinedPortal = FILTER_ByFactionName(QUERY_GetAllAliveVillages(), [
    END_FactionNames.ruinedPortal,
  ]);
  if (QUERY_HasEntities(allVillages) && QUERY_HasEntities(ruinedPortal)) {
    FORESIGHT.info("@@@ ACT1_FindAndTagVillages @@@");
    const firstVillage = FILTER_ByClosest(
      allVillages,
      ruinedPortal as SingleEntity,
      1,
    ) as SingleEntity;
    if (!QUERY_HasTags(firstVillage, [ACT1_FlowVal.misc.firstVillageTag])) {
      OUTPUT_AddTag(firstVillage, ACT1_FlowVal.misc.firstVillageTag);
    }

    const secondClosestVillage = FILTER_ByClosest(
      OPER_Difference(allVillages, firstVillage),
      firstVillage,
      1,
    ) as SingleEntity;
    if (
      !QUERY_HasTags(secondClosestVillage, [ACT1_FlowVal.misc.secondVillageTag])
    ) {
      OUTPUT_AddTag(secondClosestVillage, ACT1_FlowVal.misc.secondVillageTag);
    }
  } else {
    FORESIGHT.info(
      "@@@@ QUERY_HasEntities(allVillages) && QUERY_HasEntities(ruinedPortal) @@@@@",
    );
  }
};
