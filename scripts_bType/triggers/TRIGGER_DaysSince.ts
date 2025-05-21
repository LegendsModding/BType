import { COUNTER_DaysSince } from "scripts_bType/counters/COUNTER_DaysSince.ts";

import { TRIGGER_Generic } from "./TRIGGER_Generic.ts";

/**
 * Creates a time-based trigger tracking days since a specific event.
 * @param daysNum Threshold number of days required.
 * @param snapshot Snapshot system tracking temporal data.
 * @returns {Trigger} Configured day duration trigger condition.
 * @remarks Uses COUNTER_DaysSince for temporal calculations. Requires valid snapshot data context for accurate evaluation.
 */
export const TRIGGER_DaysSince = (
  daysNum: number,
  snapshot: SnapshotGeneric,
): Trigger => {
  return TRIGGER_Generic(daysNum, COUNTER_DaysSince, snapshot);
};
