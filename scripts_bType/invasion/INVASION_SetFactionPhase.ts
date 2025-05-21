import { INVASION_FactionPhaseState } from "./INVASION_FactionPhaseState.ts";

// SetFactionPhase: Sets the phase for a specific faction

/**
 *
 * @param faction
 * @param phase
 */
export function INVASION_SetFactionPhase(
  faction: FactionNameId,
  phase: number,
): void {
  INVASION_FactionPhaseState[faction] = phase;
}
