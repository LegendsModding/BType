import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";

import { TUTORIAL_BannerViewConsts } from "./TUTORIAL_BannerViewConsts.ts";
import { TUTORIAL_CarpenterHutFlow } from "./TUTORIAL_CarpenterHutFlow.ts";

/**
 * Contains message priority mappings for tutorial progression tracking.
 * @readonly
 * @remarks
 * Numerical values represent display priority/order for onboarding nudges.
 * Higher numbers may indicate later/conditional message sequences.
 */
export const TUTORIAL_NudgeTracker = {
  [ACT1_FlowVal.findVillageUnderAttack.message.onboardingNudge]: 1,
  [ACT1_FlowVal.firstVillageUnderAttack.message.onboardingNudge]: 2,
  [ACT1_FlowVal.repairFountain.message.onboardingNudge]: 3,
  [ACT1_FlowVal.findSecondVillage.message.onboardingNudge]: 4,
  [ACT1_FlowVal.freeSecondVillage.message.onboardingNudge]: 5,
  [ACT1_FlowVal.villageChest.message.onboardingNudge]: 6,
  [ACT1_FlowVal.buildDefensesInSecondVillage.message.onboardingNudge]: 7,
  [ACT1_FlowVal.firstSkirmish.message.onboardingNudge]: 8,
  [ACT1_FlowVal.firstSkirmish.message.repairFountainNudge]: 9,
  [ACT1_FlowVal.threePiglinCamps.message.onboardingNudge]: 10,
  [ACT1_FlowVal.threePiglinCamps.message.onboardingNudges[0]]: 11,
  [ACT1_FlowVal.threePiglinCamps.message.onboardingNudges[1]]: 12,
  [ACT1_FlowVal.threePiglinCamps.message.onboardingNudgesWithoutBannerview[0]]:
    13,
  [ACT1_FlowVal.threePiglinCamps.message.onboardingNudgesWithoutBannerview[1]]:
    14,
  [ACT1_FlowVal.endPortalUpgrade.message.onboardingNudge]: 15,
  [ACT1_FlowVal.endPortalUpgrade.message.atRuinedPortalNudge]: 16,
  [ACT1_FlowVal.endPortalUpgrade.message.buildIronUpgradeNudge]: 17,
  [ACT1_FlowVal.secondSkirmish.message.onboardingNudge]: 18,
  [ACT1_FlowVal.secondSkirmish.message.secondOnboardingNudge]: 19,
  [ACT1_FlowVal.outpost.message.onboardingNudge]: 20,
  [ACT1_FlowVal.destroyDBB.message.onboardingNudge]: 21,
  [ACT1_FlowVal.destroyDBB.message.onboardingNudgeAfterOutpostNoApproach]: 22,
  [ACT1_FlowVal.destroyDBB.message.onboardingNudgeApproachNoOutpost]: 23,
  [ACT1_FlowVal.destroyDBB.message.onboardingNudgeApproachedBuiltOutpost]: 24,
  [TUTORIAL_BannerViewConsts.onboardingMessages[0]]: 25,
  [TUTORIAL_BannerViewConsts.onboardingMessages[1]]: 26,
  [TUTORIAL_BannerViewConsts.onboardingMessages[2]]: 27,
  [TUTORIAL_BannerViewConsts.onboardingMessages[3]]: 28,
  [TUTORIAL_CarpenterHutFlow.messages.waitForHeals]: 29,
  [TUTORIAL_CarpenterHutFlow.messages.deconstruct]: 30,
  [TUTORIAL_CarpenterHutFlow.messages.resources]: 31,
};
