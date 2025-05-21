/**
 * Enumeration mapping game acts to numerical identifiers for telemetry synchronization.
 * @readonly
 * @remarks
 * Values must align with server-side telemetry handlers.
 * ACT1-4 correspond to campaign phases while EPILOGUE marks conclusion.
 * Mismatched values may cause analytics discrepancies but no critical failures.
 */
export const TELEMETRY_GameActIds = {
  ACT1: 1,
  ACT2: 2,
  ACT3: 3,
  ACT4: 4,
  EPILOGUE: 5,
};
