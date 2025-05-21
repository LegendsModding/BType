import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} COUNTER_StaggeredEntry
 * @description Tracks the index of staggered entry piglin factions.
 */
export const COUNTER_StaggeredEntry: GenericCounterType = COUNTER_Generic(
  "gv_entry_horde_index",
  0,
);
