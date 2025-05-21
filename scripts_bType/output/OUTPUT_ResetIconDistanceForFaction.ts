import { HOSTS_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";
import { MAP_IconState } from "scripts_bType/map/MAP_IconState.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";

/**
 *
 * @param faction
 */
export const OUTPUT_ResetIconDistanceForFaction = (
  faction: FactionNameId,
): NoReturn => {
  let entities = FILTER_ByFactionName(QUERY_GetAllVillages(), [faction]);
  while (QUERY_HasEntities(entities)) {
    const ent = FILTER_RandomEntity(entities);
    if (QUERY_HasOverrideForCompassMaxRange(ent)) {
      OUTPUT_ClearOverrideForCompassMaxRange(ent);
      OUTPUT_SetIconPriority(ent, 0);
    }
    if (HOSTS_FactionNames.all.includes(faction as AnyHostFaction)) {
      OUTPUT_MapSetKeyValue(
        ent,
        MAP_Key.ACT1_VILLAGE_STATE,
        MAP_IconState.DEFAULT,
      );
      OUTPUT_MapSetKeyValue(ent, MAP_Key.STATE, MAP_IconState.DEFAULT);
    }
    entities = OPER_Difference(entities, ent);
  }
};
