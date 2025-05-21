import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { TEAM } from "../consts/TEAM.ts";
import { HUD_DeEmphasizeItem } from "../HUD/HUD_DeEmphasizeItem.ts";
import { HUD_EmphasizeItem } from "../HUD/HUD_EmphasizeItem.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { TUTORIAL_CarpenterHutFlow } from "./TUTORIAL_CarpenterHutFlow.ts";

/**
 * @name TUTORIAL_GetCurrentCarpenterNudgeAfterLoad
 * @description Returns the current onboarding nudge message based on the carpenter's beat state.
 * @notes This function queries the global carpenter beat state and, depending on its value, may emphasize or de-emphasize certain HUD items.
 * When the state is `requiresResources`, the team resource amounts (wood and stone) are compared against a threshold (150).
 * Depending on these values, the corresponding HUD item is either emphasized or de-emphasized.
 *
 * If none of the cases match, the function returns `undefined`.
 * @returns {string | undefined} The nudge message corresponding to the current state, or `undefined` if no matching state is found.
 * @example
 * const nudgeMessage = TUTORIAL_GetCurrentCarpenterNudgeAfterLoad();
 * if (nudgeMessage) {
 *   // Process the onboarding nudge message.
 * }
 * @see ACT1_FlowVal
 * @see TUTORIAL_CarpenterHutFlow
 * @see TEAM
 * @see QUERY_GetGlobalVariable
 * @see QUERY_GetTeamResource
 * @see OUTPUT_EmphasizeHUDItem
 * @see OUTPUT_DeEmphasizeHUDItem
 */
export const TUTORIAL_GetCurrentCarpenterNudgeAfterLoad = ():
  | NudgeMessage
  | undefined => {
  const carpenterBeatState = QUERY_GetGlobalVariable(
    TUTORIAL_CarpenterHutFlow.gvName,
  );

  switch (carpenterBeatState) {
    case TUTORIAL_CarpenterHutFlow.gvStates.notBuilt:
      HUD_EmphasizeItem(ACT1_FlowVal.repairFountain.hudItem);
      return ACT1_FlowVal.repairFountain.message.onboardingNudge;

    case TUTORIAL_CarpenterHutFlow.gvStates.waitToFullyHeal:
    case TUTORIAL_CarpenterHutFlow.gvStates.waitToFullyHealBuildingComplete:
      return TUTORIAL_CarpenterHutFlow.messages.waitForHeals;

    case TUTORIAL_CarpenterHutFlow.gvStates.requiresDeconstruct:
      return TUTORIAL_CarpenterHutFlow.messages.deconstruct;

    case TUTORIAL_CarpenterHutFlow.gvStates.requiresResources: {
      const woodAmount = QUERY_GetTeamResource(TEAM.blue as TeamName, "wood");
      const stoneAmount = QUERY_GetTeamResource(TEAM.blue as TeamName, "stone");

      if (woodAmount < 150) {
        HUD_EmphasizeItem(TUTORIAL_CarpenterHutFlow.hudItem.resourcesWood);
      } else {
        HUD_DeEmphasizeItem(TUTORIAL_CarpenterHutFlow.hudItem.resourcesWood);
      }

      if (stoneAmount < 150) {
        HUD_EmphasizeItem(TUTORIAL_CarpenterHutFlow.hudItem.resourcesStone);
      } else {
        HUD_DeEmphasizeItem(TUTORIAL_CarpenterHutFlow.hudItem.resourcesStone);
      }

      return TUTORIAL_CarpenterHutFlow.messages.resources;
    }

    default:
      FORESIGHT.error(
        "Something bad happened in 'TUTORIAL_GetCurrentCarpenterNudgeAfterLoad'",
      );
      return undefined;
  }
};
