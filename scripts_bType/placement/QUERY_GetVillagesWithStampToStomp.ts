import { EMPTY_ENTITY_GROUP } from "scripts_bType/consts/EMPTY_ENTITY_GROUP.ts";

/**
 * Retrieves villages eligible for texture stamp stomping based on procedural rules.
 * @param stompOptions Configuration object defining stomping parameters.
 * @returns {EntityGroup} Collection of villages meeting stomp criteria or empty group if invalid.
 * @defaultValue Returns EMPTY_ENTITY_GROUP when stompOptions or required parameters are undefined.
 * @remarks
 * Processes stompOptions.stompVillagesWithTextureStamps entries to identify targetable villages:
 * 1. Segregates alive/dead villages using QUERY_GetAllVillages and QUERY_GetAllAliveVillages
 * 2. Filters entities by faction and size via FILTER_ByFactionName/FILTER_ByVillageSize
 * 3. Applies alive/dead state filters using OPER_Intersection
 * 4. Validates minimum presence requirements (option.minimumPresenceToKeepFromStomping)
 * 5. Aggregates results through OPER_Union operations
 * Returns empty group when configurations are missing or insufficient valid targets exist.
 */
export const QUERY_GetVillagesWithStampToStomp = (
  stompOptions: StompOptions,
): EntityGroup => {
  let resultEntities = EMPTY_ENTITY_GROUP;

  if (stompOptions === undefined) {
    return resultEntities;
  }

  if (stompOptions.stompVillagesWithTextureStamps === undefined) {
    return resultEntities;
  }

  const allVillages = QUERY_GetAllVillages();
  const allVillagesAlive = QUERY_GetAllAliveVillages();
  const allVillagesDead = OPER_Difference(allVillages, allVillagesAlive);

  for (const option of stompOptions.stompVillagesWithTextureStamps) {
    let resultTargetEntities = EMPTY_ENTITY_GROUP;
    const allTargetEntities = FILTER_ByFactionName(
      FILTER_ByVillageSize(allVillages, option.sizes as string[]),
      option.factions,
    );
    if (option.alive) {
      const allTargetEntitiesAlive = OPER_Intersection(
        allTargetEntities,
        allVillagesAlive,
      );
      resultTargetEntities = OPER_Union(
        resultTargetEntities,
        allTargetEntitiesAlive,
      );
    }

    if (option.dead) {
      const allTargetEntitiesDead = OPER_Intersection(
        allTargetEntities,
        allVillagesDead,
      );
      resultTargetEntities = OPER_Union(
        resultTargetEntities,
        allTargetEntitiesDead,
      );
    }

    if (
      QUERY_GetEntitiesCount(resultTargetEntities) >
      option.minimumPresenceToKeepFromStomping
    ) {
      resultEntities = OPER_Union(resultEntities, resultTargetEntities);
    }
  }

  return resultEntities;
};
