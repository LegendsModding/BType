import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} InvasionPhaseCounter
 * @description Tracks the current invasion phase.
 */
export const COUNTER_InvasionPhase: GenericCounterType = COUNTER_Generic(
  "gv_invasion_phase_counter",
  -1,
);
