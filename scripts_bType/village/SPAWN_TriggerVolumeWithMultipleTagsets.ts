import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { OUTPUT_SetTriggerVolumeWithMultipleTagsets } from "./OUTPUT_SetTriggerVolumeWithMultipleTagsets.ts";

/**
 * Spawns a trigger volume with multiple tag set configurations.
 * Creates spatial triggers with complex filtering requirements.
 * @param {SingleEntity} positionEntity Reference entity for positioning
 * @param {SingleEntity} lifetimeEntity Entity controlling lifespan
 * @param {string} entityArchetype Trigger volume type
 * @param {TeamName} team Associated team
 * @param {VillageID} villageId Owning village
 * @param {boolean} stretchVertically Vertical expansion flag
 * @param {TriggerTag} triggerTags Tag configuration object
 * @returns {EntityGroup} Created trigger volume
 * @example
 * // Create multi-tag detection zone
 * const detectionZone = SPAWN_TriggerVolumeWithMultipleTagsets(
 *   villageCenter,
 *   undefined,
 *   "alert_zone",
 *   "enemy_team",
 *   5,
 *   true,
 *   complexTagConfig
 * );
 * @throws {Error} If positionEntity is invalid
 * @see {@link OUTPUT_SetTriggerVolumeWithMultipleTagsets} for configuration details
 */
export const SPAWN_TriggerVolumeWithMultipleTagsets = (
  positionEntity: SingleEntity,
  lifetimeEntity: SingleEntity,
  entityArchetype: string,
  team: TeamName,
  villageId: VillageID,
  stretchVertically: boolean,
  triggerTags: TriggerTag,
): EntityGroup => {
  if (!QUERY_HasEntities([positionEntity])) {
    FORESIGHT.error(
      "'SpawnTriggerVolumeWithMultipleTagsets' called with no positionEntity!",
    );
  }
  const volume = OUTPUT_SpawnEntityAt([positionEntity], entityArchetype);
  return OUTPUT_SetTriggerVolumeWithMultipleTagsets(
    lifetimeEntity ?? undefined,
    volume as SingleEntity,
    team,
    villageId,
    stretchVertically,
    triggerTags,
  );
};
