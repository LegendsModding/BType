import { CULTURE_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";

import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";
import { VILLAGE_SetAudioDefault } from "../village/VILLAGE_SetAudioDefault.ts";

/**
 *
 */
export const OUTPUT_ResetFountainAudioStateForAllVillages = (): void => {
  let entities = FILTER_ByFactionName(
    QUERY_GetAllVillages(),
    CULTURE_FactionNames.all,
  );
  while (QUERY_HasEntities(entities)) {
    const ent = FILTER_RandomEntity(entities);
    VILLAGE_SetAudioDefault(QUERY_GetVillageIDFromEntity(ent), "default");
    entities = OPER_Difference(entities, ent);
  }
};
