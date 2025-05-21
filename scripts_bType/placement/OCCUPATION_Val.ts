/**
 * Registry of occupation configurations for faction interaction systems.
 * @readonly
 * @remarks
 * Contains partial implementation for cultural faction occupation parameters with reserved slots for mob alliances (creeper, skeleton, zombie).
 * Current valid entries:
 * - culture.villageSlot: Reference to cultural village placement slot
 * Commented sections indicate planned expansions for mob faction occupation systems including:
 * - villageArchetype references for procedural generation
 * - baseSize classifications for structure scaling
 * - piglinFactionName associations for allegiance tracking
 * - presentationActionDistance for UI trigger ranges
 * - startOccupationGlobal variables for state management
 * - vars container for population and progression counters
 * - tags for entity classification and trigger volumes
 * - VOs for audio cue references
 * - cinematics for FMV sequence integration
 * - message keys for UI notifications
 * - timers for escalation systems
 * - common properties containing audio identifiers, behavioral dictionaries, spawn parameters, and combat thresholds
 * Uses type casting (as Record) for compatibility with partial implementations.
 * Reserved for future expansion of mob alliance occupation mechanics.
 */
export const OCCUPATION_Val: Record<string, string | Record<string, string>> = {
  culture: {
    villageSlot: "culture_village_slot",
  } as Record<string, string>,
  // mobIds: ["creeper", "skeleton", "zombie"],
  // creeper: {
  //     villageArchetype: "badger:piglin_defend_small",
  //     baseSize: VILLAGE_SIZE.SMALL,
  //     piglinFactionName: PIGLIN_FactionNames.unbreakables,
  //     presentationActionDistance: 125,
  //     baseSlot: "initialCreeperPiglinBaseSlot",
  //     startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_CREEPER],
  //     vars: {
  //         playerPresent: "player_present_creeper",
  //         firstCageOpened: "gv_creeper_piglin_cage_opened_first_time",
  //         occupyingPiglinCount: "piglins_remaining_creeper",
  //         occupyingPiglinCountInitialized: "piglins_init_creeper",
  //         counterCompCount: "gv_creeper_comps_spawned"
  //     },
  //     tags: {
  //         objectivePiglinsTag: "objective_piglins_creeper",
  //         baseVicinityTvTag: "base_vicinity_tv_creeper",
  //         piglinSpawnTvTag: "piglin_spawn_tv_creeper"
  //     },
  //     VOs: {
  //         intro: "mob_creeper_first",
  //         joinTheFight: "mob_post_join_fight_1",
  //         attackedPortalVOs: "mob_enter_homestead_2",
  //         firstCageOpenedBase: "mob_cage_opened_base_1",
  //         mobAlliancePiglinAttack: "moballiance_creeper_piglinattack",
  //         mobAllianceFoA: "moballiance_creeper_outro",
  //         firstCageOpenedMobAlliance: "mob_creeper_first_cage"
  //     },
  //     behaviours: {
  //         default: MOB_BEHAVIOUR_DICTIONARY.creeper.default,
  //         caged: MOB_BEHAVIOUR_DICTIONARY.creeper.caged,
  //         // Act 1 makes the mob look scared
  //         act1: MOB_BEHAVIOUR_DICTIONARY.creeper.act1
  //     },
  //     cinematics: {
  //         piglinOccupation: "mob01_c03_creeper_piglin_attack_fmv",
  //         piglinOccupationNight: "mob01_c03_creeper_piglin_attack_night_fmv",
  //         mobJoinTheFight: "mob01_c03a_creeper_join_fight",
  //         flameOfAllegiance: "mob01_c05_creeper_foa_fmv",
  //         flameOfAllegianceNight: "mob01_c05_creeper_foa_night_fmv"
  //     },
  //     message: {
  //         mobJoinTheFight: "mob_join_fight_creeper"
  //     },
  //     timers: {
  //         portalEscalationTimer: "creeper_portal_escalation_timer"
  //     }
  // },
  // skeleton: {
  //     villageArchetype: "badger:piglin_attack_small",
  //     baseSize: BASE_SIZE_PIGLIN_SKELETON,
  //     piglinFactionName: FACTION_NAME_ATTACK,
  //     presentationActionDistance: 165,
  //     baseSlot: "initialSkeletonPiglinBaseSlot",
  //     startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_SKELETON],
  //     vars: {
  //         playerPresent: "player_present_skeleton",
  //         firstCageOpened: "gv_skeleton_piglin_cage_opened_first_time",
  //         occupyingPiglinCount: "piglins_remaining_skeleton",
  //         occupyingPiglinCountInitialized: "piglins_init_skeleton",
  //         counterCompCount: "gv_skeleton_comps_spawned"
  //     },
  //     tags: {
  //         objectivePiglinsTag: "objective_piglins_skeleton",
  //         baseVicinityTvTag: "base_vicinity_tv_skeleton",
  //         piglinSpawnTvTag: "piglin_spawn_tv_skeleton"
  //     },
  //     VOs: {
  //         intro: "mob_skeleton_first",
  //         joinTheFight: "mob_post_join_fight_2",
  //         attackedPortalVOs: "mob_enter_homestead_1",
  //         firstCageOpenedBase: "mob_cage_opened_base_2",
  //         mobAlliancePiglinAttack: "moballiance_skeleton_piglinattack",
  //         mobAllianceFoA: "moballiance_skeleton_outro",
  //         firstCageOpenedMobAlliance: "mob_skeleton_first_cage"
  //     },
  //     behaviours: {
  //         default: MOB_BEHAVIOUR_DICTIONARY.skeleton.default,
  //         caged: MOB_BEHAVIOUR_DICTIONARY.skeleton.caged,
  //         // Act 1 makes the mob look scared
  //         act1: MOB_BEHAVIOUR_DICTIONARY.skeleton.act1
  //     },
  //     cinematics: {
  //         piglinOccupation: "mob03_c03_skeleton_piglin_attack_fmv",
  //         piglinOccupationNight: "mob03_c03_skeleton_piglin_attack_night_fmv",
  //         mobJoinTheFight: "mob03_c03a_skeleton_join_fight",
  //         flameOfAllegiance: "mob03_c05_skeleton_foa_fmv",
  //         flameOfAllegianceNight: "mob03_c05_skeleton_foa_night_fmv"
  //     },
  //     message: {
  //         mobJoinTheFight: "mob_join_fight_skeleton"
  //     },
  //     timers: {
  //         portalEscalationTimer: "skeleton_portal_escalation_timer"
  //     }
  // },
  // zombie: {
  //     villageArchetype: "badger:piglin_obstacle_small",
  //     baseSize: BASE_SIZE_PIGLIN_ZOMBIE,
  //     piglinFactionName: FACTION_NAME_OBSTACLE,
  //     presentationActionDistance: 135,
  //     baseSlot: "initialZombiePiglinBaseSlot",
  //     startOccupationGlobal: GV_START_MOB_ALLIANCE_OCCUPATION[MOB_ALLIANCE_NAME_ZOMBIE],
  //     vars: {
  //         playerPresent: "player_present_zombie",
  //         firstCageOpened: "gv_zombie_piglin_cage_opened_first_time",
  //         occupyingPiglinCount: "piglins_remaining_zombie",
  //         occupyingPiglinCountInitialized: "piglins_init_zombie",
  //         counterCompCount: "gv_zombie_comps_spawned"
  //     },
  //     tags: {
  //         objectivePiglinsTag: "objective_piglins_zombie",
  //         baseVicinityTvTag: "base_vicinity_tv_zombie",
  //         piglinSpawnTvTag: "piglin_spawn_tv_zombie"
  //     },
  //     VOs: {
  //         // intro: "mob_zombie_first",
  //         joinTheFight: "mob_post_join_fight_3",
  //         attackedPortalVOs: "mob_enter_homestead_3",
  //         firstCageOpenedBase: "mob_cage_opened_base_3",
  //         mobAlliancePiglinAttack: "moballiance_zombie_piglinattack",
  //         mobAllianceFoA: "moballiance_zombie_outro",
  //         firstCageOpenedMobAlliance: "mob_zombie_first_cage"
  //     },
  //     behaviours: {
  //         default: MOB_BEHAVIOUR_DICTIONARY.zombie.default,
  //         caged: MOB_BEHAVIOUR_DICTIONARY.zombie.caged,
  //         // Act 1 makes the mob look scared
  //         act1: MOB_BEHAVIOUR_DICTIONARY.zombie.act1
  //     },
  //     cinematics: {
  //         piglinOccupation: "mob02_c03_zombie_piglin_attack_fmv",
  //         piglinOccupationNight: "mob02_c03_zombie_piglin_attack_night_fmv",
  //         mobJoinTheFight: "mob02_c03a_zombie_join_fight",
  //         flameOfAllegiance: "mob02_c05_zombie_foa_fmv",
  //         flameOfAllegianceNight: "mob02_c05_zombie_foa_night_fmv"
  //     },
  //     message: {
  //         mobJoinTheFight: "mob_join_fight_zombie"
  //     },
  //     timers: {
  //         portalEscalationTimer: "zombie_portal_escalation_timer"
  //     }
  // },
  // common: {
  //     audioEntityAlliance: "badger:music_combat_act1_MA",
  //     audioEntityPiglin: "badger:music_combat_act1_MA_piglin",
  //     piglinAttackIntroVOPlayed: "gv_piglin_attack_intro_vo_played",
  //     piglinCageTag: "piglinBaseCages",
  //     portalHealthThreshold: 0.99,
  //     portalHalfHealthThreshold: 0.5,
  //     cinematicPlayerGatherRange: 300,
  //     initialOccupationMobDespawnRange: 500,
  //     guardedBehaviourDictionary: [
  //         { tag: "grunter", behaviour: "badger:behavior_piglin_grunter_guarded" },
  //         { tag: "runt", behaviour: "badger:behavior_piglin_runt_guarded" },
  //         { tag: "portalguard", behaviour: "badger:behavior_piglin_portal_guard_guarded" },
  //         { tag: "grenadier", behaviour: "badger:behavior_piglin_grenadier_guarded" },
  //         { tag: "bruiser", behaviour: "badger:behavior_piglin_bruiser_guarded" },
  //         { tag: "pigmadilo", behaviour: "badger:behavior_piglin_pigmadilo_guarded" },
  //         { tag: "piggo_lava_launcher", behaviour: "badger:behavior_piglin_piggo_lava_launcher_guarded" },
  //         { tag: "warboar", behaviour: "badger:behavior_piglin_piggo_warboar_guarded" }
  //     ],
  //     dummyPiglinsToSpawn: [
  //         { id: "badger:piglin_runt", count: 35, minRadius: 60, maxRadius: 80 },
  //         { id: "badger:piglin_grunter", count: 35, minRadius: 60, maxRadius: 80 }
  //     ],
  //     guardingPiglinTag: "guarding_piglin",
  //     attackingVillageIdKey: "attacking_village_id",
  //     escalationLevelVillageIdKey: "escalation_level",
  //     destroyPlayerStructureDistance: 100,
  //     occupyingPiglinClearPercent: 90, // Percent of piglins needed to kill before they join the fight.
  //     piglinObjectiveVicinityPadding: 450,
  //     piglinSpawningVicinityPadding: 650,
  //     beforeOccupationSpawnDummyPiglinsVicinityPadding: 600
  // }
};
