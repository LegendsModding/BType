/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Retrieves the count of specific card types within a named deck.
 * Aggregates card instances matching the library index across all deck slots.
 * @param {DeckName} deckName Target deck identifier
 * @param {LibraryIndex} libraryIndex Card type identifier
 * @returns {number} Total card count of specified type
 * @example
 * // Assess military readiness
 * const siegeCount = QUERY_CountCardTypeInDeck("attack_deck", "catapult");
 * @see {@link DECK_ManagementSystem} for deck structure
 * @remarks
 * Deck names must match registered identifiers in content systems.
 * Library indexes correspond to card definitions in game data.
 */
declare function QUERY_CountCardTypeInDeck(
  deckName: DeckName,
  libraryIndex: LibraryIndex,
): number;

/**
 * Calculates total current health across multiple entities.
 * Sums health values from all valid entities in the group.
 * @param {EntityGroup} entities Target entities for health calculation
 * @returns {number} Aggregate health value
 * @example
 * // Evaluate army strength
 * const totalHealth = QUERY_CurrentHealth(defenderUnits);
 * @see {@link HEALTH_AggregationSystem} for health metrics
 * @remarks
 * Excludes destroyed or invalid entities from calculation.
 * Coordinates with combat assessment systems.
 */
declare function QUERY_CurrentHealth(entities: EntityGroup): number;

/**
 * Retrieves the team responsible for an entity's destruction.
 * Must be called within DestroyedEntity event context.
 * @param {SingleEntity} entity Destroyed entity reference
 * @returns {string} Team identifier string
 * @example
 * // Track enemy victories
 * const attackerTeam = QUERY_DestroyerEntityTeam(villageCore);
 * @see {@link LISTENFOR_EntityDestroyed} for event registration
 * @remarks
 * Returns empty string if destruction context is unavailable.
 * Critical for combat attribution and scoring systems.
 */
declare function QUERY_DestroyerEntityTeam(entity: SingleEntity): string;

/**
 * Checks if an entity has an associated waypoint marker.
 * Verifies presence of navigation icons from placement systems.
 * @param {SingleEntity} entity Target entity reference
 * @returns {boolean} True if waypoint exists
 * @example
 * // Validate quest marker presence
 * const hasMarker = QUERY_DoesEntityHaveAwaypointIcon(questEntity);
 * @see {@link OUTPUT_AddWaypointIconByExistingEntityArchetype} for icon creation
 * @remarks
 * Waypoint status is managed by navigation systems.
 * Coordinates with UI marker management.
 */
declare function QUERY_DoesEntityHaveAwaypointIcon(
  entity: SingleEntity,
): boolean;

/**
 * Checks existence of player proximity observers.
 * Verifies if named observers were created via placement systems.
 * @param {string} observerName Observer identifier
 * @returns {boolean} True if observer exists
 * @example
 * // Verify detection system setup
 * const observerActive = QUERY_DoesPlayerProximityObserverExist("forest_zone");
 * @see {@link OUTPUT_CreatePlayerProximityObserver} for observer creation
 * @remarks
 * Observer names must match registered configurations.
 * Used for spatial monitoring validation.
 */
declare function QUERY_DoesPlayerProximityObserverExist(
  observerName: string,
): boolean;

/**
 * Retrieves an entity's elevation in world coordinates.
 * Gets vertical position relative to world origin.
 * @param {SingleEntity} entity Target entity reference
 * @returns {number} Elevation value in blocks
 * @example
 * // Analyze terrain elevation
 * const mountainHeight = QUERY_Elevation(peakEntity);
 * @see {@link OUTPUT_PlacementSetElevationRule} for elevation rules
 * @remarks
 * Requires valid entity position data.
 * Coordinates with terrain generation systems.
 */
declare function QUERY_Elevation(entity: SingleEntity): number;

/**
 * Retrieves aggregated defense multiplier for entity groups.
 * Calculates combined defensive bonuses from all entities.
 * @param {EntityGroup} entities Target entities for evaluation
 * @returns {number} Total defense multiplier value
 * @example
 * // Assess fortress defenses
 * const defenseMultiplier = QUERY_EntitiesInvasionDefenseMultiplier(wallGroup);
 * @see {@link INVASION_DefenseSystem} for calculation logic
 * @remarks
 * Multipliers are applied during combat resolution phases.
 * Coordinates with military strategy systems.
 */
declare function QUERY_EntitiesInvasionDefenseMultiplier(
  entities: EntityGroup,
): number;

/**
 * Retrieves total invasion defense value for entity groups.
 * Sums raw defensive metrics across all entities.
 * @param {EntityGroup} entities Target entities for evaluation
 * @returns {number} Total defense value
 * @example
 * // Calculate defensive strength
 * const defenseTotal = QUERY_EntitiesInvasionDefenseValue(towerGroup);
 * @see {@link INVASION_DefenseSystem} for value definitions
 * @remarks
 * Raw values are used for combat outcome calculations.
 */
declare function QUERY_EntitiesInvasionDefenseValue(
  entities: EntityGroup,
): number;

/**
 * Retrieves current game difficulty setting.
 * Returns normalized difficulty identifiers.
 * @returns {GameDifficulty} Current difficulty level
 * @example
 * // Adjust enemy AI strength
 * const difficulty = QUERY_GameDifficulty();
 * @see {@link LISTENFOR_DifficultyChanged} for change monitoring
 * @remarks
 * Valid returns: "peaceful", "easy", "normal", "hard", "custom".
 * Coordinates with AI behavior and challenge scaling systems.
 */
declare function QUERY_GameDifficulty(): GameDifficulty;

/**
 * Retrieves active player entity references.
 * Excludes disconnected or dead players from results.
 * @returns {EntityGroup} Active player entities
 * @example
 * // Calculate player positions
 * const players = QUERY_GetAlivePlayers();
 * @see {@link PLAYER_LifecycleSystem} for state management
 * @remarks
 * Returns network-synchronized player references.
 * Entities have valid position data.
 */
declare function QUERY_GetAlivePlayers(): EntityGroup;

/**
 * Retrieves all non-destroyed villages in the world.
 * Returns settlements managed by BSHARP placement systems.
 * @returns {EntityGroup} Active village entities
 * @example
 * // Analyze village distribution
 * const villages = QUERY_GetAllAliveVillages();
 * @see {@link VILLAGE_LifecycleSystem} for village states
 * @remarks
 * Intended for world generation coordination.
 */
declare function QUERY_GetAllAliveVillages(): EntityGroup;

/**
 * Retrieves all claimed territory areas in the world.
 * Returns regions controlled by players or AI factions.
 * @returns {EntityGroup} Claimed area entities
 * @example
 * // Analyze territorial control
 * const claimedZones = QUERY_GetAllClaimedAreas();
 * @see {@link TERRITORY_ClaimSystem} for ownership mechanics
 * @remarks
 * Areas can be filtered by faction using FILTER_ByFactionName().
 */
declare function QUERY_GetAllClaimedAreas(): EntityGroup;

/**
 * Retrieves all village entities in the world.
 * Returns both active and inactive settlements.
 * @returns {EntityGroup} Village entities
 * @example
 * // Analyze all settlements
 * const allVillages = QUERY_GetAllVillages();
 * @see {@link VILLAGE_GenerationSystem} for creation mechanics
 * @remarks
 * Intended for BSHARP placement system coordination.
 */
declare function QUERY_GetAllPlayers(): EntityGroup;

/**
 * Retrieves all player entity references.
 * Includes disconnected and dead players.
 * @returns {EntityGroup} Player entities
 * @example
 * // Track all participants
 * const allPlayers = QUERY_GetAllPlayers();
 * @see {@link PLAYER_ConnectionSystem} for status checks
 * @remarks
 * Dead players lack valid position data.
 */
declare function QUERY_GetAllVillages(): EntityGroup;

/**
 * Retrieves current campaign resource quantity.
 * Gets team-specific resource values from persistent storage.
 * @param {ResourceName} resourceName Target resource identifier
 * @returns {number} Current resource amount
 * @example
 * // Check mana reserves
 * const mana = QUERY_GetCampaignResource("mana");
 * @see {@link RESOURCE_CampaignSystem} for resource management
 * @remarks
 * Resources must be registered as team assets.
 */
declare function QUERY_GetCampaignResource(resourceName: ResourceName): number;

/**
 * Retrieves maximum campaign resource capacity.
 * Gets team-specific resource limits from game configuration.
 * @param {ResourceName} resourceName Target resource identifier
 * @returns {number} Maximum resource capacity
 * @example
 * // Check population capacity
 * const maxUnits = QUERY_GetCampaignResourceMax("unit_cap");
 * @see {@link RESOURCE_CampaignSystem} for capacity management
 * @remarks
 * Values defined in game balancing parameters.
 */
declare function QUERY_GetCampaignResourceMax(
  resourceName: ResourceName,
): number;

/**
 * Retrieves child entities with specific instance names.
 * Finds entities based on structure editor naming conventions.
 * @param {EntityGroup} parententities Parent entity group
 * @param {string} instanceName Instance identifier from editor
 * @returns {EntityGroup} Matching child entities
 * @example
 * // Find fortress gates
 * const gates = QUERY_GetChildEntitiesWithInstanceName(fortressGroup, "main_gate");
 * @see {@link ENTITY_HierarchySystem} for parent-child relationships
 * @remarks
 * Instance names are set in structure editor tools.
 */
declare function QUERY_GetChildEntitiesWithInstanceName(
  parententities: EntityGroup,
  instanceName: string,
): EntityGroup;

/**
 * Calculates total radius of claimed area entities.
 * Aggregates territorial control dimensions.
 * @param {EntityGroup} claimedAreas Target claimed areas
 * @returns {number} Total radius in blocks
 * @example
 * // Measure expansion progress
 * const totalRadius = QUERY_GetClaimedAreaRadius(playerTerritories);
 * @see {@link TERRITORY_ClaimSystem} for radius definitions
 * @remarks
 * Sums radii of all valid claimed areas.
 */
declare function QUERY_GetClaimedAreaRadius(claimedAreas: EntityGroup): number;

/**
 * Retrieves entities assigned to control groups.
 * Returns managed units under group ownership.
 * @param {EntityGroup} entities Control group references
 * @returns {EntityGroup} Managed entities
 * @example
 * // Get squad members
 * const squad = QUERY_GetControlGroupEntities(commandGroup);
 * @see {@link CONTROL_GroupSystem} for management mechanics
 * @remarks
 * Coordinates with tactical deployment systems.
 */
declare function QUERY_GetControlGroupEntities(
  entities: EntityGroup,
): EntityGroup;

/**
 * Retrieves the creator entity reference.
 * Gets original builder/owner of constructed entities.
 * @param {SingleEntity} entity Target entity
 * @returns {number} Creator entity identifier
 * @example
 * // Track builder contributions
 * const builder = QUERY_GetCreator(wallSegment);
 * @see {@link BUILDING_CreationSystem} for ownership data
 * @remarks
 * Returns undefined for naturally spawned entities.
 */
declare function QUERY_GetCreator(entity: SingleEntity): number;

/**
 * Retrieves cultural development metrics for villages.
 * Gets specific cultural score values from village data.
 * @param {VillageID} villageId Target village identifier
 * @param {string} scoreType Cultural metric type ("A", "B", "C")
 * @returns {number} Cultural score value
 * @example
 * // Check cultural milestone
 * const scoreA = QUERY_GetCultureValue(10, "A");
 * @see {@link CULTURE_TrackingSystem} for metric definitions
 * @remarks
 * Scores correspond to content pack defined cultural systems.
 */
declare function QUERY_GetCultureValue(
  villageId: VillageID,
  scoreType: string,
): number;

/**
 * Retrieves current wave difficulty level.
 * Gets progression value from wave-based game modes.
 * @returns {number} Current wave level
 * @example
 * // Scale enemy strength
 * const wave = QUERY_GetCurrentWaveLevel();
 * @see {@link WAVE_ProgressionSystem} for level management
 * @remarks
 * Used in horde mode and escalating difficulty scenarios.
 */
declare function QUERY_GetCurrentWaveLevel(): number;

/**
 * Retrieves planned invasion actions for villages.
 * Gets pending military operations from AI planning systems.
 * @param {SingleEntity} entity Village entity reference
 * @returns {string} Invasion action identifier
 * @example
 * // Detect upcoming attacks
 * const plannedAction = QUERY_GetDelayedInvasionAction(villageCore);
 * @see {@link INVASION_PlanningSystem} for action definitions
 * @remarks
 * Empty string indicates no planned actions.
 */
declare function QUERY_GetDelayedInvasionAction(entity: SingleEntity): string;

/**
 * Retrieves the target entity of a delayed invasion action.
 * Returns the planned attack destination from military operation data.
 * @param {SingleEntity} entity Source base entity reference
 * @returns {number} Target entity identifier
 * @example
 * // Identify siege target
 * const targetFortress = QUERY_GetDelayedInvasionActionTarget(commandCenter);
 * @see {@link INVASION_PlanningSystem} for attack coordination
 * @remarks
 * Returns invalid ID if no action is planned.
 * Coordinates with strategic AI systems.
 */
declare function QUERY_GetDelayedInvasionActionTarget(
  entity: SingleEntity,
): number;

/**
 * Retrieves entity archetype distribution data for telemetry analysis.
 * Returns a formatted string containing archetype names and instance counts.
 * @param {EntityGroup} entities Target entity collection
 * @returns {string} Archetype count report string
 * @example
 * // Generate unit composition report
 * const unitReport = QUERY_GetEntitiesArchetypeCountList(militaryGroup);
 * @see {@link TELEMETRY_SendReport} for data transmission
 * @remarks
 * For use exclusively with telemetry systems.
 * Avoid in standard gameplay logic for performance.
 */
declare function QUERY_GetEntitiesArchetypeCountList(
  entities: EntityGroup,
): string;

/**
 * Retrieves entity count from a group.
 * Returns numerical representation of group size.
 * @param {EntityGroup} entities Target entity collection
 * @returns {number} Entity count
 * @example
 * // Check army size
 * const unitCount = QUERY_GetEntitiesCount(defenderGroup);
 * @see {@link ENTITY_GroupSystem} for management
 * @remarks
 * Returns 0 for invalid or empty groups.
 */
declare function QUERY_GetEntitiesCount(entities: EntityGroup): number;

/**
 * Retrieves all entities owned by a village.
 * Includes structures, units, and resources under village control.
 * @param {VillageID} villageId Target village identifier
 * @returns {EntityGroup} Owned entities
 * @example
 * // Audit village assets
 * const villageAssets = QUERY_GetEntitiesOwnedByVillage(15);
 * @see {@link VILLAGE_OwnershipSystem} for ownership mechanics
 * @remarks
 * Coordinates with resource management and defense systems.
 */
declare function QUERY_GetEntitiesOwnedByVillage(
  villageId: VillageID,
): EntityGroup;

/**
 * Retrieves entities with specific instance names.
 * Matches entities based on structure editor naming conventions.
 * @param {string} name Instance identifier from editor
 * @returns {EntityGroup} Matching entities
 * @example
 * // Find fortress gates
 * const gates = QUERY_GetEntitiesWithInstanceName("fortress_gate");
 * @see {@link STRUCTURE_EditorSystem} for naming standards
 * @remarks
 * Instance names are set during content creation.
 */
declare function QUERY_GetEntitiesWithInstanceName(name: string): EntityGroup;

/**
 * Retrieves entities matching complex tag criteria.
 * Applies both inclusion and exclusion filters for precise selection.
 * @param {string[]} includeTags Required tags (AND logic)
 * @param {string[]} excludeTags Forbidden tags (NAND logic)
 * @returns {EntityGroup} Filtered entities
 * @example
 * // Select unclaimed resources
 * const resources = QUERY_GetEntitiesWithTagFilter(["resource"], ["claimed"]);
 * @see {@link TAG_FilterSystem} for tag mechanics
 * @remarks
 * Empty includeTags matches all non-excluded entities.
 */
declare function QUERY_GetEntitiesWithTagFilter(
  includeTags: string[],
  excludeTags: string[],
): EntityGroup;

/**
 * Retrieves entities containing specified tags.
 * Matches entities with all required tags present.
 * @param {string[]} tags Required tag set
 * @returns {EntityGroup} Matching entities
 * @example
 * // Select military units
 * const soldiers = QUERY_GetEntitiesWithTags(["military", "ranged"]);
 * @see {@link TAG_QuerySystem} for tag validation
 * @remarks
 * Allows entities with additional tags beyond the specified set.
 */
declare function QUERY_GetEntitiesWithTags(tags: string[]): EntityGroup;

/**
 * Retrieves faction association for an entity.
 * Gets horde allegiance from entity metadata.
 * @param {SingleEntity} entity Target entity reference
 * @returns {string} Faction name identifier
 * @example
 * // Identify enemy faction
 * const faction = QUERY_GetFactionNameFromEntity(hostileUnit);
 * @see {@link FACTION_AssociationSystem} for allegiance data
 * @remarks
 * Returns empty string for non-aligned entities.
 */
declare function QUERY_GetFactionNameFromEntity(entity: SingleEntity): string;

/**
 * Retrieves faction name from village data.
 * Gets controlling horde identifier for settlements.
 * @param {VillageID} villageId Target village identifier
 * @returns {string} Faction name
 * @example
 * // Check village allegiance
 * const villageFaction = QUERY_GetFactionNameFromVillageID(20);
 * @see {@link VILLAGE_FactionSystem} for ownership data
 * @remarks
 * Returns default faction for unclaimed villages.
 */
declare function QUERY_GetFactionNameFromVillageID(
  villageId: VillageID,
): string;

/**
 * Retrieves village size classification.
 * Gets settlement scale from persistent metadata.
 * @param {VillageID} villageId Target village identifier
 * @returns {string} Size classification ("small", "medium", etc.)
 * @example
 * // Check fortress scale
 * const size = QUERY_GetFactionSizeFromVillageID(25);
 * @see {@link VILLAGE_SizeSystem} for classification logic
 * @remarks
 * Returns "unknown" for invalid village references.
 */
declare function QUERY_GetFactionSizeFromVillageID(
  villageId: VillageID,
): string;

/**
 * Retrieves current game mode setting.
 * Returns operational mode identifier.
 * @returns {GameMode} Mode identifier ("campaign", "pvp", etc.)
 * @example
 * // Disable enemies in creative mode
 * if(QUERY_GetGameMode() === "creative") DISABLE_Enemies();
 * @see {@link GAME_ModeSystem} for mode definitions
 * @remarks
 * Affects available features and system behaviors.
 */
declare function QUERY_GetGameMode(): string;

/**
 * Retrieves global variable value.
 * Returns numerical state from persistent storage.
 * @param {string} variableName Global variable identifier
 * @returns {number} Current value (0 if unset)
 * @example
 * // Check global score
 * const score = QUERY_GetGlobalVariable("global_score");
 * @see {@link OUTPUT_SetGlobalVariable} for value modification
 * @remarks
 * Maintains state across game sessions and network instances.
 */
declare function QUERY_GetGlobalVariable(variableName: string): number;

/**
 * Retrieves entities violating spatial partition rules.
 * Returns intruders matching trigger criteria.
 * @param {SingleEntity} triggerEntity Spatial partition reference
 * @returns {EntityGroup} Intruding entities
 * @example
 * // Detect base infiltrators
 * const intruders = QUERY_GetIntruders(basePerimeter);
 * @see {@link SPATIAL_TriggerSystem} for partition configuration
 * @remarks
 * Results depend on trigger's tag filters and criteria.
 */
declare function QUERY_GetIntruders(triggerEntity: SingleEntity): EntityGroup;

/**
 * Retrieves attacking bases associated with an invasion.
 * Returns forward operating bases participating in the attack.
 * @param {InvasionID} invasionId Invasion operation identifier
 * @returns {EntityGroup} Attacking base entities
 * @example
 * // Track siege sources
 * const attackBases = QUERY_GetInvasionAttackV2AttackingBases(invasion_5);
 * @see {@link INVASION_AttackV2System} for operation details
 * @remarks
 * Coordinates with military deployment systems.
 */
declare function QUERY_GetInvasionAttackV2AttackingBases(
  invasionId: InvasionID,
): EntityGroup; // EntityGroup?

/**
 * Retrieves attacking faction for an invasion operation.
 * Gets horde identifier from military campaign data.
 * @param {InvasionID} invasionId Invasion identifier
 * @returns {FactionNameId} Attacking faction name
 * @example
 * // Identify invading force
 * const attackers = QUERY_GetInvasionAttackV2FactionName(invasion_10);
 * @see {@link INVASION_FactionSystem} for horde data
 * @remarks
 * Returns empty string for invalid invasion IDs.
 */
declare function QUERY_GetInvasionAttackV2FactionName(
  invasionId: InvasionID,
): FactionNameId;

/**
 * Retrieves invasion ID targeting a village.
 * Returns active campaign identifier if under attack.
 * @param {SingleEntity} villageEntity Target village reference
 * @returns {InvasionID} Active invasion identifier
 * @example
 * // Activate emergency protocols
 * const attackId = QUERY_GetInvasionAttackV2IdFromVillage(villageCore);
 * @see {@link INVASION_TargetingSystem} for attack coordination
 * @remarks
 * Returns invalid ID if no active attack exists.
 */
declare function QUERY_GetInvasionAttackV2IdFromVillage(
  villageEntity: SingleEntity,
): InvasionID;

/**
 * Retrieves invasion progress percentage.
 * Calculates completed time against total duration.
 * @param {InvasionID} invasionId Invasion operation identifier
 * @returns {number} Progress value (0-1 range)
 * @example
 * // Update progress UI
 * const progress = QUERY_GetInvasionAttackV2PercentComplete(invasion_15);
 * @see {@link INVASION_TimerSystem} for duration management
 * @remarks
 * Returns 0 for unactivated attacks.
 */
declare function QUERY_GetInvasionAttackV2PercentComplete(
  invasionId: InvasionID,
): number;

/**
 * Retrieves invasion strength metric.
 * Returns calculated power level of military operation.
 * @param {InvasionID} invasionId Invasion identifier
 * @returns {number} Strength value
 * @example
 * // Scale defensive measures
 * const attackStrength = QUERY_GetInvasionAttackV2Strength(invasion_20);
 * @see {@link INVASION_StrengthSystem} for calculation logic
 * @remarks
 * Used for difficulty scaling and AI coordination.
 */
declare function QUERY_GetInvasionAttackV2Strength(invasionId: number): number;

/**
 * Retrieves target village of invasion operation.
 * Returns settlement identifier under attack.
 * @param {InvasionID} invasionId Invasion identifier
 * @returns {SingleEntity} Target village entity
 * @example
 * // Reinforce besieged village
 * const targetVillage = QUERY_GetInvasionAttackV2VillageId(invasion_25);
 * @see {@link INVASION_TargetingSystem} for attack coordination
 * @remarks
 * Returns invalid entity if no target assigned.
 */
declare function QUERY_GetInvasionAttackV2VillageId(
  invasionId: number,
): SingleEntity;

/**
 * Retrieves current lives count from UI systems.
 * Returns remaining player lives as displayed in interface.
 * @returns {number} Lives remaining
 * @example
 * // Check game over condition
 * if(QUERY_GetLivesCounter() <= 0) END_Game();
 * @see {@link UI_LifeSystem} for display management
 * @remarks
 * Values updated through OUTPUT_SetLivesCounter().
 */
declare function QUERY_GetLivesCounter(): number;

/**
 * Retrieves card count from named decks.
 * Returns total primary cards excluding sub-cards.
 * @param {string} deck Deck identifier
 * @returns {number} Primary card count
 * @example
 * // Check remaining siege cards
 * const cardsLeft = QUERY_GetNamedDeckCardCount("siege_deck");
 * @see {@link DECK_ManagementSystem} for deck structure
 * @remarks
 * Deck names must match registered identifiers.
 */
declare function QUERY_GetNamedDeckCardCount(deck: string): number;

/**
 * Retrieves elapsed time from named timers.
 * Returns seconds passed since timer activation.
 * @param {string} timerName Timer identifier
 * @returns {number} Elapsed seconds
 * @example
 * // Check event timer
 * const timeLeft = QUERY_GetNamedTimerSecondsElapsed("event_timer");
 * @see {@link TIMER_System} for timer management
 * @remarks
 * Requires prior timer registration via OUTPUT_SetNamedTimer().
 */
declare function QUERY_GetNamedTimerSecondsElapsed(timerName: string): number;

/**
 * Retrieves player's current mount archetype.
 * Returns mounted entity's base definition name.
 * @param {SingleEntity} entity Player entity reference
 * @returns {string} Mount archetype name
 * @example
 * // Apply mount-specific buffs
 * const mountType = QUERY_GetPlayerMountName(playerEntity);
 * @see {@link MOUNT_System} for type definitions
 * @remarks
 * Returns empty string if not mounted.
 */
declare function QUERY_GetPlayerMountName(entity: SingleEntity): string;

/**
 * Retrieves players within village boundaries.
 * Includes all players regardless of connection status.
 * @param {VillageID} villageId Target village identifier
 * @returns {EntityGroup} Player entities
 * @example
 * // Check village population
 * const visitors = QUERY_GetPlayersInVillage(30);
 * @see {@link VILLAGE_BoundarySystem} for inclusion logic
 * @remarks
 * May include destroyed entities; validate before use.
 */
declare function QUERY_GetPlayersInVillage(villageId: VillageID): EntityGroup;

/**
 * Retrieves current resource quantity for an entity.
 * Returns team resources if applicable.
 * @param {SingleEntity} entity Resource owner reference
 * @param {ResourceName} resourceName Target resource identifier
 * @returns {number} Current resource amount
 * @example
 * // Check player wood reserves
 * const wood = QUERY_GetResource(playerEntity, "wood");
 * @see {@link RESOURCE_ManagementSystem} for resource types
 * @remarks
 * Automatically resolves team-shared resources.
 */
declare function QUERY_GetResource(
  entity: SingleEntity,
  resourceName: ResourceName,
): number;

/**
 * Retrieves maximum resource capacity for an entity.
 * Returns team resource limits if applicable.
 * @param {SingleEntity} entity Resource owner reference
 * @param {ResourceName} resourceName Target resource identifier
 * @returns {number} Maximum capacity
 * @example
 * // Check storage limits
 * const maxWood = QUERY_GetResourceMax(playerEntity, "wood");
 * @see {@link RESOURCE_CapacitySystem} for limit definitions
 * @remarks
 * Values defined in game balancing parameters.
 */
declare function QUERY_GetResourceMax(
  entity: SingleEntity,
  resourceName: ResourceName,
): number;

/**
 * Retrieves team association for an entity.
 * Returns the name of the team controlling or owning the specified entity.
 * @param {SingleEntity} entity Target entity reference
 * @returns {string} Team name identifier
 * @example
 * // Identify enemy team
 * const enemyTeam = QUERY_GetTeamName(hostileUnit);
 * @see {@link TEAM_AssociationSystem} for team data management
 * @remarks
 * Returns empty string for unaffiliated entities.
 */
declare function QUERY_GetTeamName(entity: SingleEntity): string;

/**
 * Retrieves current resource quantity for a team.
 * Gets shared resource values from team storage systems.
 * @param {string} teamName Target team identifier
 * @param {ResourceName} resourceName Resource type identifier
 * @returns {number} Current resource amount
 * @example
 * // Check team gold reserves
 * const gold = QUERY_GetTeamResource("red_team", "gold");
 * @see {@link RESOURCE_TeamSystem} for resource sharing mechanics
 * @remarks
 * Resources must be registered as team assets.
 */
declare function QUERY_GetTeamResource(
  teamName: string,
  resourceName: ResourceName,
): number;

/**
 * Retrieves maximum resource capacity for a team.
 * Gets shared resource limits from team configuration data.
 * @param {string} teamName Target team identifier
 * @param {ResourceName} resourceName Resource type identifier
 * @returns {number} Maximum capacity
 * @example
 * // Check team storage limits
 * const maxGold = QUERY_GetTeamResourceMax("blue_team", "gold");
 * @see {@LINK RESOURCE_CapacitySystem} for limit definitions
 * @remarks
 * Values defined in game balancing parameters.
 */
declare function QUERY_GetTeamResourceMax(
  teamName: string,
  resourceName: ResourceName,
): number;

/**
 * Retrieves ticket cap for specified types.
 * Gets maximum allowed tickets from player or team constraints.
 * @param {number} player Player entity reference
 * @param {string} ticketName Ticket type identifier
 * @returns {number} Ticket cap value
 * @example
 * // Validate unit deployment limits
 * const cap = QUERY_GetTicketCap(playerEntity, "unit_cap");
 * @see {@link TICKET_ManagementSystem} for cap definitions
 * @remarks
 * Automatically resolves team-shared constraints.
 */
declare function QUERY_GetTicketCap(player: number, ticketName: string): number;

/**
 * Retrieves current ticket usage count.
 * Gets active ticket consumption from player or team tracking systems.
 * @param {number} player Player entity reference
 * @param {string} ticketName Ticket type identifier
 * @returns {number} Used ticket count
 * @example
 * // Monitor army size
 * const usedTickets = QUERY_GetNumTicketsUsed(playerEntity, "unit_cap");
 * @see {@link TICKET_TrackingSystem} for usage metrics
 * @remarks
 * Coordinates with deployment and reinforcement systems.
 */
declare function QUERY_GetNumTicketsUsed(
  player: number,
  ticketName: string,
): number;

/**
 * Retrieves normalized time of day value.
 * Returns current progression through day-night cycle (0-1 range).
 * @returns {number} Time of day fraction
 * @example
 * // Adjust lighting effects
 * const currentTime = QUERY_GetTimeOfDay();
 * @see {@link TIME_System} for cycle management
 * @remarks
 * Value represents linear progression through day phases.
 */
declare function QUERY_GetTimeOfDay(): number;

/**
 * Retrieves user identifier for players.
 * Gets unique account information from authentication systems.
 * @param {SingleEntity} playerEntity Player entity reference
 * @returns {string} User ID string
 * @example
 * // Track player achievements
 * const userId = QUERY_GetUserId(playerEntity);
 * @see {@link AUTHENTICATION_System} for account data
 * @remarks
 * Required for persistent player data storage.
 */
declare function QUERY_GetUserId(playerEntity: SingleEntity): string;

/**
 * Retrieves completed match count for players.
 * Gets total online matches excluding practice modes.
 * @param {SingleEntity} playerEntity Player entity reference
 * @returns {number} Match count
 * @example
 * // Calculate player experience
 * const matchesPlayed = QUERY_GetUserMatchesPlayed(playerEntity);
 * @see {@link MATCH_TrackingSystem} for statistics
 * @remarks
 * Excludes local and tutorial sessions.
 */
declare function QUERY_GetUserMatchesPlayed(playerEntity: SingleEntity): number;

/**
 * Retrieves claimed territory areas for villages.
 * Returns regions controlled by settlement expansions.
 * @param {EntityGroup} villages Target village group
 * @returns {EntityGroup} Claimed area entities
 * @example
 * // Analyze territorial growth
 * const claimedZones = QUERY_GetVillageClaimedAreas(villageGroup);
 * @see {@link TERRITORY_ClaimSystem} for ownership mechanics
 * @remarks
 * Coordinates with expansion and defense systems.
 */
declare function QUERY_GetVillageClaimedAreas(
  villages: EntityGroup,
): EntityGroup;

/**
 * Retrieves flavor assignment for villages.
 * Gets thematic classification from content packs.
 * @param {VillageID} villageId Target village identifier
 * @returns {string} Flavor identifier
 * @example
 * // Apply thematic decorations
 * const flavor = QUERY_GetVillageFlavour(25);
 * @see {@link VILLAGE_FlavorSystem} for theme definitions
 * @remarks
 * Used for visual and narrative differentiation.
 */
declare function QUERY_GetVillageFlavour(villageId: VillageID): string;

/**
 * Retrieves core structures for villages.
 * Gets primary buildings maintaining settlement functionality.
 * @param {VillageID} villageId Target village identifier
 * @returns {EntityGroup} Heart building entities
 * @example
 * // Protect vital structures
 * const hearts = QUERY_GetVillageHearts(30);
 * @see {@link VILLAGE_CoreSystem} for heart definitions
 * @remarks
 * Critical for settlement survival and operations.
 */
declare function QUERY_GetVillageHearts(villageId: VillageID): EntityGroup;

/**
 * Retrieves village ID from entity reference.
 * @param {SingleEntity} entity Entity to query
 * @returns {VillageID} Associated village ID
 * @example
 * const villageId = QUERY_GetVillageIDFromEntity(enemyBase);
 * if(villageId !== otherVillageId) {
 *   TRACK_VillageActivity(villageId);
 * }
 */
declare function QUERY_GetVillageIDFromEntity(entity: SingleEntity): VillageID;

/**
 * Retrieves objective assignment for villages.
 * Gets mission goals associated with settlements.
 * @param {VillageID} villageId Target village identifier
 * @returns {string} Objective identifier
 * @example
 * // Track mission progress
 * const objective = QUERY_GetVillageObjective(35);
 * @see {@link OBJECTIVE_VillageSystem} for goal definitions
 * @remarks
 * Coordinates with quest and scoring systems.
 */
declare function QUERY_GetVillageObjective(villageId: VillageID): string;

/**
 * Retrieves placement slot identification for entities.
 * Gets spatial organization data from world generation systems.
 * @param {SingleEntity} entity Target entity reference
 * @returns {string} Slot name identifier
 * @example
 * // Validate structure placement
 * const slotName = QUERY_GetWorldPlacementName(buildingEntity);
 * @see {@link PLACEMENT_System} for slot management
 * @remarks
 * Used for procedural generation and validation.
 */
declare function QUERY_GetWorldPlacementName(entity: SingleEntity): string;

/**
 * Checks if an entity was created by players.
 * Verifies builder association from construction records.
 * @param {SingleEntity} entity Target entity reference
 * @returns {boolean} True if player-created
 * @example
 * // Detect player-built defenses
 * const isPlayerBuilt = QUERY_HasCreator(wallSegment);
 * @see {@link BUILDING_CreationSystem} for creator data
 * @remarks
 * Returns false for naturally spawned entities.
 */
declare function QUERY_HasCreator(entity: SingleEntity): boolean;

/**
 * Checks existence of entity-specific timers.
 * Verifies if named timers were set via timer systems.
 * @param {SingleEntity} entity Target entity reference
 * @param {string} timerName Timer identifier
 * @returns {boolean} True if timer exists
 * @example
 * // Validate cooldown status
 * const hasTimer = QUERY_HasEntityTimer(entity, "attack_cooldown");
 * @see {@link OUTPUT_SetEntityTimer} for timer creation
 * @remarks
 * Coordinates with ability and effect systems.
 */
declare function QUERY_HasEntityTimer(
  entity: SingleEntity,
  timerName: string,
): boolean;

/**
 * Checks leash attachment status for entities.
 * Verifies if movement restrictions are applied.
 * @param {number} entityWithLeash Target entity reference
 * @returns {boolean} True if leashed
 * @example
 * // Validate pet control
 * const isLeashed = QUERY_HasLeash(petEntity);
 * @see {@link MOB_ControlSystem} for leash mechanics
 * @remarks
 * Used for companion and summon management.
 */
declare function QUERY_HasLeash(entityWithLeash: number): boolean;

/**
 * Checks override status for compass range limits.
 * Verifies custom maximum detection distances.
 * @param {number} entityToPoll Compass entity reference
 * @returns {boolean} True if override exists
 * @example
 * // Validate exploration radius
 * const hasOverride = QUERY_HasOverrideForCompassMaxRange(compassEntity);
 * @see {@link COMPASS_RangeSystem} for limit definitions
 * @remarks
 * Coordinates with exploration and discovery systems.
 */
declare function QUERY_HasOverrideForCompassMaxRange(
  entityToPoll: number,
): boolean;

/**
 * Checks presence of specific tags on entities.
 * Verifies complete tag set inclusion.
 * @param {SingleEntity} entity Target entity reference
 * @param {string[]} tags Tag set to verify
 * @returns {boolean} True if all tags present
 * @example
 * // Validate military unit
 * const isValidUnit = QUERY_HasTags(unitEntity, ["military", "ranged"]);
 * @see {@link TAG_QuerySystem} for tag validation
 * @remarks
 * Allows entities with additional tags beyond the specified set.
 */
declare function QUERY_HasTags(entity: SingleEntity, tags: string[]): boolean;

/**
 * Checks existence of placement slot names for entities.
 * Verifies spatial organization data from generation systems.
 * @param {SingleEntity} entity Target entity reference
 * @returns {boolean} True if slot name exists
 * @example
 * // Validate structure placement
 * const hasSlot = QUERY_HasWorldPlacementName(buildingEntity);
 * @see {@link PLACEMENT_System} for slot management
 * @remarks
 * Used for procedural generation validation.
 */
declare function QUERY_HasWorldPlacementName(entity: SingleEntity): boolean;

/**
 * Checks visibility status for delayed actions.
 * Verifies if military operations are hidden from UI updates.
 * @param {SingleEntity} entity Source base reference
 * @returns {boolean} True if action is hidden
 * @example
 * // Validate stealth operations
 * const isHidden = QUERY_IsDelayedInvasionActionHidden(commandCenter);
 * @see {@link INVASION_StealthSystem} for visibility mechanics
 * @remarks
 * Coordinates with strategic AI systems.
 */
declare function QUERY_IsDelayedInvasionActionHidden(
  entity: SingleEntity,
): boolean;

/**
 * Checks operational status for entities.
 * Verifies if entities are disabled due to health or other factors.
 * @param {SingleEntity} entity Target entity reference
 * @returns {boolean} True if entity is disabled
 * @example
 * // Validate structure functionality
 * const isDisabled = QUERY_IsEntityDisabled(buildingEntity);
 * @see {@link ENTITY_StateSystem} for status mechanics
 * @remarks
 * Affects interaction and functionality availability.
 */
declare function QUERY_IsEntityDisabled(entity: SingleEntity): boolean;

/**
 * Checks initialization status for global variables.
 * Verifies if variables have been explicitly set.
 * @param {string} variableName Variable identifier
 * @returns {boolean} True if variable is initialized
 * @example
 * // Validate system state
 * const isInitialized = QUERY_IsGlobalVariableSet("game_started");
 * @see {@link VARIABLE_ManagementSystem} for state tracking
 * @remarks
 * Returns false for unset or default-initialized variables.
 */
declare function QUERY_IsGlobalVariableSet(variableName: string): boolean;

/**
 * Checks campaign onboarding flow status for hosts.
 * Verifies if special tutorial sequences are active.
 * @returns {boolean} True if in onboarding flow
 * @example
 * // Adjust difficulty scaling
 * if(QUERY_IsHostInCampaignOnboardingFlow()) REDUCE_Difficulty();
 * @see {@link ONBOARDING_System} for tutorial mechanics
 * @remarks
 * Coordinates with training and progression systems.
 */
declare function QUERY_IsHostInCampaignOnboardingFlow(): boolean;

/**
 * Checks completion status for invasion operations.
 * Verifies if military campaigns have concluded.
 * @param {number} invasionId Invasion operation identifier
 * @returns {boolean} True if invasion is over
 * @example
 * // Clean up battlefield
 * if(QUERY_IsInvasionOver(invasion_10)) REMOVE_BattleEffects();
 * @see {@link INVASION_CompletionSystem} for state tracking
 * @remarks
 * Coordinates with cleanup and reset systems.
 */
declare function QUERY_IsInvasionOver(invasionId: number): boolean;

/**
 * Checks activation status for named timers.
 * Verifies if timers are currently running or paused.
 * @param {string} timerName Timer identifier
 * @returns {boolean} True if timer is active
 * @example
 * // Validate ability cooldown
 * const isActive = QUERY_IsNamedTimerActive("ability_cooldown");
 * @see {@link TIMER_System} for state management
 * @remarks
 * Distinct from timer existence checks.
 */
declare function QUERY_IsNamedTimerActive(timerName: string): boolean;

/**
 * Checks mount status for player entities.
 * Verifies if players are currently riding any mounts.
 * @param {SingleEntity} entity Player entity reference
 * @returns {boolean} True if mounted
 * @example
 * // Apply mounted combat bonuses
 * const isMounted = QUERY_IsPlayerMounted(playerEntity);
 * @see {@link MOUNT_System} for mounting mechanics
 * @remarks
 * Returns false for non-player entities or dismounted states.
 */
declare function QUERY_IsPlayerMounted(entity: SingleEntity): boolean;

/**
 * Checks planned attack status for villages.
 * Verifies if settlements are scheduled for invasion during the upcoming night cycle.
 * @param {SingleEntity} entity Village entity reference
 * @returns {boolean} True if targeted for attack
 * @example
 * // Activate defensive preparations
 * const isTargeted = QUERY_IsTargetOfDelayedInvasionAction(villageCore);
 * @see {@link INVASION_PlanningSystem} for attack scheduling
 * @remarks
 * Coordinates with AI planning and defense systems.
 */
declare function QUERY_IsTargetOfDelayedInvasionAction(
  entity: SingleEntity,
): boolean;

/**
 * Checks destruction status for villages.
 * Verifies if settlements have been completely eliminated.
 * @param {VillageID} villageId Target village identifier
 * @returns {boolean} True if destroyed
 * @example
 * // Trigger settlement collapse effects
 * const isDestroyed = QUERY_IsVillageDestroyed(40);
 * @see {@link VILLAGE_DestructionSystem} for removal mechanics
 * @remarks
 * Returns true only after complete elimination.
 */
declare function QUERY_IsVillageDestroyed(villageId: VillageID): boolean;

/**
 * Checks occupation status for villages.
 * Verifies if settlements are under hostile control.
 * @param {VillageID} villageId Target village identifier
 * @returns {boolean} True if occupied
 * @example
 * // Assess liberation needs
 * const isOccupied = QUERY_IsVillageOccupied(45);
 * @see {@link OCCUPATION_System} for control mechanics
 * @remarks
 * Occupation typically involves hostile faction presence.
 */
declare function QUERY_IsVillageOccupied(villageId: VillageID): boolean;

/**
 * Retrieves maximum health capacity across multiple entities.
 * Aggregates potential health values from all valid entities in the group.
 * @param {EntityGroup} entities Target entities for health calculation
 * @returns {number} Aggregate maximum health value
 * @example
 * // Evaluate army strength potential
 * const totalMaxHealth = QUERY_MaxHealth(defenderUnits);
 * @see {@link HEALTH_CapacitySystem} for health metrics
 * @remarks
 * Excludes destroyed or invalid entities from calculation.
 */
declare function QUERY_MaxHealth(entities: EntityGroup): number;

/**
 * Retrieves position result from placement systems.
 * Gets calculated coordinates from successful BSharpPlacement execution.
 * @returns {number} Position identifier
 * @example
 * // Validate structure placement
 * const position = QUERY_PlacementResultPosition();
 * @see {@link PLACEMENT_ExecutionSystem} for placement mechanics
 * @remarks
 * Requires prior successful placement execution.
 */
declare function QUERY_PlacementResultPosition(): number;

/**
 * Retrieves primary entity result from placement systems.
 * Gets main object reference from successful BSharpPlacement execution.
 * @returns {number} Primary entity identifier
 * @example
 * // Initialize placed structure
 * const primaryEntity = QUERY_PlacementResultPrimary();
 * @see {@link PLACEMENT_PrimarySystem} for entity selection
 * @remarks
 * Coordinates with placement validation systems.
 */
declare function QUERY_PlacementResultPrimary(): number;

/**
 * Checks success status of placement operations.
 * Verifies if BSharpPlacement execution completed without errors.
 * @returns {boolean} True if successful
 * @example
 * // Confirm building construction
 * const placementSuccess = QUERY_PlacementSuccess();
 * @see {@link PLACEMENT_ValidationSystem} for success criteria
 * @remarks
 * Must be checked immediately after placement attempts.
 */
declare function QUERY_PlacementSuccess(): boolean;

/**
 * Generates deterministic random numbers based on game seed.
 * Produces consistent integer values within specified range.
 * @param {number} min Minimum inclusive boundary
 * @param {number} max Maximum inclusive boundary
 * @returns {number} Generated random integer
 * @example
 * // Determine loot drop count
 * const itemCount = QUERY_RandomNumber(1, 3);
 * @see {@link SEED_ManagementSystem} for seed handling
 * @remarks
 * Ensures reproducible randomness for synchronized gameplay.
 */
declare function QUERY_RandomNumber(min: number, max: number): number;

/**
 * Generates grouped deterministic random numbers.
 * Produces consistent integer values within specified range tied to named groups.
 * @param {number} min Minimum inclusive boundary
 * @param {number} max Maximum inclusive boundary
 * @param {string} group Randomization group name
 * @returns {number} Generated random integer
 * @example
 * // Generate terrain features
 * const featureType = QUERY_RandomNumberGroup(1, 5, "terrain");
 * @see {@link RANDOM_GroupSystem} for grouping mechanics
 * @remarks
 * Group names ensure independent random sequences.
 */
declare function QUERY_RandomNumberGroup(
  min: number,
  max: number,
  group: string,
): number;

/**
 * Retrieves total frame count since game initialization.
 * Provides frame-based timing data for testing purposes.
 * @returns {number} Total frame count
 * @example
 * // Measure performance metrics
 * const frameCount = QUERY_TEST_GetFrameCount();
 * @see {@link TESTING_Framework} for diagnostic tools
 * @remarks
 * Returns 0 in unsupported configurations.
 */
declare function QUERY_TEST_GetFrameCount(): number;

/**
 * Retrieves current player presence count for villages.
 * Counts active players within settlement boundaries.
 * @param {VillageID} villageId Target village identifier
 * @returns {number} Player count
 * @example
 * // Monitor settlement activity
 * const visitors = QUERY_VillagePlayerPresenceCount(50);
 * @see {@link VILLAGE_PresenceSystem} for tracking mechanics
 * @remarks
 * Includes only living and connected players.
 */
declare function QUERY_VillagePlayerPresenceCount(villageId: VillageID): number;
