import { FORESIGHT } from "../utility/Foresight.ts";

import { VILLAGE_GetAudioEntity } from "./VILLAGE_GetAudioEntity.ts";

/**
 * Configures audio settings for a specific village.
 * This function sets the audio emitter state based on the provided phase while allowing music entity overrides.
 * @param {VillageID} villageId Target village identifier
 * @param {AudioPhaseName} audioPhase Target audio state (e.g., "combat", "peaceful")
 * @param {Tag} overrideMusicEntityTag Optional tag for custom music entities
 * @example
 * // Set nighttime ambiance for village 5
 * VILLAGE_SetAudio(5, "night_phase", "forest_music");
 * @remarks
 * The audio entity is retrieved using VILLAGE_GetAudioEntity(). If no valid entity is found,
 * the system logs a diagnostic message but does not throw an error. The override tag allows
 * special music configurations for unique settlements.
 * @see {@link VILLAGE_GetAudioEntity} for entity resolution logic
 * @see {@link OUTPUT_SetEmitterState} for audio state application
 */
export const VILLAGE_SetAudio = (
  villageId: VillageID,
  audioPhase: AudioPhaseName,
  overrideMusicEntityTag: Tag = "",
): NoReturn => {
  const audioEntity = VILLAGE_GetAudioEntity(villageId, overrideMusicEntityTag);

  if (QUERY_GetEntitiesCount(audioEntity) > 0) {
    OUTPUT_SetEmitterState(audioEntity, audioPhase);
    FORESIGHT.info(
      `Setting audio phase for ${audioEntity as SingleEntity} to ${audioPhase}`,
    );
  } else {
    FORESIGHT.info("Can't find audio entity for " + villageId);
  }
};
