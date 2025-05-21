import { HUD_ObjectiveHealthBarsVisibility } from "../HUD/HUD_ObjectiveHealthBarsVisibility.ts";
import { OUTPUT_DoOnce } from "../output/OUTPUT_DoOnce.ts";

import { ACT1_FindAndTagVillages } from "./ACT1_FindAndTagVillages.ts";
import { ACT1_PrepareFirstVillage } from "./ACT1_PrepareFirstVillage.ts";
import { ACT1_StartFindVillage } from "./ACT1_StartFindVillage.ts";

/**
 *
 */
export const ACT1_Begin = (): void => {
  if (
    !OUTPUT_DoOnce("begin_act_1")
    // Skip is disabled for now
    // || QUERY_HasSkippedAct1()
  ) {
    return;
  }
  ACT1_FindAndTagVillages();
  ACT1_PrepareFirstVillage();
  ACT1_StartFindVillage();

  HUD_ObjectiveHealthBarsVisibility(false);
};
