/**
 * Central registry governing Act 1 progression systems and tutorial workflows.
 * @readonly
 * @remarks
 * Contains state tracking configurations for key narrative milestones:
 * - findVillageUnderAttack: Initial village discovery parameters with cinematic triggers (hrd00_c01_village_occupied)
 * - firstVillageUnderAttack: Primary conflict resolution stage with piglin interaction systems
 * - repairFountain: Fountain restoration mechanics and structure repair tutorials
 * - findSecondVillage: Secondary village discovery workflow with map integration
 * - buildDefensesInSecondVillage: Defensive construction tutorial with tower/gate tracking
 * - threePiglinCamps: Outpost destruction sequence with reminder timers (5-minute goToCampsReminder)
 * - endPortalUpgrade: Well of Fate enhancement systems requiring iron tech prerequisites
 * - secondSkirmish: Advanced combat scenario with procedural DBB targeting
 * - destroyDBB: Final objective tracking with outpost construction validation
 * - respawn: Player revival mechanics and state persistence
 * - outpost: Outpost building tutorial with zoner_fort_outpost HUD emphasis
 * Maintains global variable references (stepComplete/isThisStepCurrentlyActive) for state management.
 * Integrates audio cues (vo), visual sequences (cinematic), and HUD elements (hudItem) for user guidance.
 * Commented sections indicate reserved expansion points for additional tutorial steps and resource tracking.
 */
export const ACT1_FlowVal: Act1FlowVal = {
  misc: {
    //act1MobCap: 20,
    //outpostDestroyedMessage: "act1_outpost_base_destroyed_sequence",
    gameIntroCinematic: "mst03_c00_opening",
    //onboardingCompleteResource: "unlock_onboarding_act1_complete",
    act1FlowComplete: "gv_act1_onboarding_complete",
    successAudio: "onboarding_success",
    //arrivalAudio: "onboarding_arrival",
    timeToStartOnboardingAfterIntroCine: 8,
    timeToStartPassiveOnboardingAfterIntroCine: 20,
    //timeToShowTutorialHint: 30,
    firstVillageTag: "firstVillageUnderAttack",
    secondVillageTag: "secondVillageUnderAttack",
    //thirdVillageTag: "thirdVillageUnderAttack",
    //timeToTriggerSupportAndCavalryFMV: 10,
    //failsafeAct1NISDistance: 90,
    //legacyFlow: "gv_legacy_act1_flow",
    skipAct1Flow: "gv_skip_act1_flow",
    towersBuilt: "gv_act1_defend_built_tower",
    villageCageTag: "villageCage",
    //piglinsAtVillageTag: "piglinsAtVillage",
    //remainingWoFUpgradesUnlock: "unlock_remaining_wof_upgrades",
    totalCagesNumber: 3,
    //numOfPiglinsToSpawnMarkers: 6,
    //piglinLootTableOverride: "act1",
    //timeToTriggerStartingResources: 20,
    //startingResourcesVO: "onboarding_resources_granted",
    //timeToSpawnCageMarkers: 6,
    noPoiNisDuringAct1: "gv_no_poi_nis_during_act_1",
    //getLapisFromChestVO: "act1_player_ran_out_of_lapis",
    //getLapisFromChestHint: "onboarding_act1_player_ran_out_of_lapis",
    //getLapisFromChestEnabled: "gv_get_act1_lapis_from_chest_enabled",
    activeOnboardingNudge: "gv_active_onboarding_nudge",
    //woodGolemCount: "gv_wood_golem_count",
    //stoneGolemCount: "gv_stone_golem_count",

    miscTutorials: {
      //building: {
      //tutorialKey: "player_built_structures",
      //timeToNudgeAfterGathering: 45,
      //timeToNudgeBeforeCarpenter: 60,
      //},
      //hotbar: {
      //tutorialKey: "player_changed_hotbar",
      //tutorialHintUnlock: "",
      //},
      //fastTravel: {
      //tutorialKey: "fast_travel",
      //global: {
      //  hasFastTraveled: "gv_has_fast_traveled",
      //},
      //},
      //rebuildingVillages: {
      //tutorialKey: "",
      //},
      worldMap: {
        tutorialKey: "player_looked_at_map",
        delay: 50,
      },
      compass: {
        tutorialKey: "player_used_compass",
        delay: 2,
      },
      //resourceCap: {
      //tutorialKey: "player_resource_cap",
      //},
      //placedSpawner: {
      //tutorialKey: "",
      //},
      //upgrading: {
      //tutorialKey: "player_upgraded",
      //},
      //advancedDirect: {
      //tutorialKey: "player_advanced_direct",
      //consts: {
      //firstVoDelay: 45,
      //secondVoDelay: 15,
      //tutorialDelay: 16,
      //},
      //},
      //sprinting: {
      //tutorialKey: "player_sprinted",
      //consts: {
      //tutorialDelay: 45,
      //},
    },

    miscVO: {
      //structures: {
      //  tracker: "gv_can_play_structure_misc_vo",
      //  timers: {
      //    timeUntilPlayedAgain: 30,
      //  },
      //},
      fastTravel: {
        //secondReminder: "onboarding_second_skirmish_fasttravel",
        timers: {
          timeToTellPlayerAboutFastTravel: 26,
          //  timeToRemindPlayerAboutFastTravel: 40,
        },
        tracker: "gv_has_fast_traveled",
      },
      //secondSkirmish: {
      //  reaction: "onboarding_camp_5_arrival",
      //},
    },
  },
  /*
  audio: {
    stingers: {
      freeVillage: "BAE_TODO",
      firstPiglinWave: "BAE_mus_stinger_village_attack_wave_first",
      subsequentWaves: "BAE_mus_stinger_village_attack_wave_new",
      outpostDestroyed: "BAE_mus_stinger_outpost_destroyed_act_1",
    },
    music: {
      firstSkirmishEmitter: "badger:music_combat_act1_base_skirmish_01",
      secondSkirmishEmitter: "badger:music_combat_act1_base_skirmish_02",
    },
    fountainStates: {
      occupied: "occupied",
      damaged: "damaged",
      incomingAttack: "incoming_attack",
      default: "default",
    },
  },*/
  /*
  gathering: {
    id: "gathering",
    tutorialKey: "player_gathered_resources",
    tutorialHintUnlock: "unlock_onboarding_gatheredresources_tut",
    onboardingCompleteResource: "unlock_onboarding_gatheredresources_complete",
    global: {
      stepComplete: "gv_onboarding_gathering_completed",
      isThisStepCurrentlyActive: "gv_onboarding_gathering_active",
    },
    consts: {
      timeToTriggerFirstVO: 6,
      timeToTriggerNudgeAfterVO: 5,
      timeToTriggerVOReminder: 60,
      timeToTriggerHint: 40,
      amountOfStoneNecessary: 60,
      amountOfWoodNecessary: 60,
      timeToTutorialNudge: 8,
    },
    message: {
      onboardingNudge: "onboarding_resourcing_nudge",
      hint: "",
    },
    vo: {
      intro: "onboarding_gathering_1",
      reminder: "onboarding_gathering_2",
      complete: "onboarding_gathering_3",
    },
  },*/

  findVillageUnderAttack: {
    id: "findVillageUnderAttack",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_find_village_under_attack",
    global: {
      stepComplete: "gv_onboarding_find_village_under_attack",
      isThisStepCurrentlyActive:
        "gv_onboarding_find_village_under_attack_active",
      //grantedResources: "gv_granted_resources",
    },
    consts: {
      //  timeToTriggerFirstVO: 5,
      //  timeToTriggerNudgeAfterVO: 3,
      //  timeToTriggerVOReminder: 300,
      //  timeToTriggerHint: 50,
      //  timeToCinematic: 3,
      //  timeToGiveMeleeTutorialResource: 40,
    },
    message: {
      onboardingNudge: "onboarding_find_village_under_attack_nudge",
      //  hint: "",
    },
    //vo: {
    //  intro: "onboarding_find_piglins_1",
    //  reminder: "onboarding_find_piglins_2",
    //  preOccupiedVO: "onboarding_find_piglins_8",
    //  complete: "",
    //},
    cinematic: "hrd00_c01_village_occupied",
  },
  firstVillageUnderAttack: {
    id: "firstVillageUnderAttack",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_first_village_under_attack",
    global: {
      stepComplete: "gv_onboarding_first_village_under_attack",
      isThisStepCurrentlyActive:
        "gv_onboarding_first_village_under_attack_active",
      //  cagesBuilt: "gv_onboarding_village_cages_built",
      //  cagesOpened: "gv_onboarding_village_cages_opened",
      //  allCagesOpened: "gv_onboarding_first_village_all_cages_opened",
      //  piglinsSpawned: "gv_onboarding_first_village_piglins_spawned",
      //  piglinsKilled: "gv_onboarding_first_village_piglins_killed",
      //  allPiglinsKilled: "gv_onboarding_first_village_all_piglins_killed",
      //  numOfMobsSpawned: "gv_num_of_mobs_spawned_first_village",
    },
    consts: {
      //  timeToTriggerFirstVO: 2,
      //  timeToTriggerNudgeAfterVO: 1,
      //  timeToTriggerVOReminder: 10,
      //  timeToTriggerHint: 40,
      //  timeToSendPiglinsToAttackPlayers: 45,
      //  numberOfPiglinsToSpawnAtVillage: 24,
      //  numberOfPiglinsToSpawnAtCages: 4,
      //  numberOfPiglinsLeftForSuccess: 16,
      //  numberOfMobsToDeEmphasizeHud: 10,
    },
    message: {
      onboardingNudge: "onboarding_first_village_under_attack_nudge",
      //  hint: "",
    },
    //vo: {
    //  intro: "first_village_under_attack",
    //  reminder: "",
    //  complete: "onboarding_first_village_saved",
    //  hintKillRemainingPiglins: "",
    //  hintOpenRemainingCages: "onboarding_first_village_cage",
    //},
    //cinematics: {
    //  cagesOpened: "hrd00_c02_villagers_freed",
    //  cagesNotOpened: "hrd00_c01a_piglins_defeated",
    //},
    //miscReminders: {
    //  firstVillageBuildSpawnersVO: "placed_spawner_prompt",
    //  timeToFirstVillageBuildSpawnersVO: 20,
    //  hasPlayedFirstVillageBuildSpawnersVO:
    //    "gv_hasPlayedFirstVillageBuildSpawnersVO",
    //},
    //hudItem: [
    //  "mobs",
    //  "badger:spawner_wood_golem",
    //  "badger:spawner_stone_golem",
    //],
    //delayedTime: 0,
  },

  repairFountain: {
    id: "repairFountain",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_repair_fountain",
    global: {
      stepComplete: "gv_onboarding_repair_fountain_completed",
      isThisStepCurrentlyActive: "gv_onboarding_repair_fountain_active",
      //playerStartedBuildingCarpenter: "gv_first_village_fountain_repaired",
    },
    //consts: {
    //timeToTriggerFirstVO: 3,
    //timeToTriggerNudgeAfterVO: 7,
    //timeToTriggerVOReminder: 80,
    //timeToTriggerHint: 40,
    //},
    message: {
      onboardingNudge: "onboarding_repair_fountain_nudge",
      //  hint: "hint_repair_fountain",
    },
    //vo: {
    //  intro: "onboarding_repair_fountain_prompt",
    //  reminder: "",
    //  complete: "",
    //},
    //cinematic: "hrd00_c07_fountain_restored",
    //miscReminders: {
    //firstVillageGatherResourcesVO: "village_post_destroyed",
    //timeToFirstVillageGatherResourcesVO: 25,
    //hasPlayedFirstVillageGatherResourcesVO:
    //  "gv_hasPlayedFirstVillageGatherResourcesVO",
    //},
    hudItem: ["utility", "badger:zoner_regen_structures"],
  },

  findSecondVillage: {
    id: "findSecondVillage",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_find_second_village",
    global: {
      stepComplete: "gv_onboarding_find_second_village_completed",
      isThisStepCurrentlyActive: "gv_onboarding_find_second_village_active",
    },
    consts: {
      //timeToTriggerFirstVO: 2,
      //timeToTriggerNudgeAfterVO: 3,
      //timeToTriggerVOReminder: 300,
      //timeToTriggerHint: 40,
      //numberOfPiglinsToSpawnAtVillage: 20,
      //timeToTriggerVillageIntroCine: 10,
      //timeToTriggerVOAfterIntroCine: 4,
      //numberOfPiglinsLeftForSuccess: 5,
    },
    message: {
      onboardingNudge: "onboarding_find_second_village_nudge",
      //hint: "",
    },
    vo: {
      //intro: "onboarding_leave_first_village",
      //reminder: "onboarding_find_piglins_6",
      //complete: "onboarding_find_piglins_7",
    },
    //villageIntroCine: "vil01_c02_village_intro_wof_fmv",
    hasIntroCinePlayed: "gv_has_played_second_village_intro",
  },

  freeSecondVillage: {
    id: "freeSecondVillage",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_free_second_village",
    global: {
      stepComplete: "gv_onboarding_free_second_village_completed",
      isThisStepCurrentlyActive: "gv_onboarding_free_second_village_active",
      //piglinsSpawned: "gv_onboarding_free_second_village_piglins_spawned",
      //piglinsKilled: "gv_onboarding_free_second_village_piglins_killed",
      allPiglinsDefeated: "gv_all_piglins_defeated",
      fountainDisabled: "gv_fountain_disabled",
      //playerHasStartedRepairingFountain:
      //  "gv_player_has_started_repairing_fountain",
      //numOfMobsSpawned: "gv_num_of_mobs_spawned_second_village",
    },
    consts: {
      //timeToTriggerFirstVO: 2,
      //timeToTriggerNudgeAfterVO: 1,
      //timeToTriggerVOReminder: 60,
      //timeToTriggerHint: 40,
      //timeToSendPiglinsToAttackPlayers: 45,
      //fountainDestroyedReminderDelay: 45,
      //numberOfMobsToDeEmphasizeHud: 10,
    },
    message: {
      onboardingNudge: "onboarding_free_second_village_nudge",
      repairFountain: "onboarding_free_second_village_heal_fountain",
      //hint: "",
    },
    vo: {
      //intro: "",
      //reminder: "onboarding_second_village_reminder",
      //complete: "onboarding_second_village_saved",
      //fountainDestroyedIntro:
      //  "onboarding_act1villageattackdestroyedfountainfailsafe_1",
      //fountainDestroyedReminder:
      //  "onboarding_act1villageattackdestroyedfountainfailsafe_2",
      //fountainDestroyedSuccess:
      //  "onboarding_act1villageattackdestroyedfountainfailsafe_3",
    },
    miscReminders: {
      //secondVillageBuildSpawnersVO: "placed_spawner_prompt",
      //timeToSecondVillageBuildSpawnersVO: 15,
      //hasPlayedSecondVillageBuildSpawnersVO:
      //  "gv_hasPlayedSecondVillageBuildSpawnersVO",
      //hasBuiltSpawners: "gv_hasBuiltSpawnersVO", //Need another one here in case the player is reminded in VG2 but doesn't place spawners so we need to remind them again at the barracks
    },
    //cinematic: "hrd00_c03a_village_defended",
    //hudItem: [
    //  "mobs",
    //  "badger:spawner_wood_golem",
    //  "badger:spawner_stone_golem",
    //],
  },

  villageChest: {
    id: "villageChest",
    //tutorialKey: "village_rewards",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "",
    //delayedTime: 2,
    global: {
      stepComplete: "gv_onboarding_village_chest_completed",
      isThisStepCurrentlyActive: "gv_onboarding_village_chest_active",
    },
    //consts: {
    //  timeToTriggerFirstVO: 2,
    //  timeToTriggerNudgeAfterVO: 4,
    //  timeToTriggerVOReminder: 60,
    //  timeToTriggerHint: 40,
    //  timeToTriggerReturnToWofVO: 2,
    //  timeToTriggerNudgeAfterWellOfFateVO: 14,
    //  timeToTriggerOpenSongBookReminderVO: 31,
    //  timeToEnableInteraction: 7,
    //},
    message: {
      onboardingNudge: "onboarding_open_village_chest_nudge",
      //  hint: "",
    },
    //vo: {
    //  intro: "",
    //  introPlaceholder: "",
    //  reminder: "onboarding_village_chest_reminder",
    //  complete: "onboarding_act1_chest",
    //},
    //stingers: {
    // smallWin: "BAE_mus_stinger_campaign_general_pos_small",
    //},
    //cinematic: "hrd00_c08_chest",
    //villageChestTag: "village_treasure_chest_interact",
  },

  buildDefensesInSecondVillage: {
    id: "buildDefensesInSecondVillage",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource:
    //  "unlock_onboarding_build_defenses_in_second_village",
    global: {
      stepComplete: "gv_onboarding_build_defenses_in_second_village_completed",
      isThisStepCurrentlyActive:
        "gv_onboarding_build_defenses_in_second_village_active",
      //wallsBuilt: "gv_defenses_built_in_second_village_walls",
      //towersBuilt: "gv_defenses_built_in_second_village_towers",
      //gatesBuilt: "gv_defenses_built_in_second_village_gates",
      //minimalDefensesBuilt: "gv_minimal_defenses_build",
      //fountainRepaired: "gv_second_village_fountain_repaired",
    },
    consts: {
      //timeToTriggerFirstVO: 2,
      //timeToTriggerNudgeAfterVO: 10,
      //timeToTriggerVOReminder: 60,
      //timeToTriggerHint: 40,
      //amountOfGatesNecessary: 1,
      //amountOfWallsNecessary: 40,
      //timeToStartFirstSkirmish: 120,
      //thresholdsToPreliminaryVO: [0.15, 0.8],
      //completionVOdelay: 4,
    },
    message: {
      onboardingNudge: "onboarding_build_defenses_in_second_village_nudge",
      //hint: "",
    },
    vo: {
      //intro: "onboarding_build_defenses_prompt",
      //reminder: "",
      //complete: "onboarding_act1villageattackincomingtimer_3",
      //reinforcement: "onboarding_build_defenses_reinforcement",
      //preliminaryVO: [
      //  "onboarding_act1villageattackincoming_2",
      //  "onboarding_act1villageattackincoming_5",
      //],
      //builtTower: "act_1_build_defenses_success",
    },
    //cinematic: "hrd00_c03_piglins_arrive",
    hudItem: ["utility", "badger:tower_arrow"],
  },

  firstSkirmish: {
    id: "firstSkirmish",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_first_skirmish",
    //villageTag: "first_skirmish_village",
    //village: {
    //  piglinFactionName: PIGLIN_FACTION_NAME.dbb,
    //  villageArchetype: "badger:piglin_dbb",
    //  baseSize: BASE_SIZE_ACT1_FIRST_SKIRMISH,
    //},
    global: {
      stepComplete: "gv_onboarding_first_skirmish_completed" as string,
      isThisStepCurrentlyActive:
        "gv_onboarding_first_skirmish_active" as string,
      //  hasUpdateMapControllers:
      //    "gv_has_updated_mar_controllers_first_skirmish" as string,
      //  barracksBuilt: "gv_first_skirmish_barracks_built" as string,
      //  barracksKilled: "gv_first_skirmish_barracks_killed" as string,
      nudgeTracker: "gv_first_skirmish_nudge_tracker" as string,
      firstSkirmishNudgesEnabled: "gv_first_skirmish_nudges_enabled" as string,
      //  startedWhilePlayerWasAway: "gv_started_while_player_was_away" as string,
      //  voTrackers: {
      //    almostDone: "gv_first_skirmish_vo_tracker_almostDone" as string,
      //    leaveFirstTime: "gv_first_skirmish_vo_tracker_leaveFirstTime" as string,
      //    reminderToReturnToVillage:
      //      "gv_first_skirmish_vo_tracker_reminderToReturnToVillage" as string,
      //    autoComplete: "gv_first_skirmish_vo_tracker_autoComplete" as string,
      //    returnToOccupiedVillage:
      //      "gv_first_skirmish_vo_tracker_returnToOccupiedVillage" as string,
      //    playerDefeatsOccupyingPiglins:
      //      "gv_first_skirmish_vo_tracker_playerDefeatsOccupyingPiglins" as string,
      //    playerClearsOccupation:
      //      "gv_first_skirmish_vo_tracker_playerClearsOccupation" as string,
      //   playedCobblestoneVO:
      //      "gv_played_first_skirmish_cobblestone_vo" as string,
      //    playedPlankVO: "gv_played_first_skirmish_plank_vo" as string,
      //  },
      //  firstSkirmishSurgeVillageChest:
      //    "gv_first_skirmish_surge_village_chest" as string,
    },
    //consts: {
    //  timeToTriggerFirstVO: 1,
    //  timeToTriggerNudgeAfterVO: 4,
    //  timeToTriggerVOReminder: 300,
    //  timeToTriggerHint: 40,
    //  villageAttackDuration: 150,
    //  timeToReminderToReturnToVillage: 30,
    //  timeToFirstSkirmishVO: 3,
    //  thresholdsToPreliminaryVO: [0.1, 0.4],
    //},
    message: {
      onboardingNudge: "onboarding_first_skirmish_nudge",
      abandonedNudge: "onboarding_first_skirmish_abandoned_nudge",
      repairFountainNudge: "onboarding_first_skirmish_repair_nudge",
      hint: "",
    },
    vo: {
      //  intro: "",
      //  reminder: "onboarding_first_skirmish_reminder",
      //  complete: "onboarding_act1villageattacksuccess_1",
      //  villageAttackStart: "onboarding_act1villageattackusecompass_1",
      //  almostDone: "onboarding_act1_village_attack_almost_done",
      //  leaveFirstTime: "onboarding_act1_village_attack_player_leaves_first_time",
      //  reminderToReturnToVillage:
      //    "onboarding_act1_village_attack_remind_player_to_return_to_village",
      //  autoComplete:
      //   "onboarding_act1_village_attack_autocompletes_while_player_is_away",
      returnToOccupiedVillage:
        "onboarding_act1_village_attack_player_returns_to_occupied_village" as string,
      //  playerDefeatsOccupyingPiglins:
      //    "onboarding_act1_village_attack_player_defeats_occupation_piglins",
      //  playerClearsOccupation:
      //    "onboarding_act1_village_attack_player_clears_occupation" as string,
    },
    //cinematic: "hrd00_c04_barrack_destroyed",
    //occupationClearedCinematic: "hrd00_c07_fountain_restored",
    //miscReminders: {
    //  barracksBuildSpawnersVO: "onboarding_barracks_spawner_reminder",
    //  timeToBarracksVillageBuildSpawnersVO: 30,
    //  //Barracks check the second village build spawners so no need for a "has" value here
    //},
  },

  threePiglinCamps: {
    id: "threePiglinCamps",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_three_piglin_camps",
    global: {
      stepComplete: "gv_onboarding_three_piglin_camps_completed",
      isThisStepCurrentlyActive: "gv_onboarding_three_piglin_camps_active",
      //hasUpdateMapControllers: "gv_has_updated_mar_controllers_three_camps",
      campsDestroyed: "gv_piglin_camps_destroyed",
      //campDestroyedVOToPlay: "gv_piglin_camp_vo_to_play",
      //nextCampIsTheLast: "gv_next_camp_is_the_last",
      //barracksTracker: "gv_three_camps_barracks_tracker",
      //goToCampsReminder: "gv_go_to_camps_reminder",
      //currentPlayersAtCamp: "gv_players_at_camp",
      //reminderStopper: "gv_three_camps_reminder_stopper",
    },
    bases: {
      //archetype: "badger:piglin_dbb_three_outposts",
      //factionName: PIGLIN_FACTION_NAME.dbb,
      //sizes: [BASE_SIZE_ACT_1_B, BASE_SIZE_ACT_1_C], //BASE_SIZE_ACT_1_A
    },
    consts: {
      //timeToTriggerFirstVO: 20,
      //timeToTriggerNudgeAfterVO: 8,
      //timeToTriggerVOReminder: 300,
      //timeToTriggerHint: 40,
      //postDestroyCampVODelay: 1,
      //timeToPlayPeepCinematic: 16,
      timeGoToCampsReminder: 5 * 60,
    },
    message: {
      onboardingNudge: "onboarding_three_piglin_camps_nudge_2_bannerview",
      onboardingNudges: [
        "onboarding_three_piglin_camps_nudge_2_bannerview",
        "onboarding_three_piglin_camps_nudge_1_bannerview",
      ],
      onboardingNudgesWithoutBannerview: [
        "onboarding_three_piglin_camps_nudge_2",
        "onboarding_three_piglin_camps_nudge_1",
      ],
      //hint: "",
    },
    vo: {
      //intro: "onboarding_piglin_camps_prompt",
      //reminder: "onboarding_piglin_camps_reminder",
      //firstCampDestroyed: "onboarding_piglin_camp_destroyed_1",
      //secondCampDestroyed: "onboarding_piglin_camp_destroyed_2",
      //netherSpreaderCampDestroyedReaction: "onboarding_piglin_camp_destroyed_4",
      //complete: "onboarding_piglin_camp_destroyed_3",
      //goToCampsReminder1: "piglin_outpost_reminder_1",
      //goToCampsReminder2: "piglin_outpost_reminder_2",
    },
    timers: {
      goToCampsReminderTimer: "go_to_camps_reminder_timer",
    },
    cinematic: {
      //firstPeepCine: "mst03_c03a_creeper_fmv",
      //creeperCoPeepCine: "mst03_c03b_creeper_and_co_fmv",
      //cinematic1: "hrd00_c04_barrack_destroyed",
      //cinematic2: "hrd00_c06_camp_destroyed",
    },
    //hudItem: ["mobs", "badger:spawner_stone_golem"],
  },

  endPortalUpgrade: {
    id: "wofUpgrade",
    //tutorialKey: "",
    //tutorialHintUnlock: "",
    //tutorialResource: "unlock_onboarding_welloffate_complete",
    //prismarineToTriggerTutorialNudge: 25,
    //atWellOfFateTutorialHintUnlock: "unlock_onboarding_welloffate_tut",
    //onboardingCompleteResource: "unlock_onboarding_wof_upgrade",
    //neededResourceToAllowUpgrade: "unlock_iron_tech",
    //cinematic: "gol06_c00_cavalry_intro_fmv",
    //upgradeStructureTag: "unlock_gather_uncommon",
    global: {
      stepComplete: "gv_onboarding_wof_upgrade_completed",
      isThisStepCurrentlyActive: "gv_onboarding_wof_upgrade_active",
      hasPlayerOpenedSongBook: "gv_onboarding_wof_player_opened_songbook",
      //hasPlayedSongBookReminderVO:
      //  "gv_onboarding_has_played_song_book_reminder_vo",
      hasReturnedToEndPortal: "gv_has_returned_to_wof",
      //hasAwardedThePlayerWithFurtherUnlocks:
      //  "gv_has_awarded_player_with_further_unlocks",
      //hasPlayedNavigatedToUpgradePage:
      //  "gv_has_played_navigated_to_upgrade_page",
      hasPlacedUpgradeInHotbar: "gv_has_placed_upgrade_into_hotbar",
      //hasFastTraveledToWoF: "gv_has_fast_traveled_to_wof",
    },
    consts: {
      //timeToTriggerFirstVO: 2,
      //timeToTriggerNudgeAfterVO: 12,
      //timeToTriggerVOReminder: 60,
      //timeToTriggerHint: 40,
      //timeToTriggerReturnToWofVO: 2,
      //timeToTriggerNudgeAfterWellOfFateVO: 8,
      //timeToTriggerOpenSongBookReminderVO: 120,
    },
    message: {
      onboardingNudge: "onboarding_return_to_well_of_fate_nudge",
      atRuinedPortalNudge: "onboarding_at_well_of_fate_nudge",
      buildIronUpgradeNudge: "onboarding_build_iron_upgrade_nudge",
      //hint: "",
    },
    vo: {
      //intro: "onboarding_return_wof_1",
      //reminder: "onboarding_return_wof_2",
      //returnedToWoF: "onboarding_return_wof_4",
      //hasOpenedSongBook: "main_songbook",
      //navigatedToUpgradePage: "onboarding_songbook_tab",
      //builtUpgradeStructure: "onboarding_upgrade_mossy",
      //openSongbookReminder: "onboarding_songbook_nudge",
      //ironRecipeUnlocked: "onboarding_upgrade_mossy",
      //buildUpgradeStructureReminder: "onboarding_upgrade_1",
      //complete: "",
      //buildIronUpgrade: "onboarding_player_places_iron_improvement_in_hotbar",
    },
  },

  secondSkirmish: {
    id: "secondSkirmish",
    //tutorialKey: "fast_travel",
    //tutorialHintUnlock: "",
    //onboardingCompleteResource: "unlock_onboarding_second_skirmish",
    village: {
      //piglinFactionName: PIGLIN_FACTION_NAME.dbb,
      //villageArchetype: "badger:piglin_dbb_second_skirmish",
      //baseSize: BASE_SIZE_ACT1_NON_PORTAL_ATTACK_BASE,
      //placementSlot: "act1DBB",
    },
    global: {
      stepComplete: "gv_onboarding_second_skirmish_completed",
      isThisStepCurrentlyActive: "gv_onboarding_second_skirmish_active",
      //hasUpdateMapControllers: "gv_has_updated_mar_controllers_second_skirmish",
      //hasPlayedFirstWaveStinger:
      //  "gv_second_skirmish_has_played_first_wave_stinger",
      //numOfCorePiglinStructuresDestroyed:
      //  "gv_num_of_core_piglin_structures_destroyed",
      //barracksTracker: "gv_second_skirmish_barracks_tracker",
      hasUpdatedNudge: "gv_has_updated_nudge",
      //hasUpdatedTelemetry: "gv_has_updated_telemetry",
      //playerBuildingsResponseOnCooldown: "gv_react_to_player_building_cooldown",
      //hasPlayedNightfallFmv: "gv_has_played_night_fall_fmv",
    },
    consts: {
      //timeToTriggerFirstVO: 1,
      //timeToTriggerNudgeAfterVO: 4,
      //timeToTriggerVOReminder: 60,
      //timeToTriggerHint: 40,
      //timeToSecondSkirmish: 6,
      //timeToSecondSkirmishFastTravelReminder: 15,
      //timeToSecondSkirmishSecondNudge: 13,
      //responseCooldown: 20,
      //playerBuildingResponseCooldown: 20,
      celebration: {
        //data: "celebration",
        //duration: 0.8,
        //range: 100.0,
        //includeTags: ["mob"],
        //excludeTags: ["piglin"],
      },
    },
    message: {
      onboardingNudge: "onboarding_second_skirmish_nudge",
      secondOnboardingNudge: "onboarding_second_skirmish_arrived_nudge",
      //hint: "",
    },
    vo: {
      //intro: "",
      //reminder: "",
      //complete: "",
    },
    cinematic: "hrd00_c06_camp_destroyed",
  },

  destroyDBB: {
    id: "destroyDBB",
    tutorialKey: "",
    //tutorialHintUnlock: "",
    onboardingCompleteResource: "",
    global: {
      stepComplete: "gv_onboarding_destroy_dbb_completed",
      isThisStepCurrentlyActive: "gv_onboarding_destroy_dbb_active",
      hasApproachedDbb: "gv_has_approached_dbb",
      playNightfall: "gv_play_nightfall_fmv",
    },
    consts: {
      timeToTriggerNudgeAfterVO: 15,
      timeToTriggerNightFallFMV: 3,
    },
    message: {
      onboardingNudge: "onboarding_find_and_destroy_dbb",
      onboardingNudgeAfterOutpostNoApproach:
        "onboarding_destroy_dbb_after_outpost_built",
      onboardingNudgeApproachNoOutpost:
        "onboarding_destroy_dbb_no_outpost_built",
      onboardingNudgeApproachedBuiltOutpost:
        "onboarding_mobAlliance_lure_unlocked",
    },
  },

  respawn: {
    id: "respawn",
    //vo: {
    //  intro: "onboarding_respawn_firsttime",
    //},
    global: {
      hasPlayerRespawned: "gv_has_player_respawned",
      stepComplete: "gv_onboarding_respawn_completed",
      isThisStepCurrentlyActive: "gv_onboarding_respawn_active",
    },
    consts: {
      timeToIntroVo: 13,
    },
  },

  outpost: {
    id: "outpost",
    //tutorialKey: "outposts",
    //vo: {
    //  intro: "onboarding_outpost",
    //  respawn: "onboarding_respawn_reminder",
    //},
    global: {
      hasBuiltAnOutpost: "gv_has_built_an_outpost",
      outpostNudgeIsActive: "gv_outpost_nudge_is_active",
      stepComplete: "gv_onboarding_outpost_completed",
      isThisStepCurrentlyActive: "gv_onboarding_outpost_active",
    },
    consts: {
      outpostTag: "outpost",
      //timeToTellPlayerAboutGivenResources: 10,
      //timeToOutpostTutorial: 21,
    },
    message: {
      onboardingNudge: "onboarding_build_outpost_dbb",
      //  onboardingAfterRespawnNudge: "",
    },
    hudItem: ["utility", "badger:zoner_fort_outpost"],
  },
};
