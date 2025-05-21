import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { OUTPUT_SetTriggerVolume } from "./OUTPUT_SetTriggerVolume.ts";

/**
 * Creates a spatial trigger volume for detection.
 * @param {SingleEntity} positionEntity Reference entity for positioning
 * @param {SingleEntity} lifetimeEntity Entity determining lifespan
 * @param {EntityArchetype} entityArchetype Volume type
 * @param {TeamName} team Owning team
 * @param {VillageID} villageId Associated village
 * @param {boolean} stretchVertically Vertical expansion flag
 * @param {TagArray} includeTags Required tags for detection
 * @param {TagArray} excludeTags Forbidden tags
 * @param {string} alliance Alliance restrictions
 * @returns {EntityGroup} Created trigger volume
 * @example
 * // Create perimeter alert system
 * SPAWN_TriggerVolume(
 *   baseCenter,
 *   undefined,
 *   "alert_zone",
 *   "player_team",
 *   5,
 *   true,
 *   ["enemy"],
 *   [],
 *   "hostile"
 * );
 */
export const SPAWN_TriggerVolume = (
  positionEntity: SingleEntity,
  lifetimeEntity: SingleEntity, // TODO: Temporary
  entityArchetype: EntityArchetype,
  team: TeamName,
  villageId: VillageID,
  stretchVertically: boolean,
  includeTags: TagArray,
  excludeTags: TagArray,
  alliance: string,
): EntityGroup => {
  if (!QUERY_HasEntities(positionEntity)) {
    FORESIGHT.error("'SpawnTriggerVolume' called with no positionEntity!");
  }
  if (lifetimeEntity !== undefined && villageId === undefined) {
    FORESIGHT.error(
      "`SpawnTriggerVolume` lifetimeEntity and villageId cannot both be undefined. Set lifetimeEntity to undefined if you don't need cleanup OR set villageId if you do need cleanup.",
    );
  }
  const volume = OUTPUT_SpawnEntityAt(positionEntity, entityArchetype);
  return OUTPUT_SetTriggerVolume(
    lifetimeEntity ?? undefined,
    volume as SingleEntity,
    team,
    villageId,
    stretchVertically,
    includeTags,
    excludeTags,
    alliance,
  );
};
