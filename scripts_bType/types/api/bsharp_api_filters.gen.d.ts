/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Filters entity group to contain only living entities not marked for destruction.
 * Removes entities in death animation or pending removal from the game world.
 * @param {EntityGroup} entities Collection of entities to filter
 * @returns {EntityGroup} Filtered group of active entities
 * @example
 * // Get active enemy units
 * const aliveEnemies = FILTER_ByAlive(enemyGroup);
 * @remarks
 * This function checks entity lifecycle states managed by the health system.
 * Critical for combat targeting and AI behavior systems to avoid invalid references.
 * Maintains entity group order while removing invalid entries.
 * @see {@link QUERY_EXT_GetEntityPosition} for position validation
 */
declare function FILTER_ByAlive(entities: EntityGroup): EntityGroup;

/**
 * Filters entity group to the closest members relative to a reference entity.
 * Uses spatial partitioning for efficient distance calculations.
 * @param {EntityGroup} entities Collection to filter
 * @param {SingleEntity} closest Reference entity for proximity checks
 * @param {number} count Maximum number of entities to return
 * @returns {EntityGroup} Filtered nearest entities
 * @example
 * // Select nearby allies for healing
 * const nearbyAllies = FILTER_ByClosest(unitGroup, healerEntity, 5);
 * @remarks
 * Distance calculation uses Euclidean metrics in 3D space.
 * Results are ordered by proximity to reference entity.
 * Performance scales with entity group size and count parameter.
 */
declare function FILTER_ByClosest(
  entities: EntityGroup,
  closest: SingleEntity,
  count: number,
): EntityGroup;

/**
 * Filters entities within a spherical radius from a center entity.
 * Calculates distances using 3D coordinate systems for spatial queries.
 * @param {EntityGroup} entities Target entity collection
 * @param {SingleEntity} center Reference entity position
 * @param {number} distance Radius threshold in blocks
 * @returns {EntityGroup} Entities within radius
 * @example
 * // Detect threats near village center
 * const threats = FILTER_ByDistance(enemyUnits, villageCore, 50);
 * @remarks
 * Uses QUERY_EXT_GetEntityPosition() for coordinate resolution.
 * Includes entities whose collision bounds intersect the radius.
 * Distance is calculated from entity origin points.
 */
declare function FILTER_ByDistance(
  entities: EntityGroup,
  center: SingleEntity,
  distance: number,
): EntityGroup;

/**
 * Filters entities belonging to specified factions.
 * Checks faction associations for cross-faction interaction systems.
 * @param {EntityGroup} entities Target entity collection
 * @param {string[]} factionNames Array of faction identifiers
 * @returns {EntityGroup} Faction-filtered entities
 * @example
 * // Get piglin military units
 * const hordeUnits = FILTER_ByFactionName(allUnits, ["piglin_red", "piglin_black"]);
 * @remarks
 * Requires prior faction registration via content systems.
 * Uses exact string matching for faction name comparisons.
 * Maintains original entity group order after filtering.
 */
declare function FILTER_ByFactionName(
  entities: EntityGroup,
  factionNames: string[],
): EntityGroup;

/**
 * Filters entity group to the furthest members from a reference entity.
 * Calculates distances using 3D spatial metrics for maximum separation.
 * @param {EntityGroup} entities Collection to filter
 * @param {number} anchorEntity Reference entity identifier
 * @param {number} count Number of entities to retain
 * @returns {number[]} Array of entity identifiers
 * @example
 * // Select distant scouts for exploration
 * const frontierScouts = FILTER_ByFarthest(scoutGroup, baseEntity, 3);
 * @remarks
 * Results are ordered by descending distance from anchor.
 * Uses spatial partitioning for optimized calculations.
 * Returns empty array if no entities meet criteria.
 */
declare function FILTER_ByFarthest(
  entities: EntityGroup,
  anchorEntity: number,
  count: number,
): number[];

/**
 * Filters entities that have a creator association.
 * Identifies structures or units created by players/AI for ownership systems.
 * @param {EntityGroup} entities Target entity collection
 * @returns {number[]} Entities with valid creator references
 * @example
 * // Track player-built defenses
 * const playerStructures = FILTER_ByHasCreator(allBuildings);
 * @remarks
 * Creator data is stored in entity metadata during creation.
 * Critical for ownership verification and reward systems.
 * Returns entities in original order after filtering.
 */
declare function FILTER_ByHasCreator(entities: EntityGroup): number[];

/**
 * Filters entities based on absolute health thresholds.
 * Compares current health values against specified limits.
 * @param {EntityGroup} entities Target entity collection
 * @param {number} threshold Health value boundary
 * @param {boolean} aboveThreshold Direction of comparison (true for >=, false for <=)
 * @returns {number[]} Filtered entity identifiers
 * @example
 * // Find critically injured units
 * const wounded = FILTER_ByHealth(allUnits, 20, false);
 * @remarks
 * Health values are retrieved from live entity states.
 * Does not consider maximum health percentages.
 * Results may vary during ongoing combat scenarios.
 */
declare function FILTER_ByHealth(
  entities: EntityGroup,
  threshold: number,
  aboveThreshold: boolean,
): number[];

/**
 * Filters entities based on health percentage thresholds.
 * Evaluates current health as percentage of maximum capacity.
 * @param {EntityGroup} entities Target entity collection
 * @param {number} threshold Percentage threshold (0-100)
 * @param {boolean} aboveThreshold Comparison direction
 * @returns {number[]} Filtered entity identifiers
 * @example
 * // Identify healthy defenders
 * const strongUnits = FILTER_ByHealthPercentage(guardGroup, 75, true);
 * @remarks
 * Percentage calculation uses current/max health ratio.
 * Requires entities with valid health components.
 * Threshold comparisons use floating-point precision.
 */
declare function FILTER_ByHealthPercentage(
  entities: EntityGroup,
  threshold: number,
  aboveThreshold: boolean,
): number[];

/**
 * Filters entities that are children of a specified parent entity.
 * Checks entity hierarchy relationships for structural systems.
 * @param {EntityGroup} entities Target entity collection
 * @param {number} parent Parent entity identifier
 * @returns {number[]} Child entity identifiers
 * @example
 * // Get fortress wall segments
 * const walls = FILTER_ByParent(allStructures, fortressParent);
 * @remarks
 * Parent-child relationships are established during entity creation.
 * Used for managing compound structures and attachment systems.
 * Returns entities in scene graph order.
 */
declare function FILTER_ByParent(
  entities: EntityGroup,
  parent: number,
): EntityGroup;

/**
 * Filters entities using complex tag inclusion/exclusion rules.
 * Applies boolean logic to tag combinations for precise filtering.
 * @param {EntityGroup} entities Target entity collection
 * @param {string[]} includeTags Required tags (AND logic)
 * @param {string[]} excludeTags Forbidden tags (NAND logic)
 * @returns {EntityGroup} Filtered entities
 * @example
 * // Find unclaimed resources
 * const resources = FILTER_ByTagFilter(allItems, ["resource"], ["claimed"]);
 * @remarks
 * Tag matching uses exact string comparisons.
 * Empty includeTags matches all entities not excluded.
 * Empty excludeTags matches all entities with includes.
 */
declare function FILTER_ByTagFilter(
  entities: EntityGroup,
  includeTags: string[],
  excludeTags: string[],
): EntityGroup;

/**
 * Filters entities belonging to a specific team.
 * Verifies team membership for coordinated systems.
 * @param {EntityGroup} entities Target entity collection
 * @param {string} teamName Team identifier string
 * @returns {EntityGroup} Team member entities
 * @example
 * // Select allied reinforcements
 * const allies = FILTER_ByTeam(allUnits, "player_alliance");
 * @remarks
 * Team membership is managed by faction association systems.
 * Returns entities in original group order after filtering.
 * Validates against registered team names in content packs.
 */
declare function FILTER_ByTeam(
  entities: EntityGroup,
  teamName: string,
): EntityGroup;

/**
 * Filters entities associated with a specific village.
 * Checks village ownership metadata for entity management.
 * @param {EntityGroup} entities Target entity collection
 * @param {VillageID} villageId Target village identifier
 * @returns {EntityGroup} Village-owned entities
 * @example
 * // Manage village defenses
 * const defenses = FILTER_ByVillageID(allStructures, 15);
 * @remarks
 * Uses village association data from entity metadata.
 * Returns entities in original group order.
 * Coordinates with village management systems for resource tracking.
 */
declare function FILTER_ByVillageID(
  entities: EntityGroup,
  villageId: VillageID,
): EntityGroup;

/**
 * Filters entities based on their associated village's size classification.
 * Uses village size metadata to select entities from settlements matching specified size criteria.
 * @param {EntityGroup} entities Collection of entities to evaluate
 * @param {string[]} villageSizes Array of valid village size identifiers
 * @returns {EntityGroup} Filtered entities meeting size requirements
 * @example
 * // Select entities from large settlements
 * const majorVillages = FILTER_ByVillageSize(allVillages, ["large", "massive"]);
 * @remarks
 * Village size is determined through VILLAGE_SIZE_RANK system.
 * Requires entities to have valid village associations.
 * Maintains original entity order after filtering.
 * @see {@link VILLAGE_GetSize} for size evaluation details
 */
declare function FILTER_ByVillageSize(
  entities: EntityGroup,
  villageSizes: string[],
): EntityGroup;

/**
 * Filters entities based on their participation in invasion events.
 * Identifies entities marked as active participants or non-participants in conflict systems.
 * @param {EntityGroup} entities Target entity collection
 * @param {boolean} isParticipant Selection criteria for participation status
 * @returns {EntityGroup} Filtered entity identifiers
 * @example
 * // Track neutral entities during invasion
 * const bystanders = FILTER_InvasionParticipant(allEntities, false);
 * @remarks
 * Uses invasion tracking metadata from faction systems.
 * Returns entities maintaining original group order.
 * Critical for combat targeting and AI decision making.
 */
declare function FILTER_InvasionParticipant(
  entities: EntityGroup,
  isParticipant: boolean,
): EntityGroup;

/**
 * Excludes engineer entities currently engaged in construction tasks.
 * Filters out entities marked as occupied in their metadata state.
 * @param {EntityGroup} entities Collection of engineer entities
 * @returns {EntityGroup} Available engineer entities
 * @example
 * // Select free engineers for new projects
 * const available = FILTER_OutOccupiedEngineers(engineerPool);
 * @remarks
 * Checks entity occupation flags set by construction systems.
 * Returns entities in original order after filtering.
 * Use before assigning new construction tasks.
 */
declare function FILTER_OutOccupiedEngineers(
  entities: EntityGroup,
): EntityGroup;

/**
 * Selects a random subset of entities from a collection.
 * Uses uniform distribution for unbiased selection.
 * @param {EntityGroup} entities Target entity collection
 * @param {number} count Number of entities to select
 * @returns {EntityGroup} Randomly selected subset
 * @example
 * // Select random targets for spell effect
 * const targets = FILTER_RandomCount(enemyUnits, 3);
 * @remarks
 * Selection count must not exceed entity collection size.
 * Maintains original entity order within the subset.
 * Uses game seed for deterministic randomness.
 */
declare function FILTER_RandomCount(
  entities: EntityGroup,
  count: number,
): EntityGroup;

/**
 * Selects a percentage-based random sample from an entity collection.
 * Calculates selection count based on percentage of total entities.
 * @param {EntityGroup} entities Target entity group
 * @param {number} percent Selection percentage (0-100)
 * @returns {EntityGroup} Randomly sampled entities
 * @example
 * // Select 25% of resource nodes for event
 * const eventResources = FILTER_RandomPercentage(resourceNodes, 25);
 * @remarks
 * Rounds down fractional entity counts.
 * Requires at least one entity in the collection.
 * Uses game seed for consistent sampling.
 */
declare function FILTER_RandomPercentage(
  entities: EntityGroup,
  percent: number,
): EntityGroup;
