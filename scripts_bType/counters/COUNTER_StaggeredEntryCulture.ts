import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} COUNTER_StaggeredEntryCulture
 * @description Tracks the index of mob alliance occupations.
 */
export const COUNTER_StaggeredEntryCulture: GenericCounterType =
  COUNTER_Generic("gv_faction_culture_entry_index", -1);
