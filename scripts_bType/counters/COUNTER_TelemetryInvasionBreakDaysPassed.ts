import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * @constant {Counter} TelemetryInvasionBreakDaysPassedCounter
 * @description Tracks the number of days passed during invasion breaks.
 */
export const COUNTER_TelemetryInvasionBreakDaysPassed: GenericCounterType =
  COUNTER_Generic("gv_inv_break_days_passed", 0);
