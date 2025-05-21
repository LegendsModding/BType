import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} StaggeredEntryHordePhaseCounter
 * @description Tracks the phase of staggered entry hordes.
 */
export const COUNTER_StaggeredEntryHordePhase: GenericCounterType =
  COUNTER_Generic("gv_entry_horde_phase", -1, []);
