import { ACT1_Skips } from "../act1/ACT1_Skips.ts";
import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { OUTPUT_UpdateFountainAudioState } from "../output/OUTPUT_UpdateFountainAudioState.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

// Linear Messages

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
export const TUTORIAL_StartLinearMessages = (onboardingStepData: {
  id: string;
  tutorialKey?: string;
  tutorialHintUnlock?: string;
  onboardingCompleteResource?: string;
  global?: Record<string, string | Record<string, string>>;
  consts?: Record<string, number | number[]>;
  message?: Record<string, string | string[]>;
  vo?: Record<string, string | string[]>;
  cinematic?: string | Record<string, string>;
  miscReminders?: Record<string, string | number>;
  hudItem?: string[];
}): void => {
  if (QUERY_GetGlobalVariable(ACT1_Skips.skipVillage1) === 0) {
    OUTPUT_UpdateFountainAudioState();
    LISTENFOR_LocalTimer({
      snippet: "lt_campaign_onboarding_first_vo",
      ownerVillageId: OWNER_VILLAGE_OPT_OUT,
      waitTime: onboardingStepData?.consts?.timeToTriggerFirstVO as number,
      payloadString: onboardingStepData.id,
    });
    FORESIGHT.info(
      "_StartLinearOnboardingMessages  = " + onboardingStepData.id,
    );
  }
};
