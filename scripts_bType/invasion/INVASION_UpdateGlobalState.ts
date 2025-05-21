import { COUNTER_InvasionPhase } from "scripts_bType/counters/COUNTER_InvasionPhase.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { INVASION_MAX_PHASE } from "./INVASION_MAX_PHASE.ts";

// UpdateGlobalInvasionState: Updates global invasion state when the phase progresses

/**
 *
 */
export const INVASION_UpdateGlobalState = (): void => {
  const currentPhase = COUNTER_InvasionPhase.Get();

  // Global logic for updating the invasion state
  if (currentPhase >= INVASION_MAX_PHASE) {
    // Trigger final phase events or end invasion logic
    FORESIGHT.info("Invasion complete!");
  } else {
    FORESIGHT.info(`Invasion progressing to phase ${currentPhase + 1}`);
  }
};
