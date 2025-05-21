/**
 * Global variable identifiers for invasion draw tracking systems.
 * @readonly
 * @remarks
 * remainingDraws: Tracks available invasion attempts.
 * remainingDays: Monitors time remaining for current invasion phase.
 * Used in conjunction with difficulty configurations and procedural event scheduling.
 */
export const INVASION_DrawInfoVal = {
  remainingDraws: "gv_invasion_draw_remaining_draws",
  remainingDays: "gv_invasion_draw_remaining_days",
};
