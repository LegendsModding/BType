import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

/**
 *
 * @param entity
 * @param value
 * @param priority
 */
export const OUTPUT_UpdateIconDistanceForEntity = (
  entity: SingleEntity,
  value: Distance,
  priority: IconPriority,
): void => {
  if (QUERY_HasEntities(entity)) {
    OUTPUT_SetOverrideForCompassMaxRange(entity, value);
    OUTPUT_SetIconPriority(entity, priority);
  }
};
