import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * Counter tracking days since first faction establishment.
 * @readonly
 * @remarks
 * Initialized with -1 as default value. Monitors temporal gaps between faction activities for procedural generation adjustments.
 */
export const COUNTER_DaysSinceAnyFactionEstablished = COUNTER_Generic(
  "gv_days_since_first_horde_established",
  -1,
);
