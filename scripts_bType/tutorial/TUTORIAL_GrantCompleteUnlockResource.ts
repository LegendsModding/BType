import { TEAM } from "../consts/TEAM.ts";

/**
 *
 * @param onboardingData
 * @param onboardingData.id
 * @param onboardingData.tutorialKey
 * @param onboardingData.tutorialHintUnlock
 * @param onboardingData.onboardingCompleteResource
 * @param onboardingData.global
 * @param onboardingData.consts
 * @param onboardingData.message
 * @param onboardingData.delayedTime
 * @param onboardingData.vo
 * @param onboardingData.cinematics
 * @param onboardingData.miscReminders
 * @param onboardingData.hudItem
 * @param onboardingData.cinematic
 */
export const TUTORIAL_GrantCompleteUnlockResource = (onboardingData: {
  id?: string;
  tutorialKey?: string;
  tutorialHintUnlock?: string | undefined;
  onboardingCompleteResource: string;
  global?: Record<string, string | Record<string, string>>;
  consts?: Record<string, number | number[]>;
  message?: Record<string, string | string[]>;
  delayedTime?: number | undefined;
  vo?: Record<string, string | string[]>;
  cinematics?: Record<string, string> | string | undefined;
  miscReminders?: Record<string, string | number> | undefined;
  hudItem?: string[] | undefined;
  cinematic?: string | Record<string, string>;
}): void => {
  if (onboardingData.onboardingCompleteResource !== "") {
    if (
      QUERY_GetCampaignResource(onboardingData.onboardingCompleteResource) === 0
    ) {
      OUTPUT_AddOrRemoveTeamResource(
        TEAM.blue as TeamName,
        onboardingData.onboardingCompleteResource,
        1,
        false,
      );
    }
  }
};
