import { OUTPUT_IncrementGlobal } from "../output/OUTPUT_IncrementGlobal.ts";
import { PRES_PlayToAll } from "../presentation/PRES_PlayToAll.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";
import { TUTORIAL_MarkStepAsComplete } from "./TUTORIAL_MarkStepAsComplete.ts";

/**
 *
 */
export const ACT1_CompleteDestroyDBB = (): void => {
  if (
    QUERY_GetGlobalVariable(
      ACT1_FlowVal.destroyDBB.global.isThisStepCurrentlyActive,
    ) > 0
  ) {
    PRES_PlayToAll(ACT1_FlowVal.misc.successAudio);
  }
  TUTORIAL_MarkStepAsComplete(ACT1_FlowVal.destroyDBB);
  OUTPUT_IncrementGlobal(ACT1_FlowVal.misc.act1FlowComplete);
};
