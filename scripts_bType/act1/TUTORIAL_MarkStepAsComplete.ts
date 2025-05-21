import { TUTORIAL_GrantCompleteUnlockResource } from "../tutorial/TUTORIAL_GrantCompleteUnlockResource.ts";
import { TUTORIAL_InterruptMessage } from "../tutorial/TUTORIAL_InterruptMessage.ts";
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
 * @param onboardingStepData.delayedTime
 * @param onboardingStepData.vo
 * @param onboardingStepData.cinematics
 * @param onboardingStepData.miscReminders
 * @param onboardingStepData.hudItem
 * @param onboardingStepData.cinematic
 * @param interruptOnboardingMessage
 */
export const TUTORIAL_MarkStepAsComplete = (
  onboardingStepData: {
    id: string;
    tutorialKey: string;
    tutorialHintUnlock?: string;
    onboardingCompleteResource: string;
    global: Record<string, string>;
    consts?: Record<string, number | number[]>;
    message?: Record<string, string | string[]>;
    delayedTime?: number | undefined;
    vo?: Record<string, string | string[]>;
    cinematics?: Record<string, string> | undefined;
    miscReminders?: Record<string, string | number> | undefined;
    hudItem?: string[] | undefined;
    cinematic?: string | Record<string, string>;
  },
  interruptOnboardingMessage = true,
): void => {
  FORESIGHT.info(" MarkAct1StepAsComplete = " + onboardingStepData.id);
  OUTPUT_SetGlobalVariable(
    onboardingStepData.global.isThisStepCurrentlyActive,
    0,
  );
  OUTPUT_SetGlobalVariable(onboardingStepData.global.stepComplete, 1);
  OUTPUT_TriggerTutorialBypass(onboardingStepData.tutorialKey);
  TUTORIAL_GrantCompleteUnlockResource(onboardingStepData);
  if (interruptOnboardingMessage) {
    TUTORIAL_InterruptMessage(true);
  }
};
