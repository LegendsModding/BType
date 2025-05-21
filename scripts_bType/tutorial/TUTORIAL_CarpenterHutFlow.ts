/**
 * Comprehensive tutorial flow configuration for carpenter hut mechanics.
 * @readonly
 * @remarks
 * Manages player guidance through building/deconstruction processes with state tracking,
 * audio cues, HUD elements, and voice-over messaging.
 * gvStates defines progression stages:
 * - notBuilt: Initial state
 * - waitToFullyHeal: Healing phase requirement
 * - requiresDeconstruct: Deconstruction prompt
 * - requiresResources: Resource collection phase
 * - waitToFullyHealBuildingComplete: Post-construction healing
 * - completed: Final state
 * consts.timerDeconReminderName tracks deconstruction reminders with timeToWaitForHealsFailReminder duration.
 * hudItem.resourcesWood/Stone define resource gathering objectives.
 * stingers.smallWin/largeWin provide audio feedback for successful actions.
 * tutorials.carpenter/deconstruct link to specific tutorial systems with delays.
 * vo properties map to audio cues for different player interaction scenarios.
 */
export const TUTORIAL_CarpenterHutFlow = {
  gvName: "gv_carpenter_hut_tutorial_state",
  waitForHealsFailTracker: "gv_wait_for_heals_fail_tracker",
  carpenterHutBeingDeconstructed: "gv_carpenter_hut_being_deconstructed",
  gvStates: {
    notBuilt: 0,
    waitToFullyHeal: 1,
    requiresDeconstruct: 2,
    requiresResources: 3,
    waitToFullyHealBuildingComplete: 4,
    completed: 10,
  },
  consts: {
    timerDeconReminderName: "deconReminderTimer",
    timeToWaitForHealsFailReminder: 60,
  },
  messages: {
    waitForHeals: "onboarding_carpenter_rework_wait_for_heals_nudge",
    deconstruct: "onboarding_carpenter_rework_deconstruct_nudge",
    resources: "onboarding_carpenter_rework_resources_nudge",
  },
  hudItem: {
    resourcesWood: [
      "resourcing",
      "wood",
      "badger:terraform_gather_surface_wood",
    ],
    resourcesStone: [
      "resourcing",
      "stone",
      "badger:terraform_gather_surface_stone",
    ],
  },
  stingers: {
    smallWin: "BAE_mus_stinger_campaign_general_pos_small",
    largeWin: "BAE_mus_stinger_campaign_general_pos_large",
  },
  tutorials: {
    carpenter: {
      tutorialKey: "rebuilding_villages",
      delay: 8,
    },
    deconstruct: {
      tutorialKey: "player_deconstructed",
      delay: 0,
    },
  },
  vo: {
    deconstructTooFar: "onboarding_carpenter_hut_placed_too_far",
    deconstructTooFarSuccess:
      "onboarding_carpenter_hut_deconstruct_successfully",
    noResources: "onboarding_carpenter_hut_no_resources",
    noResourcesSuccess: "onboarding_carpenter_hut_collected_resources",
    waitForHeals: "onboarding_carpenter_hut_placed_correctly_first_time",
    waitForHealsFail1: "onboarding_carpenter_hut_wait_for_heal_fail_1",
    waitForHealsFail2: "onboarding_carpenter_hut_wait_for_heal_fail_2",
    placedCorrectlyAfterWaitForHealFail:
      "onboarding_carpenter_hut_placed_after_failed_wait_for_heals",
    reminderAfterWaitForHealsFail:
      "onboarding_carpenter_hut_reminder_after_wait_for_heals_fail",
  },
};
