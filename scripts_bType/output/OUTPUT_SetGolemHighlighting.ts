import { OUTPUT_UpdateStoneGolemHighlight } from "./OUTPUT_UpdateStoneGolemHighlight.ts";
import { OUTPUT_UpdateWoodGolemHighlight } from "./OUTPUT_UpdateWoodGolemHighlight.ts";

/**
 *
 * @param woodEnabled
 * @param stoneEnabled
 */
export const OUTPUT_SetGolemHighlighting = (
  woodEnabled: boolean,
  stoneEnabled: boolean,
): void => {
  const isWoodEnabledVar = "gv_wood_golem_tracker_enabled";
  const isStoneEnabledVar = "gv_stone_golem_tracker_enabled";
  OUTPUT_SetGlobalVariable(isWoodEnabledVar, +woodEnabled);
  OUTPUT_SetGlobalVariable(isStoneEnabledVar, +stoneEnabled);
  OUTPUT_UpdateWoodGolemHighlight();
  OUTPUT_UpdateStoneGolemHighlight();
};
