import { GV_TUTORIAL } from "./GV_TUTORIAL.ts";

/**
 *
 * @param message
 * @param isCampaignOnboarding
 */
export const TUTORIAL_ShowMessage = (
  message: TutorialMessage,
  isCampaignOnboarding: boolean,
): NoReturn => {
  if (isCampaignOnboarding) {
    OUTPUT_SetGlobalVariable(GV_TUTORIAL.isCampaignOnboardingMessageUp, 1);
  } else {
    OUTPUT_SetGlobalVariable(GV_TUTORIAL.isBasicsOnboardingMessageUp, 1);
  }

  OUTPUT_Announce(message, []);
};
