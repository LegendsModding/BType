/**
 * Global tracking identifier for universal counters.
 * Used when village/faction context isn't required.
 * @constant
 * type {string}
 * @example
 * // Track global event occurrences
 * COUNTER_Generic("global_events", 0, [GLOBAL_TRACKER]);
 */
export const GLOBAL_TRACKER: string = "global";

/**
 * Identifier for dawn-phase trigger timing systems.
 * @readonly
 * @defaultValue "trigger_time_dawn"
 * @remarks
 * Used for synchronization with day/night cycle events. Affects scheduled operations during morning transitions.
 */
export const TRIGGER_TIME_DAWN: TriggerTimeDawn = "trigger_time_dawn";

/**
 * Identifier for noon-phase trigger timing systems.
 * @readonly
 * @defaultValue "trigger_time_noon"
 * @remarks
 * Coordinates midday event executions and procedural generation updates.
 */
export const TRIGGER_TIME_NOON: TriggerTimeNoon = "trigger_time_noon";

/**
 * Identifier for dusk-phase trigger timing systems.
 * @readonly
 * @defaultValue "trigger_time_dusk"
 * @remarks
 * Manages evening-related world state transitions and AI behavior changes.
 */
export const TRIGGER_TIME_DUSK: TriggerTimeDusk = "trigger_time_dusk";

/**
 * Identifier for midnight-phase trigger timing systems.
 * @readonly
 * @defaultValue "trigger_time_midnight"
 * @remarks
 * Controls nighttime procedural operations and mob activity cycles.
 */
export const TRIGGER_TIME_MIDNIGHT: TriggerTimeMidnight =
  "trigger_time_midnight";

/**
 * Identifier for immediate execution triggers.
 * @readonly
 * @defaultValue "trigger_time_immediate"
 * @remarks
 * Bypasses normal scheduling for urgent system updates and event triggers.
 */
export const TRIGGER_TIME_IMMEDIATE: TriggerTimeImmediate =
  "trigger_time_immediate";

/**
 * Identifier for village-specific trigger timing systems.
 * @readonly
 * @defaultValue "trigger_time_at_village"
 * @remarks
 * Used for location-based event scheduling within village influence zones.
 */
export const TRIGGER_TIME_AT_VILLAGE: TriggerTimeAtVillage =
  "trigger_time_at_village";

/**
 * Sentinel value indicating uninitialized snapshot states.
 * @readonly
 * @defaultValue -999
 * @remarks
 * Used in systems requiring state tracking before proper initialization occurs.
 */
export const SNAPSHOT_NOT_SET = -999;
