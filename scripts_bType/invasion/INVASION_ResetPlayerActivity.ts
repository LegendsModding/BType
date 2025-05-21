import { INACTIVE_DAYS_VARIABLE } from "scripts_bType/consts/INACTIVE_DAYS_VARIABLE.ts";

/**
 *
 */
export const INVASION_ResetPlayerActivity = (): void => {
  OUTPUT_SetGlobalVariable(INACTIVE_DAYS_VARIABLE, -1);
  OUTPUT_DebugLogInvasion(
    `[PLAYER ACTIVITY] Reset inactive days. Current value is ${QUERY_GetGlobalVariable(INACTIVE_DAYS_VARIABLE)}`,
  );
};
