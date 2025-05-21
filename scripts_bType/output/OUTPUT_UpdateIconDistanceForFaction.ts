import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 *
 * @param factionName
 * @param value
 * @param priority
 */
export const OUTPUT_UpdateIconDistanceForFaction = (
  factionName: FactionNameId,
  value: Distance,
  priority: IconPriority,
): void => {
  let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), [factionName]);
  FORESIGHT.info(
    "~~~~~~ _UpdateIconDistanceForFaction ~~~~~~~ " +
      QUERY_GetEntitiesCount(entities),
  );
  while (QUERY_HasEntities(entities)) {
    const entity = FILTER_RandomEntity(entities);
    OUTPUT_SetOverrideForCompassMaxRange(entity, value);
    OUTPUT_SetIconPriority(entity, priority);
    entities = OPER_Difference(entities, entity);
  }
};
