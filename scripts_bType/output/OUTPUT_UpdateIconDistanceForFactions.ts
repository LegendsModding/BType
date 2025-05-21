import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 *
 * @param factionNames
 * @param distance
 * @param priority
 */
export const OUTPUT_UpdateIconDistanceForFactions = (
  factionNames: FactionNameArray,
  distance: Distance,
  priority: IconPriority,
): NoReturn => {
  let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), factionNames);
  FORESIGHT.info(
    "~~~~~~ _UpdateIconDistanceForFaction ~~~~~~~ " +
      QUERY_GetEntitiesCount(entities),
  );
  while (QUERY_HasEntities(entities)) {
    const ent = FILTER_RandomEntity(entities);
    OUTPUT_SetOverrideForCompassMaxRange(ent, distance);
    OUTPUT_SetIconPriority(ent, priority);
    entities = OPER_Difference(entities, ent);
  }
};
