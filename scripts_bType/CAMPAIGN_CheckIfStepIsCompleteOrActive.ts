import { CAMPAIGN_CheckIfStepIsComplete } from "./CAMPAIGN_CheckIfStepIsComplete.ts";

/**
 * Validates campaign step completion or active status using global state.
 * @param flowStepData Configuration object containing step parameters.
 * @param flowStepData.id
 * @param flowStepData.tutorialKey
 * @param flowStepData.tutorialHintUnlock
 * @param flowStepData.onboardingCompleteResource
 * @param flowStepData.global
 * @param flowStepData.consts
 * @param flowStepData.message
 * @param flowStepData.vo
 * @param flowStepData.cinematic
 * @param flowStepData.miscReminders
 * @param flowStepData.hudItem
 * @returns {boolean} True if step is completed or currently active.
 * @remarks
 * Evaluates stepComplete global variable and isThisStepCurrentlyActive status.
 * Handles undefined step IDs through optional chaining. Used in progression gating systems.
 */
export const CAMPAIGN_CheckIfStepIsCompleteOrActive = (flowStepData: {
  id?: string;
  tutorialKey?: string;
  tutorialHintUnlock?: string;
  onboardingCompleteResource?: string;
  global: Record<string, string | Record<string, string>>;
  consts?: Record<string, number | number[]>;
  message?: Record<string, string | string[]>;
  vo?: Record<string, string | string[]>;
  cinematic?: string | Record<string, string>;
  miscReminders?: Record<string, string | number>;
  hudItem?: string[];
}): boolean => {
  if (
    CAMPAIGN_CheckIfStepIsComplete(flowStepData) ||
    QUERY_GetGlobalVariable(
      flowStepData.global.isThisStepCurrentlyActive as string,
    ) > 0
  ) {
    return true;
  }
  return false;
};
