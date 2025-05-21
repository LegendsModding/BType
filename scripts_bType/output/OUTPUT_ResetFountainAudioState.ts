import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { VILLAGE_SetAudioDefault } from "scripts_bType/village/VILLAGE_SetAudioDefault.ts";

/**
 *
 * @param villageId
 */
export const OUTPUT_ResetFountainAudioState = (
  villageId: VillageID,
): NoReturn => {
  FORESIGHT.info("!!!!  OUTPUT_ResetFountainAudioState !!!!");
  VILLAGE_SetAudioDefault(villageId, "default");
};
