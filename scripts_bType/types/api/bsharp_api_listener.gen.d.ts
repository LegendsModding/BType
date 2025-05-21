/**
 * Base interface for event listener configurations.
 * Contains parameters for cross-system event routing and data transmission.
 */
declare interface ListenerParams {
  /**
   * Unique identifier for the listener snippet.
   * Must match registered SNIPPET_* callback functions.
   */
  snippet: SnippetName;

  /**
   * Associated village identifier or opt-out constant.
   */
  ownerVillageId: VillageID;

  /**
   * Optional string payload for event context.
   */
  payloadString?: string;

  /**
   * Optional integer payload for numerical data.
   */
  payloadInt?: number;

  /**
   * Optional floating-point payload for precise values.
   */
  payloadFloat?: number;

  /**
   * Optional entity references related to the event.
   */
  payloadEntities?: EntityGroup;
}

/**
 * Registers a listener for entity iteration events.
 * Connects FOREACH_ system outputs with SNIPPET_ForEachEntity callbacks.
 * @param {ForEachEntityParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Register village inspection listener
 * LISTENFOR_ForEachEntity({
 *   snippet: "inspect_village",
 *   ownerVillageId: 10,
 *   id: FOREACH_VillageStructures
 * });
 * @see {@link SNIPPET_ForEachEntity} for callback implementation
 */
declare function LISTENFOR_ForEachEntity(
  params: ForEachEntityParameters,
): NoReturn;

/**
 * Configuration for entity iteration listeners.
 * Extends base listener parameters with iteration identifiers.
 */
declare interface ForEachEntityParameters extends ListenerParams {
  /**
   * Identifier returned by FOREACH_ functions.
   * Must match iteration registration tokens.
   */
  id: number;
}

/**
 * Registers a listener for named timer threshold events.
 * Triggers callbacks when specified timers reach target values.
 * @param {TimerParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track fortress construction progress
 * LISTENFOR_Timer({
 *   snippet: "construction_phase",
 *   ownerVillageId: 15,
 *   timerName: "fortress_build_timer",
 *   threshold: 3600 // 1 hour
 * });
 * @see {@link OUTPUT_SetNamedTimer} for timer initialization
 */
declare function LISTENFOR_Timer(params: TimerParameters): NoReturn;

/**
 * Configuration for timer threshold listeners.
 * Contains timer identification and trigger parameters.
 */
declare interface TimerParameters extends ListenerParams {
  /**
   * Name of the tracked timer system.
   */
  timerName: string;

  /**
   * Activation threshold value in seconds.
   */
  threshold: number;
}

/**
 * Registers a listener for local timer expiration events.
 * Creates self-contained timers with fixed delay periods.
 * @param {LocalTimerParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Schedule periodic resource check
 * LISTENFOR_LocalTimer({
 *   snippet: "resource_audit",
 *   waitTime: 300, // 5 minutes
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT
 * });
 * @remarks
 * Timers can be repeating when combined with LF_LocalTimerWaitTime.
 * Accuracy maintained through game tick synchronization.
 */
declare function LISTENFOR_LocalTimer(params: LocalTimerParameters): NoReturn;

/**
 * Configuration for local timer listeners.
 * Extends base parameters with delay specifications.
 */
declare interface LocalTimerParameters extends ListenerParams {
  /**
   * Delay duration in seconds before triggering callback.
   */
  waitTime: number;
}

/**
 * Registers a listener for entity-specific timer events.
 * Monitors named timers attached to entities for expiration tracking.
 * @param {EntityTimerParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track individual unit cooldowns
 * LISTENFOR_EntityTimer({
 *   snippet: "unit_rearm",
 *   entity: artilleryUnit,
 *   timerName: "reload_timer"
 * });
 * @see {@link SNIPPET_EntityTimer} for callback implementation
 * @see {@link OUTPUT_SetEntityTimer} for timer initialization
 * @remarks
 * Entity timers are stored in component metadata.
 * Listeners can target specific entities or track timer names globally.
 */
declare function LISTENFOR_EntityTimer(params: EntityTimerParameters): NoReturn;

/**
 * Configuration for entity timer listeners.
 * Extends base parameters with entity-specific tracking.
 */
declare interface EntityTimerParameters extends ListenerParams {
  /**
   * Optional entity identifier for targeted tracking.
   * Omit to listen for all entities with the timer.
   */
  entity?: number;

  /**
   * REQUIRED timer identifier to monitor.
   */
  timerName: string;
}

/**
 * Registers a listener for spatial trigger entry events.
 * Detects entities entering trigger volumes with optional filters.
 * @param {SpatialPartitionEnteredParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect hostile entry into safezone
 * LISTENFOR_SpatialPartitionEntered({
 *   snippet: "safezone_breach",
 *   triggerEntity: safezoneVolume,
 *   factionName: "undead"
 * });
 * @see {@link OUTPUT_EXT_SetTriggerVolume} for volume setup
 * @remarks
 * This system tracks explicit entry actions through collision systems.
 * Combines with faction/village filters for targeted event handling.
 */
declare function LISTENFOR_SpatialPartitionEntered(
  params: SpatialPartitionEnteredParameters,
): NoReturn;

/**
 * Configuration for spatial entry listeners.
 * Contains volume identification and entity filters.
 */
declare interface SpatialPartitionEnteredParameters extends ListenerParams {
  /**
   * REQUIRED trigger volume entity identifier.
   */
  triggerEntity: number;

  /**
   * Optional entity group filter for specific targets.
   */
  entities?: EntityGroup;

  /**
   * Optional village restriction for entry events.
   */
  villageId?: VillageID;

  /**
   * Optional faction filter for incoming entities.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for spatial trigger exit events.
 * Monitors entities leaving defined trigger volumes.
 * @param {SpatialPartitionExitedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track units leaving combat zone
 * LISTENFOR_SpatialPartitionExited({
 *   snippet: "combat_exit",
 *   triggerEntity: combatZone,
 *   factionName: "player"
 * });
 * @see {@link QUERY_EXT_GetEntityPosition} for position validation
 */
declare function LISTENFOR_SpatialPartitionExited(
  params: SpatialPartitionExitedParameters,
): NoReturn;

/**
 * Configuration for spatial exit listeners.
 * Contains volume identification and entity filters.
 */
declare interface SpatialPartitionExitedParameters extends ListenerParams {
  /**
   * REQUIRED trigger volume entity identifier.
   */
  triggerEntity: number;

  /**
   * Optional entity group filter for specific targets.
   */
  entities?: EntityGroup;

  /**
   * Optional village restriction for exit events.
   */
  villageId?: VillageID;

  /**
   * Optional faction filter for exiting entities.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for entity presence increases in triggers.
 * Fires when entity count within a volume meets or exceeds thresholds.
 * @param {PresenceEnteredParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger ambush when 3 enemies enter forest
 * LISTENFOR_PresenceEntered({
 *   snippet: "forest_ambush",
 *   triggerEntity: forestZone,
 *   threshold: 3
 * });
 * @see {@link LISTENFOR_SpatialPartitionEntered} for entity-specific tracking
 * @remarks
 * This system monitors aggregate entity counts rather than individual entries.
 * Thresholds are evaluated against current entity population in the volume.
 */
declare function LISTENFOR_PresenceEntered(
  params: PresenceEnteredParameters,
): NoReturn;

/**
 * Configuration for presence threshold listeners.
 * Contains volume identification and count parameters.
 */
declare interface PresenceEnteredParameters extends ListenerParams {
  /**
   * REQUIRED trigger volume entity identifier.
   */
  triggerEntity: number;

  /**
   * Optional entity count threshold for activation.
   */
  threshold?: number;
}

/**
 * Registers a listener for entity presence decreases in triggers.
 * Fires when entity count within a volume drops below thresholds.
 * @param {PresenceExitedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // End event when players leave area
 * LISTENFOR_PresenceExited({
 *   snippet: "event_end",
 *   triggerEntity: eventZone,
 *   threshold: 0
 * });
 */
declare function LISTENFOR_PresenceExited(
  params: PresenceExitedParameters,
): NoReturn;

/**
 * Configuration for presence exit listeners.
 * Contains volume identification and count parameters.
 */
declare interface PresenceExitedParameters extends ListenerParams {
  /**
   * REQUIRED trigger volume entity identifier.
   */
  triggerEntity: number;

  /**
   * Optional entity count threshold for activation.
   */
  threshold?: number;
}

/**
 * Registers a listener for player entry into villages.
 * Can filter by village characteristics and player count.
 * @param {PlayerEnteredVillageParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger village takeover event
 * LISTENFOR_PlayerEnteredVillage({
 *   snippet: "village_capture",
 *   villageSize: "large",
 *   threshold: 5
 * });
 * @see {@link VILLAGE_GetSize} for size evaluation
 * @remarks
 * Combines village metadata with player count thresholds.
 * Use for invasion triggers and village-specific events.
 */
declare function LISTENFOR_PlayerEnteredVillage(
  params: PlayerEnteredVillageParameters,
): NoReturn;

/**
 * Configuration for player village entry listeners.
 * Contains size, faction, and population filters.
 */
declare interface PlayerEnteredVillageParameters extends ListenerParams {
  /**
   * Optional village identifier filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction name filter for villages.
   */
  factionName?: FactionNameId;

  /**
   * Optional village size filter.
   */
  villageSize?: string;

  /**
   * Optional player count threshold (default: 1).
   */
  threshold?: number;
}

/**
 * Registers a listener for player exit from villages.
 * Monitors when player count drops below thresholds in villages.
 * @param {PlayerExitedVillageParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // End village event when players leave
 * LISTENFOR_PlayerExitedVillage({
 *   snippet: "event_cleanup",
 *   villageSize: "medium",
 *   threshold: 0
 * });
 */
declare function LISTENFOR_PlayerExitedVillage(
  params: PlayerExitedVillageParameters,
): NoReturn;

/**
 * Configuration for player village exit listeners.
 * Contains size, faction, and population filters.
 */
declare interface PlayerExitedVillageParameters extends ListenerParams {
  /**
   * Optional village identifier filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction name filter for villages.
   */
  factionName?: FactionNameId;

  /**
   * Optional village size filter.
   */
  villageSize?: string;

  /**
   * Optional player count threshold (default: 0).
   */
  threshold?: number;
}

/**
 * Registers a listener for card play events.
 * Monitors specific card values being played in the game world.
 * @param {CardPlayedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect defensive card usage
 * LISTENFOR_CardPlayed({
 *   snippet: "defense_played",
 *   cardValue: "build_wall"
 * });
 */
declare function LISTENFOR_CardPlayed(params: CardPlayedParameters): NoReturn;

/**
 * Configuration for general card play listeners.
 * Contains card value identification.
 */
declare interface CardPlayedParameters extends ListenerParams {
  /**
   * REQUIRED card value string to monitor.
   */
  cardValue: string;
}

/**
 * Registers a listener for horde-type card plays.
 * Specifically tracks faction horde card activations.
 * @param {HordeCardPlayedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track piglin horde deployments
 * LISTENFOR_HordeCardPlayed({
 *   snippet: "horde_deployed",
 *   factionName: "piglin_red",
 *   deckName: "horde_deck"
 * });
 * @see {@link CARD_Horde} for card creation
 */
declare function LISTENFOR_HordeCardPlayed(
  params: HordeCardPlayedParameters,
): NoReturn;

/**
 * Configuration for horde card listeners.
 * Contains faction and deck filters.
 */
declare interface HordeCardPlayedParameters extends ListenerParams {
  /**
   * Optional faction filter for horde cards.
   */
  factionName?: FactionNameId;

  /**
   * Optional deck name filter for card origin.
   */
  deckName?: string;
}

/**
 * Registers a listener for invasion card activation events.
 * Monitors strategic military operations initiated through card systems.
 * @param {InvasionCardPlayedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect castle siege orders
 * LISTENFOR_InvasionCardPlayed({
 *   snippet: "siege_initiated",
 *   cardAction: "attack_castle",
 *   factionName: "undead_necropolis"
 * });
 * @see {@link INVASION_DECK_NAME} for deck references
 * @remarks
 * This system coordinates with combat preparation pipelines.
 * Fallback actions handle undefined card states gracefully.
 * Requires valid faction registration in content packs.
 */
declare function LISTENFOR_InvasionCardPlayed(
  params: InvasionCardPlayedParameters,
): NoReturn;

/**
 * Configuration for invasion card listeners.
 * Contains action and fallback parameters for military operations.
 */
declare interface InvasionCardPlayedParameters extends ListenerParams {
  /**
   * Optional faction filter for invasion sources.
   */
  factionName?: FactionNameId;

  /**
   * Optional primary action identifier.
   */
  cardAction?: string;

  /**
   * Optional fallback action identifier.
   */
  cardFallbackAction?: string;
}

/**
 * Registers a listener for global variable modification events.
 * Monitors critical game state changes across systems.
 * @param {GlobalVariableChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track village population changes
 * LISTENFOR_GlobalVariableChanged({
 *   snippet: "population_update",
 *   variableName: "village_population_5"
 * });
 * @see {@link OUTPUT_SetGlobalVariable} for variable modification
 * @remarks
 * This system detects changes in persistent storage values.
 * Can combine with spawner references for buildable state tracking.
 * Requires valid variable names registered in content systems.
 */
declare function LISTENFOR_GlobalVariableChanged(
  params: GlobalVariableChangedParameters,
): NoReturn;

/**
 * Configuration for global variable change listeners.
 * Extends base parameters with spawner and tag filters.
 */
declare interface GlobalVariableChangedParameters extends ListenerParams {
  /**
   * REQUIRED variable identifier to monitor.
   */
  variableName: string;

  /**
   * Optional spawner entity reference for context.
   */
  buildableSpawner?: number;

  /**
   * Optional required tags for filtering.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for building construction initiations.
 * Monitors all construction starts including instant builds.
 * @param {BuildingStartParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect temple construction starts
 * LISTENFOR_BuildingStart({
 *   snippet: "temple_started",
 *   includeTags: ["religious", "ancient"],
 *   villageId: 10
 * });
 * @see {@link OUTPUT_EXT_SpawnBuildable} for construction system
 * @remarks
 * This system tracks initial placement phases.
 * The hasCreator parameter differentiates player vs AI constructions.
 * Critical for resource allocation and construction validation.
 */
declare function LISTENFOR_BuildingStart(
  params: BuildingStartParameters,
): NoReturn;

/**
 * Configuration for building start listeners.
 * Contains construction validation parameters.
 */
declare interface BuildingStartParameters extends ListenerParams {
  /**
   * Optional required tags for new buildings.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional player construction filter.
   */
  hasCreator?: boolean;
}

/**
 * Registers a listener for completed building constructions.
 * Monitors final phase of structure creation across factions.
 * @param {BuildingCompleteParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Activate defenses on wall completion
 * LISTENFOR_BuildingComplete({
 *   snippet: "wall_active",
 *   includeTags: ["defensive", "fortification"],
 *   factionName: "player"
 * });
 * @see {@link BUILDING_PhaseSystem} for construction stages
 * @remarks
 * This system validates completed structures against game rules.
 * Tag filters allow for specific structure type detection.
 * Coordinates with village management systems for functionality unlocks.
 */
declare function LISTENFOR_BuildingComplete(
  params: BuildingCompleteParameters,
): NoReturn;

/**
 * Configuration for building completion listeners.
 * Extends base parameters with construction filters.
 */
declare interface BuildingCompleteParameters extends ListenerParams {
  /**
   * Optional required tags for completed buildings.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional player construction filter.
   */
  hasCreator?: boolean;
}

/**
 * Registers a listener for failed building placements.
 * Detects invalid construction attempts for error handling.
 * @param {BuildingFailedToPlaceParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Refund resources for failed castle placement
 * LISTENFOR_BuildingFailedToPlace({
 *   snippet: "castle_refund",
 *   cardValue: "castle_card",
 *   villageId: 15
 * });
 * @see {@link OUTPUT_EXT_SpawnBuildable} for placement system
 * @remarks
 * This system handles terrain collision failures and resource refunds.
 * Card value links to specific buildable definitions.
 * Coordinates with UI systems for player feedback.
 */
declare function LISTENFOR_BuildingFailedToPlace(
  params: BuildingFailedToPlaceParameters,
): NoReturn;

/**
 * Configuration for building failure listeners.
 * Contains card and village context parameters.
 */
declare interface BuildingFailedToPlaceParameters extends ListenerParams {
  /**
   * Optional buildable card identifier.
   */
  cardValue?: CardValue;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for entity creation events.
 * Monitors unit and structure spawns from templates.
 * @param {EntitySpawnedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track hostile mob spawns
 * LISTENFOR_EntitySpawned({
 *   snippet: "mob_alert",
 *   factionName: "undead",
 *   excludeTags: ["passive"]
 * });
 * @see {@link template_mob} for entity templates
 * @remarks
 * Requires entities to have spawn tracking enabled in templates.
 * Tag filters allow precise entity classification.
 * Coordinates with AI systems for dynamic response.
 */
declare function LISTENFOR_EntitySpawned(
  params: EntitySpawnedParameters,
): NoReturn;

/**
 * Configuration for entity spawn listeners.
 * Contains classification and ownership filters.
 */
declare interface EntitySpawnedParameters extends ListenerParams {
  /**
   * Optional required tags for spawned entities.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for entity refund events.
 * Monitors resource returns from destroyed/despawned entities.
 * @param {EntityRefundedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track skeleton warrior refunds
 * LISTENFOR_EntityRefunded({
 *   snippet: "skeleton_refund",
 *   includeTags: ["undead", "military"]
 * });
 * @see {@link BUILDING_RefundSystem} for resource handling
 * @remarks
 * Tag filters allow tracking specific entity categories.
 * Coordinates with economy systems for resource management.
 */
declare function LISTENFOR_EntityRefunded(
  params: EntityRefundedParameters,
): NoReturn;

/**
 * Configuration for entity refund listeners.
 * Contains tag filtering parameters.
 */
declare interface EntityRefundedParameters extends ListenerParams {
  /**
   * Optional required tags for refunded entities.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;
}

/**
 * Registers a listener for spawner-produced entities.
 * Monitors unit production from buildable spawners like barracks.
 * @param {BuildableSpawnerSpawnedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track barracks unit production
 * LISTENFOR_BuildableSpawnerSpawned({
 *   snippet: "unit_ready",
 *   buildableSpawner: barracksEntity,
 *   includeTags: ["soldier"]
 * });
 * @see {@link BUILDABLE_SPAWNER} for spawner configuration
 * @remarks
 * Requires valid spawner entity references.
 * Tag filters allow unit type specialization.
 * Coordinates with army management systems.
 */
declare function LISTENFOR_BuildableSpawnerSpawned(
  params: BuildableSpawnerSpawnedParameters,
): NoReturn;

/**
 * Configuration for spawner production listeners.
 * Contains spawner reference and classification filters.
 */
declare interface BuildableSpawnerSpawnedParameters extends ListenerParams {
  /**
   * REQUIRED spawner entity identifier.
   */
  buildableSpawner: SingleEntity;

  /**
   * Optional required tags for spawned units.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for batch production events from buildable spawners.
 * Monitors groups of entities created by structures like barracks or factories.
 * @param {BuildableSpawnerBatchSpawnedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track military unit deployments
 * LISTENFOR_BuildableSpawnerBatchSpawned({
 *   snippet: "unit_wave",
 *   buildableSpawner: barracksEntity,
 *   includeTags: ["soldier", "archer"]
 * });
 * @see {@link BUILDABLE_SPAWNER} for spawner configuration
 * @remarks
 * This system coordinates with unit cap management and army deployment systems.
 * Tag filters allow specialization in unit types.
 * Critical for reinforcing frontlines and resource allocation.
 */
declare function LISTENFOR_BuildableSpawnerBatchSpawned(
  params: BuildableSpawnerBatchSpawnedParameters,
): NoReturn;

/**
 * Configuration for batch spawner listeners.
 * Contains spawner identification and entity filters.
 */
declare interface BuildableSpawnerBatchSpawnedParameters
  extends ListenerParams {
  /**
   * Optional spawner entity reference for targeted monitoring.
   */
  buildableSpawner?: SingleEntity;

  /**
   * Optional required tags for spawner identification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for spawner exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for destruction of non-population-capped entities.
 * Monitors removal of unique or unlimited entities like world bosses.
 * @param {NonPopCappedEntityDestroyedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect ancient guardian destruction
 * LISTENFOR_NonPopCappedEntityDestroyed({
 *   snippet: "guardian_fallen",
 *   includeTags: ["boss", "ancient"],
 *   villageId: 20
 * });
 * @see {@link ENTITY_Lifecycle} for destruction mechanics
 * @remarks
 * Differentiates between despawn and destruction events.
 * Coordinates with respawn systems and world event triggers.
 */
declare function LISTENFOR_NonPopCappedEntityDestroyed(
  params: NonPopCappedEntityDestroyedParameters,
): NoReturn;

/**
 * Configuration for non-capped entity destruction listeners.
 * Contains entity classification and event type filters.
 */
declare interface NonPopCappedEntityDestroyedParameters extends ListenerParams {
  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional entity group restriction.
   */
  entities?: EntityGroup;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional destruction type filter (despawn vs. destroy).
   */
  despawned?: boolean;

  /**
   * Optional destroyer team identification.
   */
  destroyerTeamName?: TeamName;
}

/**
 * Registers a listener for population-capped entity destruction.
 * Tracks limited entities like military units or special NPCs.
 * @param {PopCappedEntityDestroyedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Monitor elite unit losses
 * LISTENFOR_PopCappedEntityDestroyed({
 *   snippet: "elite_lost",
 *   includeTags: ["elite"],
 *   despawned: false
 * });
 * @see {@link FACTION_PopCap} for entity limits
 * @remarks
 * Requires explicit despawn/destroy differentiation.
 * Coordinates with reinforcement systems and strategic planning.
 */
declare function LISTENFOR_PopCappedEntityDestroyed(
  params: PopCappedEntityDestroyedParameters,
): NoReturn;

declare interface PopCappedEntityDestroyedParameters extends ListenerParams {
  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional entity group restriction.
   */
  entities?: EntityGroup;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * REQUIRED destruction type specification.
   */
  despawned: boolean;

  /**
   * Optional destroyer team identification.
   */
  destroyerTeamName?: TeamName;
}

/**
 * Registers a listener for entity group destruction thresholds.
 * Triggers when specified number of entities are destroyed.
 * @param {EntitiesAmountDestroyedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger event after destroying 5 watchtowers
 * LISTENFOR_EntitiesAmountDestroyed({
 *   snippet: "defenses_down",
 *   entities: watchtowerGroup,
 *   amount: 5
 * });
 * @see {@link QUERY_GetEntitiesCount} for current entity counts
 * @remarks
 * Amount parameter defaults to total entity count if omitted.
 * Coordinates with objective tracking and victory conditions.
 */
declare function LISTENFOR_EntitiesAmountDestroyed(
  params: EntitiesAmountDestroyedParameters,
): NoReturn;

/**
 * Configuration for entity destruction threshold listeners.
 * Contains entity group and count requirements.
 */
declare interface EntitiesAmountDestroyedParameters extends ListenerParams {
  /**
   * REQUIRED entity group to monitor.
   */
  entities: EntityGroup;

  /**
   * Optional destruction threshold count.
   */
  amount?: number;
}

/**
 * Registers a listener for health value changes in entities.
 * Monitors health transitions across absolute or relative thresholds.
 * @param {HealthChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger boss phase change at 50% health
 * LISTENFOR_HealthChanged({
 *   snippet: "boss_phase_two",
 *   entities: [bossEntity],
 *   normalizedThreshold: 0.5,
 *   triggerMode: "cross_below"
 * });
 * @see {@link HEALTH_MONITORING} for threshold systems
 * @remarks
 * Requires exclusive use of either normalized or absolute thresholds.
 * Direction parameter controls damage/healing response.
 * Critical for combat phase transitions and AI behavior changes.
 */
declare function LISTENFOR_HealthChanged(
  params: HealthChangedParameters,
): NoReturn;

/**
 * Configuration for health monitoring listeners.
 * Contains threshold parameters and entity filters.
 */
declare interface HealthChangedParameters extends ListenerParams {
  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional entity group restriction.
   */
  entities: EntityGroup;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional percentage-based health threshold (0-1 range).
   */
  normalizedThreshold?: Threshold;

  /**
   * Optional absolute health value threshold.
   */
  absoluteThreshold?: Threshold;

  /**
   * REQUIRED if using thresholds: crossing mode ("cross_above"/"cross_below").
   */
  triggerMode?: HealthTriggerMode;

  /**
   * Optional direction filter ("damage"/"heal").
   */
  direction?: HealthDirection;
}

/**
 * Registers a listener for cultural value progression events.
 * Monitors when civilization metrics cross specified thresholds.
 * @param {CultureValueChangedUpParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Unlock reward at culture milestone
 * LISTENFOR_CultureValueChangedUp({
 *   snippet: "culture_milestone",
 *   thresholdA: 75,
 *   villageId: 10
 * });
 * @remarks
 * At least one threshold parameter must be specified.
 * Values represent cultural development metrics (A, B, C).
 * Coordinates with village upgrade and reward systems.
 */
declare function LISTENFOR_CultureValueChangedUp(
  params: CultureValueChangedUpParameters,
): NoReturn;

/**
 * Configuration for cultural value progression listeners.
 * Contains threshold parameters and village filters.
 */
declare interface CultureValueChangedUpParameters extends ListenerParams {
  /**
   * Optional cultural metric A threshold.
   */
  thresholdA?: Threshold;

  /**
   * Optional cultural metric B threshold.
   */
  thresholdB?: Threshold;

  /**
   * Optional cultural metric C threshold.
   */
  thresholdC?: Threshold;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for cultural value regression events.
 * Monitors when civilization metrics fall below specified thresholds.
 * @param {CultureValueChangedDownParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger cultural collapse event
 * LISTENFOR_CultureValueChangedDown({
 *   snippet: "culture_collapse",
 *   thresholdC: 30,
 *   villageId: 15
 * });
 * @see {@link CULTURE_TrackingSystem} for value definitions
 * @remarks
 * At least one threshold parameter must be specified.
 * Coordinates with village downgrade systems and disaster responses.
 */
declare function LISTENFOR_CultureValueChangedDown(
  params: CultureValueChangedDownParameters,
): NoReturn;

/**
 * Configuration for cultural regression listeners.
 * Contains threshold parameters and village filters.
 */
declare interface CultureValueChangedDownParameters extends ListenerParams {
  /**
   * Optional cultural metric A threshold.
   */
  thresholdA?: Threshold;

  /**
   * Optional cultural metric B threshold.
   */
  thresholdB?: Threshold;

  /**
   * Optional cultural metric C threshold.
   */
  thresholdC?: Threshold;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for custom trigger events.
 * Monitors specific named events from external systems.
 * @param {TriggerEventParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track special boss activation triggers
 * LISTENFOR_TriggerEvent({
 *   snippet: "boss_activation",
 *   triggerName: "arena_triggered",
 *   entities: [bossAltar]
 * });
 * @remarks
 * Requires coordination with B-Team for custom event implementations.
 * Entity filters restrict trigger context scope.
 * Used for integrating proprietary game systems.
 */
declare function LISTENFOR_TriggerEvent(
  params: TriggerEventParameters,
): NoReturn;

/**
 * Configuration for custom trigger event listeners.
 * Contains event identification and context parameters.
 */
declare interface TriggerEventParameters extends ListenerParams {
  /**
   * REQUIRED trigger event identifier.
   */
  triggerName: TriggerEventName;

  /**
   * Optional entity group restriction.
   */
  entities?: EntityGroup;
}

/**
 * Registers a listener for team resource quantity changes.
 * Monitors specific resource fluctuations across factions.
 * @param {ResourcesChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect wood shortages in player faction
 * LISTENFOR_ResourcesChanged({
 *   snippet: "resource_shortage",
 *   resourceName: "wood",
 *   teamName: "player"
 * });
 * @see {@link RESOURCE_ManagementSystem} for resource definitions
 * @remarks
 * Team names must match registered faction identifiers.
 * Coordinates with economy and construction systems.
 */
declare function LISTENFOR_ResourcesChanged(
  params: ResourcesChangedParameters,
): NoReturn;

/**
 * Configuration for resource change listeners.
 * Contains resource and team identification parameters.
 */
declare interface ResourcesChangedParameters extends ListenerParams {
  /**
   * REQUIRED resource identifier to monitor.
   */
  resourceName: ResourceName;

  /**
   * Optional team restriction filter.
   */
  teamName?: TeamName;
}

/**
 * Registers a listener for tether limit violations.
 * Monitors when tethered entities exceed distance constraints.
 * @param {TetherOverLimitParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect wayward pets
 * LISTENFOR_TetherOverLimit({
 *   snippet: "pet_retrieval",
 *   rootEntity: playerEntity,
 *   tetherEntity: wolfCompanion
 * });
 * @see {@link TETHER_System} for distance calculations
 * @remarks
 * Requires valid entity positions for distance checks.
 * Coordinates with AI leash systems and despawn logic.
 */
declare function LISTENFOR_TetherOverLimit(
  params: TetherOverLimitParameters,
): NoReturn;

/**
 * Configuration for tether violation listeners.
 * Contains entity relationship parameters.
 */
declare interface TetherOverLimitParameters extends ListenerParams {
  /**
   * REQUIRED primary entity identifier.
   */
  rootEntity: SingleEntity;

  /**
   * REQUIRED tethered entity identifier.
   */
  tetherEntity: SingleEntity;
}

/**
 * Registers a listener for events external to B#.
 * @param {ExternalEventParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Handle weather system alerts
 * LISTENFOR_ExternalEvent({
 *   snippet: "storm_warning",
 *   eventName: "weather_storm"
 * });
 * @see {@link EXTERNAL_EVENT_REGISTRY} for valid event names
 * @remarks
 * Requires event names to be registered in global systems.
 * Used for cross-module communication and engine events.
 */
declare function LISTENFOR_ExternalEvent(
  params: ExternalEventParameters,
): NoReturn;

/**
 * Configuration for external event listeners.
 * Extends base parameters with event name specification.
 */
declare interface ExternalEventParameters extends ListenerParams {
  /**
   * REQUIRED external event identifier.
   */
  eventName: ExternalEventName;
}

/**
 * Registers a listener for base construction completion.
 * Monitors when villages finish all queued builds.
 * @param {BaseBuildsFinishedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Celebrate fortress completion
 * LISTENFOR_BaseBuildsFinished({
 *   snippet: "fortress_complete",
 *   villageId: 20,
 *   factionName: "defenders"
 * });
 * @see {@link BUILDING_QueuedSystem} for construction queues
 * @remarks
 * Coordinates with victory conditions and upgrade systems.
 * Can combine faction and village filters for precise tracking.
 */
declare function LISTENFOR_BaseBuildsFinished(
  params: BaseBuildsFinishedParameters,
): NoReturn;

/**
 * Configuration for base completion listeners.
 * Contains village and faction filters.
 */
declare interface BaseBuildsFinishedParameters extends ListenerParams {
  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for point-of-interest generation events.
 * Monitors world generation systems for specific POI types.
 * @param {POIGeneratedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track treasure chest placements
 * LISTENFOR_POIGenerated({
 *   snippet: "treasure_spawn",
 *   poiTypeName: "chest_gold"
 * });
 * @see {@link POI_GenerationSystem} for type registry
 * @remarks
 * POI type names must match registered content pack identifiers.
 * Coordinates with exploration and quest systems.
 */
declare function LISTENFOR_POIGenerated(
  params: POIGeneratedParameters,
): NoReturn;

/**
 * Configuration for POI generation listeners.
 * Contains POI type identification parameters.
 */
declare interface POIGeneratedParameters extends ListenerParams {
  /**
   * REQUIRED POI type identifier.
   */
  poiTypeName: POITypeName;
}

/**
 * Registers a listener for village creation events during world generation.
 * Monitors new village spawns that match faction and size criteria.
 * @param {VillageGeneratedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect new dwarf settlements
 * LISTENFOR_VillageGenerated({
 *   snippet: "dwarven_economy",
 *   factionName: "dwarves",
 *   villageSize: "medium"
 * });
 * @see {@link VILLAGE_GenerationSystem} for procedural logic
 * @remarks
 * This system coordinates with world generation and expansion systems.
 * Callbacks receive village metadata including position and timestamp.
 * Use for initializing village-specific resources and narratives.
 */
declare function LISTENFOR_VillageGenerated(
  params: VillageGeneratedParameters,
): NoReturn;

/**
 * Configuration for village generation listeners.
 * Contains filters for faction association and size classification.
 */
declare interface VillageGeneratedParameters extends ListenerParams {
  /**
   * REQUIRED faction identifier for village ownership.
   */
  factionName: FactionNameId;

  /**
   * Optional size filter for generated villages.
   */
  villageSize?: VillageSize;
}

/**
 * Registers a listener for village upgrade completion events.
 * Monitors when settlements transition between size classifications.
 * @param {VillageUpgradedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track city expansions
 * LISTENFOR_VillageUpgraded({
 *   snippet: "city_expansion",
 *   sourceVillageSize: "large",
 *   targetVillageSize: "massive"
 * });
 * @see {@link VILLAGE_UpgradeSystem} for transition logic
 * @remarks
 * This system detects both player-driven and procedural upgrades.
 * Source/target size parameters enable phase-specific triggers.
 * Coordinates with resource allocation and difficulty scaling systems.
 */
declare function LISTENFOR_VillageUpgraded(
  params: VillageUpgradedParameters,
): NoReturn;

/**
 * Configuration for village upgrade listeners.
 * Contains size transition parameters and identification filters.
 */
declare interface VillageUpgradedParameters extends ListenerParams {
  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional village identifier for targeted tracking.
   */
  villageId?: VillageID;

  /**
   * Optional original village size before upgrade.
   */
  sourceVillageSize?: VillageSize;

  /**
   * Optional target size after upgrade completion.
   */
  targetVillageSize?: VillageSize;
}

/**
 * Registers a listener for village construction completion.
 * Monitors when all instant-build structures are placed in a village.
 * @param {VillageFinishedBuildingParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Activate village defenses
 * LISTENFOR_VillageFinishedBuilding({
 *   snippet: "defenses_active",
 *   villageId: 25
 * });
 * @see {@link BUILDING_InstantSystem} for construction details
 * @remarks
 * This event fires after final structure placement.
 * Critical for activating village functionality post-construction.
 */
declare function LISTENFOR_VillageFinishedBuilding(
  params: VillageFinishedBuildingParameters,
): NoReturn;

/**
 * Configuration for village construction listeners.
 * Contains village identification parameters.
 */
declare interface VillageFinishedBuildingParameters extends ListenerParams {
  /**
   * Optional village identifier for targeted monitoring.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for village planning completion.
 * Monitors when villages finish initial layout design phase.
 * @param {VillageFinishedPlanningParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Prepare resources for village construction
 * LISTENFOR_VillageFinishedPlanning({
 *   snippet: "resource_prep",
 *   factionName: "builders",
 *   villageSize: "large"
 * });
 * @see {@link VILLAGE_PlanningSystem} for generation phases
 * @remarks
 * This occurs before physical construction begins.
 * Use for pre-construction resource allocation or AI preparation.
 */
declare function LISTENFOR_VillageFinishedPlanning(
  params: VillageFinishedPlanningParameters,
): NoReturn;

/**
 * Configuration for village planning listeners.
 * Contains faction and size filters for early-stage tracking.
 */
declare interface VillageFinishedPlanningParameters extends ListenerParams {
  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional size classification filter.
   */
  villageSize?: VillageSize;
}

/**
 * Registers a listener for village destruction events.
 * Monitors settlement removal through combat or system processes.
 * @param {VillageDestroyedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect dragon's lair destruction
 * LISTENFOR_VillageDestroyed({
 *   snippet: "dragon_defeated",
 *   villageId: 30,
 *   despawned: false
 * });
 * @see {@link VILLAGE_DestructionSystem} for removal mechanics
 * @remarks
 * Differentiates between player-caused destruction and system despawns.
 * Coordinates with victory conditions and respawn systems.
 */
declare function LISTENFOR_VillageDestroyed(
  params: VillageDestroyedParameters,
): NoReturn;

/**
 * Configuration for village destruction listeners.
 * Contains destruction context parameters and filters.
 */
declare interface VillageDestroyedParameters extends ListenerParams {
  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional size classification filter.
   */
  villageSize?: VillageSize;

  /**
   * Optional village identifier for targeted tracking.
   */
  villageId?: VillageID;

  /**
   * Optional destruction type filter (combat vs. system despawn).
   */
  despawned?: boolean;
}

/**
 * Registers a listener for village planning initiation events.
 * Monitors early-stage settlement creation before construction.
 * @param {VillagePlannedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Prepare terrain for new settlements
 * LISTENFOR_VillagePlanned({
 *   snippet: "terrain_prep",
 *   factionName: "settlers"
 * });
 * @see {@link VILLAGE_GenerationPipeline} for creation phases
 * @remarks
 * This occurs during world generation and expansion phases.
 * Use for terrain preparation and resource staging.
 */
declare function LISTENFOR_VillagePlanned(
  params: VillagePlannedParameters,
): NoReturn;

/**
 * Configuration for village planning listeners.
 * Contains early-stage classification parameters.
 */
declare interface VillagePlannedParameters extends ListenerParams {
  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional size classification filter.
   */
  villageSize?: VillageSize;
}

/**
 * Registers a listener for Forward Operating Base generation during invasions.
 * Monitors when attack bases are established by invading forces.
 * @param {InvasionAttackV2FobGeneratedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track piglin siege preparations
 * LISTENFOR_InvasionAttackV2FobGenerated({
 *   snippet: "siege_prep",
 *   factionName: "piglin_red"
 * });
 * @see {@link INVASION_FOBSystem} for base mechanics
 * @remarks
 * This system coordinates with military planning and AI deployment systems.
 * Invasion ID allows tracking specific campaign instances.
 */
declare function LISTENFOR_InvasionAttackV2FobGenerated(
  params: InvasionAttackV2FobGeneratedParameters,
): NoReturn;

/**
 * Configuration for invasion FOB generation listeners.
 * Contains identification parameters for military operations.
 */
declare interface InvasionAttackV2FobGeneratedParameters
  extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional invasion campaign identifier.
   */
  invasionId?: InvasionID;
}

/**
 * Registers a listener for cinematic interaction events.
 * Monitors specific moments within cinematic playback for synchronization.
 * @param {CinematicEventParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger dialogue at cinematic midpoint
 * LISTENFOR_CinematicEvent({
 *   snippet: "mid_cinematic_dialog",
 *   eventName: "story_midpoint",
 *   cinematicId: 5
 * });
 * @see {@link CINEMATIC_TriggerSystem} for event registration
 * @remarks
 * Event names must match those embedded in cinematic timelines.
 * Coordinates with narrative systems and camera controls.
 */
declare function LISTENFOR_CinematicEvent(
  params: CinematicEventParameters,
): NoReturn;

/**
 * Configuration for cinematic event listeners.
 * Contains identification parameters for precise event tracking.
 */
declare interface CinematicEventParameters extends ListenerParams {
  /**
   * REQUIRED cinematic event identifier.
   */
  eventName: CinematicEventName;

  /**
   * Optional cinematic instance identifier.
   */
  cinematicId?: CinematicId;
}

/**
 * Registers a listener for cinematic start events.
 * Monitors when specific cutscenes begin playback.
 * @param {CinematicStartedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Pause gameplay during intro
 * LISTENFOR_CinematicStarted({
 *   snippet: "game_pause",
 *   cinematicName: "intro_cinematic"
 * });
 * @see {@link CINEMATIC_PlaybackSystem} for playback controls
 * @remarks
 * Cinematic names must match content pack definitions.
 * Coordinates with UI systems for element hiding.
 */
declare function LISTENFOR_CinematicStarted(
  params: CinematicStartedParameters,
): NoReturn;

/**
 * Configuration for cinematic start listeners.
 * Contains identification parameters for cutscene tracking.
 */
declare interface CinematicStartedParameters extends ListenerParams {
  /**
   * REQUIRED cinematic identifier string.
   */
  cinematicName: CinematicName;
}

/**
 * Registers a listener for cinematic completion events.
 * Monitors when cutscenes finish playing or are skipped.
 * @param {CinematicFinishedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Unlock post-credits content
 * LISTENFOR_CinematicFinished({
 *   snippet: "credits_complete",
 *   cinematicName: "end_credits"
 * });
 * @see {@link CINEMATIC_TriggerSystem} for event integration
 * @remarks
 * Triggers regardless of playback completion method (natural end or skip).
 * Requires exact cinematic name matches from content packs.
 */
declare function LISTENFOR_CinematicFinished(
  params: CinematicFinishedParameters,
): NoReturn;

/**
 * Configuration for cinematic completion listeners.
 * Contains identification parameters for end-phase detection.
 */
declare interface CinematicFinishedParameters extends ListenerParams {
  /**
   * REQUIRED cinematic identifier string.
   */
  cinematicName: CinematicName;
}

/**
 * Registers a listener for player interaction events.
 * Monitors entity interactions with optional context filters.
 * @param {PlayerInteractedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect ancient artifact interaction
 * LISTENFOR_PlayerInteracted({
 *   snippet: "artifact_activate",
 *   includeTags: ["ancient", "artifact"]
 * });
 * @see {@link INTERACTION_System} for input handling
 * @remarks
 * Tag filters allow precise interaction targeting.
 * Coordinates with quest systems and ability activation.
 */
declare function LISTENFOR_PlayerInteracted(
  params: PlayerInteractedParameters,
): NoReturn;

/**
 * Configuration for player interaction listeners.
 * Contains entity and context filtering parameters.
 */
declare interface PlayerInteractedParameters extends ListenerParams {
  /**
   * Optional player entity restriction.
   */
  playerEntity?: SingleEntity;

  /**
   * Optional interactable entity group filter.
   */
  entities?: EntityGroup;

  /**
   * Optional required tags for interactables.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for interactables.
   */
  excludeTags?: TagArray;

  /**
   * Optional team restriction filter.
   */
  teamName?: TeamName;

  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for HUD element interaction events.
 * Monitors when specific UI components are closed or deselected.
 * @param {HudEventParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Resume gameplay after menu closure
 * LISTENFOR_HudEvent({
 *   snippet: "resume_game",
 *   eventName: "settings_menu_closed"
 * });
 * @see {@link HUD_ManagementSystem} for UI element definitions
 * @remarks
 * Event names correspond to HUD component identifiers.
 * Coordinates with pause systems and input management.
 */
declare function LISTENFOR_HudEvent(params: HudEventParameters): NoReturn;

/**
 * Configuration for HUD event listeners.
 * Contains UI component identification parameters.
 */
declare interface HudEventParameters extends ListenerParams {
  /**
   * REQUIRED HUD event identifier.
   */
  eventName: HudEventName;
}

/**
 * Registers a listener for entity destruction objectives during invasions.
 * Monitors progress toward eliminating specified target entities.
 * @param {InvasionDestroyEntitiesObjectiveParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track fortress siege progress
 * LISTENFOR_InvasionDestroyEntitiesObjective({
 *   snippet: "fortress_down",
 *   villageId: 25,
 *   threshold: 5
 * });
 * @see {@link INVASION_ObjectiveSystem} for campaign tracking
 * @remarks
 * Threshold represents remaining target entities.
 * Coordinates with victory condition systems.
 */
declare function LISTENFOR_InvasionDestroyEntitiesObjective(
  params: InvasionDestroyEntitiesObjectiveParameters,
): NoReturn;

/**
 * Configuration for invasion entity objective listeners.
 * Contains destruction progress parameters.
 */
declare interface InvasionDestroyEntitiesObjectiveParameters
  extends ListenerParams {
  /**
   * Optional village restriction filter.
   */
  villageId?: VillageID;

  /**
   * Optional remaining entity threshold.
   */
  threshold?: Threshold;
}

/**
 * Registers a listener for invasion planning completion events.
 * Monitors when AI finishes strategic intention calculations.
 * @param {InvasionIntentionsDrawnParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Prepare defenses after AI planning
 * LISTENFOR_InvasionIntentionsDrawn({
 *   snippet: "defense_prep"
 * });
 * @see {@link INVASION_PlanningSystem} for AI logic
 * @remarks
 * Trigger timing depends on previous night's processing load.
 * Critical for synchronizing defensive preparations.
 */
declare function LISTENFOR_InvasionIntentionsDrawn(
  params: InvasionIntentionsDrawnParameters,
): NoReturn;

/**
 * Configuration for invasion planning listeners.
 * Base interface for strategic phase tracking.
 */
declare interface InvasionIntentionsDrawnParameters extends ListenerParams {}

/**
 * Registers a listener for executed invasion actions.
 * Monitors nighttime military operations completion.
 * @param {InvasionActionsExecutedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect completed siege actions
 * LISTENFOR_InvasionActionsExecuted({
 *   snippet: "siege_results"
 * });
 * @see {@link INVASION_ActionSystem} for operation details
 * @remarks
 * Coordinates with day/night cycle systems.
 * Use for post-invasion cleanup and state updates.
 */
declare function LISTENFOR_InvasionActionsExecuted(
  params: InvasionActionsExecutedParameters,
): NoReturn;

/**
 * Configuration for invasion action execution listeners.
 * Base interface for nighttime operation tracking.
 */
declare interface InvasionActionsExecutedParameters extends ListenerParams {}

/**
 * Registers a listener for resolved nighttime invasion actions.
 * Monitors finalization of all scheduled military operations.
 * @param {InvasionNightActionsResolvedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Cleanup after night attacks
 * LISTENFOR_InvasionNightActionsResolved({
 *   snippet: "night_cleanup"
 * });
 * @see {@link INVASION_Scheduler} for action timing
 * @remarks
 * Critical for state transitions between day/night phases.
 */
declare function LISTENFOR_InvasionNightActionsResolved(
  params: InvasionNightActionsResolvedParameters,
): NoReturn;

/**
 * Configuration for nighttime action resolution listeners.
 * Base interface for phase transition tracking.
 */
declare interface InvasionNightActionsResolvedParameters
  extends ListenerParams {}

/**
 * Registers a listener for invasion oops events.
 * @param {InvasionOopsApplyParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example // Apply fortress upgrade oops
 * LISTENFOR_InvasionOopsApply({
 *   snippet: "fortress_upgrade_oops",
 *   factionName: "defenders"
 * });
 * @remarks
 */
declare function LISTENFOR_InvasionOopsApply(
  params: InvasionOopsApplyParameters,
): NoReturn;

/**
 * Configuration for base modification listeners.
 * Contains faction identification parameters.
 */
declare interface InvasionOopsApplyParameters extends ListenerParams {
  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for executed delayed invasion actions.
 * Monitors deferred military operations during campaign phases.
 * @param {InvasionDelayedActionExecutedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track delayed reinforcements
 * LISTENFOR_InvasionDelayedActionExecuted({
 *   snippet: "reinforcements_arrived",
 *   invasionAction: "deploy_reserve_units"
 * });
 * @see {@link OUTPUT_ExecuteAllDelayedInvasionActions} for action execution
 * @remarks
 * This system coordinates with campaign scheduling and AI coordination systems.
 * Action names must match registered invasion operations.
 */
declare function LISTENFOR_InvasionDelayedActionExecuted(
  params: InvasionDelayedActionExecutedParameters,
): NoReturn;

/**
 * Configuration for delayed invasion action listeners.
 * Contains operation identification parameters.
 */
declare interface InvasionDelayedActionExecutedParameters
  extends ListenerParams {
  /**
   * Optional invasion action identifier.
   */
  invasionAction?: InvasionActionName;
}

/**
 * Registers a listener for time progression events.
 * Monitors specific time phases using numerical or named references.
 * @param {TimeOfDayParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger night ambiance
 * LISTENFOR_TimeOfDay({
 *   snippet: "night_cycle",
 *   timeOfDayName: "dusk"
 * });
 * @see {@link TIME_System} for time management
 * @remarks
 * Time values use normalized 0-1 range for numerical references.
 * Named times must match content pack definitions.
 * Mutually exclusive parameters: timeOfDayNumber and timeOfDayName.
 */
declare function LISTENFOR_TimeOfDay(params: TimeOfDayParameters): NoReturn;

/**
 * Configuration for time progression listeners.
 * Contains time identification parameters.
 */
declare interface TimeOfDayParameters extends ListenerParams {
  /**
   * Optional normalized time value (0-1).
   */
  timeOfDayNumber?: TimeOfDayNumber;

  /**
   * Optional named time phase identifier.
   */
  timeOfDayName?: TimeOfDayName;
}

/**
 * Registers a listener for entity tag addition events.
 * Monitors metadata changes across game entities.
 * @param {TagAddedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect cursed entities
 * LISTENFOR_TagAdded({
 *   snippet: "curse_detected",
 *   tag: "cursed",
 *   entities: allUnits
 * });
 * @see {@link TAGS} for standard tag definitions
 * @remarks
 * Tag addition events may trigger system state changes.
 * Entity filters allow targeted monitoring.
 */
declare function LISTENFOR_TagAdded(params: TagAddedParameters): NoReturn;

/**
 * Configuration for tag addition listeners.
 * Contains entity group and tag identification.
 */
declare interface TagAddedParameters extends ListenerParams {
  /**
   * Target entity group for monitoring.
   */
  entities?: EntityGroup;

  /**
   * REQUIRED tag identifier to monitor.
   */
  tag: Tag;
}

/**
 * Registers a listener for entity tag removal events.
 * Tracks metadata state changes in game entities.
 * @param {TagRemovedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect buff expiration
 * LISTENFOR_TagRemoved({
 *   snippet: "buff_expired",
 *   tag: "damage_boost",
 *   entities: playerUnits
 * });
 * @see {@link TAGS} for standard tag definitions
 * @remarks
 * Coordinates with status effect and buff systems.
 * Entity filters enable precise tracking.
 */
declare function LISTENFOR_TagRemoved(params: TagRemovedParameters): NoReturn;

/**
 * Configuration for tag removal listeners.
 * Contains entity group and tag identification.
 */
declare interface TagRemovedParameters extends ListenerParams {
  /**
   * Target entity group for monitoring.
   */
  entities?: EntityGroup;

  /**
   * REQUIRED tag identifier to monitor.
   */
  tag: Tag;
}

/**
 * Registers a listener for entity influence state changes.
 * Monitors when entities are lured or lose lure status.
 * @param {InfluenceLureChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect lure activation
 * LISTENFOR_InfluenceLureChanged({
 *   snippet: "lure_activated",
 *   includeTags: ["boss"]
 * });
 * @see {@link INFLUENCE_LureSystem} for mechanics
 * @remarks
 * Coordinates with AI behavior and crowd control systems.
 * Tag filters allow specific entity targeting.
 */
declare function LISTENFOR_InfluenceLureChanged(
  params: InfluenceLureChangedParameters,
): NoReturn;

/**
 * Configuration for influence lure listeners.
 * Contains entity classification and ownership filters.
 */
declare interface InfluenceLureChangedParameters extends ListenerParams {
  /**
   * Optional entity group restriction.
   */
  entities?: EntityGroup;

  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional team restriction filter.
   */
  teamName?: TeamName;
}

/**
 * Registers a listener for entity director state changes.
 * Monitors when entities are directed or lose direction status.
 * @param {InfluenceDirectorChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track directed assaults
 * LISTENFOR_InfluenceDirectorChanged({
 *   snippet: "attack_directed",
 *   teamName: "player"
 * });
 * @see {@link INFLUENCE_DirectorSystem} for mechanics
 * @remarks
 * Coordinates with tactical AI and command systems.
 * Entity filters enable precise monitoring.
 */
declare function LISTENFOR_InfluenceDirectorChanged(
  params: InfluenceDirectorChangedParameters,
): NoReturn;

/**
 * Configuration for influence director listeners.
 * Contains entity classification and ownership filters.
 */
declare interface InfluenceDirectorChangedParameters extends ListenerParams {
  /**
   * Optional entity group restriction.
   */
  entities: EntityGroup;

  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional team restriction filter.
   */
  teamName?: TeamName;
}

/**
 * Registers a listener for player-directed mob actions.
 * Monitors unit command inputs with optional filter constraints.
 * @param {PlayerDirectedMobParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect special ability usage
 * LISTENFOR_PlayerDirectedMob({
 *   snippet: "special_attack",
 *   targetAction: "ranged_attack",
 *   requiredFilterTag: "archer"
 * });
 * @see {@link INPUT_CommandSystem} for action definitions
 * @remarks
 * This system coordinates with tactical interfaces and AI command systems.
 * Filter tags ensure action specificity.
 */
declare function LISTENFOR_PlayerDirectedMob(
  params: PlayerDirectedMobParameters,
): NoReturn;

/**
 * Configuration for player command listeners.
 * Contains action and filter parameters.
 */
declare interface PlayerDirectedMobParameters extends ListenerParams {
  /**
   * Optional action identifier filter.
   */
  targetAction?: TargetAction;

  /**
   * Optional required filter tag for command validation.
   */
  requiredFilterTag?: Tag;

  /**
   * Optional forbidden filter tag for exclusion.
   */
  restrtictedFilterTag?: Tag;
}

/**
 * Registers a listener for structure deconstruction initiations.
 * Monitors when players or systems begin dismantling buildings.
 * @param {DeconstructionStartedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track fortress dismantling
 * LISTENFOR_DeconstructionStarted({
 *   snippet: "fortress_down",
 *   includeTags: ["fortification"],
 *   factionName: "defenders"
 * });
 * @see {@link BUILDING_DeconstructionSystem} for mechanics
 * @remarks
 * Coordinates with resource refund and base management systems.
 * Tag filters allow structure type specialization.
 */
declare function LISTENFOR_DeconstructionStarted(
  params: DeconstructionStartedParameters,
): NoReturn;

/**
 * Configuration for deconstruction listeners.
 * Contains structure identification and ownership filters.
 */
declare interface DeconstructionStartedParameters extends ListenerParams {
  /**
   * Optional structure group restriction.
   */
  entities?: EntityGroup;

  /**
   * Optional deconstructor entity identifier.
   */
  deconstructorEntity?: SingleEntity;

  /**
   * Optional required tags for structure classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional team restriction filter.
   */
  teamName?: TeamName;
}

/**
 * Registers a listener for deferred entity death events.
 * Monitors entities marked for delayed destruction.
 * @param {DeferredDeathParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Handle boss death sequence
 * LISTENFOR_DeferredDeath({
 *   snippet: "boss_death",
 *   entities: [dragonEntity],
 *   includeTags: ["boss"]
 * });
 * @see {@link OUTPUT_SetDeferredDeath} for death marking
 * @remarks
 * Coordinates with cinematic systems and combat resolution.
 * Use for delayed destruction sequences.
 */
declare function LISTENFOR_DeferredDeath(
  params: DeferredDeathParameters,
): NoReturn;

/**
 * Configuration for deferred death listeners.
 * Contains entity classification and ownership filters.
 */
declare interface DeferredDeathParameters extends ListenerParams {
  /**
   * Optional entity group restriction.
   */
  entities?: EntityGroup;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;

  /**
   * Optional team restriction filter.
   */
  teamName?: TeamName;

  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;
}

/**
 * Registers a listener for game rule modification events.
 * Monitors changes to core gameplay parameters.
 * @param {GameRuleChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect difficulty changes
 * LISTENFOR_GameRuleChanged({
 *   snippet: "difficulty_adjust",
 *   ruleName: "game_difficulty",
 *   value: "hard"
 * });
 * @see {@link GAME_RuleSystem} for rule definitions
 * @remarks
 * Rule names must match registered game parameters.
 * Value type depends on specific rule configuration.
 */
declare function LISTENFOR_GameRuleChanged(
  params: GameRuleChangedParameters,
): NoReturn;

/**
 * Configuration for game rule change listeners.
 * Contains rule identification and value parameters.
 */
declare interface GameRuleChangedParameters extends ListenerParams {
  /**
   * REQUIRED game rule identifier.
   */
  ruleName: GameRuleName;

  /**
   * Optional new rule value for specific detection.
   */
  value?: string | number | boolean;
}

/**
 * Registers a listener for player connection events.
 * Monitors when players establish network connections to the game session.
 * @param {PlayerConnectedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track player join events
 * LISTENFOR_PlayerConnected({
 *   snippet: "player_joined",
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT
 * });
 * @see {@link SESSION_ManagementSystem} for connection handling
 * @remarks
 * This system can trigger during loading screen transitions.
 * Coordinates with multiplayer synchronization systems.
 */
declare function LISTENFOR_PlayerConnected(
  params: PlayerConnectedParameters,
): NoReturn;

/**
 * Configuration for player connection listeners.
 * Base interface for session event tracking.
 */
declare interface PlayerConnectedParameters extends ListenerParams {}

/**
 * Registers a listener for player disconnection events.
 * Monitors when players terminate network connections to the game session.
 * @param {PlayerDisconnectedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Cleanup player-specific data
 * LISTENFOR_PlayerDisconnected({
 *   snippet: "player_left",
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT
 * });
 * @see {@link SESSION_ManagementSystem} for disconnection handling
 * @remarks
 * Requires prior connection registration via PlayerConnected.
 * Coordinates with save and cleanup systems.
 */
declare function LISTENFOR_PlayerDisconnected(
  params: PlayerDisconnectedParameters,
): NoReturn;

/**
 * Configuration for player disconnection listeners.
 * Base interface for session termination tracking.
 */
declare interface PlayerDisconnectedParameters extends ListenerParams {}

/**
 * Registers a listener for test scenario initiations.
 * Monitors when specific test cases are activated in development builds.
 * @param {TestStartedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Initialize stress test scenario
 * LISTENFOR_TestStarted({
 *   snippet: "stress_test_init",
 *   testName: "mob_spawn_1000"
 * });
 * @see {@link TEST_Framework} for test management
 * @remarks
 * Test names must match registered QA scenarios.
 * Coordinates with automated testing systems.
 */
declare function LISTENFOR_TestStarted(params: TestStartedParameters): NoReturn;

/**
 * Configuration for test initiation listeners.
 * Contains test identification parameters.
 */
declare interface TestStartedParameters extends ListenerParams {
  /**
   * REQUIRED test scenario identifier.
   */
  testName: TestName;
}

/**
 * Registers a listener for entity disable events.
 * Monitors when entities become inactive or non-operational.
 * @param {EntityDisabledParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track disabled defenses
 * LISTENFOR_EntityDisabled({
 *   snippet: "defenses_down",
 *   villageId: 20
 * });
 * @see {@link ENTITY_StateSystem} for disable mechanics
 * @remarks
 * Coordinates with maintenance and repair systems.
 * Village ID links to ownership metadata.
 */
declare function LISTENFOR_EntityDisabled(
  params: EntityDisabledParameters,
): NoReturn;

/**
 * Configuration for entity disable listeners.
 * Contains identification and ownership parameters.
 */
declare interface EntityDisabledParameters extends ListenerParams {
  /**
   * Optional specific entity identifier.
   */
  disabledEntity?: SingleEntity;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for entity reactivation events.
 * Monitors when disabled entities become operational again.
 * @param {EntityEnabledParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Reactivate traps after cooldown
 * LISTENFOR_EntityEnabled({
 *   snippet: "trap_rearmed",
 *   villageId: 15
 * });
 * @see {@link ENTITY_StateSystem} for enable mechanics
 * @remarks
 * Coordinates with repair and reset systems.
 * Village ID ensures ownership context.
 */
declare function LISTENFOR_EntityEnabled(
  params: EntityEnabledParameters,
): NoReturn;

/**
 * Configuration for entity reactivation listeners.
 * Contains identification and ownership parameters.
 */
declare interface EntityEnabledParameters extends ListenerParams {
  /**
   * Optional specific entity identifier.
   */
  enabledEntity?: SingleEntity;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for generic card activation events.
 * Monitors non-military card plays like objectives or flavor cards.
 * @param {GenericCardPlayedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track objective card usage
 * LISTENFOR_GenericCardPlayed({
 *   snippet: "objective_activated",
 *   cardCategory: "objective",
 *   cardValue: "explore_forest"
 * });
 * @see {@link CARD_GenericSystem} for card definitions
 * @remarks
 * Category filtering ensures specific card type monitoring.
 * Payloads carry card-specific context data.
 */
declare function LISTENFOR_GenericCardPlayed(
  params: GenericCardPlayedParameters,
): NoReturn;

/**
 * Configuration for generic card listeners.
 * Contains category and value filters.
 */
declare interface GenericCardPlayedParameters extends ListenerParams {
  /**
   * REQUIRED card category identifier.
   */
  cardCategory: CardCategory;

  /**
   * Optional specific card value identifier.
   */
  cardValue?: CardValue;
}

/**
 * Registers a listener for advanced command interface toggles.
 * Monitors when players open or close tactical control panels.
 * @param {AdvancedDirectToggleParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Customize command interface
 * LISTENFOR_AdvancedDirectToggle({
 *   snippet: "ui_customize",
 *   onOpen: true
 * });
 * @see {@link UI_CommandSystem} for interface management
 * @remarks
 * State tracking coordinates with input systems and UI visibility.
 * Toggle direction (open/close) determines callback context.
 */
declare function LISTENFOR_AdvancedDirectToggle(
  params: AdvancedDirectToggleParameters,
): NoReturn;

/**
 * Configuration for command interface toggle listeners.
 * Contains state direction parameters.
 */
declare interface AdvancedDirectToggleParameters extends ListenerParams {
  /**
   * Optional toggle direction filter.
   */
  onOpen?: boolean;
}

/**
 * Registers a listener for player readiness confirmation.
 * Monitors when all players confirm readiness to proceed.
 * @param {PlayersReadyParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Start cooperative mission
 * LISTENFOR_PlayersReady({
 *   snippet: "mission_start",
 *   payloadString: "forest_quest"
 * });
 * @see {@link GAME_StartSystem} for readiness coordination
 * @remarks
 * Payloads carry mode/team information for context.
 * Critical for multiplayer synchronization and game start.
 */
declare function LISTENFOR_PlayersReady(
  params: PlayersReadyParameters,
): NoReturn;

/**
 * Configuration for player readiness listeners.
 * Base interface for session start coordination.
 */
declare interface PlayersReadyParameters extends ListenerParams {}

/**
 * Registers a listener for player teleportation events.
 * Monitors all fast-travel actions across the game world.
 * @param {PlayerFastTravelledParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Restrict zone exits
 * LISTENFOR_PlayerFastTravelled({
 *   snippet: "zone_restriction",
 *   villageId: 10
 * });
 * @see {@link TELEPORT_System} for travel mechanics
 * @remarks
 * Coordinates with area boundary systems and progression tracking.
 * Village ID links to origin/destination context.
 */
declare function LISTENFOR_PlayerFastTravelled(
  params: PlayerFastTravelledParameters,
): NoReturn;

/**
 * Configuration for teleportation listeners.
 * Contains village association parameters.
 */
declare interface PlayerFastTravelledParameters extends ListenerParams {}

/**
 * Registers a listener for player mount events.
 * Monitors when players interact with rideable entities.
 * @param {PlayerMountedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Apply mount enhancements
 * LISTENFOR_PlayerMounted({
 *   snippet: "mount_buff",
 *   mountName: "horse_armored"
 * });
 * @see {@link MOUNT_System} for mount management
 * @remarks
 * Mount names must match registered archetypes.
 * Coordinates with ability and mobility systems.
 */
declare function LISTENFOR_PlayerMounted(
  params: PlayerMountedParameters,
): NoReturn;

/**
 * Configuration for mount interaction listeners.
 * Contains mount type identification parameters.
 */
declare interface PlayerMountedParameters extends ListenerParams {
  /**
   * Optional mount archetype filter.
   */
  mountName?: MountArchetype;
}

/**
 * Registers a listener for player actions during invasion simulations.
 * Monitors test scenario interactions that modify campaign states.
 * @param {InvasionPlayerActionsExecutedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track simulated base destruction
 * LISTENFOR_InvasionPlayerActionsExecuted({
 *   snippet: "sim_destroy_base",
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT
 * });
 * @see {@link INVASION_SimulationSystem} for test mechanics
 * @remarks
 * For use exclusively in QA/onboarding scenarios.
 * Does not affect live gameplay systems.
 */
declare function LISTENFOR_InvasionPlayerActionsExecuted(
  params: InvasionPlayerActionsExecutedParameters,
): NoReturn;

/**
 * Configuration for invasion simulation action listeners.
 * Base interface for test scenario monitoring.
 */
declare interface InvasionPlayerActionsExecutedParameters
  extends ListenerParams {}

/**
 * Registers a listener for entity proximity events to players.
 * Requires prior observer setup via OUTPUT_CreatePlayerProximityObserver().
 * @param {EntityEnteredPlayerProximityParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect treasure proximity
 * LISTENFOR_EntityEnteredPlayerProximity({
 *   snippet: "treasure_nearby",
 *   observerName: "treasure_detector"
 * });
 * @see {@link OUTPUT_CreatePlayerProximityObserver} for observer setup
 * @remarks
 * Observer names must match registered proximity configurations.
 * Coordinates with exploration and discovery systems.
 */
declare function LISTENFOR_EntityEnteredPlayerProximity(
  params: EntityEnteredPlayerProximityParameters,
): NoReturn;

/**
 * Configuration for proximity detection listeners.
 * Contains observer identification parameters.
 */
declare interface EntityEnteredPlayerProximityParameters
  extends ListenerParams {
  /**
   * REQUIRED observer configuration identifier.
   */
  observerName: ObserverName;
}

/**
 * Registers a listener for game difficulty modification events.
 * Monitors changes to core challenge parameters.
 * @param {DifficultyChangedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Adjust enemy AI on difficulty change
 * LISTENFOR_DifficultyChanged({
 *   snippet: "ai_adjust",
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT
 * });
 * @see {@link GAME_DifficultySystem} for parameter definitions
 * @remarks
 * Coordinates with AI behavior and combat scaling systems.
 * Network synchronization requires validation.
 */
declare function LISTENFOR_DifficultyChanged(
  params: DifficultyChangedParameters,
): NoReturn;

/**
 * Configuration for difficulty change listeners.
 * Base interface for challenge level monitoring.
 */
declare interface DifficultyChangedParameters extends ListenerParams {}

/**
 * Registers a listener for entity recall events.
 * Monitors when units are withdrawn through recall mechanics.
 * @param {EntityRecalledParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Track recalled scouts
 * LISTENFOR_EntityRecalled({
 *   snippet: "scout_returned",
 *   includeTags: ["scout"],
 *   excludeTags: ["commander"]
 * });
 * @see {@link ENTITY_RecallSystem} for recall mechanics
 * @remarks
 * Tag filters allow specific unit tracking.
 * Coordinates with army management and resource systems.
 */
declare function LISTENFOR_EntityRecalled(
  params: EntityRecalledParameters,
): NoReturn;

/**
 * Configuration for entity recall listeners.
 * Contains classification filters for recalled units.
 */
declare interface EntityRecalledParameters extends ListenerParams {
  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;
}

/**
 * Registers a listener for status effect application events.
 * Monitors when entities receive specific status modifications.
 * @param {StatusEffectStartedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect burning units
 * LISTENFOR_StatusEffectStarted({
 *   snippet: "fire_damage",
 *   statusEffectName: "burning",
 *   factionName: "undead"
 * });
 * @see {@link STATUS_EFFECT_ApplySystem} for effect mechanics
 * @remarks
 * Effect names must match registered status definitions.
 * Coordinates with combat and buff systems.
 */
declare function LISTENFOR_StatusEffectStarted(
  params: StatusEffectStartedParameters,
): NoReturn;

/**
 * Configuration for status effect application listeners.
 * Contains effect identification and entity filters.
 */
declare interface StatusEffectStartedParameters extends ListenerParams {
  /**
   * Optional status effect identifier.
   */
  statusEffectName?: StatusEffectName;

  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for status effect expiration events.
 * Monitors when entity status modifications conclude.
 * @param {StatusEffectExpiredParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect expired stealth effects
 * LISTENFOR_StatusEffectExpired({
 *   snippet: "stealth_end",
 *   statusEffectName: "invisible",
 *   teamName: "player"
 * });
 * @see {@link STATUS_EFFECT_DurationSystem} for timing mechanics
 * @remarks
 * Coordinates with ability cooldown and AI detection systems.
 */
declare function LISTENFOR_StatusEffectExpired(
  params: StatusEffectExpiredParameters,
): NoReturn;

/**
 * Configuration for status effect expiration listeners.
 * Contains effect identification and entity filters.
 */
declare interface StatusEffectExpiredParameters extends ListenerParams {
  /**
   * Optional status effect identifier.
   */
  statusEffectName?: StatusEffectName;

  /**
   * Optional required tags for entity classification.
   */
  includeTags?: TagArray;

  /**
   * Optional forbidden tags for exclusion.
   */
  excludeTags?: TagArray;

  /**
   * Optional village ownership filter.
   */
  villageId?: VillageID;

  /**
   * Optional faction restriction filter.
   */
  factionName?: FactionNameId;
}

/**
 * Registers a listener for voice-over sequence completion.
 * Monitors specific client-side audio cues from predefined sequences.
 * @param {ClientVOCueFinishedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Trigger post-dialogue event
 * LISTENFOR_ClientVOCueFinished({
 *   snippet: "dialogue_complete",
 *   vo_sequence_cue_name: "intro_dialogue"
 * });
 * @see {@link VO_SEQUENCE_DEFINITIONS} for cue registry
 * @remarks
 * WARNING: Not network-safe or persistent across savegames.
 * For onboarding/flatland modes only.
 */
declare function LISTENFOR_ClientVOCueFinished(
  params: ClientVOCueFinishedParameters,
): NoReturn;

/**
 * Configuration for voice-over completion listeners.
 * Contains sequence cue identification parameters.
 */
declare interface ClientVOCueFinishedParameters extends ListenerParams {
  /**
   * REQUIRED voice-over sequence cue identifier.
   */
  vo_sequence_cue_name: VOSequenceName;
}

/**
 * Registers a listener for player-initiated target actions.
 * Monitors specific player inputs like attacks or interactions.
 * @param {PlayerPerformedTargetActionParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Detect structure targeting
 * LISTENFOR_PlayerPerformedTargetAction({
 *   snippet: "target_detected",
 *   targetAction: "attack",
 *   playerEntities: [playerEntity]
 * });
 * @see {@link INPUT_ActionSystem} for action definitions
 * @remarks
 * Target actions must be registered in input mapping systems.
 * Coordinates with combat and UI feedback systems.
 */
declare function LISTENFOR_PlayerPerformedTargetAction(
  params: PlayerPerformedTargetActionParameters,
): NoReturn;

/**
 * Configuration for player action listeners.
 * Contains action identification and entity filters.
 */
declare interface PlayerPerformedTargetActionParameters extends ListenerParams {
  /**
   * REQUIRED target action identifier.
   */
  targetAction: TargetAction;

  /**
   * Optional player entity restriction.
   */
  playerEntities?: EntityGroup;
}

/**
 * Registers a listener for invasion damage request validation.
 * Ensures villages are properly unsuspended for entity damage processing.
 * @param {InvasionAttackV2DamageRequestParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Validate fortress siege damage
 * LISTENFOR_InvasionAttackV2DamageRequest({
 *   snippet: "siege_damage_validate",
 *   villageId: 25
 * });
 * @see {@link INVASION_AttackV2System} for combat mechanics
 * @remarks
 * Coordinates with entity state management during automated attacks.
 * Critical for maintaining valid damage targets without player presence.
 */
declare function LISTENFOR_InvasionAttackV2DamageRequest(
  params: InvasionAttackV2DamageRequestParameters,
): NoReturn;

/**
 * Configuration for invasion damage request listeners.
 * Contains attack context parameters.
 */
declare interface InvasionAttackV2DamageRequestParameters
  extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for post-damage request processing.
 * Triggers one game tick after initial damage requests for result validation.
 * @param {InvasionAttackV2PostDamageRequestParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Verify destruction results
 * LISTENFOR_InvasionAttackV2PostDamageRequest({
 *   snippet: "damage_results",
 *   factionName: "undead"
 * });
 * @see {@link INVASION_AttackV2System} for combat phases
 * @remarks
 * Ensures damage calculations are finalized before processing.
 * Critical for accurate combat result reporting.
 */
declare function LISTENFOR_InvasionAttackV2PostDamageRequest(
  params: InvasionAttackV2PostDamageRequestParameters,
): NoReturn;

/**
 * Configuration for post-damage processing listeners.
 * Contains attack context parameters.
 */
declare interface InvasionAttackV2PostDamageRequestParameters
  extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for invasion attack initiations.
 * Monitors when military operations transition to active phases.
 * @param {InvasionAttackV2StartedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Initialize siege mechanics
 * LISTENFOR_InvasionAttackV2Started({
 *   snippet: "siege_start",
 *   villageId: 30
 * });
 * @see {@link INVASION_Scheduler} for attack timing
 * @remarks
 * Coordinates with AI deployment and resource allocation systems.
 */
declare function LISTENFOR_InvasionAttackV2Started(
  params: InvasionAttackV2StartedParameters,
): NoReturn;

/**
 * Configuration for invasion attack start listeners.
 * Contains operational context parameters.
 */
declare interface InvasionAttackV2StartedParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for invasion attack activations.
 * Monitors when attack plans become active combat scenarios.
 * @param {InvasionAttackV2ActivatedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Activate combat music
 * LISTENFOR_InvasionAttackV2Activated({
 *   snippet: "combat_music",
 *   factionName: "piglin_black"
 * });
 * @see {@link INVASION_ActivationSystem} for state transitions
 * @remarks
 * Coordinates with AI behavior and environment systems.
 */
declare function LISTENFOR_InvasionAttackV2Activated(
  params: InvasionAttackV2ActivatedParameters,
): NoReturn;

/**
 * Configuration for invasion activation listeners.
 * Contains combat context parameters.
 */
declare interface InvasionAttackV2ActivatedParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for abandoned invasion attacks.
 * Monitors when military operations are prematurely terminated.
 * @param {InvasionAttackV2AbandonedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Cleanup aborted siege
 * LISTENFOR_InvasionAttackV2Abandoned({
 *   snippet: "siege_abort",
 *   villageId: 35
 * });
 * @see {@link INVASION_AbandonSystem} for termination mechanics
 * @remarks
 * Coordinates with resource refund and AI reset systems.
 */
declare function LISTENFOR_InvasionAttackV2Abandoned(
  params: InvasionAttackV2AbandonedParameters,
): NoReturn;

/**
 * Configuration for abandoned invasion listeners.
 * Contains operational context parameters.
 */
declare interface InvasionAttackV2AbandonedParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for reactivated invasion attacks.
 * Monitors when terminated operations are resumed.
 * @param {InvasionAttackV2ReactivatedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Reinstate defensive measures
 * LISTENFOR_InvasionAttackV2Reactivated({
 *   snippet: "defense_reactivate",
 *   factionName: "defenders"
 * });
 * @see {@link INVASION_ReactivationSystem} for resume mechanics
 * @remarks
 * Coordinates with persistence and AI coordination systems.
 */
declare function LISTENFOR_InvasionAttackV2Reactivated(
  params: InvasionAttackV2ReactivatedParameters,
): NoReturn;

/**
 * Configuration for reactivated invasion listeners.
 * Contains operational context parameters.
 */
declare interface InvasionAttackV2ReactivatedParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for invasion overtime phases.
 * Monitors when attacks exceed planned duration.
 * @param {InvasionAttackV2OvertimeParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Extend combat timer
 * LISTENFOR_InvasionAttackV2Overtime({
 *   snippet: "overtime_triggered",
 *   villageId: 40
 * });
 * @see {@link INVASION_TimerSystem} for duration management
 * @remarks
 * Coordinates with fatigue and reinforcement systems.
 */
declare function LISTENFOR_InvasionAttackV2Overtime(
  params: InvasionAttackV2OvertimeParameters,
): NoReturn;

/**
 * Configuration for invasion overtime listeners.
 * Contains operational context parameters.
 */
declare interface InvasionAttackV2OvertimeParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for invasion resolution events.
 * Monitors when attack outcomes are determined.
 * @param {InvasionAttackV2ResolveParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Award victory rewards
 * LISTENFOR_InvasionAttackV2Resolve({
 *   snippet: "victory_rewards",
 *   factionName: "player"
 * });
 * @see {@link INVASION_ResolutionSystem} for outcome processing
 * @remarks
 * Coordinates with scoring and progression systems.
 */
declare function LISTENFOR_InvasionAttackV2Resolve(
  params: InvasionAttackV2ResolveParameters,
): NoReturn;

/**
 * Configuration for invasion resolution listeners.
 * Contains combat outcome parameters.
 */
declare interface InvasionAttackV2ResolveParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}

/**
 * Registers a listener for invasion conclusion events.
 * Monitors when military operations fully terminate.
 * @param {InvasionAttackV2EndedParameters} params Listener configuration
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Cleanup battlefield
 * LISTENFOR_InvasionAttackV2Ended({
 *   snippet: "battle_cleanup",
 *   villageId: 45
 * });
 * @see {@link INVASION_CleanupSystem} for termination mechanics
 * @remarks
 * Coordinates with despawn systems and state reset logic.
 */
declare function LISTENFOR_InvasionAttackV2Ended(
  params: InvasionAttackV2EndedParameters,
): NoReturn;

/**
 * Configuration for invasion conclusion listeners.
 * Contains operational context parameters.
 */
declare interface InvasionAttackV2EndedParameters extends ListenerParams {
  /**
   * Optional attacking faction identifier.
   */
  factionName?: FactionNameId;

  /**
   * Optional target village identifier.
   */
  villageId?: VillageID;
}
