/**
 *
 * @param ownerVillageId
 * @param lifetimeEntity
 * @param destructionEntities
 */
export const OUTPUT_RegisterForCleanup = (
  ownerVillageId: VillageID,
  lifetimeEntity: SingleEntity,
  destructionEntities: EntityGroup,
): void => {
  LISTENFOR_NonPopCappedEntityDestroyed({
    snippet: "ed_trigger_volume_garbage_collect",
    ownerVillageId: ownerVillageId,
    entities: lifetimeEntity,
    payloadEntities: destructionEntities,
  });
};

SNIPPET_NonPopCappedEntityDestroyed(
  "ed_trigger_volume_garbage_collect",
  (_entityDestroyed, payload) => {
    OUTPUT_DestroyEntities(payload.entities);
  },
);
