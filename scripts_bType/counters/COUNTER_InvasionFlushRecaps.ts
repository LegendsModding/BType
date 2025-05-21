import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} InvasionFlushRecapsCounter
 * @description Tracks the number of invasion flush recaps.
 */
export const COUNTER_InvasionFlushRecaps: GenericCounterType = COUNTER_Generic(
  "gv_flush_recaps",
  0,
);
