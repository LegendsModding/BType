/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Adjusts the resource count for specified entities, modifying team resources if applicable.
 * Resources must be predefined in the game data.
 * @param entities Entities targeted for resource adjustment.
 * @param resourceName Identifier for the resource (e.g., "wood").
 * @param amount Value to add (positive) or subtract (negative).
 * @param overcap Determines if resource caps can be exceeded when adding.
 * @returns {NoReturn}
 * @remarks Team resources are automatically distributed to the entity's associated team. Resource definitions must exist prior to use.
 */
declare function OUTPUT_AddOrRemoveResource(
  entities: EntityGroup,
  resourceName: ResourceName,
  amount: AmountToAddOrSubtract,
  overcap: boolean,
): NoReturn;

/**
 * Modifies team-specific resource quantities. Resources must be predefined in game data.
 * @param team Target team for resource modification.
 * @param resourceName Identifier for the resource (e.g., "stone").
 * @param amount Value to add (positive) or subtract (negative).
 * @param overcap Specifies if resource storage limits can be bypassed.
 * @returns {NoReturn}
 * @remarks This operation affects team-level resource pools rather than individual entities.
 */
declare function OUTPUT_AddOrRemoveTeamResource(
  team: TeamName,
  resourceName: ResourceName,
  amount: AmountToAddOrSubtract,
  overcap: boolean,
): NoReturn;

/**
 * Modifies progress for map-displayed objectives defined in objectives_data.json.
 * @param objectiveName Identifier matching the objective's language file entry.
 * @param amount Progress value adjustment (supports positive/negative values).
 * @returns {NoReturn}
 * @remarks Requires corresponding objective configuration in objectives_data.json to function correctly.
 */
declare function OUTPUT_AddOrSubtractObjectiveProgress(
  objectiveName: ObjectiveName,
  amount: AmountToAddOrSubtract,
): NoReturn;

/**
 * Attaches a metadata tag to specified entities' tag collections.
 * @param entities Target entities for tag addition.
 * @param tag Metadata identifier to associate with entities.
 * @returns {NoReturn}
 * @remarks Tags can be used for entity filtering and identification in game logic.
 */
declare function OUTPUT_AddTag(entities: EntityGroup, tag: Tag): NoReturn;

/**
 * Establishes a physical tether constraint between entities with breakable distance limits.
 * @param rootEntity Primary entity anchoring the tether.
 * @param tetherEntities Secondary entities bound to the root.
 * @param distance Maximum separation before tether breaks.
 * @returns {NoReturn}
 * @remarks Tethers persist until distance threshold is exceeded or entities are destroyed.
 */
declare function OUTPUT_AddTether(
  rootEntity: SingleEntity,
  tetherEntities: EntityGroup,
  distance: MaxDistance,
): NoReturn;

/**
 * Activates persistent visual state changes on entities through presentation events.
 * @param entities Target entities for visual state modification.
 * @param state Presentation event identifier from entity definitions.
 * @returns {NoReturn}
 * @remarks Visual states persist through game saves/loads when using this method.
 */
declare function OUTPUT_AddVisualState(
  entities: EntityGroup,
  state: PresentationEventName,
): NoReturn;

/**
 * Attaches a waypoint marker to an entity using an existing archetype configuration.
 * @param archetype Reference entity archetype defining marker visuals (e.g., "badger:onboarding_waypoint_marker").
 * @param entity Target entity to receive the waypoint marker.
 * @returns {NoReturn}
 * @remarks The archetype must contain valid waypoint_marker component data.
 */
declare function OUTPUT_AddWaypointIconByExistingEntityArchetype(
  archetype: EntityArchetype,
  entity: SingleEntity,
): NoReturn;

/**
 * Displays a localized message in the HUD using predefined text templates.
 * @param messageId Identifier for the message template in hud_text_messages.json.
 * @param params Localization parameters for message formatting.
 * @returns {NoReturn}
 * @remarks Messages require corresponding entries in hud_text_messages.json and localization files.
 */
declare function OUTPUT_Announce(
  messageId: HudTextMessageId,
  params: HudTextMessageParams,
): NoReturn;

/**
 * Interrupts active HUD messages of a specified priority level.
 * @param messagePriority Message priority classification to interrupt.
 * @returns {NoReturn}
 * @remarks Affects all messages of the specified priority across all players.
 */
declare function OUTPUT_AnnounceInterrupt(
  messagePriority: MessagePriority,
): NoReturn;

/**
 * Interrupts HUD messages for a specific player based on priority.
 * @param messagePriority Target message priority classification.
 * @param playerEntity Player entity to target for interruption.
 * @returns {NoReturn}
 * @remarks Only affects messages visible to the specified player entity.
 */
declare function OUTPUT_AnnounceInterruptPlayer(
  messagePriority: MessagePriority,
  playerEntity: SingleEntity,
): NoReturn;

/**
 * Sends a localized HUD message to a specific player entity.
 * @param messageId Identifier for the message template in hud_text_messages.json.
 * @param params Localization parameters for message formatting.
 * @param playerEntity Target player entity for message display.
 * @returns {NoReturn}
 * @remarks Message visibility is restricted to the specified player entity.
 */
declare function OUTPUT_AnnouncePlayer(
  messageId: HudTextMessageId,
  params: HudTextMessageParams,
  playerEntity: SingleEntity,
): NoReturn;

/**
 * Triggers a predefined HUD event sequence animation.
 * @param sequenceId Identifier for the event sequence in HUD configuration.
 * @returns {NoReturn}
 * @remarks Sequences must be defined in hud_event_sequences.json to function properly.
 */
declare function OUTPUT_AnnounceSequence(
  sequenceId: HudEventSequenceId,
): NoReturn;

/**
 * Triggers a HUD event sequence for a specific player entity.
 * @param sequenceId Identifier for the event sequence in HUD configuration.
 * @param playerEntity Target player entity for sequence playback.
 * @returns {NoReturn}
 * @remarks Sequence definitions must exist in hud_event_sequences.json.
 */
declare function OUTPUT_AnnounceSequencePlayer(
  sequenceId: HudEventSequenceId,
  playerEntity: SingleEntity,
): NoReturn;

/**
 * Triggers a HUD event sequence for an entire team.
 * @param sequenceId Identifier for the event sequence in HUD configuration.
 * @param teamName Target team for sequence broadcast.
 * @returns {NoReturn}
 * @remarks Requires valid team name and sequence definition in HUD configuration.
 */
declare function OUTPUT_AnnounceSequenceTeam(
  sequenceId: string,
  teamName: string,
): NoReturn;

/**
 * Sends a localized HUD message to all members of a specified team.
 * @param messageId Identifier for the message template in hud_text_messages.json.
 * @param params Localization parameters for message formatting.
 * @param teamName Target team identifier for message distribution.
 * @returns {NoReturn}
 * @remarks Message visibility is restricted to team members only.
 */
declare function OUTPUT_AnnounceTeam(
  messageId: HudTextMessageId,
  params: HudTextMessageParams,
  teamName: TeamName,
): NoReturn;

/**
 * Extends an existing destroy entities objective with additional target entities.
 * @param villageId Identifier for the village containing the objective.
 * @param entities Additional entities to include in the destruction requirement.
 * @returns {NoReturn}
 * @remarks Does not alter the existing required destruction count, only expands entity targets.
 */
declare function OUTPUT_AppendDestroyEntitiesObjective(
  villageId: VillageID,
  entities: EntityGroup,
): NoReturn;

/**
 * Adds cards to the end of a named deck configuration.
 * @param deckName Identifier for the target deck.
 * @param cards Array of card identifiers to append.
 * @returns {NoReturn}
 * @remarks Deck must be initialized prior to appending cards.
 */
declare function OUTPUT_AppendNamedDeck(
  deckName: DeckName,
  cards: DeckOfCards,
): NoReturn;

/**
 * Adds trigger criteria filters to entities with spatial trigger components.
 * @param entities Target entities with trigger components.
 * @param includeTags Tags that entities must have to activate triggers.
 * @param excludeTags Tags that disqualify entities from triggering.
 * @param allianceRuleFilter Alliance restrictions for triggering entities.
 * @returns {NoReturn}
 * @remarks Modifies badger:trigger_criteria component filters on target entities.
 */
declare function OUTPUT_AppendTriggerCriteriaTags(
  entities: EntityGroup,
  includeTags: TagArray,
  excludeTags: TagArray,
  allianceRuleFilter: AllianceRuleFilter,
): NoReturn;

/**
 * Applies a buff effect to target entities.
 * @param entities Entities to receive the buff.
 * @param buffName Identifier for the buff definition.
 * @returns {NoReturn}
 * @remarks Buffs must be predefined in game data to take effect.
 */
declare function OUTPUT_ApplyBuff(
  entities: EntityGroup,
  buffName: BuffName,
): NoReturn;

/**
 * Adds proximity requirements to a named timer's display conditions.
 * @param timerName Identifier for the target timer.
 * @param entity Reference entity for proximity checks.
 * @param radius Maximum distance from entity to display timer.
 * @returns {NoReturn}
 * @remarks Affects timer visibility based on player proximity to the reference entity.
 */
declare function OUTPUT_ApplyProximityToNamedTimer(
  timerName: TimerName,
  entity: SingleEntity,
  radius: Radius,
): NoReturn;

/**
 * Applies a status effect with duration control to entities.
 * @param entities Target entities for status application.
 * @param statusEffectName Identifier for the status effect.
 * @param strength Multiplier applied to the default effect duration.
 * @returns {NoReturn}
 * @remarks Status effects must be defined in game data with valid duration parameters.
 */
declare function OUTPUT_ApplyStatusEffect(
  entities: EntityGroup,
  statusEffectName: StatusEffectName,
  strength: StatusEffectDurationMultiplier,
): NoReturn;

/**
 * Applies a status effect originating from a specified source entity, enabling effects that require origin tracking (e.g., fear mechanics).
 * @param entities Entities to receive the status effect.
 * @param sourceEntity Entity designated as the effect's origin point.
 * @param statusEffectName Identifier for the status effect definition.
 * @param strength Multiplier applied to the default duration of the effect.
 * @returns {NoReturn}
 * @remarks Status effects must be predefined in game data. Source entity associations enable effects dependent on origin tracking.
 */
declare function OUTPUT_ApplyStatusEffectWithSource(
  entities: EntityGroup,
  sourceEntity: SingleEntity,
  statusEffectName: StatusEffectName,
  strength: StatusEffectDurationMultiplier,
): NoReturn;

/**
 * Modifies team ticket caps based on a player's associated team membership.
 * @param playerEntity Player entity used to identify the target team.
 * @param ticketType Classification of ticket to modify (e.g., build, gather, spawn).
 * @param amount Value to adjust the ticket cap (positive or negative).
 * @returns {NoReturn}
 * @remarks Affects all entities on the same team as the specified player. Ticket types must match game configuration parameters.
 */
declare function OUTPUT_ApplyTicketModifierToPlayerForTeam(
  playerEntity: SingleEntity,
  ticketType: TicketType,
  amount: AmountToAddOrSubtract,
): NoReturn;

/**
 * Adjusts ticket cap values for all members of a specified team.
 * @param teamName Identifier for the target team.
 * @param ticketType Classification of ticket to modify.
 * @param amount Value to adjust the ticket cap.
 * @returns {NoReturn}
 * @remarks Modifications apply uniformly to all team members' ticket allowances.
 */
declare function OUTPUT_ApplyTicketModifierToTeam(
  teamName: TeamName,
  ticketType: TicketType,
  amount: AmountToAddOrSubtract,
): NoReturn;

/**
 * Designates a home base entity for target entities with proximity validation.
 * @param homeBaseEntity Entity serving as the home base reference.
 * @param targetEntities Entities to associate with the home base.
 * @param threshold Distance threshold for home base association validity.
 * @returns {NoReturn}
 * @remarks Threshold parameter determines valid operational range from the home base entity.
 */
declare function OUTPUT_AssignHomeBaseToEntities(
  homeBaseEntity: SingleEntity,
  targetEntities: EntityGroup,
  threshold: Threshold,
): NoReturn;

/**
 * Deducts tickets from a player for each associated entity if sufficient tickets are available.
 * @param playerToDeductTicketsFrom Player entity responsible for ticket deduction.
 * @param entitiesToAssociateTicketCost Entities requiring ticket expenditure.
 * @param ticketName Identifier for the ticket type defined in gametickets.json.
 * @returns {NoReturn}
 * @remarks Each entity in the group consumes one ticket of the specified type. Ticket definitions must exist in gametickets.json.
 */
declare function OUTPUT_AssignTicketsToMobsIfAble(
  playerToDeductTicketsFrom: SingleEntity,
  entitiesToAssociateTicketCost: EntityGroup,
  ticketName: TicketName, // TODO: Check if this matches ticketType.
): NoReturn;

/**
 * Binds entities to a control group for organizational management.
 * @param sourceEntities Entities to be assigned to the control group.
 * @param controlGroupEntity Control group entity managing the association.
 * @returns {NoReturn}
 * @remarks Replaces any existing control group assignments for the specified entities.
 */
declare function OUTPUT_AssignToControlGroup(
  sourceEntities: EntityGroup,
  controlGroupEntity: SingleEntity,
): NoReturn;

/**
 * Links entities to a spawner for recall and population management purposes.
 * @param spawner Spawner entity with badger:buildable_spawner configuration.
 * @param entitiesToAssociate Entities to register with the spawner.
 * @returns {NoReturn}
 * @remarks Requires proper spawner configuration with badger:lost_entity_recall_point components and matching entity tags.
 */
declare function OUTPUT_AssociateMobWithSpawner(
  spawner: SingleEntity,
  entitiesToAssociate: EntityGroup,
): NoReturn;

/**
 * Triggers the campaign conclusion interface and transitions players to the main menu.
 * @returns {NoReturn}
 * @remarks Currently implements a universal return to main menu for all players.
 */
declare function OUTPUT_CampaignEndMenu(): NoReturn;

/**
 * Terminates pending horde invasion actions targeting specified villages.
 * @param targetVillageEntities Village entities targeted by the invasion actions.
 * @returns {NoReturn}
 * @remarks Specifically cancels horde-type invasions without explicit source entities.
 */
declare function OUTPUT_CancelHordeDelayedInvasionActions(
  targetVillageEntities: EntityGroup,
): NoReturn;

/**
 * Establishes a territorial claim for a horde faction at a specified location.
 * @param horde Faction identifier for the claiming horde.
 * @param positionEntity Reference entity determining the claim's positional coordinates.
 * @param radius Radius of the claimed area in world units.
 * @returns {ClaimedAreaEntity} Entity representing the newly claimed area.
 * @remarks Utilizes placement system coordinates from the provided entity. Claimed areas persist according to game rules.
 */
declare function OUTPUT_ClaimArea(
  horde: FactionNameId,
  positionEntity: SingleEntity,
  radius: Radius,
): ClaimedAreaEntity;

/**
 * Resets compass range restrictions to default values.
 * @param entityToClearOverride Compass entity to reset.
 * @returns {NoReturn}
 * @remarks Removes any custom max range overrides applied to the compass entity.
 */
declare function OUTPUT_ClearOverrideForCompassMaxRange(
  entityToClearOverride: SingleEntity,
): NoReturn;

/**
 * Records telemetry data for analytics purposes.
 * @param propertyName Identifier for the telemetry property.
 * @param propertyValue Value associated with the telemetry property.
 * @returns {NoReturn}
 * @remarks Used for tracking game metrics and player behavior patterns.
 */
declare function OUTPUT_CollectTelemetryInfo(
  propertyName: TelemetryProperty,
  propertyValue: TelemetryValue,
): NoReturn;

/**
 * Issues a follow command to all entities within a control group, directing them to pursue a target entity.
 * @param controlGroupEntity Control group entity managing the follower group.
 * @param targetPositionEntity Entity to be followed by the control group members.
 * @returns {NoReturn}
 * @remarks Affects both current and future members of the control group. Requires valid target entity positioning data.
 */
declare function OUTPUT_ControlGroupFollow(
  controlGroupEntity: SingleEntity,
  targetPositionEntity: SingleEntity,
): NoReturn;

/**
 * Directs control group entities to follow an AI-controlled entity's navigation path.
 * @param controlGroupEntity Control group entity containing follower units.
 * @param aiEntity AI-driven entity providing movement trajectory.
 * @returns {NoReturn}
 * @remarks Followers will maintain proximity to the AI entity's pathing logic.
 */
declare function OUTPUT_ControlGroupFollowAI(
  controlGroupEntity: SingleEntity,
  aiEntity: SingleEntity,
): NoReturn;

/**
 * Commands control group entities to move to a specified position entity with arrival tolerance parameters.
 * @param controlGroupEntity Control group entity issuing movement orders.
 * @param targetPositionEntity Destination position reference entity.
 * @param arrivalPadding Acceptable distance from target to consider movement complete.
 * @returns {NoReturn}
 * @remarks Affects all current and future members of the control group. Padding defines success radius in world units.
 */
declare function OUTPUT_ControlGroupMoveToCurrentPosition(
  controlGroupEntity: SingleEntity,
  targetPositionEntity: SingleEntity,
  arrivalPadding: PaddingAmount,
): NoReturn;

/**
 * Establishes a persistent world streaming request anchored to an entity's position.
 * @param entity Central entity for streaming calculations.
 * @param range Streaming radius around the entity.
 * @param requestType Priority classification from world_stream.json.
 * @param group Streaming request association group.
 * @returns {NoReturn}
 * @remarks Grouped requests maintain contiguous chunk loading between grouped entities. Range defines streaming radius in world units.
 */
declare function OUTPUT_CreatePersistentWorldRequest(
  entity: SingleEntity,
  range: Radius,
  requestType: WorldStreamRequestType,
  group: WorldStreamRequestGroup,
): NoReturn;

/**
 * Creates a proximity monitoring system for player interactions within a defined radius.
 * @param observerName Unique identifier for the proximity observer.
 * @param allianceRuleFilter Alliance restriction criteria for entity detection.
 * @param includeTags Required tags for entity inclusion.
 * @param excludeTags Disqualifying tags for entity exclusion.
 * @param radius Detection radius in world units.
 * @returns {NoReturn}
 * @remarks Requires LISTENFOR_EntityEnteredPlayerProximity registration for event handling. Duplicate observer names will cause runtime errors.
 */
declare function OUTPUT_CreatePlayerProximityObserver(
  observerName: ObserverName,
  allianceRuleFilter: AllianceRuleFilter,
  includeTags: TagArray,
  excludeTags: TagArray,
  radius: Radius,
): NoReturn;

/**
 * Generates a trigger volume matching village boundaries with configurable padding and filters.
 * @param villageId Target village identifier.
 * @param padding Additional boundary extension in world units.
 * @param includeTags Required entity tags for trigger activation.
 * @param excludeTags Disqualifying entity tags for trigger suppression.
 * @param allianceRuleFilter Alliance-based activation criteria.
 * @returns {TriggerVolumeEntity} Entity representing the created trigger volume.
 * @remarks Trigger volume dimensions are dynamically calculated based on village bounds plus padding.
 */
declare function OUTPUT_CreateVillageTriggerVolume(
  villageId: VillageID,
  padding: PaddingAmount,
  includeTags: TagArray,
  excludeTags: TagArray,
  allianceRuleFilter: AllianceRuleFilter,
): TriggerVolumeEntity;

/**
 * Forcefully removes all population-capped entities within a village, including suspended instances.
 * @param villageId Target village identifier.
 * @returns {NoReturn}
 * @remarks Intended for internal use with B# helper functions. May cause unexpected behavior if used directly.
 */
declare function OUTPUT_CullPopCappedEntitiesInVillage(
  villageId: VillageID,
): NoReturn;

/**
 * Applies direct damage to entities based on their HealthComponent values.
 * @param entities Target entities to receive damage.
 * @param damage Absolute damage value to apply.
 * @returns {NoReturn}
 * @remarks Entities without HealthComponent will ignore this effect. Use OUTPUT_DestroyEntities for entity removal.
 */
declare function OUTPUT_DamageEntities(
  entities: EntityGroup,
  damage: DamageAmount,
): NoReturn;

/**
 * Inflicts percentage-based damage relative to entities' maximum health values.
 * @param entities Target entities to receive damage.
 * @param damagePercent Percentage of max health to deduct (0-100 range).
 * @returns {NoReturn}
 * @remarks Requires HealthAttribute component on target entities. Values exceeding 100% will be clamped.
 */
declare function OUTPUT_DamageEntitiesByPercentage(
  entities: EntityGroup,
  damagePercent: DamagePercent,
): NoReturn;

/**
 * Outputs debug messages to the console with severity-based filtering.
 * @param message Text content for the log entry.
 * @param level Severity level (0=Verbose, 1=Info, 2=Warning, 3=Error).
 * @returns {NoReturn}
 * @remarks Requires `dev_areafilter_string:SCRIPTING` in options.txt to display. Prefer using helper functions (Logv/Logi/Logw/Loge) for standardized logging.
 */
declare function OUTPUT_DebugLog(
  message: LogMessage,
  level: LogLevel,
): NoReturn;

/**
 * Outputs deck configuration details to the console with optional sub-card visibility.
 * @param deck Target deck object for inspection.
 * @param includeSubCards Flag to enable detailed sub-card logging.
 * @example OUTPUT_DebugLogDeck(worldDeck, true);
 * @returns {NoReturn}
 * @remarks Deck structure is logged with hierarchical formatting when sub-cards are included.
 */
declare function OUTPUT_DebugLogDeck(
  deck: DeckOfCards,
  includeSubCards: boolean,
): NoReturn;

/**
 * Records invasion-related debug information to the ImGUI debugging interface.
 * @param message Text content to log in the invasion debug panel.
 * @returns {NoReturn}
 * @remarks Requires ImGUI debug window configuration to display output.
 */
declare function OUTPUT_DebugLogInvasion(message: LogMessage): NoReturn;

/**
 * Logs named deck contents to the console with configurable detail levels.
 * @see OUTPUT_SetNamedDeck
 * @param deckName Identifier for the target deck configuration.
 * @param includeSubCards Toggle for displaying nested card structures.
 * @returns {NoReturn}
 * @remarks Deck must be previously registered via OUTPUT_SetNamedDeck to produce output.
 */
declare function OUTPUT_DebugLogNamedDeck(
  deckName: DeckName,
  includeSubCards: boolean,
): NoReturn;

/**
 * Terminates active performance timer and logs elapsed time since last OUTPUT_DebugTimeStart.
 * @returns {NoReturn}
 * @remarks Requires prior call to OUTPUT_DebugTimeStart to avoid runtime errors.
 */
declare function OUTPUT_DebugTimeEnd(): NoReturn;

/**
 * Initializes debug performance timer for execution time measurements.
 * @returns {NoReturn}
 * @remarks Must be paired with OUTPUT_DebugTimeEnd to capture timing data.
 */
declare function OUTPUT_DebugTimeStart(): NoReturn;

/**
 * Forcefully removes and refunds tagged buildings from a village entity.
 * @param villageEntity Target village entity containing buildings.
 * @param tags Inclusive list of tags identifying buildings for deconstruction.
 * @returns {NoReturn}
 * @remarks Processes only one request per village per frame. Handles suspended village states automatically.
 */
declare function OUTPUT_DeconstructVillageBuildings(
  villageEntity: SingleEntity,
  tags: TagArray,
): NoReturn;

/**
 * Removes a named timer associated with a specific entity.
 * @param entity Entity containing the timer component.
 * @param timerName Identifier for the timer to delete.
 * @returns {NoReturn}
 * @remarks Timer must exist on the entity prior to deletion.
 */
declare function OUTPUT_DeleteEntityTimer(
  entity: SingleEntity,
  timerName: TimerName,
): NoReturn;

/**
 * Removes trigger volumes associated with a listener snippet.
 * @param snippetName Identifier for the listener snippet.
 * @returns {NoReturn}
 * @remarks Affects all trigger volumes created by the specified snippet.
 */
declare function OUTPUT_DeleteListenerTriggerVolumes(
  snippetName: SnippetName,
): NoReturn;

/**
 * Destroys a globally registered timer by name.
 * @param timerName Identifier for the global timer.
 * @returns {NoReturn}
 * @remarks Timer must have been previously created with a global scope.
 */
declare function OUTPUT_DeleteNamedTimer(timerName: TimerName): NoReturn;

/**
 * Immediately removes entities from the game world without destruction effects.
 * @param entities Target entities for despawn.
 * @returns {NoReturn}
 * @remarks Bypasses normal destruction animations and scoring systems.
 */
declare function OUTPUT_DespawnEntities(entities: EntityGroup): NoReturn;

/**
 * Removes village entities from the game world without destruction sequences.
 * @param entities Target village entities.
 * @returns {NoReturn}
 * @remarks Does not trigger village destruction events or animations.
 */
declare function OUTPUT_DespawnVillageEntities(entities: EntityGroup): NoReturn;

/**
 * Triggers entity destruction with full animation and game system interactions.
 * @param entities Entities marked for destruction.
 * @returns {NoReturn}
 * @remarks Activates death animations, score calculations, and other destruction-related systems.
 */
declare function OUTPUT_DestroyEntities(entities: EntityGroup): NoReturn;

/**
 * Removes village entities through standard destruction processes.
 * @param entities Target village entities.
 * @returns {NoReturn}
 * @remarks Triggers village destruction events and associated systems.
 */
declare function OUTPUT_DestroyVillageEntities(entities: EntityGroup): NoReturn;

/**
 * Suppresses cinematic death sequences for entities with badger:cinematic_death components.
 * @param dyingEntity Entity undergoing destruction.
 * @returns {NoReturn}
 * @remarks Must be called exclusively within SNIPPET_DeferredDeath event handlers.
 */
declare function OUTPUT_DisableDeathCinematic(
  dyingEntity: SingleEntity,
): NoReturn;

/**
 * Removes home base associations from entities based on proximity criteria.
 * @param homeBaseEntity Reference home base entity.
 * @param targetEntities Entities to dissociate from the home base.
 * @param threshold Distance threshold for disassociation.
 * @returns {NoReturn}
 * @remarks Entities outside the threshold lose home base affiliation.
 */
declare function OUTPUT_DisableHomeBaseForEntities(
  homeBaseEntity: SingleEntity,
  targetEntities: EntityGroup,
  threshold: Threshold,
): NoReturn;

/**
 * Dismounts a player entity from its current mount.
 * @param playerEntity Player entity to dismount.
 * @returns {NoReturn}
 * @remarks Only applicable to players currently in a mounted state.
 */
declare function OUTPUT_DismountPlayer(playerEntity: SingleEntity): NoReturn;

/**
 * Triggers a tutorial system notification for player entry into a village.
 * @param village Village entity being entered.
 * @param player Player entity triggering the event.
 * @returns {NoReturn}
 * @remarks Consult programming team before use. Designed for tutorial progression tracking.
 */
declare function OUTPUT_DispatchPlayerEnteredVillageNotice(
  village: SingleEntity,
  player: SingleEntity,
): NoReturn;

/**
 * Controls visibility and behavior of a globally displayed timer.
 * @param timerName Identifier for the timer.
 * @param isDisplayed Toggle for timer visibility.
 * @param countsDown Direction of timer progression.
 * @returns {NoReturn}
 * @remarks Only one global timer can be displayed simultaneously.
 */
declare function OUTPUT_DisplayNamedTimer(
  timerName: TimerName,
  isDisplayed: boolean,
  countsDown: boolean,
): NoReturn;

/**
 * Initiates an invasion disruption action against a piglin base.
 * @requires BSharpPlacement
 * @param baseId Target village identifier.
 * @param hidden Suppresses map telegraphing until action completion.
 * @returns {NoReturn}
 * @remarks Listen for LISTENFOR_InvasionOopsApply to handle post-action logic.
 */
declare function OUTPUT_DoInvasionOops(
  baseId: VillageID,
  hidden: boolean,
): NoReturn;

/**
 * Performs a piglin base upgrade with configurable parameters.
 * @see OUTPUT_SetOwnerVillageById For entity ownership management.
 * @see QUERY_GetEntitiesOwnedByVillage For entity ownership verification.
 * @requires BSharpPlacement
 * @param baseId Target village identifier.
 * @param newArchetype New village entity configuration.
 * @param newSize Village scale definition from villages.json.
 * @param dependOnPlayerProximity Restrict upgrade to player-absent conditions.
 * @param stampTextureKey Identifier for terrain texture application.
 * @param stampTextureName Texture asset name for terrain modification.
 * @param destroyUnmarkedStructures Remove non-critical structures during upgrade.
 * @returns {NoReturn}
 * @remarks Maintains village ID continuity while replacing entity configurations.
 */
declare function OUTPUT_DoInvasionUpgrade(
  baseId: VillageID,
  newArchetype: VillageArchetype,
  newSize: VillageSize,
  dependOnPlayerProximity: boolean,
  stampTextureKey: StampTextureKey,
  stampTextureName: StampTextureName,
  destroyUnmarkedStructures: boolean,
): NoReturn;

/**
 * Finalizes invasion planning phase and prepares for execution.
 * @see SNIPPET_InvasionIntentionsDrawn For post-draw event handling.
 * @returns {NoReturn}
 * @remarks Must be called after processing all invasion intention cards.
 */
declare function OUTPUT_DrawInvasionIntentions(): NoReturn;

/**
 * Concludes an active invasion attack with specified outcome.
 * @param invasionId Identifier for the invasion instance.
 * @param isSuccess True for player victory, false for defeat.
 * @returns {NoReturn}
 * @remarks Triggers appropriate post-invasion cleanup and state transitions.
 */
declare function OUTPUT_EndInvasionAttackV2(
  invasionId: InvasionID,
  isSuccess: boolean,
): NoReturn;

/**
 * Forces match conclusion with victory conditions.
 * @param winningTeam Identifier for the victorious team.
 * @returns {NoReturn}
 * @remarks Triggers LISTENFOR_GlobalVariableChanged handlers for GAME_MODE_GLOBAL.matchEnded.
 */
declare function OUTPUT_EndMatch(winningTeam: TeamName): NoReturn;

/**
 * Processes all pending non-thwarted invasion actions.
 * @returns {NoReturn}
 * @remarks Intended for execution during dusk phase processing.
 */
declare function OUTPUT_ExecuteAllDelayedInvasionActions(): NoReturn;

/**
 * Signals readiness to transition from planning to execution phase.
 * @returns {NoReturn}
 * @remarks Must be called after all invasion intentions are processed.
 */
declare function OUTPUT_ExecuteInvasionActionsReady(): NoReturn;

/**
 * Accelerates village attack state progression for specified entities.
 * @param villageEntities Villages under attack to advance.
 * @returns {NoReturn}
 * @remarks Affects only villages in STARTED, ACTIVE, or ABANDONED attack states.
 */
declare function OUTPUT_FastForwardVillageAttacks(
  villageEntities: EntityGroup,
): NoReturn;

/**
 * Marks entities as processed in ECS tracking systems.
 * @param entities Entities to flag as visited.
 * @example OUTPUT_FlagEntityAsVisited(shrineEntities);
 * @returns {NoReturn}
 * @remarks Used for tracking interaction states and preventing reprocessing.
 */
declare function OUTPUT_FlagEntityAsVisited(entities: EntityGroup): NoReturn;

/**
 * Triggers a visual alert on the lives counter UI element.
 * @param team Target team identifier.
 * @param flashSeconds Duration of the visual effect.
 * @returns {NoReturn}
 * @remarks Highlights life count changes for player awareness.
 */
declare function OUTPUT_FlashLivesCounter(
  team: TeamName,
  flashSeconds: NumberOfSeconds,
): NoReturn;

/**
 * Activates a visual alert effect on a displayed global timer for a specified duration.
 * @param timerName Identifier for the target timer.
 * @param flashSeconds Duration of the flashing effect in seconds.
 * @returns {NoReturn}
 * @remarks Flashing effect draws attention to timer state changes without altering timer functionality.
 */
declare function OUTPUT_FlashNamedTimer(
  timerName: TimerName,
  flashSeconds: NumberOfSeconds,
): NoReturn;

/**
 * @deprecated This function is obsolete and should not be used in new implementations.
 * @param name Deprecated parameter with undefined behavior.
 * @param size Deprecated parameter with undefined behavior.
 * @param faction Deprecated parameter with undefined behavior.
 * @param team Deprecated parameter with undefined behavior.
 * @param location Deprecated parameter with undefined behavior.
 * @param blocksEast Deprecated parameter with undefined behavior.
 * @returns {NoReturn}
 * @remarks This legacy function remains only for backward compatibility and may be removed in future updates.
 */
declare function OUTPUT_HackSpawnVillage(
  name: string,
  size: string,
  faction: string,
  team: string,
  location: number,
  blocksEast: number,
): NoReturn;

/**
 * Forces specified players to exit the tutorial and restart the campaign.
 * @param playerEntities Players to disconnect from the current session.
 * @returns {NoReturn}
 * @remarks Automatically handles client disconnection and campaign restart procedures.
 */
declare function OUTPUT_HaveClientExitTutorial(
  playerEntities: EntityGroup,
): NoReturn;

/**
 * Requests engine-level preparation of villages involved in an invasion attack for damage application.
 * @param invasionId Identifier for the invasion attack context.
 * @returns {NoReturn}
 * @remarks Required to make villages available for scripted damage operations during attacks.
 */
declare function OUTPUT_InvasionAttackV2RequestDamage(
  invasionId: InvasionID,
): NoReturn;

/**
 * Finalizes resolution of active invasion actions during dawn processing.
 * @returns {NoReturn}
 * @remarks Intended for end-of-invasion cleanup and state transitions.
 */
declare function OUTPUT_InvasionResolveActiveActions(): NoReturn;

/**
 * Removes entities from association with a control group.
 * @param sourceEntities Entities to dissociate from the control group.
 * @param controlGroupEntity Control group entity managing membership.
 * @returns {NoReturn}
 * @remarks Does not affect entities' operational state outside of control group membership.
 */
declare function OUTPUT_LeaveControlGroup(
  sourceEntities: EntityGroup,
  controlGroupEntity: SingleEntity,
): NoReturn;

/**
 * Freezes or resumes day/night cycle progression.
 * @param lock Boolean flag to halt (true) or resume (false) time progression.
 * @example OUTPUT_LockDayNightCycle(true);
 * @returns {NoReturn}
 * @remarks Affects all time-dependent systems including lighting and scheduled events. Network synchronized across all clients.
 */
declare function OUTPUT_LockDayNightCycle(lock: boolean): NoReturn;

/**
 * Removes a key-value entry from map controller entities.
 * @param entities Map controller entities to modify.
 * @param key Identifier for the entry to remove.
 * @returns {NoReturn}
 * @remarks Permanently deletes the specified key-value pair from all targeted map controllers.
 */
declare function OUTPUT_MapRemoveKey(
  entities: EntityGroup,
  key: MapKey,
): NoReturn;

/**
 * Deletes a team-specific key-value entry from map controller entities.
 * @param entities Map controller entities to modify.
 * @param teamName Target team identifier.
 * @param key Identifier for the team-specific entry to remove.
 * @returns {NoReturn}
 * @remarks Removes the key-value pair exclusively for the specified team's data context.
 */
declare function OUTPUT_MapRemoveTeamKey(
  entities: EntityGroup,
  teamName: TeamName,
  key: MapKey,
): NoReturn;

/**
 * Creates or updates a key-value entry in map controller entities.
 * @param entities Target map controller entities.
 * @param key Identifier for the entry.
 * @param value Data value to store.
 * @returns {NoReturn}
 * @remarks Overwrites existing entries with matching keys. Persists through game sessions.
 */
declare function OUTPUT_MapSetKeyValue(
  entities: EntityGroup,
  key: MapKey,
  value: MapKeyValue,
): NoReturn;

/**
 * Modifies the activation range for a labeled player trigger in map controllers.
 * @param villageEntity Map controller entity containing the trigger configuration.
 * @param rangeLabel Identifier for the trigger range in player_triggers configuration.
 * @param newRange Updated trigger range value (must be ≥ 0).
 * @returns {NoReturn}
 * @remarks Requires valid badger:map_controller component configuration with corresponding trigger labels.
 */
declare function OUTPUT_MapSetPlayerTriggerRange(
  villageEntity: SingleEntity,
  rangeLabel: BSharpLabel,
  newRange: TriggerRange,
): NoReturn;

/**
 * Creates or updates a team-specific key-value entry in map controller entities.
 * @param entities Target map controller entities.
 * @param teamName Team context for the data entry.
 * @param key Identifier for the team-specific entry.
 * @param value Data value to store.
 * @returns {NoReturn}
 * @remarks Maintains separate key-value storage per team within the same map controller entities.
 */
declare function OUTPUT_MapSetTeamKeyValue(
  entities: EntityGroup,
  teamName: TeamName,
  key: MapKey,
  value: MapKeyValue,
): NoReturn;

/**
 * Mounts a player entity onto a specified mount archetype.
 * @param playerEntity Player entity to mount.
 * @param mountArchetype Archetype identifier for the mount (e.g., "badger:animal_bird").
 * @returns {NoReturn}
 * @remarks Mount behavior is determined by the archetype's configuration.
 */
declare function OUTPUT_MountPlayer(
  playerEntity: SingleEntity,
  mountArchetype: MountArchetype,
): NoReturn;

/**
 * Directs entities to move to a target entity while ignoring enemy encounters.
 * @param sourceEntities Entities to mobilize.
 * @param destEntity Target entity for destination coordinates.
 * @param padding Stopping distance from the target entity.
 * @param callback Snippet name to execute upon arrival.
 * @returns {NoReturn}
 * @remarks Movement path dynamically updates if the target entity moves.
 */
declare function OUTPUT_Move(
  sourceEntities: EntityGroup,
  destEntity: SingleEntity,
  padding: PaddingAmount,
  callback: SnippetName,
): NoReturn;

/**
 * Directs entities to move to a target entity while engaging hostile entities along the path.
 * @param sourceEntities Entities to mobilize.
 * @param destEntity Target entity for destination coordinates.
 * @param callback Snippet name to execute upon arrival.
 * @returns {NoReturn}
 * @remarks Movement path dynamically updates if the target entity moves.
 */
declare function OUTPUT_MoveAttackEntity(
  sourceEntities: EntityGroup,
  destEntity: SingleEntity,
  callback: SnippetName,
): NoReturn;

/**
 * Directs entities to move to a fixed position while engaging hostile entities along the path.
 * @param sourceEntities Entities to mobilize.
 * @param destEntity Entity providing initial destination coordinates.
 * @param range Stopping distance from the target position.
 * @param callback Snippet name to execute upon arrival.
 * @returns {NoReturn}
 * @remarks Destination coordinates are fixed at function call time.
 */
declare function OUTPUT_MoveAttackPosition(
  sourceEntities: EntityGroup,
  destEntity: SingleEntity,
  range: Distance,
  callback: SnippetName,
): NoReturn;

/**
 * Directs entities to move to a fixed position while ignoring enemy encounters.
 * @param sourceEntities Entities to mobilize.
 * @param destEntity Entity providing initial destination coordinates.
 * @param padding Stopping distance from the target position.
 * @param callback Snippet name to execute upon arrival.
 * @returns {NoReturn}
 * @remarks Destination coordinates are fixed at function call time.
 */
declare function OUTPUT_MovePosition(
  sourceEntities: EntityGroup,
  destEntity: SingleEntity,
  padding: PaddingAmount,
  callback: SnippetName,
): NoReturn;

/**
 * Adjusts entity orientation to face a target entity.
 * @param srcEntities Entities to reorient.
 * @param orientEntity Target entity for orientation alignment.
 * @returns {NoReturn}
 * @remarks WARNING: May cause abrupt camera adjustments if applied to player entities.
 */
declare function OUTPUT_OrientEntitiesToEntity(
  srcEntities: EntityGroup,
  orientEntity: SingleEntity,
): NoReturn;

/**
 * Adjusts entity orientation to a specified yaw angle.
 * @param srcEntities Entities to reorient.
 * @param yaw Target angle in radians.
 * @returns {NoReturn}
 * @remarks Preserves player camera orientation during teleportation operations.
 */
declare function OUTPUT_OrientEntitiesToYaw(
  srcEntities: EntityGroup,
  yaw: Yaw,
): NoReturn;

/**
 * Overrides the death cinematic for entities with badger:cinematic_death components.
 * @param cineName Identifier for the replacement cinematic.
 * @param dyingEntity Entity undergoing destruction.
 * @returns {number}
 * @remarks Must be called exclusively within SNIPPET_DeferredDeath handlers.
 */
declare function OUTPUT_OverrideDeathCinematic(
  cineName: CinematicName,
  dyingEntity: SingleEntity,
): number; // TODO: Need to check what this returns.

/**
 * Applies faction-specific appearance overrides to entities.
 * @param entities Target entities for visual updates.
 * @param factionOverrideName Faction identifier (e.g., "faction.pig.attack").
 * @returns {NoReturn}
 * @remarks Must be called during the same frame as entity creation.
 */
declare function OUTPUT_OverrideFactionAppearanceByName(
  entities: EntityGroup,
  factionOverrideName: FactionNameId,
): NoReturn;

/**
 * Replaces trigger criteria filters for entities with badger:trigger_criteria components.
 * @see "badger:spatial_trigger_zone"
 * @param entities Target entities with trigger components.
 * @param includeTags New inclusion tags.
 * @param excludeTags New exclusion tags.
 * @param allianceRuleFilter New alliance rule filter.
 * @returns {NoReturn}
 * @remarks Completely replaces existing trigger criteria configurations.
 */
declare function OUTPUT_OverwriteTriggerCriteriaTags(
  entities: EntityGroup,
  includeTags: TagArray,
  excludeTags: TagArray,
  allianceRuleFilter: AllianceRuleFilter,
): NoReturn;

/**
 * Globally modifies exclusion filters for trigger volumes matching specific criteria.
 * @param newExcludeTags Updated exclusion tags.
 * @param forIncludeTagsIncluding Required inclusion tags in existing filters.
 * @param forIncludeTagsExcluding Forbidden inclusion tags in existing filters.
 * @param forExcludeTagsIncluding Required exclusion tags in existing filters.
 * @param forExcludeTagsExcluding Forbidden exclusion tags in existing filters.
 * @param optionalAllianceRule Alliance rule filter (use ALLIANCE_PATCH_ALL for universal application).
 * @returns {NoReturn}
 * @remarks Selectively updates trigger volumes based on current filter configurations.
 */
declare function OUTPUT_PatchTriggerVolumeExcludeFilter(
  newExcludeTags: TagArray,
  forIncludeTagsIncluding: TagArray,
  forIncludeTagsExcluding: TagArray,
  forExcludeTagsIncluding: TagArray,
  forExcludeTagsExcluding: TagArray,
  optionalAllianceRule: AllianceRuleFilter,
): NoReturn;

/**
 * Globally modifies inclusion and exclusion filters for trigger volumes matching specific criteria.
 * @param newIncludeTags Updated inclusion tags.
 * @param newExcludeTags Updated exclusion tags.
 * @param forIncludeTagsIncluding Required inclusion tags in existing filters.
 * @param forIncludeTagsExcluding Forbidden inclusion tags in existing filters.
 * @param forExcludeTagsIncluding Required exclusion tags in existing filters.
 * @param forExcludeTagsExcluding Forbidden exclusion tags in existing filters.
 * @param optionalAllianceRule Alliance rule filter (use ALLIANCE_PATCH_ALL for universal application).
 * @returns {NoReturn}
 * @remarks Selectively updates trigger volumes based on current filter configurations.
 */
declare function OUTPUT_PatchTriggerVolumeFilter(
  newIncludeTags: TagArray,
  newExcludeTags: TagArray,
  forIncludeTagsIncluding: TagArray,
  forIncludeTagsExcluding: TagArray,
  forExcludeTagsIncluding: TagArray,
  forExcludeTagsExcluding: TagArray,
  optionalAllianceRule: AllianceRuleFilter,
): NoReturn;

/**
 * Globally modifies inclusion filters for trigger volumes matching specific criteria.
 * @param newIncludeTags Updated inclusion tags.
 * @param forIncludeTagsIncluding Required inclusion tags in existing filters.
 * @param forIncludeTagsExcluding Forbidden inclusion tags in existing filters.
 * @param forExcludeTagsIncluding Required exclusion tags in existing filters.
 * @param forExcludeTagsExcluding Forbidden exclusion tags in existing filters.
 * @param optionalAllianceRule Alliance rule filter (use ALLIANCE_PATCH_ALL for universal application).
 * @returns {NoReturn}
 * @remarks Selectively updates trigger volumes based on current filter configurations.
 */
declare function OUTPUT_PatchTriggerVolumeIncludeFilter(
  newIncludeTags: TagArray,
  forIncludeTagsIncluding: TagArray,
  forIncludeTagsExcluding: TagArray,
  forExcludeTagsIncluding: TagArray,
  forExcludeTagsExcluding: TagArray,
  optionalAllianceRule: AllianceRuleFilter,
): NoReturn;

/**
 * Pauses the specified global timer, halting its progression.
 * @param timerName Identifier for the timer to pause.
 * @returns {NoReturn}
 * @remarks Affects timer state without modifying its displayed value or configuration.
 */
declare function OUTPUT_PauseNamedTimer(timerName: TimerName): NoReturn;

/**
 * Adds a spatial placement rule prioritizing proximity to specified entities.
 * @param originEntities Reference entities for proximity calculations.
 * @param weight Influence factor relative to other placement rules.
 * @returns {NoReturn}
 * @remarks Higher weights increase priority for closest position selection.
 */
declare function OUTPUT_PlacementAddClosestProximityRule(
  originEntities: EntityGroup,
  weight: WeightNum,
): NoReturn;

/**
 * Adds a spatial exclusion rule for areas near faction-controlled territories.
 * @param hordeName Faction identifier for claimed area ownership.
 * @param radius Exclusion padding around claimed area boundaries.
 * @returns {NoReturn}
 * @remarks Prevents placement within the specified distance of faction territories.
 */
declare function OUTPUT_PlacementAddExcludeClaimedAreasProximityRule(
  hordeName: FactionNameId,
  radius: Radius,
): NoReturn;

/**
 * Adds a spatial exclusion rule for ocean-adjacent areas.
 * @param distance Minimum allowed distance from ocean biomes.
 * @returns {NoReturn}
 * @remarks Enforces placement in inland regions beyond the specified ocean buffer.
 */
declare function OUTPUT_PlacementAddExcludeOceanProximityRule(
  distance: Distance,
): NoReturn;

/**
 * Adds a spatial exclusion rule based on entity proximity donuts.
 * @param originEntities Reference entities for exclusion zone centers.
 * @param distance Radius defining exclusion circles around each entity.
 * @param numRequired Minimum valid exclusion zones a position must satisfy.
 * @returns {NoReturn}
 * @remarks Valid positions must lie outside at least `numRequired` exclusion circles.
 */
declare function OUTPUT_PlacementAddExcludeProximityRule(
  originEntities: EntityGroup,
  distance: Radius,
  numRequired: AmountRequired,
): NoReturn;

/**
 * Adds a spatial placement rule prioritizing maximum distance from entities.
 * @param originEntities Reference entities for distance calculations.
 * @param weight Influence factor relative to other placement rules.
 * @returns {NoReturn}
 * @remarks Higher weights increase priority for farthest position selection.
 */
declare function OUTPUT_PlacementAddFarthestProximityRule(
  originEntities: EntityGroup,
  weight: WeightNum,
): NoReturn;

/**
 * Adds a spatial inclusion rule for donut-shaped faction territory regions.
 * @param hordeName Faction identifier for claimed area ownership.
 * @param minDistance Inner boundary from territory centers.
 * @param maxDistance Outer boundary from territory centers.
 * @returns {NoReturn}
 * @remarks Valid positions must lie within the annular region between min/max distances.
 */
declare function OUTPUT_PlacementAddIncludeClaimedAreasProximityRule(
  hordeName: FactionNameId,
  minDistance: MinDistance,
  maxDistance: MaxDistance,
): NoReturn;

/**
 * Adds a spatial inclusion rule based on entity proximity donuts.
 * @param originEntities Reference entities for inclusion zone centers.
 * @param minDistance Inner radius of valid annular regions.
 * @param maxDistance Outer radius of valid annular regions.
 * @param numRequired Minimum valid inclusion zones a position must satisfy.
 * @returns {NoReturn}
 * @remarks Valid positions must lie within at least `numRequired` annular regions.
 */
declare function OUTPUT_PlacementAddIncludeProximityRule(
  originEntities: EntityGroup,
  minDistance: MinDistance,
  maxDistance: MaxDistance,
  numRequired: AmountRequired,
): NoReturn;

/**
 * Adds a spatial inclusion rule for concentric regions within faction territories.
 * @param hordeName Faction identifier for claimed area ownership.
 * @param innerCirclePadding Minimum distance from territory centers.
 * @param outerCirclePadding Maximum distance from territory centers.
 * @returns {NoReturn}
 * @remarks Restricts placement to annular regions within faction-controlled areas.
 */
declare function OUTPUT_PlacementAddInsideClaimedAreasProximityRule(
  hordeName: FactionNameId,
  innerCirclePadding: PaddingAmount,
  outerCirclePadding: PaddingAmount,
): NoReturn;

/**
 * Adds a spatial inclusion rule restricting placement to a specific world slice.
 * @param sliceIndex Target slice identifier for placement confinement.
 * @returns {NoReturn}
 * @remarks Limits valid positions to the specified world slice segment.
 */
declare function OUTPUT_PlacementAddInsideWorldSliceProximityRule(
  sliceIndex: SliceIndex,
): NoReturn;

/**
 * Establishes a maximum elevation boundary for placement operations.
 * @param maxHeight Maximum allowable block height for valid positions.
 * @returns {NoReturn}
 * @remarks Positions above this height will be excluded from placement results.
 */
declare function OUTPUT_PlacementAddMaxElevationRule(
  maxHeight: MaxHeight,
): NoReturn;

/**
 * Establishes a minimum elevation boundary for placement operations.
 * @param minHeight Minimum allowable block height for valid positions.
 * @returns {NoReturn}
 * @remarks Positions below this height will be excluded from placement results.
 */
declare function OUTPUT_PlacementAddMinElevationRule(
  minHeight: MinHeight,
): NoReturn;

/**
 * Activates diagnostic logging for subsequent placement operations.
 * @returns {NoReturn}
 * @remarks Generates detailed console reports on placement success rates and rule conflicts. Intended for development use only.
 */
declare function OUTPUT_PlacementEnableDebugLogging(): NoReturn;

/**
 * Configures maximum texture stamp boundaries for village expansion scenarios.
 * @param entity Reference entity for placement calculations.
 * @param stampTextureName Identifier for the maximum texture stamp configuration.
 * @returns {NoReturn}
 * @remarks Affects village growth boundaries during procedural generation.
 */
declare function OUTPUT_PlacementEntitySetMaximumVillageTextureStamp(
  entity: SingleEntity,
  stampTextureName: StampTextureName,
): NoReturn;

/**
 * Modifies texture stamp configurations for placement entities.
 * @param entity Target placement entity.
 * @param textureKey Identifier for the texture configuration.
 * @param stampTextureName Texture asset identifier.
 * @param destroyUnmarkedStructures Flag to remove non-critical structures during stamp application.
 * @returns {NoReturn}
 * @remarks Updates both new and existing texture stamp configurations.
 */
declare function OUTPUT_PlacementEntityUpdateTextureStamp(
  entity: SingleEntity,
  textureKey: StampTextureKey,
  stampTextureName: StampTextureName,
  destroyUnmarkedStructures: boolean,
): NoReturn;

/**
 * Executes configured placement rules and returns success status.
 * @returns {boolean} True if placement succeeded, false otherwise.
 * @remarks Results can be analyzed using QUERY functions post-execution.
 */
declare function OUTPUT_PlacementExecute(): boolean;

/**
 * Adds biome preference weighting to placement calculations.
 * @param biomeNames Comma-separated list of valid biome identifiers.
 * @param weight Influence factor relative to other placement rules.
 * @returns {NoReturn}
 * @remarks Valid biome identifiers include: jungle, drylands, forest, close_ocean, mountain_parent_valleys, frostlands, wetlands, fateful_land_campaign, brokenlands_ridge, grasslands, brokenlands.
 */
declare function OUTPUT_PlacementPreferBiomeRule(
  biomeNames: BiomeIdentifier[],
  weight: WeightNum,
): NoReturn;

/**
 * Removes specified texture stamp configurations.
 * @param textureKey Identifier for the texture configuration to remove.
 * @returns {NoReturn}
 * @remarks Does not affect currently applied texture stamps.
 */
declare function OUTPUT_PlacementRemoveTextureStamp(
  textureKey: StampTextureKey,
): NoReturn;

/**
 * Configures village texture stamp avoidance parameters.
 * @param villageEntities Villages with texture stamps to avoid.
 * @param textureStampToEvaluate Reference texture stamp for boundary calculations.
 * @param padding Adjustment factor for stamp boundary dimensions.
 * @param avoidSelf Flag to exclude current placement slot from evaluation.
 * @returns {NoReturn}
 * @remarks Considers both current and maximum potential village stamp boundaries.
 */
declare function OUTPUT_PlacementSetAvoidVillageTextureStampsRule(
  villageEntities: EntityGroup,
  textureStampToEvaluate: StampTextureName, // TODO: Check which.
  padding: PaddingAmount,
  avoidSelf: boolean,
): NoReturn;

/**
 * Sets maximum texture stamp boundaries for the most recent placement operation.
 * @param stampTextureName Identifier for the maximum texture stamp configuration.
 * @returns {NoReturn}
 * @remarks Automatically applies to the last executed placement sequence.
 */
declare function OUTPUT_PlacementSetMaximumVillageTextureStamp(
  stampTextureName: StampTextureName,
): NoReturn;

/**
 * Defines primary proximity constraints for placement operations.
 * @param entities Reference entities for proximity calculations.
 * @param minDistance Minimum valid distance from reference points.
 * @param maxDistance Maximum valid distance from reference points.
 * @returns {NoReturn}
 * @remarks Must be called once per placement sequence. Defines annular valid regions around each entity.
 */
declare function OUTPUT_PlacementSetPrimaryProximityRule(
  entities: EntityGroup,
  minDistance: MinDistance,
  maxDistance: MaxDistance,
): NoReturn;

/**
 * Restricts placement operations to specific slot configurations.
 * @param slotTagName Identifier for valid slot configurations.
 * @returns {NoReturn}
 * @remarks Corresponds to 'placement_name' definitions in world generation data.
 */
declare function OUTPUT_PlacementSlotTag(
  slotTagName: SlotPlacementName,
): NoReturn;

/**
 * Initializes a new placement operation sequence.
 * @returns {NoReturn}
 * @remarks Must be called before setting any placement rules. Fails if a sequence is already active.
 */
declare function OUTPUT_PlacementStart(): NoReturn;

/**
 * Applies texture stamp modifications to placement results.
 * @param textureKey Identifier for the texture configuration.
 * @param stampTextureName Texture asset identifier.
 * @param destroyUnmarkedStructures Flag to remove non-critical structures during application.
 * @returns {NoReturn}
 * @remarks Only applicable when placement was executed in slot mode.
 */
declare function OUTPUT_PlacementUpdateTextureStamp(
  textureKey: StampTextureKey,
  stampTextureName: StampTextureName,
  destroyUnmarkedStructures: boolean,
): NoReturn;

/**
 * Restricts placement operations to slots occupied by specified villages.
 * @param villageEntities Villages whose associated slots will form the placement candidate pool.
 * @returns {NoReturn}
 * @remarks Non-slot villages in the group are ignored. Placement candidates are filtered to match village-associated slots.
 */
declare function OUTPUT_PlacementVillageSlots(
  villageEntities: EntityGroup,
): NoReturn;

/**
 * Draws and executes a generic card from a specified deck, associating it with a village's variation data.
 * @param deck Identifier for the target deck configuration.
 * @param villageId Village identifier for variation data binding.
 * @returns {string} Resulting card identifier or status.
 * @remarks Card execution may affect village configuration and objective tracking based on deck definitions.
 */
declare function OUTPUT_PlayGenericCardFromNamedDeck(
  deck: DeckName,
  villageId: VillageID,
): string; // TODO

/**
 * Triggers playback of a 2D audio clip globally across all clients.
 * @param audioName Identifier for the 2D audio clip asset.
 * @returns {NoReturn}
 * @remarks 3D-positioned audio clips will play at world origin (0,0,0) if used. Ensure audio asset is configured for 2D playback.
 */
declare function OUTPUT_PlayGlobalAudio(audioName: AudioName): NoReturn;

/**
 * Executes a horde-type card from a specified deck configuration.
 * @param deck Identifier for the horde deck to draw from.
 * @returns {NoReturn}
 * @remarks Horde cards typically manage enemy wave spawning and behavior patterns.
 */
declare function OUTPUT_PlayHordeCardFromNamedDeck(deck: DeckName): NoReturn;

/**
 * Executes an invasion-type card from a specified deck configuration.
 * @param deck Identifier for the invasion deck to draw from.
 * @returns {NoReturn}
 * @remarks Invasion cards control territory capture and conflict escalation mechanics.
 */
declare function OUTPUT_PlayInvasionCardFromNamedDeck(deck: DeckName): NoReturn;

/**
 * Clears any manually set time overrides affecting audio ambience systems.
 * @returns {NoReturn}
 * @remarks Reverts ambience timing to natural game clock progression.
 */
declare function OUTPUT_RemoveAmbienceTimeOfDayOverride(): NoReturn;

/**
 * Removes specified buff effects from target entities.
 * @param entities Entities to debuff.
 * @param buffName Identifier for the buff effect to remove.
 * @returns {NoReturn}
 * @remarks Only active buffs matching the name are affected. No action occurs for unapplied buffs.
 */
declare function OUTPUT_RemoveBuff(
  entities: EntityGroup,
  buffName: BuffName,
): NoReturn;

/**
 * Dissociates destroy entities objective from a village.
 * @param villageId Target village identifier.
 * @returns {NoReturn}
 * @remarks Removes objective tracking but does not destroy existing entities.
 */
declare function OUTPUT_RemoveDestroyEntitiesObjective(
  villageId: VillageID,
): NoReturn;

/**
 * Removes leash constraints from entities if present.
 * @param entitiesWithLeash Entities potentially affected by leash mechanics.
 * @returns {NoReturn}
 * @remarks Safe to call on entities without active leashes - no error occurs.
 */
declare function OUTPUT_RemoveLeash(entitiesWithLeash: EntityGroup): NoReturn;

/**
 * Destroys all event listeners referencing a specific snippet.
 * @param snippetName Identifier for the target snippet.
 * @returns {NoReturn}
 * @remarks Removes listeners across all event types associated with the snippet.
 */
declare function OUTPUT_RemoveListeners(snippetName: SnippetName): NoReturn;

/**
 * Removes a persistent world streaming request by its composite identifier.
 * @param entity Entity associated with the streaming request.
 * @param requestType Classification of the streaming request.
 * @param group Streaming request association group.
 * @returns {NoReturn}
 * @remarks Exact parameter match required for successful removal.
 */
declare function OUTPUT_RemovePersistentWorldRequest(
  entity: SingleEntity,
  requestType: WorldStreamRequestType,
  group: WorldStreamRequestGroup,
): NoReturn;

/**
 * Destroys a player proximity observer by name.
 * @param observerName Identifier for the target observer.
 * @returns {NoReturn}
 * @remarks Throws runtime error if observer does not exist.
 */
declare function OUTPUT_RemovePlayerProximityObserver(
  observerName: ObserverName,
): NoReturn;

/**
 * Removes specified tags from entity metadata collections.
 * @param entities Target entities for tag removal.
 * @param tag Metadata identifier to remove.
 * @returns {NoReturn}
 * @remarks Does not affect entities lacking the specified tag.
 */
declare function OUTPUT_RemoveTag(entities: EntityGroup, tag: Tag): NoReturn;

/**
 * Dissolves tether connections between entities.
 * @param rootEntity Primary entity hosting the tether constraint.
 * @param tetherEntities Secondary entities to release from tether.
 * @returns {NoReturn}
 * @remarks Breaks all specified tether connections immediately.
 */
declare function OUTPUT_RemoveTether(
  rootEntity: SingleEntity,
  tetherEntities: EntityGroup,
): NoReturn;

/**
 * Removes persistent visual state modifications from entities.
 * @param entities Target entities for state removal.
 * @param state Presentation event identifier to clear.
 * @returns {NoReturn}
 * @remarks Reverts visual states to their default configurations.
 */
declare function OUTPUT_RemoveVisualState(
  entities: EntityGroup,
  state: PresentationEventName,
): NoReturn;

/**
 * Removes waypoint marker components from entities.
 * @param entity Entities to strip of waypoint markers.
 * @returns {NoReturn}
 * @remarks Only affects entities with active badger:waypoint_marker components.
 */
declare function OUTPUT_RemoveWaypointIcon(entity: EntityGroup): NoReturn;

/**
 * Resets barracks spawner configuration to default parameters.
 * @param entities Target barracks spawner entities.
 * @returns {NoReturn}
 * @remarks Clears any custom spawn type overrides.
 */
declare function OUTPUT_ResetBarracksSpawnTypes(
  entities: EntityGroup,
): NoReturn;

/**
 * Restores default behavioral patterns for entities.
 * @param entities Target entities for behavior reset.
 * @returns {NoReturn}
 * @remarks Reverts any temporary AI modifications or overrides.
 */
declare function OUTPUT_ResetBehavior(entities: EntityGroup): NoReturn;

/**
 * Resumes progression of a paused global timer.
 * @param timerName Identifier for the timer to resume.
 * @returns {NoReturn}
 * @remarks Maintains accumulated time values from before pausing.
 */
declare function OUTPUT_ResumeNamedTimer(timerName: TimerName): NoReturn;

/**
 * Captures microprofiler performance data for analysis.
 * @param id Identifier for the profiling session.
 * @param numFrames Number of frames to capture.
 * @returns {NoReturn}
 * @remarks Performance data is saved for debugging and optimization use.
 */
declare function OUTPUT_SaveProfilerFrames(
  id: string,
  numFrames: number,
): NoReturn;

/**
 * Broadcasts audio announcer messages to specified teams.
 * @param messageReceiverTeam Target team identifier.
 * @param messageType Classification of the message.
 * @param messageDescription Contextual message details.
 * @returns {NoReturn}
 * @remarks Message audio is played according to team-specific configurations.
 */
declare function OUTPUT_SendAnnouncerMessage(
  messageReceiverTeam: string,
  messageType: string,
  messageDescription: string,
): NoReturn;

/**
 * Broadcasts synchronized global events to all connected clients.
 * @param eventName Unique identifier for the event.
 * @param eventType Category/classification of the event.
 * @returns {NoReturn}
 * @example OUTPUT_SendGlobalEventToAll("STATE_NIGHT_TIME", "TimeSystem");
 * @remarks Events propagate to all clients regardless of player proximity or state.
 */
declare function OUTPUT_SendGlobalEventToAll(
  eventName: string,
  eventType: string,
): NoReturn;

/**
 * Sends synchronized global events to specified player entities.
 * @param eventName Unique identifier for the event.
 * @param eventType Category/classification of the event.
 * @param players Target player entities for event reception.
 * @returns {NoReturn}
 * @remarks Events propagate only to specified players' clients.
 */
declare function OUTPUT_SendGlobalEventToPlayers(
  eventName: string,
  eventType: string,
  players: EntityGroup,
): NoReturn;

/**
 * Broadcasts synchronized global events to clients belonging to a specified team.
 * @param eventName Unique identifier for the event type.
 * @param eventType Category/classification of the event.
 * @param teamName Target team identifier for event distribution.
 * @returns {NoReturn}
 * @remarks Events propagate only to clients associated with the specified team. Maintains network synchronization integrity.
 */
declare function OUTPUT_SendGlobalEventToTeam(
  eventName: string,
  eventType: string,
  teamName: string,
): NoReturn;

/**
 * Triggers positional audio events at specified entity locations for all clients.
 * @param audioName Identifier for the diegetic audio effect (one-shot).
 * @param positionEntities Entities defining 3D audio source positions.
 * @returns {NoReturn}
 * @remarks Audio playback occurs at entity coordinates with spatial audio properties. Requires valid FMOD event configuration.
 */
declare function OUTPUT_SendPositionalAudio(
  audioName: string,
  positionEntities: EntityGroup,
): NoReturn;

/**
 * Triggers positional audio events at specified entity locations for team-specific clients.
 * @param audioName Identifier for the diegetic audio effect (one-shot).
 * @param positionEntities Entities defining 3D audio source positions.
 * @param teamName Target team for audio event reception.
 * @returns {NoReturn}
 * @remarks Combines spatial audio positioning with team-based access control.
 */
declare function OUTPUT_SendPositionalAudioToTeam(
  audioName: string,
  positionEntities: EntityGroup,
  teamName: string,
): NoReturn;

/**
 * Removes a key-value entry from the server's global map state.
 * @param key Identifier for the state entry to delete.
 * @returns {NoReturn}
 * @remarks Affects persistent world state data visible to all clients. No action occurs if the key doesn't exist.
 */
declare function OUTPUT_ServerMapRemoveKey(key: string): NoReturn;

/**
 * Modifies server-wide persistent state data synchronized across all clients.
 * @param key Unique identifier for the state entry.
 * @param value Data value to store (string representation required).
 * @example OUTPUT_ServerMapSetKeyValue("campaign.phase", "exploration");
 * @returns {NoReturn}
 * @remarks Core mechanism for maintaining persistent world state. Values persist through game sessions and server restarts.
 */
declare function OUTPUT_ServerMapSetKeyValue(
  key: string,
  value: string,
): NoReturn;

/**
 * Overrides the time parameter used by audio ambience systems.
 * @param timeOfDay Time value (0-24) representing the hour of day.
 * @returns {NoReturn}
 * @remarks Forces audio ambience systems to use specified time regardless of actual game clock. Reset with OUTPUT_RemoveAmbienceTimeOfDayOverride().
 */
declare function OUTPUT_SetAmbienceTimeOfDayOverride(
  timeOfDay: number,
): NoReturn;

/**
 * Modifies entity attack mode configurations using target action definitions.
 * @param entities Target entities with badger:target_actions components.
 * @param attackMode Identifier for the target action behavior.
 * @param on Activation state for the attack mode.
 * @returns {NoReturn}
 * @remarks WARNING: Do not call in the same frame as OUTPUT_SetBehavior. Relies on valid target_actions component configurations.
 */
declare function OUTPUT_SetAttackMode(
  entities: EntityGroup,
  attackMode: string,
  on: boolean,
): NoReturn;

/**
 * Sets synchronized audio parameters accessible to FMOD systems.
 * @param variableName Identifier for the audio parameter.
 * @param value Floating-point value to assign.
 * @returns {NoReturn}
 * @remarks Parameters propagate to all clients and persist between game sessions. Used for dynamic audio mixing and effects.
 */
declare function OUTPUT_SetAudioVariable(
  variableName: string,
  value: number,
): NoReturn;

/**
 * Configures barracks spawner batch processing parameters.
 * @param entities Target barracks spawner entities.
 * @param batch New number of units to process per spawn cycle.
 * @returns {NoReturn}
 * @remarks Affects spawn rate and grouping behavior. Must align with spawner capacity constraints.
 */
declare function OUTPUT_SetBarracksBatchSize(
  entities: EntityGroup,
  batch: number,
): NoReturn;

/**
 * Configures maximum spawn capacity for barracks entities.
 * @param entities Target barracks spawner entities.
 * @param cap Maximum number of simultaneous spawns allowed.
 * @returns {NoReturn}
 * @remarks Directly modifies spawn cap parameters without validation against current population. Requires valid badger:barracks_spawner component configurations.
 */
declare function OUTPUT_SetBarracksSpawnCap(
  entities: EntityGroup,
  cap: number,
): NoReturn;

/**
 * Adjusts spawn interval duration for barracks entities.
 * @param entities Target barracks spawner entities.
 * @param rate Seconds between spawn cycles.
 * @returns {NoReturn}
 * @remarks Affects spawn timing mechanics while preserving existing spawn queues. Must align with game balance parameters.
 */
declare function OUTPUT_SetBarracksSpawnRate(
  entities: EntityGroup,
  rate: number,
): NoReturn;

/**
 * Overrides spawn type configurations for barracks entities.
 * @param entities Target barracks spawner entities.
 * @param spawnTypes Array of entity archetype identifiers for spawnable units.
 * @returns {NoReturn}
 * @remarks Replaces existing spawn type configurations completely. Ensure compatibility with barracks' structural capabilities.
 */
declare function OUTPUT_SetBarracksSpawnTypes(
  entities: EntityGroup,
  spawnTypes: string[],
): NoReturn;

/**
 * Assigns behavioral patterns to entities through component overrides.
 * @param entities Target entities with compatible behavior components.
 * @param behavior Identifier for the behavior definition (e.g., "badger:behavior_curious").
 * @returns {NoReturn}
 * @remarks Behavior definitions must exist in entity configuration data. Overrides existing behaviors without merging.
 */
declare function OUTPUT_SetBehavior(
  entities: EntityGroup,
  behavior: string,
): NoReturn;

/**
 * Modifies global cinematic control parameters.
 * @param variableName Identifier for the cinematic variable (e.g., "cinematic_skippable").
 * @param value Boolean state to assign.
 * @returns {NoReturn}
 * @remarks Affects cinematic playback controls across all active sequences. Variables must be predefined in cinematic systems.
 */
declare function OUTPUT_SetCinematicVariable(
  variableName: string,
  value: boolean,
): NoReturn;

/**
 * Toggles deferred death handling for entities with HealthComponent.
 * @param entities Target entities for death deferral.
 * @param isDeferred Flag to enable/disable script-based death handling.
 * @returns {NoReturn}
 * @remarks Deferred entities require manual destruction handling. Unhandled deaths trigger after 60 seconds. Does not affect immediate destruction calls.
 */
declare function OUTPUT_SetDeferredDeath(
  entities: EntityGroup,
  isDeferred: boolean,
): NoReturn;

/**
 * Registers a deferred invasion action with configurable parameters.
 * @param sourceVillageEntity Initiating village entity for the invasion.
 * @param invasionAction Identifier for the invasion behavior type.
 * @param targetVillageEntities Destination villages for the invasion action.
 * @param hidden Visibility flag for map telegraphing.
 * @param factionName Responsible piglin faction identifier.
 * @param strength Scaling factor for invasion intensity.
 * @returns {NoReturn}
 * @remarks Hidden actions only suppress pre-execution indicators. Final execution at night always displays map markers. Requires valid faction configurations.
 */
declare function OUTPUT_SetDelayedInvasionAction(
  sourceVillageEntity: SingleEntity,
  invasionAction: string,
  targetVillageEntities: EntityGroup,
  hidden: boolean,
  factionName: string,
  strength: number,
): NoReturn;

/**
 * Toggles cinematic triggers based on entity health states.
 * @param entities Target entities with badger:disable_by_health_cinematic components.
 * @param isEnabled Activation state for the cinematic trigger system.
 * @returns {NoReturn}
 * @remarks Requires valid component configuration to function. Affects death cinematic triggers based on health thresholds.
 */
declare function OUTPUT_SetDisableByHealthCinematicState(
  entities: EntityGroup,
  isEnabled: boolean,
): NoReturn;

/**
 * Changes active music emitter states for audio-capable entities.
 * @see badger:music_emitter_state in music_emitter.json
 * @param entities Target entities with music_emitter components.
 * @param trackName Identifier for the music state configuration.
 * @returns {NoReturn}
 * @remarks Track names must correspond to entries in music_emitter.json state arrays. Affects ongoing audio playback immediately.
 */
declare function OUTPUT_SetEmitterState(
  entities: EntityGroup,
  trackName: string,
): NoReturn;

/**
 * Modifies HUD element emphasis states for all players.
 * @param hudItemId Identifier for the HUD element.
 * @param emphasizedState Activation flag for emphasis display.
 * @returns {NoReturn}
 * @remarks Affects all connected clients uniformly. HUD item must exist in interface configurations.
 */
declare function OUTPUT_SetEmphasizedHUDItem(
  hudItemId: string,
  emphasizedState: boolean,
): NoReturn;

/**
 * @deprecated Use barracks configuration functions instead.
 * @param villageId Target village identifier.
 * @param count Engineer population target (no longer functional).
 * @returns {NoReturn}
 * @remarks This legacy function remains for backward compatibility but has no operational effect. Configure engineers via badger:barracks_spawner component parameters.
 */
declare function OUTPUT_SetEngineerCount(
  villageId: VillageID,
  count: number,
): NoReturn;

/**
 * @deprecated Configure via badger:engineer_station component parameters.
 * @param villageId Target village identifier.
 * @param delaySeconds Reassignment delay value (no longer functional).
 * @returns {NoReturn}
 * @remarks Superseded by component-based configuration in village JSON files. This function performs no operational changes.
 */
declare function OUTPUT_SetEngineerReassignmentDelay(
  villageId: VillageID,
  delaySeconds: number,
): NoReturn;

/**
 * Initializes or modifies entity-local timer values.
 * @param entity Entity hosting the timer component.
 * @param timerName Identifier for the timer instance.
 * @param timerValue Initial time value in seconds.
 * @returns {NoReturn}
 */
declare function OUTPUT_SetEntityTimer(
  entity: SingleEntity,
  timerName: string,
  timerValue: number,
): NoReturn;

/**
 * Assigns faction ownership to specified entities through component modification.
 * @param entities Target entities for faction ownership transfer.
 * @param factionName Identifier for the faction to assign.
 * @returns {NoReturn}
 * @remarks Affects entity allegiance systems and AI behavior. Faction must be defined in game data.
 */
declare function OUTPUT_SetFactionByName(
  entities: EntityGroup,
  factionName: string,
): NoReturn;

/**
 * Modifies fast travel permissions for village portals.
 * @param villageId Target village identifier.
 * @param enable Activation state for portal functionality.
 * @example OUTPUT_SetFastTravelEnabled(5, false);
 * @returns {NoReturn}
 * @remarks Portal becomes non-functional decoration when disabled. Affects all players regardless of team affiliation.
 */
declare function OUTPUT_SetFastTravelEnabled(
  villageId: VillageID,
  enable: boolean,
): NoReturn;

/**
 * Updates global variable values for persistent game state management.
 * @param variableName Identifier for the global variable.
 * @param variableValue Numerical value to assign.
 * @example OUTPUT_SetGlobalVariable("game_started", 1);
 * @returns {NoReturn}
 * @remarks For non-persistent data, use alternative storage mechanisms. Value changes propagate to all game systems.
 */
declare function OUTPUT_SetGlobalVariable(
  variableName: string,
  variableValue: number,
): NoReturn;

/**
 * Adjusts entity health values as a percentage of maximum capacity.
 * @param entities Target entities with HealthComponent.
 * @param healthPercent Percentage value (0-100) representing health proportion.
 * @returns {NoReturn}
 * @remarks Values outside 0-100 range will be clamped. Triggers health-related systems like death checks.
 */
declare function OUTPUT_SetHealthPercent(
  entities: EntityGroup,
  healthPercent: number,
): NoReturn;

/**
 * Configures maximum visibility distance for entity icons.
 * @param entities Target entities with icon components.
 * @param distance Maximum view range in world units.
 * @returns {NoReturn}
 * @remarks Affects minimap/icon rendering distances. Does not modify entity interaction ranges.
 */
declare function OUTPUT_SetIconMaxDistance(
  entities: EntityGroup,
  distance: number,
): NoReturn;

/**
 * Configures minimum visibility distance for entity icons.
 * @param entities Target entities with icon components.
 * @param distance Minimum view range in world units.
 * @returns {NoReturn}
 * @remarks Icons become visible only when within this range. Does not affect interaction mechanics.
 */
declare function OUTPUT_SetIconMinDistance(
  entities: EntityGroup,
  distance: number,
): NoReturn;

/**
 * Disables icon visibility for entities with icon components.
 * @param entities Target entities to modify.
 * @returns {NoReturn}
 * @remarks Toggles icon rendering state without removing component data. Use OUTPUT_SetIconOn to reactivate.
 */
declare function OUTPUT_SetIconOff(entities: EntityGroup): NoReturn;

/**
 * Enables icon visibility for entities with icon components.
 * @param entities Target entities to modify.
 * @returns {NoReturn}
 * @remarks Restores icon rendering based on existing component configurations.
 */
declare function OUTPUT_SetIconOn(entities: EntityGroup): NoReturn;

/**
 * Updates waypoint marker icon visual assets.
 * @param entities Target entities with waypoint_marker components.
 * @param iconPath URI path to the replacement icon texture.
 * @returns {NoReturn}
 * @remarks Icon must be a valid texture resource. Maintains existing marker behavior while changing visuals.
 */
declare function OUTPUT_SetIconPath(
  entities: EntityGroup,
  iconPath: string,
): NoReturn;

/**
 * Modifies compass icon rendering priority for entities.
 * @param entities Target entities with compass icon components.
 * @param priority New priority value for icon display order.
 * @returns {NoReturn}
 * @remarks Higher values override lower-priority icons. Affects UI layering and visibility hierarchies.
 */
declare function OUTPUT_SetIconPriority(
  entities: EntityGroup,
  priority: number,
): NoReturn;

/**
 * Toggles entity influence responsiveness.
 * @param entities Target entities with influenceable components.
 * @param isInfluenceable Activation state for influence mechanics.
 * @returns {NoReturn}
 * @remarks Immediately cancels active movement orders. Affects AI decision-making and player command systems.
 */
declare function OUTPUT_SetInfluenceable(
  entities: EntityGroup,
  isInfluenceable: boolean,
): NoReturn;

/**
 * Enables or disables interaction capabilities for specified entities.
 * @param entity Target interactable entity.
 * @param enabled Activation state for interaction mechanics.
 * @returns {NoReturn}
 * @remarks Only affects entities with valid interactable components. Disabled interactions remain visible but non-functional.
 */
declare function OUTPUT_SetInteractionState(
  entity: SingleEntity,
  enabled: boolean,
): NoReturn;

/**
 * Modifies entity invulnerability status while maintaining destruction capabilities.
 * @param entities Target entities for invulnerability modification.
 * @param isInvulnerable Activation flag for damage immunity.
 * @returns {NoReturn}
 * @remarks Invulnerable entities ignore damage but can still be destroyed via OUTPUT_DestroyEntities or despawned. Does not affect status effect applications.
 */
declare function OUTPUT_SetInvulnerable(
  entities: EntityGroup,
  isInvulnerable: boolean,
): NoReturn;

/**
 * Modifies entity invulnerability with visual effect parameters.
 * @param entities Target entities for modification.
 * @param isInvulnerable Activation flag for damage immunity.
 * @param effectIndex Visual effect identifier for invulnerability representation.
 * @returns {NoReturn}
 * @remarks Effect index corresponds to predefined visual states. Invulnerable entities retain destruction eligibility through explicit commands.
 */
declare function OUTPUT_SetInvulnerableWithEffect(
  entities: EntityGroup,
  isInvulnerable: boolean,
  effectIndex: number,
): NoReturn;

/**
 * Establishes leash constraints for entities relative to a target.
 * @param entitiesToLeash Entities to restrict.
 * @param entityLeashTarget Reference entity for leash origin.
 * @param leashRange Maximum allowed distance before recall activation.
 * @param returnRange Target proximity threshold to end recall.
 * @returns {NoReturn}
 * @remarks Leash mechanics override natural entity roaming behavior. Return range should be smaller than leash range for proper functionality.
 */
declare function OUTPUT_SetLeash(
  entitiesToLeash: EntityGroup,
  entityLeashTarget: SingleEntity,
  leashRange: number,
  returnRange: number,
): NoReturn;

/**
 * Establishes leash constraints with conditional return behavior.
 * @param entitiesToLeash Entities to restrict.
 * @param entityLeashTarget Reference entity for leash origin.
 * @param leashRange Maximum allowed distance before recall activation.
 * @param returnRange Target proximity threshold to end recall.
 * @returns {NoReturn}
 * @remarks Entities return to leash target only when not engaged in targeting activities. Requires valid AI configuration for proper disengagement detection.
 */
declare function OUTPUT_SetLeashWithReturnWhenNotTargeting(
  entitiesToLeash: EntityGroup,
  entityLeashTarget: SingleEntity,
  leashRange: number,
  returnRange: number,
): NoReturn;

/**
 * Configures team-specific lives tracking UI elements.
 * @param livesCount Initial lives value (use -1 to disable display).
 * @param team Target team identifier for UI association.
 * @param flashAtOneLife Toggle for critical life count visual alerts.
 * @returns {NoReturn}
 * @remarks Requires manual updates to reflect actual game state. UI remains visible until explicitly disabled.
 */
declare function OUTPUT_SetLivesCounter(
  livesCount: number,
  team: string,
  flashAtOneLife: boolean,
): NoReturn;

/**
 * Applies loot table override configurations to entities.
 * @param entities Target entities with loot components.
 * @param overrideName Identifier for the override configuration (not a loot table ID).
 * @returns {NoReturn}
 * @remarks Override definitions must exist in entity data configurations. Affects loot drop behavior without altering base entity definitions.
 */
declare function OUTPUT_SetLootTableOverride(
  entities: EntityGroup,
  overrideName: string,
): NoReturn;

/**
 * Restores default loot table configurations for entities.
 * @param entities Target entities with active loot overrides.
 * @returns {NoReturn}
 * @remarks Reverts to original loot definitions specified in entity data files.
 */
declare function OUTPUT_SetLootTableToDefault(entities: EntityGroup): NoReturn;

/**
 * Registers a named deck configuration for procedural generation systems.
 * @param deckName Unique identifier for the deck configuration.
 * @param cards Triple-nested array structure defining deck contents.
 * @example OUTPUT_SetNamedDeck("cave_systems", caveDeck);
 * @returns {NoReturn}
 * @remarks Deck structures require specific formatting matching generation system expectations. See procedural generation documentation for schema details.
 */
declare function OUTPUT_SetNamedDeck(
  deckName: string,
  cards: number[][][],
): NoReturn;

/**
 * Initializes or modifies a globally accessible timer.
 * @param timerName Identifier for the timer instance.
 * @param timerValue Initial time value in seconds.
 * @returns {NoReturn}
 * @remarks Not recommended for frequently recurring events. Use entity-local timers for localized timing needs.
 */
declare function OUTPUT_SetNamedTimer(
  timerName: string,
  timerValue: number,
): NoReturn;

/**
 * Configures expiration behavior for global timers.
 * @param timerName Target timer identifier.
 * @param successWhenTimeExpires Flag to determine expiration outcome state.
 * @returns {NoReturn}
 * @remarks Default expiration behavior removes the timer display. This override maintains visibility with success/failure states.
 */
declare function OUTPUT_SetNamedTimerExpiredState(
  timerName: string,
  successWhenTimeExpires: boolean,
): NoReturn;

/**
 * Manually sets completion status for global timers.
 * @param timerName Target timer identifier.
 * @param didSucceed Completion outcome state.
 * @returns {NoReturn}
 * @remarks Immediately updates timer UI state regardless of remaining time. Use for forced state transitions.
 */
declare function OUTPUT_SetNamedTimerSuccessState(
  timerName: string,
  didSucceed: boolean,
): NoReturn;

/**
 * Controls global nether spore intensity affecting environmental effects.
 * @param strength Intensity multiplier (0.0 to disable).
 * @returns {NoReturn}
 * @remarks Value persistence maintained across game sessions.
 */
declare function OUTPUT_SetNetherSporesActiveEverywhere(
  strength: number,
): NoReturn;

/**
 * Toggles visibility of objective health bar UI elements.
 * @param entity Objective bar entity to modify.
 * @param isVisible Activation state for health bar display.
 * @returns {NoReturn}
 * @remarks Affects all players' UI states simultaneously. Does not modify underlying objective progress values.
 */
declare function OUTPUT_SetObjectiveHealthBarVisible(
  entity: SingleEntity,
  isVisible: boolean,
): NoReturn;

/**
 * Controls map visibility for objectives defined in objectives_data.json.
 * @param objectiveName Objective identifier matching localization entries.
 * @param isVisible Toggle for map visibility.
 * @returns {NoReturn}
 * @remarks Requires corresponding objective configuration in objectives_data.json. Affects all players' map interfaces.
 */
declare function OUTPUT_SetObjectiveVisibility(
  objectiveName: SingleEntity,
  isVisible: boolean,
): NoReturn;

/**
 * Overrides compass maximum range for waypoint-bearing entities.
 * @param entityToOverride Target entity with waypoint components.
 * @param distance New maximum detection range in world units.
 * @returns {NoReturn}
 * @remarks Modifies compass behavior only for the specified entity. Does not affect other waypoint systems.
 */
declare function OUTPUT_SetOverrideForCompassMaxRange(
  entityToOverride: number,
  distance: number,
): NoReturn;

/**
 * Assigns entity ownership to an invasion context.
 * @param entities Target entities for ownership transfer.
 * @param invasionId Identifier for the invasion context.
 * @returns {NoReturn}
 * @remarks Affects entity behavior and destruction logic during invasion events. Ownership persists until explicitly changed.
 */
declare function OUTPUT_SetOwnerInvasionAttack(
  entities: EntityGroup,
  invasionId: number,
): NoReturn;

/**
 * Assigns entity ownership to a village context.
 * @param entities Target entities for ownership transfer.
 * @param villageId Identifier for the village context.
 * @returns {NoReturn}
 * @remarks Affects village management systems and entity allegiance mechanics. Does not modify existing village structures.
 */
declare function OUTPUT_SetOwnerVillageById(
  entities: EntityGroup,
  villageId: VillageID,
): NoReturn;

/**
 * Toggles population cap system participation for entities.
 * @param entities Target entities with existing pop-cap configurations.
 * @param isPopCapped Flag to enable/disable population management eligibility.
 * @returns {NoReturn}
 * @remarks Only affects entities that were originally configured with pop-cap system integration. Does not modify entity counts directly.
 */
declare function OUTPUT_SetPopCapped(
  entities: EntityGroup,
  isPopCapped: boolean,
): NoReturn;

/**
 * Modifies resource storage capacity for player or team inventories.
 * @param playerEntity Reference entity for inventory ownership context.
 * @param resourceName Identifier for the resource type.
 * @param cap New maximum quantity for the specified resource.
 * @returns {NoReturn}
 * @remarks Automatically applies to team inventories if the resource is team-associated. Values persist through game sessions.
 */
declare function OUTPUT_SetResourceCap(
  playerEntity: SingleEntity,
  resourceName: ResourceName,
  cap: number,
): NoReturn;

/**
 * Modifies resource storage capacity for player or team inventories.
 * @param team Team name
 * @param resourceName Identifier for the resource type.
 * @param cap New maximum quantity for the specified resource.
 * @returns {NoReturn}
 * @remarks This function assumes the resource is a team resource.
 */
declare function OUTPUT_SetTeamResourceCap(
  team: TeamName,
  resourceName: ResourceName,
  cap: number,
): NoReturn;

/**
 * Configures global celestial environment parameters.
 * @param skyState Identifier for the sky configuration state.
 * @example OUTPUT_SetSkyState("TwoSuns");
 * @returns {NoReturn}
 * @remarks Valid states include: "SunMoon" (default cycle), "TwoSuns" (constant daylight), "EternalNight" (permanent darkness), and "Custom". Affects environmental lighting and biome behaviors.
 */
declare function OUTPUT_SetSkyState(skyState: string): NoReturn;

/**
 * Applies loot table overrides to entities spawned from designated spawners.
 * @param entities Target spawner entities.
 * @param overrideName Identifier for the loot override configuration.
 * @returns {NoReturn}
 * @remarks Override applies to all future spawns. Does not affect already spawned entities. Requires valid loot override definitions.
 */
declare function OUTPUT_SetSpawnerAddLootOverride(
  entities: EntityGroup,
  overrideName: string,
): NoReturn;

/**
 * Assigns team affiliations to entities for game system interactions.
 * @see team_manager.json
 * @param entitiesToPlaceAt Target entities for team assignment.
 * @param teamname Identifier for the target team.
 * @returns {NoReturn}
 * @remarks Affects aggro escalation and trigger criteria evaluations. Team definitions must exist in team_manager.json.
 */
declare function OUTPUT_SetTeam(
  entitiesToPlaceAt: EntityGroup,
  teamname: string,
): NoReturn;

/**
 * Modifies base ticket allowances for specified resource types.
 * @param ticketType Identifier for the ticket category (e.g., build, gather, spawn).
 * @param cap New maximum number of concurrent tickets allowed.
 * @returns {NoReturn}
 * @remarks Impacts resource allocation systems and entity management capabilities. Does not affect existing ticket usages.
 */
declare function OUTPUT_SetTicketCap(ticketType: string, cap: number): NoReturn;

/**
 * Sets global time progression to a specific point in the day-night cycle.
 * @param timeOfDay Time value between 0 (dawn) and 1 (next dawn).
 * @returns {NoReturn}
 * @remarks Affects lighting, mob behavior, and time-dependent game systems. Use 0.5 for noon, 0.75 for dusk, etc.
 */
declare function OUTPUT_SetTimeOfDay(timeOfDay: number): NoReturn;

/**
 * Registers a destroyable entities objective for invasion tracking.
 * @see LISTENFOR_InvasionDestroyEntitiesObjective
 * @param villageId Target village identifier.
 * @param entities Entities to track for destruction.
 * @param numberToDestroy Required destruction count for objective completion.
 * @param factionName Faction responsible for the objective.
 * @returns {NoReturn}
 * @remarks Objective progress persists until target entities are destroyed. Requires corresponding listener registration.
 */
declare function OUTPUT_SetupDestroyEntitiesObjective(
  villageId: VillageID,
  entities: EntityGroup,
  numberToDestroy: number,
  factionName: string,
): NoReturn;

/**
 * Registers a destroyable entities objective with village health bar suppression.
 * @param villageId Target village identifier.
 * @param entities Entities tracked for destruction.
 * @param numberToDestroy Required destruction count for objective completion.
 * @param factionName Responsible faction identifier.
 * @returns {NoReturn}
 * @remarks Hides village health bar UI elements while maintaining objective tracking. Use for scenarios requiring alternative progress visualization.
 */
declare function OUTPUT_SetupDestroyEntitiesObjectiveWithHealthbarStomp(
  villageId: VillageID,
  entities: EntityGroup,
  numberToDestroy: number,
  factionName: string,
): NoReturn;

/**
 * Assigns flavor characteristics to a village during procedural generation phases.
 * @param flavour Identifier for the flavor profile.
 * @param villageId Target village identifier.
 * @returns {NoReturn}
 * @remarks Must be called during village planning card execution. Affects aesthetic and structural generation parameters.
 */
declare function OUTPUT_SetVillageFlavour(
  flavour: string,
  villageId: VillageID,
): NoReturn;

/**
 * Assigns objective characteristics to a village during procedural generation phases.
 * @param objective Identifier for the objective profile.
 * @param villageId Target village identifier.
 * @returns {NoReturn}
 * @remarks Must be called during village planning card execution. Defines village-specific mission parameters.
 */
declare function OUTPUT_SetVillageObjective(
  objective: string,
  villageId: VillageID,
): NoReturn;

/**
 * Marks villages as occupied by piglin forces with faction association.
 * @param villageId Target village identifier.
 * @param isOccupied Occupation status flag.
 * @param hordeName Piglin faction identifier for the occupation.
 * @returns {NoReturn}
 * @remarks Affects village ownership displays and AI behavior patterns. Requires valid horde configuration data.
 */
declare function OUTPUT_SetVillageOccupied(
  villageId: VillageID,
  isOccupied: boolean,
  hordeName: string,
): NoReturn;

/**
 * Designates entities as critical village infrastructure with anti-popcap protection.
 * @param entities Target entities for persistence designation.
 * @param villageId Associated village identifier.
 * @returns {NoReturn}
 * @remarks Protected entities are teleported back if they wander beyond village bounds. Exempt from population culling systems.
 */
declare function OUTPUT_SetVillagePersistentEntities(
  entities: EntityGroup,
  villageId: VillageID,
): NoReturn;

/**
 * Modifies village respawn point activation states.
 * @param villageId Target village identifier.
 * @param enabled Activation flag for respawn functionality.
 * @returns {NoReturn}
 * @remarks Does not override other system-level respawn restrictions. Affects all players associated with the village.
 */
declare function OUTPUT_SetVillageRespawnPointsEnabled(
  villageId: VillageID,
  enabled: boolean,
): NoReturn;

/**
 * Creates bidirectional suspension synchronization between villages.
 * @param villageEntityA First village entity in the pair.
 * @param villageEntityB Second village entity in the pair.
 * @returns {NoReturn}
 * @remarks Villages must be unpaired prior to establishing new links. Pairing affects suspension/unsuspension propagation.
 */
declare function OUTPUT_SetVillageSuspensionPair(
  villageEntityA: number,
  villageEntityB: number,
): NoReturn;

/**
 * Configures global wave-based difficulty progression parameters.
 * @param waveLevel Intensity level for wave generation systems.
 * @returns {NoReturn}
 * @remarks Higher values increase challenge parameters for procedurally generated waves.
 */
declare function OUTPUT_SetWaveLevel(waveLevel: number): NoReturn;

/**
 * Divides the game world into spatial partitions for territorial management.
 * @param sliceNum Number of world slices to create.
 * @example OUTPUT_SliceWorld(4);
 * @returns {NoReturn}
 * @remarks Slice indices start at 0, assigned clockwise from origin. Affects village placement, resource distribution, and AI territory logic.
 */
declare function OUTPUT_SliceWorld(sliceNum: number): NoReturn;

/**
 * Instantiates buildable structures at entity positions with terrain alignment.
 * @param buildableName Archetype identifier for the structure.
 * @param entitiesPosition Reference entities for placement coordinates.
 * @param buildableTeam Team ownership identifier (required).
 * @param facingDirection Cardinal direction orientation (north/south/east/west).
 * @param instantBuild Flag to bypass construction animations.
 * @param onGround Toggle for terrain surface snapping.
 * @param callback Snippet name for post-spawn execution (empty string to disable).
 * @returns {NoReturn}
 * @remarks Team parameter is mandatory for ownership assignment. Callback triggers after successful instantiation.
 */
declare function OUTPUT_SpawnBuildableAt(
  buildableName: string,
  entitiesPosition: EntityGroup,
  buildableTeam: string,
  facingDirection: string,
  instantBuild: boolean,
  onGround: boolean,
  callback: string,
): NoReturn;

/**
 * Instantiates buildable structures at offset positions relative to entities.
 * @param buildableName Archetype identifier for the structure.
 * @param entitiesPosition Reference entities for base placement coordinates.
 * @param buildableTeam Team ownership identifier (required).
 * @param facingDirection Cardinal direction orientation (north/south/east/west).
 * @param instantBuild Flag to bypass construction animations.
 * @param onGround Toggle for terrain surface snapping (Y-axis).
 * @param x X-axis offset from reference position.
 * @param y Y-axis offset (overridden by terrain snapping).
 * @param z Z-axis offset from reference position.
 * @param callback Snippet name for post-spawn execution (empty string to disable).
 * @returns {NoReturn}
 * @remarks Vertical (Y) positioning automatically aligns with terrain unless onGround is false. Maintains team ownership association.
 */
declare function OUTPUT_SpawnBuildableAtWithOffset(
  buildableName: string,
  entitiesPosition: EntityGroup,
  buildableTeam: string,
  facingDirection: string,
  instantBuild: boolean,
  onGround: boolean,
  x: number,
  y: number,
  z: number,
  callback: string,
): NoReturn;

/**
 * Instantiates multiple entities at specified reference positions.
 * @param entitiesToPlaceAt Reference entities providing spawn coordinates.
 * @param archetypeName Archetype identifier for entities to spawn.
 * @param spawnCount Number of entities to generate per reference position.
 * @returns {EntityGroup} Collection of successfully spawned entities.
 * @remarks SpawnCount must exceed zero. Empty array indicates spawning failure. Entities inherit position coordinates from reference entities.
 */
declare function OUTPUT_SpawnEntitiesAt(
  entitiesToPlaceAt: EntityGroup,
  archetypeName: string,
  spawnCount: number,
): EntityGroup;

/**
 * Instantiates multiple ground-aligned entities at reference positions.
 * @param entitiesToPlaceAt Reference entities providing horizontal coordinates.
 * @param archetypeName Archetype identifier for entities to spawn.
 * @param spawnCount Number of entities to generate per reference position.
 * @returns {EntityGroup} Collection of successfully spawned entities.
 * @remarks Vertical positioning automatically aligns with terrain. Returns zero (0) on spawning failure. Requires spawnCount > 0.
 */
declare function OUTPUT_SpawnEntitiesAtGroundHeight(
  entitiesToPlaceAt: EntityGroup,
  archetypeName: string,
  spawnCount: number,
): EntityGroup;

/**
 * Distributes entities within village boundaries using radial parameters.
 * @param entityArchetype Archetype identifier for entities to spawn.
 * @param spawnCount Total number of entities to generate.
 * @param villageId Target village identifier (must be loaded).
 * @param minRadius Minimum spawn distance from village center.
 * @param maxRadius Maximum spawn distance from village center.
 * @returns {EntityGroup} Collection of successfully spawned entities.
 * @remarks Avoids existing structures and terrain obstacles. Suggested minRadius: 20, maxRadius: 50 for balanced distribution.
 */
declare function OUTPUT_SpawnEntitiesInVillage(
  entityArchetype: string,
  spawnCount: number,
  villageId: VillageID,
  minRadius: number,
  maxRadius: number,
): EntityGroup;

/**
 * Instantiates entities in proximity to reference positions with randomized offsets.
 * @param entitiesToPlaceAt Reference entities for spawn origins.
 * @param archetypeName Archetype identifier for entities to spawn.
 * @param spawnCount Number of entities to generate per reference position.
 * @returns {EntityGroup} Collection of successfully spawned entities.
 * @remarks Empty array indicates spawning failure. Requires spawnCount > 0 for execution.
 */
declare function OUTPUT_SpawnEntitiesNear(
  entitiesToPlaceAt: EntityGroup,
  archetypeName: string,
  spawnCount: number,
): EntityGroup;

/**
 * Instantiates single entities at exact reference positions.
 * @param entitiesToPlaceAt Reference entities providing spawn coordinates.
 * @param archetypeName Archetype identifier for entity creation.
 * @returns {EntityGroup} Collection of successfully spawned entities.
 * @remarks Empty array indicates spawning failure. Use for precise entity placement requirements.
 */
declare function OUTPUT_SpawnEntityAt(
  entitiesToPlaceAt: EntityGroup,
  archetypeName: string,
): EntityGroup;

/**
 * Instantiates ground-aligned entities at reference positions.
 * @param entitiesToPlaceAt Reference entities providing horizontal coordinates.
 * @param archetypeName Archetype identifier for entity creation.
 * @returns {EntityGroup} Collection of successfully spawned entities.
 * @remarks Vertical positioning automatically aligns with terrain. Empty array indicates spawning failure.
 */
declare function OUTPUT_SpawnEntityAtGroundHeight(
  entitiesToPlaceAt: EntityGroup,
  archetypeName: string,
): EntityGroup;

/**
 * Generates forward operating bases at fixed distances from target villages.
 * @param invasionId Identifier for the associated invasion action.
 * @param villageArchetype Village archetype for base generation.
 * @param size Base scale classification.
 * @param amount Number of bases to create.
 * @param distance Radial distance from target village centers.
 * @returns {NoReturn}
 * @remarks Alternative base placement method when slot systems are unavailable. Bases are distributed evenly around target villages.
 */
declare function OUTPUT_SpawnInvasionAttackFobsV2AtDistance(
  invasionId: InvasionID,
  villageArchetype: string,
  size: string,
  amount: number,
  distance: number,
): NoReturn;

/**
 * Creates a forward operating base entity for invasion actions.
 * @param invasionId Identifier for the associated invasion action.
 * @param villageArchetype Village archetype for base generation.
 * @param size Base scale classification.
 * @param positionEntity Reference entity for base placement coordinates.
 * @returns {NoReturn}
 * @remarks Multiple FOBs can be created per invasion. Requires valid invasion configuration data.
 */
declare function OUTPUT_SpawnInvasionAttackFobV2(
  invasionId: InvasionID,
  villageArchetype: string,
  size: string,
  positionEntity: SingleEntity,
): NoReturn;

/**
 * Establishes a new invasion-controlled village entity.
 * @requires BSharpPlacement
 * @param positionEntity Reference entity for placement coordinates.
 * @param villageArchetype Village configuration archetype.
 * @param size Village scale classification.
 * @param factionName Piglin faction identifier (e.g., "faction.pig.defend").
 * @param teamName Associated team identifier.
 * @param action UI event name from invasion_settings.json.
 * @returns {number} Identifier for the newly created village entity.
 * @remarks Village ownership transfers to the specified faction/team. Requires valid placement system configuration.
 */
declare function OUTPUT_SpawnInvasionBase(
  positionEntity: SingleEntity,
  villageArchetype: string,
  size: string,
  factionName: string,
  teamName: string,
  action: string,
): number;

/**
 * Instantiates player-owned buildable structures with configurable parameters.
 * @requires BSharpPlacement
 * @param positionEntity Reference entity for placement coordinates.
 * @param archetype Buildable structure archetype identifier.
 * @param facingDirection Cardinal orientation (north/west/east/south).
 * @param instant Flag to bypass construction animations.
 * @param player Player entity identifier for ownership assignment.
 * @param waiveCost Flag to ignore resource expenditure requirements.
 * @returns {NoReturn}
 * @remarks Structures are aligned to terrain when instant is false. Ownership persists through game sessions. Requires valid player entity references.
 */
declare function OUTPUT_SpawnPlayerBuildable(
  positionEntity: SingleEntity,
  archetype: string,
  facingDirection: string,
  instant: boolean,
  player: number,
  waiveCost: boolean,
): NoReturn;

/**
 * Instantiates a village entity using configured placement rules and returns its identifier.
 * @requires BSharpPlacement
 * @param positionEntity Reference entity for spatial placement calculations.
 * @param villageArchetype Village configuration archetype identifier.
 * @param size Village scale classification from villages.json.
 * @param factionName Piglin faction identifier (e.g., "faction.pig.defend").
 * @param teamName Associated team identifier for village ownership.
 * @returns {number} Identifier for the newly created village entity.
 * @remarks Village placement respects configured spatial rules and terrain constraints. Ownership transfers to specified faction/team automatically.
 */
declare function OUTPUT_SpawnVillage(
  positionEntity: SingleEntity,
  villageArchetype: string,
  size: string,
  factionName: string,
  teamName: string,
): number;

/**
 * Instantiates village-owned buildable structures with placement system integration.
 * @requires BSharpPlacement
 * @param positionEntity Reference entity for placement coordinates.
 * @param archetype Buildable structure archetype identifier.
 * @param facingDirection Cardinal orientation (north/west/east/south).
 * @param instant Flag to bypass construction animations.
 * @param villageId Target village identifier for ownership assignment.
 * @returns {NoReturn}
 * @remarks Structures are aligned to terrain when instant is false. Ownership persists through server restarts.
 */
declare function OUTPUT_SpawnVillageBuildable(
  positionEntity: SingleEntity,
  archetype: string,
  facingDirection: string,
  instant: boolean,
  villageId: VillageID,
): NoReturn;

/**
 * Initiates timed invasion attacks with dynamic duration calculations.
 * @param villageId Target village identifier for attack registration.
 * @param factionName Attacking piglin faction identifier.
 * @param strength Scaling factor for attack intensity.
 * @param time Attack duration as a percentage of night length.
 * @param minSeconds Minimum guaranteed attack duration in seconds.
 * @returns {NoReturn}
 * @remarks Attack timing dynamically adjusts based on night cycle progression. Late activation reduces effective attack window.
 */
declare function OUTPUT_StartInvasionAttackV2(
  villageId: VillageID,
  factionName: string,
  strength: number,
  time: number,
  minSeconds: number,
): NoReturn;

/**
 * Initiates fixed-duration invasion attacks with precise timing control.
 * @param villageId Target village identifier for attack registration.
 * @param factionName Attacking piglin faction identifier.
 * @param strength Scaling factor for attack intensity.
 * @param timeOverride Exact attack duration in seconds.
 * @returns {NoReturn}
 * @remarks Overrides natural night cycle timing. Attack duration remains constant regardless of activation timing.
 */
declare function OUTPUT_StartInvasionAttackV2TimeOverride(
  villageId: VillageID,
  factionName: string,
  strength: number,
  timeOverride: number,
): NoReturn;

/**
 * Records boolean property values in active telemetry events.
 * @param propertyName Identifier for the telemetry property.
 * @param value Boolean state to record.
 * @returns {NoReturn}
 * @remarks Property names should use standardized naming conventions (e.g., "IsDead") for analytics consistency.
 */
declare function OUTPUT_TelemetryAddBool(
  propertyName: string,
  value: boolean,
): NoReturn;

/**
 * Captures cinematic event data in telemetry systems.
 * @returns {NoReturn}
 * @remarks Aggregates cinematic playback metrics for quality assurance and feature optimization.
 */
declare function OUTPUT_TelemetryAddCinematicsInfo(): NoReturn;

/**
 * Records categorized event occurrence counts for player-specific telemetry.
 * @param playerEntity Player entity identifier.
 * @param propertyName Category identifier for event classification.
 * @returns {NoReturn}
 * @remarks Requires prior call to OUTPUT_TelemetryAddFormattedName to establish category context.
 */
declare function OUTPUT_TelemetryAddCountCategory(
  playerEntity: SingleEntity,
  propertyName: string,
): NoReturn;

/**
 * Records sub-categorized event occurrence counts for player-specific telemetry.
 * @param playerEntity Player entity identifier.
 * @param propertyName Subcategory identifier for event classification.
 * @returns {NoReturn}
 * @remarks Requires prior call to OUTPUT_TelemetryAddFormattedName to establish subcategory context.
 */
declare function OUTPUT_TelemetryAddCountSubcategory(
  playerEntity: SingleEntity,
  propertyName: string,
): NoReturn;

/**
 * Associates unique spatial event identifiers with telemetry tracking.
 * @param triggerVolumeEntity Spatial trigger volume entity.
 * @param intruderEntity Entity interacting with the trigger volume.
 * @returns {NoReturn}
 * @remarks Captures entry/exit event correlations for spatial analytics.
 */
declare function OUTPUT_TelemetryAddEnterExitUID(
  triggerVolumeEntity: SingleEntity,
  intruderEntity: SingleEntity,
): NoReturn;

/**
 * Records floating-point property values in active telemetry events.
 * @param propertyName Identifier for the telemetry property.
 * @param value Numerical value to record.
 * @returns {NoReturn}
 * @remarks Decimal values should represent normalized metrics (e.g., "HealthLeft" for 0.42 indicating 42% health remaining).
 */
declare function OUTPUT_TelemetryAddFloat(
  propertyName: string,
  value: number,
): NoReturn;

/**
 * Records integer property values in active telemetry events.
 * @param propertyName Identifier for the telemetry property.
 * @param value Whole number value to record.
 * @returns {NoReturn}
 * @remarks Integer values typically represent counts or discrete states (e.g., "BuildingCount" for structure inventories).
 */
declare function OUTPUT_TelemetryAddInt(
  propertyName: string,
  value: number,
): NoReturn;

/**
 * Records player engagement duration metrics for invasion attack events.
 * @param invasionId Identifier for the tracked invasion instance.
 * @returns {NoReturn}
 * @remarks Captures cumulative player interaction time with the attack scenario. Requires active invasion tracking context.
 */
declare function OUTPUT_TelemetryAddInvasionAttackTimePlayersEngaged(
  invasionId: number,
): NoReturn;

/**
 * Manages GUID tracking for invasion break events.
 * @param started Flag indicating break initiation (true) or conclusion (false).
 * @returns {NoReturn}
 * @remarks Generates unique identifiers for invasion break phases. Start events create new GUIDs while end events retrieve the last active GUID.
 */
declare function OUTPUT_TelemetryAddInvasionBreakGUID(
  started: boolean,
): NoReturn;

/**
 * Associates location identifiers with telemetry events for spatial tracking.
 * @param locationEntity Reference entity for location UID capture.
 * @returns {NoReturn}
 * @remarks Valid for POIs, culture villages, piglin villages, and mob alliance villages. Use OUTPUT_TelemetryAddLocationUIDWithVillageID for village ID-based tracking.
 */
declare function OUTPUT_TelemetryAddLocationUID(
  locationEntity: SingleEntity,
): NoReturn;

/**
 * Captures spawner initialization metrics in telemetry systems.
 * @returns {NoReturn}
 * @remarks Tracks spawner creation events for population balance monitoring and procedural generation analysis.
 */
declare function OUTPUT_TelemetryAddSpawnerInfo(): NoReturn;

/**
 * Records string property values in active telemetry events.
 * @param propertyName Identifier for the telemetry property.
 * @param value String data to associate with the property.
 * @returns {NoReturn}
 * @remarks Use for categorical data like faction names ("faction.pig.defend") or mission identifiers.
 */
declare function OUTPUT_TelemetryAddString(
  propertyName: string,
  value: string,
): NoReturn;

/**
 * Records team resource balance metrics for specified players.
 * @param playerEntity Player entity reference for team association.
 * @returns {NoReturn}
 * @remarks Captures current team resource allocations. Requires valid team membership for accurate reporting.
 */
declare function OUTPUT_TelemetryAddTeamBalance(
  playerEntity: SingleEntity,
): NoReturn;

/**
 * Records temporal metrics for categorized player events.
 * @param playerEntity Player entity identifier.
 * @param propertyName Category identifier for time tracking.
 * @returns {NoReturn}
 * @remarks Requires prior category context establishment via OUTPUT_TelemetryAddFormattedName. Measures time since last occurrence of the specified category.
 */
declare function OUTPUT_TelemetryAddTimeSinceLastCategory(
  playerEntity: SingleEntity,
  propertyName: string,
): NoReturn;

/**
 * Records temporal metrics for sub-categorized player events.
 * @param playerEntity Player entity identifier.
 * @param propertyName Subcategory identifier for time tracking.
 * @returns {NoReturn}
 * @remarks Requires prior subcategory context via OUTPUT_TelemetryAddFormattedName. Tracks time intervals between subcategory event occurrences.
 */
declare function OUTPUT_TelemetryAddTimeSinceLastSubcategory(
  playerEntity: SingleEntity,
  propertyName: string,
): NoReturn;

/**
 * Records resource transaction details for player-specific operations.
 * @param playerEntity Player entity undergoing resource changes.
 * @returns {NoReturn}
 * @remarks Captures both intended resource delta and final transaction results from OUTPUT_AddOrRemoveResource calls in the current execution context.
 */
declare function OUTPUT_TelemetryAddTransactionPlayer(
  playerEntity: SingleEntity,
): NoReturn;

/**
 * Initializes a player-specific telemetry event context.
 * @param playerEntity Target player entity.
 * @param eventName Identifier for the telemetry event.
 * @param isPlayFab Flag indicating cross-platform analytics integration.
 * @returns {NoReturn}
 * @remarks Event data must be populated via OUTPUT_TelemetryAddXXX functions before recording with OUTPUT_TelemetryRecordEvent.
 */
declare function OUTPUT_TelemetryCreateEvent(
  playerEntity: SingleEntity,
  eventName: string,
  isPlayFab: boolean,
): NoReturn;

/**
 * Initializes a global telemetry event context.
 * @param eventName Identifier for the server-wide telemetry event.
 * @param isPlayFab Flag indicating cross-platform analytics integration.
 * @returns {NoReturn}
 * @remarks Event data must be populated via OUTPUT_TelemetryAddXXX functions before recording with OUTPUT_TelemetryRecordEvent.
 */
declare function OUTPUT_TelemetryCreateServerEvent(
  eventName: string,
  isPlayFab: boolean,
): NoReturn;

/**
 * Marks onboarding step completion in telemetry systems.
 * @param onboardingName Identifier for the completed tutorial step.
 * @returns {NoReturn}
 * @remarks Aggregates user progression data for tutorial system optimization.
 */
declare function OUTPUT_TelemetryOnboardingComplete(
  onboardingName: string,
): NoReturn;

/**
 * Marks onboarding tip display in telemetry systems.
 * @param onboardingName Identifier for the displayed tutorial tip.
 * @returns {NoReturn}
 * @remarks Tracks user exposure to instructional content for UX analysis.
 */
declare function OUTPUT_TelemetryOnboardingStart(
  onboardingName: string,
): NoReturn;

/**
 * Records campaign progression telemetry events.
 * @param actChanged Flag indicating act transition occurrence.
 * @param newAct Identifier for the destination act (if changed).
 * @param interval Timestamp for event context.
 * @returns {NoReturn}
 * @remarks Captures campaign state changes and temporal progression metrics for difficulty curve analysis.
 */
declare function OUTPUT_TelemetryRecordCampaignbehaviorProgressEvent(
  actChanged: boolean,
  newAct: string,
  interval: number,
): NoReturn;

/**
 * Finalizes and submits the active telemetry event context.
 * @returns {NoReturn}
 * @remarks Persists collected telemetry data to storage systems. Must be preceded by event creation and data population steps.
 */
declare function OUTPUT_TelemetryRecordEvent(): NoReturn;

/**
 * Records multi-step funnel progression events for player groups.
 * @param playerEntities Players participating in the funnel progression.
 * @param funnelStepName Identifier for the current funnel step.
 * @param stepNumCurrent Current progression step index.
 * @param stepNumMax Total steps in the funnel sequence.
 * @param funnelCategory Funnel classification category.
 * @param funnelName Unique funnel identifier.
 * @returns {NoReturn}
 * @remarks Aggregates conversion metrics across player cohorts. Requires valid player entity references for accurate attribution.
 */
declare function OUTPUT_TelemetryRecordFunnelEvent(
  playerEntities: EntityGroup,
  funnelStepName: string,
  stepNumCurrent: number,
  stepNumMax: number,
  funnelCategory: string,
  funnelName: string,
): NoReturn;

/**
 * Records game zone transition data for all specified players.
 * @param playerEntities Collection of player entities undergoing zone changes.
 * @param gameZoneIndex Numerical identifier for the target game zone.
 * @param gameZoneDescription Descriptive label for the game zone context.
 * @returns {NoReturn}
 * @remarks Forces zone state changes across all referenced players. Used for cross-player telemetry synchronization.
 */
declare function OUTPUT_TelemetryRecordGameZoneData(
  playerEntities: EntityGroup,
  gameZoneIndex: number,
  gameZoneDescription: string,
): NoReturn;

/**
 * Finalizes unique telemetry events with idempotency guarantees.
 * @param identifier Unique identifier for event deduplication.
 * @returns {NoReturn}
 * @remarks Ensures single recording per identifier. Gracefully discards duplicate event submissions.
 */
declare function OUTPUT_TelemetryRecordOnceEvent(identifier: string): NoReturn;

/**
 * Tracks modifications to the Well of Fate system state.
 * @param upgradeType Identifier for the state change type.
 * @param fateBank Transaction classification (0=removal, 1=addition).
 * @returns {NoReturn}
 * @remarks Used for balance monitoring and procedural generation analytics. Fate bank values correspond to structural transaction types.
 */
declare function OUTPUT_TelemetryWellOfFateStateChange(
  upgradeType: string,
  fateBank: number,
): NoReturn;

/**
 * Transfers entities to a destination location.
 * @param srcEntities Entities to relocate.
 * @param dstEntity Destination entity providing positional coordinates.
 * @returns {NoReturn}
 * @remarks Maintains entity orientation during relocation. Does not validate destination accessibility.
 */
declare function OUTPUT_Teleport(
  srcEntities: EntityGroup,
  dstEntity: SingleEntity,
): NoReturn;

/**
 * Relocates entities and adjusts their orientation toward a target entity.
 * @param srcEntities Entities to teleport.
 * @param dstEntity Destination entity coordinates.
 * @param orientEntity Target entity for orientation alignment.
 * @returns {NoReturn}
 * @remarks Affects both position and yaw orientation. Player camera orientation remains unaffected.
 */
declare function OUTPUT_TeleportAndOrientToEntity(
  srcEntities: EntityGroup,
  dstEntity: SingleEntity,
  orientEntity: SingleEntity,
): NoReturn;

/**
 * Relocates entities and sets their orientation to a specified yaw angle.
 * @param srcEntities Entities to teleport.
 * @param dstEntity Destination entity coordinates.
 * @param yaw Target orientation angle in radians.
 * @returns {NoReturn}
 * @remarks Yaw parameter defines horizontal orientation without altering player camera angles.
 */
declare function OUTPUT_TeleportAndOrientToYaw(
  srcEntities: EntityGroup,
  dstEntity: SingleEntity,
  yaw: number,
): NoReturn;

/**
 * Executes fast travel operations through portal systems.
 * @param srcEntities Entities to transfer via fast travel.
 * @param dstEntity Destination portal entity with fast travel configuration.
 * @example // Emergency evacuation
 * OUTPUT_TeleportFastTravel(GetVillageResidents(10), emergencyPortal);
 * @returns {NoReturn}
 * @remarks Requires valid fast travel component configurations on destination entities.
 */
declare function OUTPUT_TeleportFastTravel(
  srcEntities: EntityGroup,
  dstEntity: SingleEntity,
): NoReturn;

/**
 * @deprecated Use proper locator entities instead.
 * @param srcEntities Entities to relocate.
 * @param dstEntity Base destination entity.
 * @param x Horizontal offset on X-axis.
 * @param y Vertical offset on Y-axis.
 * @param z Horizontal offset on Z-axis.
 * @returns {NoReturn}
 * @remarks Legacy positioning method. Future versions may remove this function. Prefer entity-based locators for maintainability.
 */
declare function OUTPUT_TeleportWithOffset(
  srcEntities: EntityGroup,
  dstEntity: SingleEntity,
  x: number,
  y: number,
  z: number,
): NoReturn;

/**
 * @experimental Testing-only spatial rule configuration.
 * @param originPositions Array of [x,z] coordinate pairs for testing proximity rules.
 * @param minDistance Minimum valid distance threshold.
 * @param maxDistance Maximum valid distance threshold.
 * @param numRequired Minimum qualifying positions required.
 * @param isInclusive Rule inclusion mode flag.
 * @returns {NoReturn}
 * @remarks For development use only. Refer to OUTPUT_PlacementAddProximityRule for production implementations.
 */
declare function OUTPUT_TEST_PlacementAddProximityRule(
  originPositions: number[][],
  minDistance: number,
  maxDistance: number,
  numRequired: number,
  isInclusive: boolean,
): NoReturn;

/**
 * @internal Executes placement rule validation tests.
 * @returns {NoReturn}
 * @remarks Reserved for system-level testing. Not part of public API surface.
 */
declare function OUTPUT_TEST_PlacementRun(): NoReturn;

/**
 * Registers test completion results with analytics systems.
 * @param testId Identifier for the completed test scenario.
 * @param result Numerical outcome code or status indicator.
 * @returns {NoReturn}
 * @remarks Used for automated testing result aggregation. Value interpretation depends on test specifications.
 */
declare function OUTPUT_TestFinished(testId: string, result: number): NoReturn;

/**
 * Cancels all pending invasion actions with specified reason.
 * @param reason Cancellation justification for analytics tracking.
 * @returns {NoReturn}
 * @remarks Affects all unexecuted invasion plans. WM3 system integration requires valid reason codes.
 */
declare function OUTPUT_ThwartAllDelayedInvasionActions(
  reason: string,
): NoReturn;

/**
 * Cancels specific village invasion actions with reason tracking.
 * @param sourceVillageEntities Villages whose invasion plans to cancel.
 * @param reason Cancellation justification for analytics.
 * @returns {NoReturn}
 * @remarks Affects only specified villages' pending invasion actions. WM3 system integration requires valid reason codes.
 */
declare function OUTPUT_ThwartDelayedInvasionActions(
  sourceVillageEntities: EntityGroup,
  reason: string,
): NoReturn;

/**
 * Activates cinematic sequences with actor candidates.
 * @param cineName Identifier for the cinematic configuration.
 * @param candidatesEntitiesList Entities eligible for cinematic roles.
 * @returns {number} Status code or cinematic instance identifier.
 * @remarks Return value interpretation depends on cinematic system implementation. Requires valid cinematic definitions.
 */
declare function OUTPUT_TriggerCinematic(
  cineName: string,
  candidatesEntitiesList: EntityGroup,
): number;

/**
 * Activates transient presentation events on entities with corresponding components.
 * @param entities Target entities with presentation event configurations.
 * @param eventName Identifier for the one-shot presentation effect.
 * @returns {NoReturn}
 * @remarks Requires valid presentation effect definitions in entity data. For persistent state changes, use OUTPUT_AddVisualState instead.
 */
declare function OUTPUT_TriggerPresentationEvent(
  entities: EntityGroup,
  eventName: string,
): NoReturn;

/**
 * Activates team-specific transient presentation events.
 * @param entities Target entities with presentation components.
 * @param eventName Identifier for the presentation effect.
 * @param teamName Target team identifier for event activation.
 * @returns {NoReturn}
 * @remarks Event visibility restricted to specified team members. Persistence requires OUTPUT_AddVisualState usage.
 */
declare function OUTPUT_TriggerPresentationEventForTeam(
  entities: EntityGroup,
  eventName: string,
  teamName: string,
): NoReturn;

/**
 * Executes slash commands through pseudo-player activation.
 * @param slashCommand Full command string (e.g., "/sm badger:mob_zombie").
 * @param isServerCommand Flag indicating command registration location (server vs client).
 * @returns {NoReturn}
 * @remarks Commands execute with a randomly selected player as context. Server commands require BadgerServerCommands registration.
 */
declare function OUTPUT_TriggerSlashCommand(
  slashCommand: string,
  isServerCommand: boolean,
): NoReturn;

/**
 * Globally bypasses specified tutorial items across all clients.
 * @param tutorialKeyToBypass Identifier for the tutorial item to bypass.
 * @returns {NoReturn}
 * @remarks Affects all connected clients regardless of individual progress. Requires valid tutorial key definitions.
 */
declare function OUTPUT_TriggerTutorialBypass(
  tutorialKeyToBypass: string,
): NoReturn;

/**
 * Displays tutorial hints with configurable parameters for all players.
 * @param tutorialKeyToBypass Tutorial item identifier.
 * @param bypass Activation state for bypass mode.
 * @param skipIfAlreadySeen Flag to suppress duplicate notifications.
 * @param dontMarkCompleted Persistence flag for tutorial completion status.
 * @returns {NoReturn}
 * @remarks Bypass mode alters client behavior. Completion status remains unchanged when dontMarkCompleted is true.
 */
declare function OUTPUT_TriggerTutorialForAllPlayers(
  tutorialKeyToBypass: string,
  bypass: boolean,
  skipIfAlreadySeen: boolean,
  dontMarkCompleted: boolean,
): NoReturn;

/**
 * Displays tutorial hints with configurable parameters for specific players.
 * @param tutorialKeyToBypass Tutorial item identifier.
 * @param bypass Activation state for bypass mode.
 * @param skipIfAlreadySeen Flag to suppress duplicate notifications.
 * @param dontMarkCompleted Persistence flag for tutorial completion status.
 * @param players The player entities to send the hint to. (eg: `GetPlayers()`)
 * @returns {NoReturn}
 */
declare function OUTPUT_TriggerTutorialForSpecificPlayers(
  tutorialKeyToBypass: string,
  bypass: boolean,
  skipIfAlreadySeen: boolean,
  dontMarkCompleted: boolean,
  players: EntityGroup,
): NoReturn;

/**
 * Displays tutorial hints with default parameters for all players.
 * @param tutorialKeyToHint Identifier for the tutorial hint.
 * @returns {NoReturn}
 * @remarks Uses default client-side parameters for hint display. Does not alter completion status tracking.
 */
declare function OUTPUT_TriggerTutorialHint(
  tutorialKeyToHint: string,
): NoReturn;

/**
 * Removes home base associations from entities.
 * @param targetEntities Entities to dissociate from their home base.
 * @returns {NoReturn}
 * @remarks Reverses effects of OUTPUT_AssignHomeBaseToEntities. Entities lose home base benefits and constraints.
 */
declare function OUTPUT_UnassignHomeBaseForEntities(
  targetEntities: EntityGroup,
): NoReturn;

/**
 * Dissolves suspension synchronization between paired villages.
 * @param villageEntityA First village in the suspension pair.
 * @param villageEntityB Second village in the suspension pair.
 * @returns {NoReturn}
 * @remarks Requires prior establishment via OUTPUT_SetVillageSuspensionPair. Pairing must exist for successful removal.
 */
declare function OUTPUT_UnsetVillageSuspensionPair(
  villageEntityA: number,
  villageEntityB: number,
): NoReturn;

/**
 * Modifies HUD element visibility states.
 * @param hudKey Identifier for the HUD element.
 * @param visible Activation flag for element visibility.
 * @returns {NoReturn}
 * @remarks Affects all players' interfaces uniformly. Element must exist in HUD configuration data.
 */
declare function OUTPUT_UpdateHUDVisibility(
  hudKey: string,
  visible: boolean,
): NoReturn;

/**
 * Extends entity AABB components vertically for trigger volume optimization.
 * @param aabbEntities Target entities with badger:aabb components.
 * @returns {NoReturn}
 * @remarks Creates tall prismatic collision volumes. Useful for verticality-insensitive trigger scenarios.
 */
declare function OUTPUT_VerticallyStretchAABBToMax(
  aabbEntities: EntityGroup,
): NoReturn;
