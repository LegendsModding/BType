import { ACT1_FlowVal } from "./act1/ACT1_FlowVal.ts";
import { GV_GetValue } from "./GV_GetValue.ts";

/**
 * Validates campaign step completion status using global tracking variables.
 * @param flowStepData Configuration object containing step parameters.
 * @param flowStepData.id
 * @param flowStepData.tutorialKey
 * @param flowStepData.tutorialHintUnlock
 * @param flowStepData.onboardingCompleteResource
 * @param flowStepData.global
 * @param flowStepData.consts
 * @param flowStepData.message
 * @param flowStepData.delayedTime
 * @param flowStepData.vo
 * @param flowStepData.cinematics
 * @param flowStepData.miscReminders
 * @param flowStepData.hudItem
 * @param flowStepData.villageTag
 * @param flowStepData.village
 * @param flowStepData.cinematic
 * @param flowStepData.occupationClearedCinematic
 * @param flowStepData.stingers
 * @param flowStepData.stingers.smallWin
 * @param flowStepData.villageChestTag
 * @param flowStepData.tutorialResource
 * @param flowStepData.prismarineToTriggerTutorialNudge
 * @param flowStepData.atWellOfFateTutorialHintUnlock
 * @param flowStepData.neededResourceToAllowUpgrade
 * @param flowStepData.upgradeStructureTag
 * @returns {boolean} True if step is marked complete or skipped via global flags.
 * @remarks
 * Checks stepComplete global variable and ACT1_FlowVal.misc.skipAct1Flow status.
 * Used for milestone validation in tutorial systems and campaign progression.
 */
export const CAMPAIGN_CheckIfStepIsComplete = (flowStepData: {
  id?: string;
  tutorialKey?: string;
  tutorialHintUnlock?: string;
  onboardingCompleteResource?: string;
  global: Record<string, string | Record<string, string>>;
  consts?: Record<string, number | number[]>;
  message?: Record<string, string | string[]>;
  delayedTime?: number;
  vo?: Record<string, string | string[]>;
  cinematics?: Record<string, string>;
  miscReminders?: Record<string, string | number>;
  hudItem?: string[];
  villageTag?: string;
  village?: Record<string, string | number>;
  cinematic?: string | Record<string, string>;
  occupationClearedCinematic?: string;
  stingers?: { smallWin: string };
  villageChestTag?: string;
  tutorialResource?: string;
  prismarineToTriggerTutorialNudge?: number;
  atWellOfFateTutorialHintUnlock?: string;
  neededResourceToAllowUpgrade?: string;
  upgradeStructureTag?: string;
}): boolean => {
  if (
    GV_GetValue(flowStepData.global.stepComplete as string) > 0 ||
    GV_GetValue(ACT1_FlowVal.misc.skipAct1Flow) > 0
  ) {
    return true;
  }
  return false;
};
