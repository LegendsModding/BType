import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Retrieves audio entities associated with a village.
 * Searches for entities tagged as music emitters within village bounds.
 * @param {VillageID} villageId Target village identifier
 * @param {Tag} overrideTag Custom audio entity tag
 * @returns {EntityGroup} Matching audio entities
 * @example
 * // Get forest-themed audio
 * const audioEntities = VILLAGE_GetAudioEntity(5, "forest_audio");
 * @throws {Error} If no position entity exists for the village
 * @see {@link FILTER_ByVillageID} for entity filtering mechanism
 */
export const VILLAGE_GetAudioEntity = (
  villageId: VillageID,
  overrideTag: Tag = "",
): EntityGroup => {
  const tagToCheck = overrideTag !== "" ? overrideTag : "music_entity";
  FORESIGHT.info("Searching for " + tagToCheck);
  return FILTER_ByVillageID(QUERY_GetEntitiesWithTags([tagToCheck]), villageId);
};
