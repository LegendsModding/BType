/**
 * @name FOREACH_AliveVillageEntity
 * @description
 * Iterates over each alive village entity and calls the provided callback.
 * @param callback A function to execute on each alive village entity.
 * @example
 * FOREACH_AliveVillageEntity((entity) => {
 *   console.log("Processing village entity:", entity);
 * });
 */
export const VILLAGE_ForEachAlive = (
  callback: (entity: SingleEntity) => void,
): void => {
  let villageEntities = QUERY_GetAllAliveVillages();
  const villageEntityCount = QUERY_GetEntitiesCount(villageEntities);
  while (OPER_Difference(villageEntities, []) && villageEntityCount > 0) {
    const entityToCheck = FILTER_RandomCount(villageEntities, 1);
    villageEntities = OPER_Difference(villageEntities, entityToCheck);
    callback(entityToCheck as SingleEntity);
  }
};
