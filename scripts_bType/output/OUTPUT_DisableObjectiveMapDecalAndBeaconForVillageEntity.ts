import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";

import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

/**
 *
 * @param entity
 */
export const OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity = (
  entity: SingleEntity,
): void => {
  if (QUERY_HasEntities(entity)) {
    OUTPUT_MapRemoveKey(entity, MAP_Key.OBJECTIVE);
  }
};
