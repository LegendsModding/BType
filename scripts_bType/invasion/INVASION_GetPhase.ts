import { COUNTER_InvasionPhase } from "scripts_bType/counters/COUNTER_InvasionPhase.ts";

/**
 * Retrieves current global invasion phase value.
 * @returns {number} Current phase identifier.
 * @remarks
 * Directly accesses COUNTER_InvasionPhase counter value.
 * Returns 0 if phase tracking is uninitialized.
 */
export const INVASION_GetPhase = (): number => {
  return COUNTER_InvasionPhase.Get();
};
