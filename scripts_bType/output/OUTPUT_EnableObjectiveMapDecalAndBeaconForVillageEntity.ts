import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";
import { MAP_Objective } from "scripts_bType/map/MAP_Objective.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";

/**
 * @param entity
 * @param active
 * @deprecated
 * @TODO: New system
 */
export const OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity = (
  entity: SingleEntity,
  active = true,
): void => {
  if (QUERY_HasEntities(entity)) {
    if (active) {
      if (
        QUERY_GetFactionNameFromEntity(entity) ===
        PIGLIN_FactionNames.horderunners
      ) {
        OUTPUT_MapSetKeyValue(entity, MAP_Key.OBJECTIVE, MAP_Objective.SUCCESS);
      } else {
        OUTPUT_MapSetKeyValue(entity, MAP_Key.OBJECTIVE, MAP_Objective.ACTIVE);
      }
    } else {
      OUTPUT_MapSetKeyValue(entity, MAP_Key.OBJECTIVE, MAP_Objective.FAILURE);
    }
  }
};
