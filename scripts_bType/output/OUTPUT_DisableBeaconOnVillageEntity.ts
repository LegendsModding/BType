import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

/**
 *
 * @param entity
 */
export const OUTPUT_DisableBeaconOnVillageEntity = (
  entity: SingleEntity,
): void => {
  if (QUERY_HasEntities(entity)) {
    OUTPUT_AddVisualState(entity, "set_act_one_objective");
  }
};
