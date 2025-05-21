/**
 * Mount configuration registry with availability states and reserved expansion fields.
 * @readonly
 * @remarks
 * Contains individual mount entries with 'id' identifiers and 'enabled' flags controlling spawn availability.
 * Commented properties represent placeholders for future systems including:
 * - Trigger volume tags for interaction detection
 * - Faction association identifiers
 * - Iconography references for UI systems
 * - Buildable structure card identifiers
 * - Cinematic sequences for introduction scenarios
 * - Voice-over cues for mount interactions
 * - Unlock resource requirements
 * - Journal integration points
 * - Messaging systems for mount-related announcements
 * - Global variable mappings for state tracking
 * - Behavioral component references
 * - Telemetry funnel configurations
 * - Entity identifier mappings for gameplay systems
 */
export const MOUNTS_Val = {
  horse: {
    id: "horse",
    //triggerVolumeTag: "poi_mount_01_tv",
    //factionName: "faction.poi.mount.01",
    //icon: "badger:wmap_mount_purple_tiger",
    //buildableCenterCard: "poiMount01Center",
    //introCinematic: {
    //  day: "mnt02_c01_tiger_intro_fmv",
    //  night: "mnt02_c01_tiger_intro_night_fmv",
    //},
    //outroVO: "",
    //unlockResource: "unlock_quest_mount_01",
    //journalUnlock: JOURNAL_UNLOCKS.MOUNT_TIGER,
    //message: {
    //  introAnnounce: "mount1_intro",
    //  outroAnnounce: "mount1_outro",
    //},
    //global: {
    //mountUnlocked: "gv_mount_01_unlocked",
    //hasPlayerLuredTheMount: "gv_mount_01_lured",
    //mountLuredTelemetry: "gv_mount_01_lured_telemetry",
    //iconRevealed: "gv_mount_01_icon_revealed",
    //introCinePlayed: "gv_mount_01_intro_cine_played",
    //introVOPlayed: "gv_mount_01_intro_vo_played",
    //telemetryMountEncountered: "gv_mount_01_telemetry_mount_encountered",
    //},
    //tag: {
    //center: "poi_mount_01_tiger_home",
    //poiMount: "poi_mount_01",
    //},
    //behavior: {
    //default: "badger:animal_tiger",
    //lured: "badger:behavior_purple_tiger_lured",
    //nonInteractable: "badger:behavior_animal_tiger_unmountable",
    //fountain: "badger:behavior_animal_tiger_village",
    //},
    //telemetry: {
    //funnelName: "mount_01_purple_tiger_v2", //if design changes this name must change as well
    //telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount01Lure,
    //mountName: "mount_01_purple_tiger",
    //currentStepGV: "gv_mount_01_current_step",
    //},
    //mountIdentifier: "badger:mount_tiger",
    //animalIdentifier: "badger:animal_tiger",
    enabled: 1,
  },
  tiger: {
    id: "tiger",
    //triggerVolumeTag: "poi_mount_03_tv",
    //factionName: "faction.poi.mount.03",
    //icon: "badger:wmap_mount_giant_beetle",
    //buildableCenterCard: "poiMount03Center",
    //introCinematic: {
    //  day: "mnt04_c01_beetle_intro_fmv",
    //  night: "mnt04_c01_beetle_intro_night_fmv",
    //},
    //outroVO: "",
    //unlockResource: "unlock_quest_mount_03",
    //journalUnlock: JOURNAL_UNLOCKS.MOUNT_BEETLE,
    //message: {
    //introAnnounce: "mount3_intro",
    //outroAnnounce: "mount3_outro",
    //},
    //global: {
    //mountUnlocked: "gv_mount_03_unlocked",
    //hasPlayerLuredTheMount: "gv_mount_03_lured",
    //mountLuredTelemetry: "gv_mount_03_lured_telemetry",
    //iconRevealed: "gv_mount_03_icon_revealed",
    //introCinePlayed: "gv_mount_03_intro_cine_played",
    //introVOPlayed: "gv_mount_03_intro_vo_played",
    //telemetryMountEncountered: "gv_mount_03_telemetry_mount_encountered",
    //},
    //tag: {
    //center: "poi_mount_03_beetle_home",
    //poiMount: "poi_mount_03",
    //},
    //behavior: {
    //default: "badger:animal_beetle",
    //lured: "badger:behavior_giant_beetle_lured",
    //nonInteractable: "badger:behavior_animal_beetle_unmountable",
    //fountain: "badger:behavior_animal_beetle_village",
    //},
    //telemetry: {
    //funnelName: "mount_03_giant_beetle_v2", //if design changes this name must change as well
    //mountName: "mount_03_giant_beetle",
    //currentStepGV: "gv_mount_03_current_step",
    //telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount03Lure,
    //},
    //mountIdentifier: "badger:mount_beetle",
    //animalIdentifier: "badger:animal_beetle",
    enabled: 1,
  },
  beetle: {
    id: "beetle",
    //triggerVolumeTag: "poi_mount_04_tv",
    //factionName: "faction.poi.mount.04",
    //icon: "badger:wmap_mount_giant_bird",
    //buildableCenterCard: "poiMount04Center",
    //introCinematic: {
    //  day: "mnt05_c01_bird_intro_fmv",
    //  night: "mnt05_c01_bird_intro_night_fmv",
    //},
    //outroVO: "",
    //unlockResource: "unlock_quest_mount_04",
    //journalUnlock: JOURNAL_UNLOCKS.MOUNT_BIRD,
    //message: {
    //introAnnounce: "mount4_intro",
    //outroAnnounce: "mount4_outro",
    //},
    //global: {
    //mountUnlocked: "gv_mount_04_unlocked",
    //hasPlayerLuredTheMount: "gv_mount_04_lured",
    //mountLuredTelemetry: "gv_mount_04_lured_telemetry",
    //iconRevealed: "gv_mount_04_icon_revealed",
    //introCinePlayed: "gv_mount_04_intro_cine_played",
    //introVOPlayed: "gv_mount_04_intro_vo_played",
    //telemetryMountEncountered: "gv_mount_04_telemetry_mount_encountered",
    //},
    //tag: {
    //center: "poi_mount_04_bird_home",
    //poiMount: "poi_mount_04",
    //},
    //behavior: {
    //default: "badger:animal_bird",
    //lured: "badger:behavior_giant_bird_lured",
    //nonInteractable: "badger:behavior_animal_bird_unmountable",
    //fountain: "badger:behavior_animal_bird_village",
    //},
    //telemetry: {
    //funnelName: "mount_04_giant_bird_v2", //if design changes this name must change as well
    //mountName: "mount_04_giant_bird",
    //currentStepGV: "gv_mount_04_current_step",
    //telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount04Lure,
    //},
    //mountIdentifier: "badger:mount_bird",
    //animalIdentifier: "badger:animal_bird",
    enabled: 1,
  },
  bird: {
    id: "bird",
    //outroVO: "horse_remount",
    //global: {
    //mountUnlocked: "gv_mount_05_unlocked",
    //outroVOPlayed: "gv_mount_05_outro_vo_played",
    //},
    //tag: {
    //mount: "animal_horse",
    //poiMount: "poi_mount_05",
    //},
    //behavior: {
    //default: "badger:animal_horse",
    //fountain: "badger:behavior_animal_horse_village",
    //},
    //mountIdentifier: "badger:mount_horse",
    //animalIdentifier: "badger:animal_horse",
    enabled: 1,
  },
  frog: {
    id: "frog",
    //triggerVolumeTag: "poi_mount_06_tv",
    //factionName: "faction.poi.mount.06",
    //icon: "badger:wmap_mount_06",
    //buildableCenterCard: "poiMount06Center",
    //introCinematic: {
    //  day: "mnt03_c01_frog_intro_fmv",
    //  night: "mnt03_c01_frog_intro_night_fmv",
    //},
    //outroVO: "frog_outro_vo",
    //unlockResource: "unlock_quest_mount_06", //resource that unlocks the use of this mount
    //journalUnlock: JOURNAL_UNLOCKS.MOUNT_SIX, //Journal resource unlock, referenced in aaa_global_const
    //message: {
    //introAnnounce: "mount6_intro",
    //outroAnnounce: "mount6_outro",
    //},
    //global: {
    //mountUnlocked: "gv_mount_06_unlocked", //GV that enables mount spawners in the village to be active
    //hasPlayerLuredTheMount: "gv_mount_06_lured",
    //mountLuredTelemetry: "gv_mount_06_lured_telemetry",
    //iconRevealed: "gv_mount_06_icon_revealed",
    //introCinePlayed: "gv_mount_06_intro_cine_played",
    //introVOPlayed: "gv_mount_06_intro_vo_played",
    //telemetryMountEncountered: "gv_mount_06_telemetry_mount_encountered",
    //},
    //tag: {
    //center: "poi_mount_06_home", //tag of the buildable for the home
    //poiMount: "poi_mount_06", //The tag of the animal that has this - there are lots of references to unpack here
    //},
    //behavior: {
    //default: "badger:animal_06",
    //lured: "badger:behavior_animal_06_lured",
    //nonInteractable: "badger:behavior_animal_06_unmountable",
    //fountain: "badger:behavior_animal_06_village",
    //},
    //telemetry: {
    //funnelName: "mount_06", //if design changes this name must change as well
    //mountName: "mount_06",
    //currentStepGV: "gv_mount_06_current_step",
    //telemetryLureId: TELEMETRY_MOB_ALLIANCE_NAMES.mount06Lure,
    //},
    //mountIdentifier: "badger:mount_06",
    //animalIdentifier: "badger:animal_06",
    enabled: 1,
  },
};
