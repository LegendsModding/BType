import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { TUTORIAL_NudgeTracker } from "../tutorial/TUTORIAL_NudgeTracker.ts";

/**
 * Checks if a specific Act 1 tutorial nudge is currently displayed for all players.
 * @param message Target nudge message identifier.
 * @returns {boolean} True if the message matches the active global nudge state.
 * @remarks
 * Compares TUTORIAL_NudgeTracker values against ACT1_FlowVal.misc.activeOnboardingNudge global variable.
 * Ensures synchronized tutorial progression across multiplayer sessions.
 */
export const QUERY_IsShowingThisAct1NudgeForAllPlayers = (
  message: NudgeMessage,
): boolean => {
  return (
    QUERY_GetGlobalVariable(ACT1_FlowVal.misc.activeOnboardingNudge) ===
    TUTORIAL_NudgeTracker[message]
  );
};
