import { VILLAGE_GetCultureLevelFromId } from "./VILLAGE_GetCultureLevelFromId.ts";

/**
 * @name VILLAGE_SetAudioDefault
 * @description
 * Sets the default audio (music) state for a village based on its culture level,
 * unless an override is provided.
 * @param villageId The village ID.
 * @param override An optional audio override.
 * @example
 * VILLAGE_SetAudioDefault(villageId);
 */
export const VILLAGE_SetAudioDefault = (
  villageId: VillageID,
  override: Tag = "",
): NoReturn => {
  const villageCentralStructures = QUERY_GetVillageHearts(villageId);
  if (override !== "") {
    OUTPUT_SetEmitterState(villageCentralStructures, override);
  } else {
    //if (
    // Disabled for now.

    /** @see VILLAGE_IsFactionVillage */
    // QUERY_IsMobAllianceVillage(villageId) ||
    //QUERY_IsPlayerOutpost(villageId)
    //) {
    //  OUTPUT_SetEmitterState(villageCentralStructures, "default");
    //} else {
    const level = VILLAGE_GetCultureLevelFromId(villageId);
    const musicThresholds = [
      "default",
      "level1",
      "level2",
      "level3",
      "level3",
      "level3",
    ];
    OUTPUT_SetEmitterState(villageCentralStructures, musicThresholds[level]);
  }
};
