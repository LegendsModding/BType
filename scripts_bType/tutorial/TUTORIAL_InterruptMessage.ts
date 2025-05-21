import { GV_TUTORIAL } from "./GV_TUTORIAL.ts";
import { TUTORIAL_MessagePriority } from "./TUTORIAL_MessagePriority.ts";

/**
 *
 * @param isCampaignOnboarding
 */
export const TUTORIAL_InterruptMessage = (
  isCampaignOnboarding: boolean,
): NoReturn => {
  if (isCampaignOnboarding) {
    OUTPUT_SetGlobalVariable(GV_TUTORIAL.isCampaignOnboardingMessageUp, 0);
  } else {
    OUTPUT_SetGlobalVariable(GV_TUTORIAL.isBasicsOnboardingMessageUp, 0);
  }

  OUTPUT_AnnounceInterrupt(TUTORIAL_MessagePriority);
};
