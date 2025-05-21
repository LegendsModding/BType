import { INVASION_DrawInfoVal } from "./INVASION_DrawInfoVal.ts";
import { INVASION_FindDrawInfo } from "./INVASION_FindDrawInfo.ts";
import { INVASION_IsActive } from "./INVASION_IsActive.ts";

/**
 *
 */
export const INVASION_ResetDrawCounter = (): void => {
  if (INVASION_IsActive()) {
    const drawInfo = INVASION_FindDrawInfo();
    OUTPUT_SetGlobalVariable(
      INVASION_DrawInfoVal.remainingDraws,
      drawInfo?.totalDraws as number,
    );
    const drawDays = drawInfo?.overNumberOfDays ?? 1;
    OUTPUT_SetGlobalVariable(INVASION_DrawInfoVal.remainingDays, drawDays);
  }
};
