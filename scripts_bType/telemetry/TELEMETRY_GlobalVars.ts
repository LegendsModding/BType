/**
 * Global variable container for telemetry-related game act tracking.
 * @readonly
 * @remarks
 * gameAct variable persists current campaign phase identifiers for analytics purposes.
 * Values correspond to TELEMETRY_GameActIds enum entries.
 * Used in telemetry event categorization and progression analysis.
 */
export const GV_TELEMETRY = {
  gameAct: "gv_telemetry_gameact",
};
