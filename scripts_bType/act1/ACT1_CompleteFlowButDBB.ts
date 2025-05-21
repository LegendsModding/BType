import { MAP_IconState } from "../map/MAP_IconState.ts";
import { MAP_Key } from "../map/MAP_Key.ts";
import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

import { ACT1_GetFirstVillageEntity } from "./ACT1_GetFirstVillageEntity.ts";

/**
 *
 */
export const ACT1_CompleteFlowButDBB = (): void => {
  const firstUnderAttackVillage = ACT1_GetFirstVillageEntity();
  if (QUERY_HasEntities(firstUnderAttackVillage)) {
    OUTPUT_MapSetKeyValue(
      firstUnderAttackVillage,
      MAP_Key.ACT1_VILLAGE_STATE,
      MAP_IconState.DEFAULT,
    );
    OUTPUT_MapSetKeyValue(
      firstUnderAttackVillage,
      MAP_Key.STATE,
      MAP_IconState.DEFAULT,
    );
  }
};
