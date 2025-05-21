import { ALLIANCE } from "./consts/ALLIANCE.ts";
import { TEAM } from "./consts/TEAM.ts";
import { COUNTER_DaysSince } from "./counters/COUNTER_DaysSince.ts";
import { COUNTER_DaysSinceAnyFactionEstablished } from "./counters/COUNTER_DaysSinceAnyFactionEstablished.ts";
import {
  ALL_INVASION_ACTIONS,
  COUNTER_InvasionActionDaysPassed,
} from "./counters/COUNTER_InvasionActionDaysPassed.ts";
import { COUNTER_InvasionFlushRecaps } from "./counters/COUNTER_InvasionFlushRecaps.ts";
import { COUNTER_TelemetryInvasionBreakDaysPassed } from "./counters/COUNTER_TelemetryInvasionBreakDaysPassed.ts";
import {
  GLOBAL_TRACKER,
  TRIGGER_TIME_DAWN,
} from "./counters/CountersTriggersConst.ts";
import { END_FactionNames, PIGLIN_FactionNames } from "./FACTION_NAMES.ts";
import { FACTION_Establishment } from "./invasion/FACTION_Establishment.ts";
import { INVASION_Deactivate } from "./invasion/INVASION_Deactivate.ts";
import { MAP_CampaignAct } from "./map/MAP_CampaignAct.ts";
import { MAP_Key } from "./map/MAP_Key.ts";
import { MAP_TeamOutlinesEnabled } from "./map/MAP_TeamOutlinesEnabled.ts";
import { OUTPUT_ProgressCampaign } from "./output/OUTPUT_ProgressCampaign.ts";
import { MOUNTS_SetWorldSpawnerMapKeyValue } from "./poi/MOUNTS_SetWorldSpawnerMapKeyValue.ts";
import { MOUNTS_SetWorldSpawnerState } from "./poi/MOUNTS_SetWorldSpawnerState.ts";
import { QUERY_GetEntitiesWithTagAndVillage } from "./queries/QUERY_GetEntitiesWithTagAndVillage.ts";
import { SKY_STATE_SunMoon } from "./sky/SKY_STATE_SunMoon.ts";
import { SNAPSHOT_EntryStarted } from "./snapshots/SNAPSHOT_EntryStarted.ts";
import { TAGS_PLAYER } from "./tags/TAGS.ts";
import { TELEMETRY_Invasion } from "./telemetry/TELEMETRY_Invasion.ts";
import { TELEPORT_AllPlayersToEndPortal } from "./teleport/TELEPORT_AllPlayersToEndPortal.ts";
import { FORESIGHT } from "./utility/Foresight.ts";
import { LF_BuildingCompleteForTag } from "./utility/listeners/players_ready/LF_BuildingCompleteForTag.ts";
import { LF_PlayerFastTraveled } from "./utility/listeners/players_ready/LF_PlayerFastTraveled.ts";
import { LF_VillageGeneratedForFaction } from "./utility/listeners/players_ready/LF_VillageGeneratedForFaction.ts";
import { SPAWN_TriggerVolume } from "./village/SPAWN_TriggerVolume.ts";

/**
 * Global variable namespace containing campaign progression state.
 * Tracks current act status, completion flags, and other persistent
 * campaign state information across game sessions.
 * @namespace GV
 */
export const GV = {
  /**
   * Namespace for game-wide campaign variables.
   * @namespace GV.GAME
   */
  GAME: {
    /**
     * Current active campaign act (1, 2, 3, etc.).
     * Used for progression tracking and content unlocking.
     * type {string}
     * @example
     * // Get current act:
     * const currentAct = QUERY_GetGlobalVariable(GV.GAME.ACT_CURRENT);
     */
    ACT_CURRENT: "gv_campaign_act_current",

    /**
     * Namespace for act start status flags.
     * @namespace GV.GAME.ACT_STARTED
     */
    ACT_STARTED: {
      /**
       * Flag indicating Act 1 has been initiated.
       * Set during campaign initialization after intro cinematic.
       * type {string}
       */
      ACT1: "gv_campaign_act_1_started",
    },

    /**
     * Namespace for act completion status flags.
     * @namespace GV.GAME.ACT_FINISHED
     */
    ACT_FINISHED: {
      /**
       * Flag indicating Act 1 has been completed.
       * Set when final objectives of Act 1 are achieved.
       * type {string}
       */
      ACT1: "gv_campaign_act_1_finished",
    },
  },
};

/**
 * Namespace for event snippet identifiers.
 * These strings serve as unique keys for game event listeners
 * that handle various campaign progression and system events.
 * @namespace SNIPPET
 */
export const SNIPPET = {
  /**
   * Triggered when players complete initial teleportation to the end portal.
   * Used for post-teleportation setup like world slicing and faction initialization.
   * type {string}
   */
  INIT_TELEPORT: "players_teleported_to_end_portal",

  /**
   * Primary campaign start trigger when all players are ready.
   * Fires after intro cinematic and initial setup, initiating core campaign systems.
   * type {string}
   */
  START_CAMPAIGN: "players_ready_start_campaign",

  /**
   * Triggered when the opening cinematic finishes playing.
   * Used to sequence post-cinematic events like VO playback and tutorial prompts.
   * type {string}
   */
  INTRO_CINE_FINISHED: "cinematic_finished_campaign_opening",

  /**
   * Timer event following the intro cinematic for delayed VO playback.
   * Allows time for cinematic cleanup before triggering voice-over sequences.
   * type {string}
   */
  AFTER_INTRO_CINE_VO: "wait_after_intro_for_vo",

  /**
   * Local timer for portal generation during intro sequence.
   * Ensures proper timing for end portal activation visuals/effects.
   * type {string}
   */
  WAIT_FOR_END_PORTAL_FOR_INTRO: "local_timer_wait_for_portal_for_intro",

  /**
   * Triggered when the first undead village is destroyed.
   * Used to advance Act 1 progression and trigger story events.
   * type {string}
   */
  FIRST_UNDEAD_VILLAGE_DESTROYED: "act_1_undead_village_destroyed",

  /**
   * Event when players arrive at the end portal during intro.
   * Used to synchronize cinematic playback with player positioning.
   * type {string}
   */
  PLAYERS_AT_PORTAL_FOR_INTRO: "players_at_end_portal_for_intro",

  /**
   * Trigger for end portal village generation.
   * Fires when the ruined end portal village needs to be created.
   * type {string}
   */
  GENERATE_END_PORTAL: "village_generate_end_portal",

  /**
   * Event when the ruined end portal building is completed.
   * Used to trigger portal activation effects and next stage progression.
   * type {string}
   */
  END_PORTAL_BUILDING_COMPLETE: "end_portal_building_complete",
};

/**
 * Identifier tag for ruined end portal structures.
 * Used for building recognition in world interaction systems.
 * @constant
 * type {string}
 * @example
 * // Listen for portal completion:
 * LISTENFOR_BuildingComplete({
 *   snippet: "portal_activated",
 *   includeTags: [TAG_RUINED_END_PORTAL],
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT
 * });
 */
export const TAG_RUINED_END_PORTAL: string = "ruinedEndPortal";

/**
 *
 */
export const CAMPAIGN_Start = (): void => {
  FORESIGHT.info("### CAMPAIGN_Start ###");

  // Enable team outlines
  MAP_TeamOutlinesEnabled(true);
  LF_BuildingCompleteForTag(
    SNIPPET.END_PORTAL_BUILDING_COMPLETE,
    TAG_RUINED_END_PORTAL,
  );
  LF_VillageGeneratedForFaction(
    SNIPPET.GENERATE_END_PORTAL,
    END_FactionNames.ruinedPortal,
  );
  LF_VillageGeneratedForFaction(
    SNIPPET.WAIT_FOR_END_PORTAL_FOR_INTRO,
    END_FactionNames.ruinedPortal,
  );

  /* == SET ACT GVS == */
  OUTPUT_SetGlobalVariable(GV.GAME.ACT_CURRENT, 1);
  OUTPUT_SetGlobalVariable(GV.GAME.ACT_STARTED.ACT1, 1);

  /* == SET MAP VALUES FOR ACT 1 == */
  OUTPUT_ServerMapSetKeyValue(MAP_Key.CAMPAIGN_ACT, MAP_CampaignAct.ACT1);

  /* == SET INITIAL SKY / TIME STATES == */
  /* SKY STATE */
  OUTPUT_SetSkyState(SKY_STATE_SunMoon);

  /* ENSURE TIME CYCLE IS ENABLED */
  OUTPUT_LockDayNightCycle(false);

  // For now, no invasion system.
  INVASION_Deactivate();

  /* == SET UP POI STATES == */
  /* MOUNTS */
  MOUNTS_SetWorldSpawnerMapKeyValue(true);
  MOUNTS_SetWorldSpawnerState(true);

  // Set listener for init tp
  LF_PlayerFastTraveled(SNIPPET.INIT_TELEPORT);

  // Teleport all players to the end portal immediately after campaign start
  TELEPORT_AllPlayersToEndPortal();
};

/**
 * Tag identifier for player respawn points.
 * Used to mark valid respawn locations in the world.
 * @constant
 * type {string}
 * @example
 * // Mark village center as respawn point
 * TAG_Add(respawnPlatform, TAG_RESPAWN_POINT);
 */
export const TAG_RESPAWN_POINT = "respawn_point";

/**
 * Archetype identifier for end portal triggers.
 * Used for detecting player entry into portal areas.
 * @constant
 * type {EntityArchetype}
 * @example
 * // Create portal trigger zone
 * const triggerZone = SPAWN_Entity(TV_ARCHETYPE_END_PORTAL_MAIN);
 */
export const TV_ARCHETYPE_END_PORTAL_MAIN =
  "badger:spatial_trigger_ruined_end_portal_player_enter";
SNIPPET_BuildingComplete(
  SNIPPET.END_PORTAL_BUILDING_COMPLETE,
  (entity: SingleEntity) => {
    const villageId = QUERY_GetVillageIDFromEntity(entity);
    // TODO: Really want to clean up how SPAWN_TriggerVolume is used
    const ruinedEndPortalTV = SPAWN_TriggerVolume(
      entity,
      entity,
      TV_ARCHETYPE_END_PORTAL_MAIN,
      TEAM.wild,
      villageId,
      true,
      [TAGS_PLAYER.player],
      [],
      ALLIANCE.friendly,
    );
    const respawnPointEntity = QUERY_GetEntitiesWithTagAndVillage(
      TAG_RESPAWN_POINT,
      villageId,
    );
    OUTPUT_FlagEntityAsVisited(respawnPointEntity);

    LISTENFOR_SpatialPartitionEntered({
      snippet: "spe_end_portal_player_nearby_entered",
      ownerVillageId: villageId,
      triggerEntity: ruinedEndPortalTV as SingleEntity,
    });
  },
);

/**
 * Increments invasion action tracking counters.
 * Updates both faction-specific and global trackers.
 * @example
 * // Track daily invasion activity
 * INVASION_IncrementAllActionTracking();
 */
const INVASION_IncrementAllActionTracking = (): void => {
  for (const action of ALL_INVASION_ACTIONS) {
    for (const horde of PIGLIN_FactionNames.hordes) {
      COUNTER_InvasionActionDaysPassed.Increment(horde, action);
    }
    COUNTER_InvasionActionDaysPassed.Increment(GLOBAL_TRACKER, action);
  }
};

// This snippet ultimately fires at the "system" dawn - supported by simulation
SNIPPET_InvasionIntentionsDrawn("iid_draw_horde_deck", (_payload) => {
  const days = COUNTER_DaysSince.Increment();

  OUTPUT_DebugLogInvasion(``);
  OUTPUT_DebugLogInvasion(``);
  OUTPUT_DebugLogInvasion(
    `-----------------INVASION DAY ${days}-----------------`,
  );
  OUTPUT_DebugLogInvasion(`\t-----------------DAWN-----------------`);

  // Need to clear the map from all intentions, because new intentions will be planned
  OUTPUT_MapRemoveKey(QUERY_GetAllAliveVillages(), MAP_Key.INVASION_INTENTION);

  // Increment "days passed" counter for all actions
  INVASION_IncrementAllActionTracking();

  // Increment "days break" counter
  if (QUERY_GetGlobalVariable(TELEMETRY_Invasion.GV_INVASION_BREAK_ACTIVE)) {
    COUNTER_TelemetryInvasionBreakDaysPassed.Increment();
  }

  // Set the flag for recap flushing to occur at night
  COUNTER_InvasionFlushRecaps.Increment();

  // check if we need plan an attack horde boss attack this dawn (only one will be planned)
  //_CheckForAttackHordeBossVillageAttack();

  // Called here to tie into the invasion flow and be a part of simulation
  // Ensures that all hordes enter before next invasion cycle
  // TODO: cleanup the interaction between invasion and staggered horde entry
  StaggeredEntryNextDawn();

  //if (!IsAnyHordeArrived() || GetAliveFactions().length === 0) {
  // Note: this is important here as it will unblock the simulation flow forward. No cards need to be drawn so we just "green-lit" the invasion right away.
  // TODO: this is hacky and has to be properly changed for the new staggered entry + invasion flow
  //OUTPUT_ExecuteInvasionActionsReady();
  //return;
  //}

  //PlayAudioUIDawnInvasionStage();

  //if (!InvasionActive()) {
  //  OUTPUT_ExecuteInvasionActionsReady();
  //  return;
  //}

  //DrawInvasionHordeCards();
});

/**
 *
 */
export const StaggeredEntryNextDawn = (): void => {
  // Get the total days passed
  const totalDays: number = COUNTER_DaysSince.Get();

  if (totalDays === 0) {
    OUTPUT_DebugLogInvasion(
      `[ENTRY] Taking snapshot "SNAPSHOT_EntryStarted" in StaggeredEntryNextDawn...`,
    );
    FORESIGHT.info(`[ENTRY]`);
    const snapshot = SNAPSHOT_EntryStarted() as SnapshotGeneric;
    snapshot.Take();
  }

  OUTPUT_ProgressCampaign(TRIGGER_TIME_DAWN);
  const anyFactionEstablished: boolean =
    FACTION_Establishment.GetFactions(true).length > 0;
  if (anyFactionEstablished) {
    COUNTER_DaysSinceAnyFactionEstablished.Increment();
  }
  //for (const faction of HORDE_ANY) {
  //  if (!UnifiedFactionEntry.IsEntered(faction)) continue;
  //  if (
  //    InvasionHordeFirstAttackStarted_Get(faction) > 0 ||
  //    InvasionHordeFirstAttackDelayDays_Get(faction) >=
  //      HordeBasesSetup[faction].firstAttackDelayDays
  //  ) {
  //    InvasionHordeFirstAttackStarted_Increment(faction);
  //    SetupForcedDAIForFaction(FACTION_ACTION_ATTACK_VILLAGE_V2, faction);
  //  }
  //  InvasionHordeFirstAttackDelayDays_Increment(faction);
  //  const order: number = UnifiedFactionEntry.GetOrderByName(faction);
  //  const entryPhase: number = StaggeredEntryHordePhaseCounter_Get(order);
  //  OUTPUT_DebugLogInvasion(
  //    `ENTRY PHASE IS ${entryPhase} and ORDER IS ${order}`,
  //  );
  //  if (entryPhase === ENTRY_PHASE_FIRSTBASE) {
  //    SetupForcedDAIForFaction(FACTION_ACTION_ESTABLISH, faction);
  //  }
  //}
  //const daysPassedSinceFirstEst: number = DaysSinceAnyFactionEstablished_Get();
  //if (GetGameRuleVariable(GAME_RULE_NAMES.invasionEnabled)) {
  //  if (
  //    daysPassedSinceFirstEst ===
  //      HordeEntryConfig.invasionStartAfterFirstEstablished &&
  //    QUERY_GetGlobalVariable(GV_STARTED_ACT_3_A) === 0
  //  ) {
  //    _StartInvasionForTheFirstTime();
  //  }
  //}
};
