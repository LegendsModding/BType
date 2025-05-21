/**
 * Logging system severity levels.
 * @readonly
 * @remarks
 * Defines hierarchical log priorities from VERBOSE (lowest) to ERROR (highest). Controls log output filtering.
 */
export const LOG_LEVEL: LogLevels = {
  VERBOSE: 0 as LogLevelVerbose,
  INFO: 1 as LogLevelInfo,
  WARNING: 2 as LogLevelWarning,
  ERROR: 3 as LogLevelError,
};
