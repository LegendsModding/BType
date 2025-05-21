/**
 * Registry for banner view tutorial progression tracking.
 * @readonly
 * @remarks
 * Contains global variables for stage management (previousStageVariable, currentStageVariable) and completion flags (tutorialComplete).
 * onboardingMessages array holds sequential tutorial message identifiers.
 * vo object maps audio cues to tutorial interaction states.
 * consts.timerDeconReminderName tracks reminder timers with timeToOpenVO duration threshold.
 * successStinger references positive feedback audio.
 * State transitions occur through gameplay interactions with banner view interfaces.
 */
export const TUTORIAL_BannerViewConsts = {
  previousStageVariable: "gv_bannerViewTutorial_previous_stage",
  currentStageVariable: "gv_bannerViewTutorial_stage",
  bannerViewReminderPlayed: "gv_bannerViewReminderPlayed",
  bannerviewStateTracker: "gv_bannerview_state_tracker",
  bannerviewTutorialStarted: "gv_bannerview_tutorial_started",
  onboardingMessages: [
    "onboarding_bannerview_one_mob",
    "onboarding_bannerview_multiple_mobs",
    "onboarding_bannerview_charge_focus",
    "onboarding_bannerview_typeselect",
  ],
  tutorialComplete: "gv_bannerview_tutorial_complete",
  vo: {
    open: "bannerview_open",
    openSuccess: "bannerview_open_success",
    oneMob: "bannerview_one_mob",
    oneMobSuccess: "bannerview_one_mob_success",
    multipleMobs: "bannerview_multiple_mobs",
    multipleMobsSuccess: "bannerview_multiple_mobs_success",
    typeSelect: "bannerview_typeselect",
    typeSelectSuccess: "bannerview_typeselect_success",
    chargeFocus: "bannerview_charge_focus",
    chargeFocusSuccess: "bannerview_charge_focus_success",
    finish: "bannerview_finish",
  },
  consts: {
    bannerViewOpen: 1,
    bannerViewClosed: 0,
    timeToOpenVO: 45,
  },
  successStinger: "BAE_mus_stinger_campaign_general_pos_large",
};
