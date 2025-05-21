import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} COUNTER_StaggeredEntryHost
 * @description Tracks the index of mob alliance occupations.
 */
export const COUNTER_StaggeredEntryHost: GenericCounterType = COUNTER_Generic(
  "gv_faction_host_entry_index",
  -1,
);
