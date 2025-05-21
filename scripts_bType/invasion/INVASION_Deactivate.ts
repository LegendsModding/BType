import { MAP_InvasionState } from "scripts_bType/map/MAP_InvasionState.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";

import { INVASION_ActiveGV } from "./INVASION_ActiveGV.ts";
import { INVASION_RefreshState } from "./INVASION_RefreshState.ts";

/**
 * Disables the invasion system entirely.
 * Resets all related state variables.
 * @example
 * // End invasion mode
 * INVASION_Deactivate();
 * @description
 * Process:
 * 1. Logs deactivation
 * 2. Clears global flags
 * 3. Updates server state
 * 4. Refreshes AI behaviors
 *
 * Effects:
 * - Stops enemy waves
 * - Hides invasion UI
 * - Disables related triggers
 * - Resets counters
 */
export const INVASION_Deactivate = (): void => {
  OUTPUT_DebugLogInvasion("Deactivating the Invasion System");
  OUTPUT_SetGlobalVariable(INVASION_ActiveGV, 0);
  INVASION_RefreshState();
  OUTPUT_ServerMapSetKeyValue(
    MAP_Key.INVASION_STATE,
    MAP_InvasionState.DISABLED,
  );
};
