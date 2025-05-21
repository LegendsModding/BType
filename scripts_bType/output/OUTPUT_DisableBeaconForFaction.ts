import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";

import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

/**
 *
 * @param faction
 */
export const OUTPUT_DisableBeaconForFaction = (
  faction: FactionNameId,
): void => {
  let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), [faction]);
  while (QUERY_HasEntities(entities)) {
    const ent = FILTER_RandomEntity(entities);
    OUTPUT_AddVisualState(ent, "set_act_one_objective");
    entities = OPER_Difference(entities, ent);
  }
};
