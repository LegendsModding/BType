import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} COUNTER_StaggeredEntryEnd
 * @description Tracks the index of mob alliance occupations.
 */
export const COUNTER_StaggeredEntryEnd: GenericCounterType = COUNTER_Generic(
  "gv_faction_end_entry_index",
  -1,
);
