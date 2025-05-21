import { INVASION_DrawData } from "./INVASION_DrawData.ts";
import { INVASION_GetPhase } from "./INVASION_GetPhase.ts";

/**
 * Retrieves phase-specific draw parameters for invasion progression systems.
 * @returns {object | null} Draw configuration or null if phase exceeds registered data.
 * @remarks
 * Accesses INVASION_DrawData.drawInfoByPhase using current phase from INVASION_GetPhase.
 * Returns null when phase index exceeds available configurations. Contains totalDraws,
 * inactiveDaysToLoseDraw, minimumDraws, and optional overNumberOfDays parameters.
 */
export const INVASION_FindDrawInfo = (): {
  totalDraws: number;
  inactiveDaysToLoseDraw: number;
  minimumDraws: number;
  overNumberOfDays?: number;
} | null => {
  const currentPhase = INVASION_GetPhase();
  if (currentPhase < INVASION_DrawData.drawInfoByPhase.length) {
    return INVASION_DrawData.drawInfoByPhase[currentPhase];
  } else {
    return null;
  }
};
