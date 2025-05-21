import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} StaggeredMobAllianceOccupationCounter
 * @description Tracks the index of mob alliance occupations.
 */
export const COUNTER_StaggeredEntryUndead: GenericCounterType = COUNTER_Generic(
  "gv_faction_undead_entry_index",
  -1,
); // "gv_mob_alliance_occupation_index"
