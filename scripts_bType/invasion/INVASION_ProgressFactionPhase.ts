import { INVASION_HandleFactionPhaseActions } from "./INVASION_HandleFactionPhaseActions.ts";
import { INVASION_SetFactionPhase } from "./INVASION_SetFactionPhase.ts";

// ProgressFactionPhase: Progress a given faction through their invasion phase

/**
 *
 * @param faction
 * @param phase
 */
export const INVASION_ProgressFactionPhase = (
  faction: FactionNameId,
  phase: number,
): void => {
  INVASION_SetFactionPhase(faction, phase); // Set the new phase for the faction
  INVASION_HandleFactionPhaseActions(faction, phase); // Handle the actions for the new phase
};
