import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * Counter tracking days since Act 2 initiation.
 * @readonly
 * @remarks
 * Initialized with -1 as default value. Persists across game sessions for temporal progression analysis.
 */
export const COUNTER_DaysSince = COUNTER_Generic("gv_days_since_act2", -1);
