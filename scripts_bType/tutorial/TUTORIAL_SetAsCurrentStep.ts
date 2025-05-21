import { FORESIGHT } from "../utility/Foresight.ts";

/**
 *
 * @param onboardingStepData
 * @param onboardingStepData.id
 * @param onboardingStepData.tutorialKey
 * @param onboardingStepData.tutorialHintUnlock
 * @param onboardingStepData.onboardingCompleteResource
 * @param onboardingStepData.global
 * @param onboardingStepData.consts
 * @param onboardingStepData.message
 * @param onboardingStepData.vo
 * @param onboardingStepData.cinematic
 * @param onboardingStepData.miscReminders
 * @param onboardingStepData.hudItem
 */
export const TUTORIAL_SetAsCurrentStep = (onboardingStepData: {
  id: string;
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
}): void => {
  FORESIGHT.info(" _SetOnboardingAsCurrentStep = " + onboardingStepData.id);
  OUTPUT_SetGlobalVariable(
    onboardingStepData.global.isThisStepCurrentlyActive as string,
    1,
  );
};
