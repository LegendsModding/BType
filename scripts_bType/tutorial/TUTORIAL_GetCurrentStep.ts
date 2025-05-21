import { ACT1_FlowIds } from "../act1/ACT1_FlowIds.ts";
import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

/**
 * Identifies the currently active tutorial step within Act 1 progression.
 * @returns {TutorialStepId | undefined} Active step identifier or undefined if no step active.
 * @remarks Iterates through ACT1_FlowIds to check global step activation variables. Returns undefined when no valid step is detected. Requires proper ACT1_FlowVal global variable setup.
 */
export const TUTORIAL_GetCurrentStep = (): TutorialStepId | undefined => {
  let currentStepId = undefined;
  ACT1_FlowIds.forEach((act1OnboardingId) => {
    // TODO
    const onboardingData = ACT1_FlowVal[act1OnboardingId as OnboardingID];
    if (!onboardingData.global) {
      FORESIGHT.error("error");
    }
    if (
      QUERY_GetGlobalVariable(
        onboardingData.global.isThisStepCurrentlyActive,
      ) === 0
    ) {
      currentStepId = act1OnboardingId;
    }
  });

  return currentStepId ?? undefined;
};
