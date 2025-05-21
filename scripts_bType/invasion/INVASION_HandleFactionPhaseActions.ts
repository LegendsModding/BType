import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { QUERY_GetFactionPhaseConfig } from "./QUERY_GetFactionPhaseConfig.ts";

// HandleFactionPhaseActions: Executes actions based on the phase of the faction

/**
 *
 * @param faction
 * @param phase
 */
export const INVASION_HandleFactionPhaseActions = (
  faction: FactionNameId,
  phase: number,
): NoReturn => {
  const phaseConfig = QUERY_GetFactionPhaseConfig(faction, phase);
  if (!phaseConfig[phase].actions) {
    FORESIGHT.error(`Actions was not defined!`);
    throw new Error("Error");
  }
  // Execute actions for this phase
  phaseConfig[phase]?.actions.forEach((phaseAction) => {
    phaseAction.action(faction, phase);
  });
};
