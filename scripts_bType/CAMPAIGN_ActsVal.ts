/**
 * Central registry for campaign act progression systems and narrative workflows.
 * @readonly
 * @remarks
 * Contains:
 * - snippets: Global variables tracking key narrative milestones (act1RuinedPortalVillagePlanned/act1UndeadVillageDestroyed)
 * - messages: System messages including unsupportedDebug for error handling
 * - cinematics: FMV sequence identifiers for campaign chapters (act1.opening)
 * - VO: Audio cues for post-invasion states and system transitions
 * - audio: Music stinger references for day/night cycle events
 * - delays: Timing parameters for campaign phase transitions
 * - failsafeAct1NISDistance: Proximity threshold for failsafe narrative triggers
 * - dbbTeleportDistance: Range parameter for boss base interactions
 * - act3WofNudges: Configuration for Well of Fate reminder systems
 * - announcements: Event announcement identifiers for campaign progression
 * - debugVariables: Diagnostic tracking parameters
 * - riseOfVindicatorsTracker: Global counter for vindicator escalation events
 * - dbb: Placement configuration for DBB boss bases
 * - invasionSystemFmvConfig: Cinematic playback parameters with retry logic
 * - debug: Toggle for development features
 */
export const CAMPAIGN_ActsVal = {
  snippets: {
    act1RuinedPortalVillagePlanned: "act_1_ruined_portal_village_planned",
    act1UndeadVillageDestroyed: "act_1_undead_village_destroyed",
    //act1bBaseBuilt: "act_1b_piglin_base_finished_building",
    //act2BaseDestroyed: "act_2_piglin_base_destroyed",
    //act3ABaseBuilt: "act_3a_piglin_base_built",
    //act3ABaseDestroyed: "act_3a_piglin_base_destroyed",
    //act3BBaseDestroyed: "act_3b_piglin_base_destroyed",
  } as Record<string, string>,
  messages: {
    unsupportedDebug: "campaign_unsupported_debug",
  },
  cinematics: {
    //c03ComingWar: "mst03_c03_the_coming_war_fmv",
    act1: { opening: "campaign_act1_opening" },
    //c03bCreeperCo: "mst03_c03b_creeper_and_co_fmv",
    //c04Nightfall: "mst04_c04_nightfall_fmv",
    //c04InvasionSystem: "vil01_c04_invasion_system_fmv",
    //c05HordesInvade: "mst05_c05_the_hordes_invade_fmv",
    //c05HordesInvadeAct1Skip: "mst05_c05_the_hordes_invade_alt_fmv",
    //c07FinalBossLeaves: "mst07_c07_the_final_boss_leaves_fmv",
    // c06WellLiberated: "mst06_c06b_victory", // triggered in base_response_piglin_wof.js
    // c08FinalBaseReveal: "mst08_c08_the_final_base",
    //c09RiseOfVindicators: "mst09_c09_rise_of_the_vindicators_fmv",
    //m20Chap3Trailer: "m20_chap3_trailer_vo",
    //epilogue: "mst10_c10_epilogue_fmv", // triggered by cinematic queue
    //villagersMotivated01: "mst05_c05b_villager_1",
    //villagersMotivated01Night: "mst05_c05b_villager_1_night",
    //villagersMotivated02: "mst05_c05b_villager_2",
    //villagersMotivated02Night: "mst05_c05b_villager_2_night",
  },
  VO: {
    postRiseOfVindicatorsVO: "main_post_vindicators",
    nightFallVO: "main_post_nightfall",
    preInvasionCineVO: "main_pre_invasion_cine",
    postInvasionCineVO: "main_post_invasion_cine",
  },
  audio: {
    a2MusicStingerDusk: "BAE_mus_stinger_dusk",
    a2MusicStingerDawn: "BAE_mus_stinger_dawn",
  },
  delays: {
    act2Delay: 13,
    c03aDelay: 13,
    c03bDelay: 13,
    act1ADelay: 8,
  },
  failsafeAct1NISDistance: 90,
  dbbTeleportDistance: 200,
  act3WofNudges: {
    nudeStartDelay: 60,
    timeBetweenNudges: 180,
    maxNudges: 6,
    nudgeCounterGlobalVariable: "gv_nudge_counter",
    timerName: "wofNudgeTimer",
    presentationEvents: [
      "main_return_wof_nudge_1",
      "main_return_wof_nudge_2",
      "main_return_wof_nudge_3",
    ],
  },
  announcements: {
    announceAct1AStart: "campaign_act1A_start",
    announceAct1BStart: "campaign_act1B_start",
    announceAct2Start: "campaign_act2_start",
    announceAct3AStart: "campaign_act3A_start",
    announceAct3BStart: "campaign_act3B_start",
    announceEpilogueStart: "campaign_epilogue_start",
    announceDamageNearestPigBase: "damage_nearest_piglin_base",
    announceDamageNearestPigBaseSuccess: "nearest_piglin_base_success",
    announceDamageNearestPigBaseFailure: "nearest_piglin_base_failed",
    announceDestroyNearestPigBase: "destroy_nearest_piglin_base",
    announceDestroyNearestPigBaseSuccess: "nearest_piglin_base_success",
    announceDestroyNearestPigBaseFailure: "nearest_piglin_base_failed",
    announceDestroyPigFaction: "destroy_piglin_faction",
    announceObliteratePigFaction: "obliterate_piglin_faction",
    announceDestroyPigFactionFailure: "destroy_piglin_faction_failed",
  },
  debugVariables: {
    destroyBossBaseOfType: "destroyBossBaseOfType",
  },
  riseOfVindicatorsTracker: "gv_rise_of_vindicators_tracker",
  riseOfVindicatorsFirstHordeTracker: "gv_rise_of_vindicators_horde_tracker",
  riseOfVindicatorsBasesDestroyedCheckPt1: 5,
  riseOfVindicatorsBasesDestroyedCheckPt2: 10,
  riseOfVindicatorsBasesRemainingCheckPt3: 2,
  dbb: {
    placementSlot: "act1DBB",
    archetype: "badger:piglin_dbb",
  },
  invasionSystemFmvConfig: {
    daysToPass: 5, //number of days to keep trying to play invasion cinematic before giving up
    playAtDusk: true, //will play at dawn if false, tied to the invasion cycle
    delayBeforeTriggeringTutorialForTheFirstTime: 8,
    playedOnce: "gv_invasion_cine_played",
  },
  debug: false,
};
