import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

/**
 *
 * @param villageEntity
 */
export const OUTPUT_EnableBeaconOnVillageEntity = (
  villageEntity: SingleEntity,
): void => {
  if (QUERY_HasEntities(villageEntity)) {
    OUTPUT_RemoveVisualState(villageEntity, "set_act_one_objective");
  }
};
