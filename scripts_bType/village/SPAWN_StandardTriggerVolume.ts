import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { OUTPUT_SetTriggerVolume } from "./OUTPUT_SetTriggerVolume.ts";

/**
 * Spawns a standard trigger volume with basic tag filtering.
 * Creates spatial triggers using simple include/exclude tag logic.
 * @param {SingleEntity} positionEntity Reference entity
 * @param {EntityArchetype} entityArchetype Volume type
 * @param {TagArray} includeTags Required tags
 * @param {TagArray} excludeTags Forbidden tags
 * @param {string} alliance Alliance restrictions
 * @returns {EntityGroup} Created trigger volume
 * @example
 * // Create player-only trigger
 * const safezone = SPAWN_StandardTriggerVolume(
 *   baseCenter,
 *   "safe_zone",
 *   ["player"],
 *   ["enemy"],
 *   "friendly"
 * );
 * @throws {Error} If positionEntity is invalid
 * @see {@link OUTPUT_SetTriggerVolume} for parameter details
 */
export const SPAWN_StandardTriggerVolume = (
  positionEntity: SingleEntity,
  entityArchetype: EntityArchetype,
  includeTags: TagArray,
  excludeTags: TagArray,
  alliance: string,
): EntityGroup => {
  if (!QUERY_HasEntities([positionEntity])) {
    FORESIGHT.error(
      "'SpawnStandardTriggerVolume' called with no positionEntity!",
    );
  }
  const volume = OUTPUT_SpawnEntityAt([positionEntity], entityArchetype);
  const team = QUERY_GetTeamName(positionEntity);
  const villageId = QUERY_GetVillageIDFromEntity(positionEntity);
  return OUTPUT_SetTriggerVolume(
    positionEntity,
    volume as SingleEntity,
    team as TeamName,
    villageId,
    true,
    includeTags,
    excludeTags,
    alliance,
  );
};
