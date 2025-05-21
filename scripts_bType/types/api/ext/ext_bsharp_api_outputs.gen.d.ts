/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Removes all registered event listeners from the system.
 * This function performs a complete cleanup of the event registry, resetting all listener configurations.
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Cleanup after final boss battle
 * OUTPUT_EXT_ClearAllListeners();
 * @remarks
 * This operation affects all systems using event listeners including combat triggers and UI interactions.
 * Use with caution as it may disable critical game systems if called inappropriately.
 * Typically used during world reset or major state transitions.
 * @see {@link LISTENFOR_ExternalEvent} for listener registration
 */
declare function OUTPUT_EXT_ClearAllListeners(): void;

/**
 * Resets all global variables to their default states.
 * Clears persistent storage for all systems using global variables.
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Prepare for new game instance
 * OUTPUT_EXT_ClearGlobalVariables();
 * @remarks
 * This affects village states, progression tracking, and resource management systems.
 * Use primarily during world initialization or complete state resets.
 * Does not affect constants or system-intrinsic configurations.
 * @see {@link OUTPUT_SetGlobalVariable} for variable management
 */
declare function OUTPUT_EXT_ClearGlobalVariables(): void;

/**
 * Copies a defined world area to a new location with full block data preservation.
 * Clones all block types and states between specified coordinates.
 * @param {number} srcMinX Minimum X coordinate of source area
 * @param {number} srcMinY Minimum Y coordinate of source area
 * @param {number} srcMinZ Minimum Z coordinate of source area
 * @param {number} srcMaxX Maximum X coordinate of source area
 * @param {number} srcMaxY Maximum Y coordinate of source area
 * @param {number} srcMaxZ Maximum Z coordinate of source area
 * @param {number} dstMinX Minimum X coordinate of destination area
 * @param {number} dstMinY Minimum Y coordinate of destination area
 * @param {number} dstMinZ Minimum Z coordinate of destination area
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Duplicate fortress structure
 * OUTPUT_EXT_CloneBlockArea(100, 64, 200, 110, 70, 210, 500, 64, 300);
 * @remarks
 * The destination area size is inferred from source dimensions.
 * Overwrites existing blocks in the destination area without warning.
 * Coordinates must form valid axis-aligned bounding boxes.
 * @see {@link QUERY_EXT_TestBlockArea} for area validation
 */
declare function OUTPUT_EXT_CloneBlockArea(
  srcMinX: number,
  srcMinY: number,
  srcMinZ: number,
  srcMaxX: number,
  srcMaxY: number,
  srcMaxZ: number,
  dstMinX: number,
  dstMinY: number,
  dstMinZ: number,
): void;

/**
 * Copies a filtered set of blocks between world areas.
 * Only includes blocks matching the specified names in the clone operation.
 * @param {string[]} blockNames Array of block identifiers to include
 * @param {number} srcMinX Minimum X coordinate of source area
 * @param {number} srcMinY Minimum Y coordinate of source area
 * @param {number} srcMinZ Minimum Z coordinate of source area
 * @param {number} srcMaxX Maximum X coordinate of source area
 * @param {number} srcMaxY Maximum Y coordinate of source area
 * @param {number} srcMaxZ Maximum Z coordinate of source area
 * @param {number} dstMinX Minimum X coordinate of destination area
 * @param {number} dstMinY Minimum Y coordinate of destination area
 * @param {number} dstMinZ Minimum Z coordinate of destination area
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Duplicate resource nodes only
 * OUTPUT_EXT_CloneBlockAreaFor(
 *   ["ore_iron", "ore_gold"],
 *   0, 64, 0,
 *   16, 72, 16,
 *   32, 64, 32
 * );
 * @remarks
 * The destination area size matches the source dimensions.
 * Maintains relative block positions during cloning.
 * Use for selective terrain duplication and resource management.
 */
declare function OUTPUT_EXT_CloneBlockAreaFor(
  blockNames: string[],
  srcMinX: number,
  srcMinY: number,
  srcMinZ: number,
  srcMaxX: number,
  srcMaxY: number,
  srcMaxZ: number,
  dstMinX: number,
  dstMinY: number,
  dstMinZ: number,
): void;

/**
 * Copies a masked set of blocks between world areas.
 * Excludes specified block types from the cloning operation.
 * @param {string[]} blockNames Array of block identifiers to exclude
 * @param {number} srcMinX Minimum X coordinate of source area
 * @param {number} srcMinY Minimum Y coordinate of source area
 * @param {number} srcMinZ Minimum Z coordinate of source area
 * @param {number} srcMaxX Maximum X coordinate of source area
 * @param {number} srcMaxY Maximum Y coordinate of source area
 * @param {number} srcMaxZ Maximum Z coordinate of source area
 * @param {number} dstMinX Minimum X coordinate of destination area
 * @param {number} dstMinY Minimum Y coordinate of destination area
 * @param {number} dstMinZ Minimum Z coordinate of destination area
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Clone area excluding hazardous blocks
 * OUTPUT_EXT_CloneBlockAreaMask(
 *   ["lava", "spikes"],
 *   100, 64, 200,
 *   110, 70, 210,
 *   500, 64, 300
 * );
 * @remarks
 * The exclusion mask applies to all block types in the source area.
 * Destination coordinates define the starting corner for cloning.
 * Maintains original block states for included blocks.
 * @see {@link OUTPUT_EXT_CloneBlockAreaFor} for inclusion-based cloning
 */
declare function OUTPUT_EXT_CloneBlockAreaMask(
  blockNames: string[],
  srcMinX: number,
  srcMinY: number,
  srcMinZ: number,
  srcMaxX: number,
  srcMaxY: number,
  srcMaxZ: number,
  dstMinX: number,
  dstMinY: number,
  dstMinZ: number,
): void;

/**
 * Disables health regeneration for specified entities.
 * Sets regeneration rate to zero while maintaining maximum health values.
 * @param {number[]} entities Entity identifiers to modify
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Disable regen for boss enemies during combat
 * OUTPUT_EXT_DisableHealthRegeneration([bossEntity]);
 * @remarks
 * This system override affects both players and AI entities.
 * Does not modify current health values, only regeneration rates.
 * Use with OUTPUT_EXT_RestoreDefaultHealthRegeneration to revert changes.
 * @see {@link OUTPUT_EXT_RestoreDefaultHealthRegeneration} for restoring defaults
 */
declare function OUTPUT_EXT_DisableHealthRegeneration(entities: number[]): void;

/**
 * Creates a customizable modal UI window with button callbacks.
 * Displays text and imagery with two configurable action buttons.
 * @param {string} title Window title text
 * @param {string} body Main content text
 * @param {string} imageUrl Path to texture asset
 * @param {string} buttonOneText Primary button label
 * @param {string} callbackOne SNIPPET_EXT_UICallback identifier
 * @param {string} buttonTwoText Secondary button label
 * @param {string} callbackTwo SNIPPET_EXT_UICallback identifier
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Show mission selection prompt
 * OUTPUT_EXT_DisplayUI(
 *   "Mission Alert",
 *   "Proceed to the next objective?",
 *   "textures/ui/mission.png",
 *   "Confirm",
 *   "handle_mission_confirm",
 *   "Cancel",
 *   "handle_mission_cancel"
 * );
 * @remarks
 * The UI blocks all other interactions until resolved.
 * Image paths must reference valid game or mod assets.
 * Callbacks must be registered via SNIPPET_EXT_UICallback().
 * @see {@link SNIPPET_EXT_UICallback} for callback registration
 */
declare function OUTPUT_EXT_DisplayUI(
  title: string,
  body: string,
  imageUrl: string,
  buttonOneText: string,
  callbackOne: string,
  buttonTwoText: string,
  callbackTwo: string,
): void;

/**
 * Fills a defined world region with a specific block type.
 * Creates contiguous block placements within axis-aligned bounding coordinates.
 * @param {string} blockName Target block identifier
 * @param {number} minX Minimum X coordinate of the area
 * @param {number} minY Minimum Y coordinate of the area
 * @param {number} minZ Minimum Z coordinate of the area
 * @param {number} maxX Maximum X coordinate of the area
 * @param {number} maxY Maximum Y coordinate of the area
 * @param {number} maxZ Maximum Z coordinate of the area
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Create defensive walls
 * OUTPUT_EXT_FillBlockArea("stone_wall", 100, 64, 200, 110, 70, 210);
 * @remarks
 * Overwrites existing blocks in the target area without warning.
 * Coordinates define a cuboid volume in world space.
 * Block names must match registered game or mod assets.
 * @see {@link QUERY_EXT_GetBlockName} for block validation
 */
declare function OUTPUT_EXT_FillBlockArea(
  blockName: string,
  minX: number,
  minY: number,
  minZ: number,
  maxX: number,
  maxY: number,
  maxZ: number,
): void;

/**
 * Restores entity health regeneration to original values.
 * Reverts changes made by OUTPUT_EXT_DisableHealthRegeneration().
 * @param {number[]} entities Entity identifiers to modify
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Restore regen after combat phase
 * OUTPUT_EXT_RestoreDefaultHealthRegeneration([bossEntity]);
 * @remarks
 * This function requires prior modification via DisableHealthRegeneration.
 * Resets to values defined in entity data files.
 * Affects both players and AI entities uniformly.
 * @see {@link OUTPUT_EXT_DisableHealthRegeneration} for disabling regen
 */
declare function OUTPUT_EXT_RestoreDefaultHealthRegeneration(
  entities: number[],
): void;

/**
 * Places a single block at specified world coordinates.
 * Creates or replaces blocks at exact positions.
 * @param {string} blockName Target block identifier
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Create treasure chest at coordinates
 * OUTPUT_EXT_SetBlock("chest_gold", 500, 128, 300);
 * @remarks
 * Overwrites any existing block at the target location.
 * Coordinates must be within valid world bounds.
 * Block names require prior registration in content packs.
 * @see {@link QUERY_EXT_GetBlockName} for existing block checks
 */
declare function OUTPUT_EXT_SetBlock(
  blockName: string,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Places a single block relative to an entity's position.
 * Uses entity coordinates as origin with optional offsets.
 * @param {string} blockName Target block identifier
 * @param {number} relativeEntity Reference entity identifier
 * @param {number} x X offset from entity position
 * @param {number} y Y offset from entity position
 * @param {number} z Z offset from entity position
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Place light source near player
 * OUTPUT_EXT_SetBlockRelative("torch", playerEntity, 2, 1, 0);
 * @remarks
 * Entity position is retrieved using QUERY_EXT_GetEntityPosition().
 * Offsets are applied in world coordinate space.
 * Fails silently if entity doesn't exist or coordinates are invalid.
 * @see {@link QUERY_EXT_GetEntityPosition} for position resolution
 */
declare function OUTPUT_EXT_SetBlockRelative(
  blockName: string,
  relativeEntity: number,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Relocates an entity to specified world coordinates.
 * Updates both position and associated spatial systems.
 * @param {number} targetEntity Entity to move
 * @param {number} x Target X coordinate
 * @param {number} y Target Y coordinate
 * @param {number} z Target Z coordinate
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Teleport boss to arena center
 * OUTPUT_EXT_SetEntityPosition(bossEntity, 500, 128, 300);
 * @remarks
 * Updates pathfinding and physics systems automatically.
 * Coordinates must be within valid world bounds.
 * Maintains entity orientation during relocation.
 * @see {@link QUERY_EXT_GetEntityPosition} for current position checks
 */
declare function OUTPUT_EXT_SetEntityPosition(
  targetEntity: number,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Modifies health regeneration rates with a scalar multiplier.
 * Adjusts regeneration without changing maximum health values.
 * @param {number[]} entities Target entities
 * @param {number} scalar Multiplicative regeneration modifier
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Boost ally regeneration
 * OUTPUT_EXT_SetHealthRegenerationScalar([allyUnits], 2.5);
 * @remarks
 * Values below 1 reduce regeneration speed.
 * Affects both natural regen and potion effects.
 * Does not stack with other regen modifiers.
 * @see {@link OUTPUT_EXT_RestoreDefaultHealthRegeneration} for reset
 */
declare function OUTPUT_EXT_SetHealthRegenerationScalar(
  entities: number[],
  scalar: number,
): void;

/**
 * Sets weather system to clear conditions.
 * Disables precipitation and storm effects globally.
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Prepare for festival event
 * OUTPUT_EXT_SetWeatherToClear();
 * @remarks
 * Overrides dynamic weather systems until changed.
 * Affects all environmental systems including farming and AI behavior.
 * @see {@link OUTPUT_EXT_SetWeatherToDynamic} for default behavior
 */
declare function OUTPUT_EXT_SetWeatherToClear(): void;

/**
 * Restores weather system to dynamic conditions.
 * Re-enables procedural weather generation based on biome settings.
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Resume natural weather cycles
 * OUTPUT_EXT_SetWeatherToDynamic();
 * @remarks
 * Returns to biome-appropriate weather patterns.
 * Coordinates with time progression systems.
 * @see {@link OUTPUT_EXT_SetWeatherToClear} for weather locking
 */
declare function OUTPUT_EXT_SetWeatherToDynamic(): void;

/**
 * Activates rain weather with intensity control.
 * Sets precipitation levels based on time-of-day parameters.
 * @param {number} intensity Rain intensity factor
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Create stormy conditions
 * OUTPUT_EXT_SetWeatherToRain(18000);
 * @remarks
 * Time parameter affects rain strength and lightning frequency.
 * Overrides dynamic weather systems until changed.
 * Affects crop growth and mob behavior patterns.
 * @see {@link OUTPUT_EXT_SetWeatherToClear} for weather reset
 */
declare function OUTPUT_EXT_SetWeatherToRain(intensity: number): void;

/**
 * Spawns a buildable structure at specified world coordinates without collision checks.
 * Creates structures regardless of existing block placements for forced construction.
 * @param {string} buildableName Buildable archetype identifier (e.g., "badger:poi_sword_gold")
 * @param {string} buildableTeam Owning team identifier (e.g., "player", "piglin")
 * @param {string} facingDirection Cardinal direction for structure orientation
 * @param {boolean} instantBuild Skip construction animation if true
 * @param {boolean} onGround Adjust Y position to terrain height if true
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @param {string} callback SNIPPET_EXT_SpawnBuildableCallback identifier
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Spawn indestructible monument
 * OUTPUT_EXT_SpawnBuildable(
 *   "badger:monument_core",
 *   "neutral",
 *   "north",
 *   true,
 *   true,
 *   500,
 *   128,
 *   300,
 *   ""
 * );
 * @remarks
 * This function bypasses normal collision detection systems.
 * Team parameter must match registered team identifiers.
 * Callback receives spawned entity references if provided.
 * @see {@link QUERY_EXT_GetEntityPosition} for coordinate validation
 */
declare function OUTPUT_EXT_SpawnBuildable(
  buildableName: string,
  buildableTeam: string,
  facingDirection: string,
  instantBuild: boolean,
  onGround: boolean,
  x: number,
  y: number,
  z: number,
  callback: string,
): void;

/**
 * Spawns a buildable structure relative to entities with offset and collision override.
 * Places structures near entity positions while ignoring existing constructions.
 * @param {string} buildableName Buildable archetype identifier
 * @param {number[]} entitiesPosition Entity group for positioning reference
 * @param {string} buildableTeam Owning team identifier
 * @param {string} facingDirection Structure orientation direction
 * @param {boolean} instantBuild Skip construction phases
 * @param {boolean} onGround Align with terrain elevation
 * @param {number} x X offset from entity positions
 * @param {number} y Y offset from entity positions
 * @param {number} z Z offset from entity positions
 * @param {string} callback Completion callback identifier
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Place emergency barracks near base
 * OUTPUT_EXT_SpawnBuildableAtWithOffsetWithoutCollision(
 *   "badger:barracks",
 *   [commandCenter],
 *   "player_team",
 *   "south",
 *   false,
 *   true,
 *   10,
 *   0,
 *   5,
 *   "barracks_ready"
 * );
 * @remarks
 * Offsets are applied to each entity in the group.
 * Maintains relative positioning for multiple entities.
 * Collision override allows placement in occupied areas.
 * @see {@link OUTPUT_EXT_SpawnBuildable} for absolute positioning
 */
declare function OUTPUT_EXT_SpawnBuildableAtWithOffsetWithoutCollision(
  buildableName: string,
  entitiesPosition: number[],
  buildableTeam: string,
  facingDirection: string,
  instantBuild: boolean,
  onGround: boolean,
  x: number,
  y: number,
  z: number,
  callback: string,
): void;

/**
 * Spawns buildables directly at entity positions without collision checks.
 * Creates structures exactly at entity locations for guaranteed placement.
 * @param {string} buildableName Buildable archetype identifier
 * @param {number[]} entitiesPosition Target entity group
 * @param {string} buildableTeam Owning team name
 * @param {string} facingDirection Structure orientation
 * @param {boolean} instantBuild Immediate completion flag
 * @param {boolean} onGround Terrain alignment toggle
 * @param {string} callback Completion callback identifier
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Create instant fortress at village center
 * OUTPUT_EXT_SpawnBuildableAtWithoutCollision(
 *   "badger:fortress",
 *   [villageCore],
 *   "defenders",
 *   "west",
 *   true,
 *   false,
 *   ""
 * );
 * @remarks
 * Overrides existing structures at target positions.
 * Maintains entity group associations for ownership.
 * Use for critical infrastructure placement.
 * @see {@link OUTPUT_EXT_SpawnBuildableWithoutCollision} for coordinate-based placement
 */
declare function OUTPUT_EXT_SpawnBuildableAtWithoutCollision(
  buildableName: string,
  entitiesPosition: number[],
  buildableTeam: string,
  facingDirection: string,
  instantBuild: boolean,
  onGround: boolean,
  callback: string,
): void;

/**
 * Places buildables at exact coordinates while ignoring collisions.
 * Guarantees structure placement regardless of existing blocks.
 * @param {string} buildableName Structure archetype identifier
 * @param {string} buildableTeam Owning team name
 * @param {string} facingDirection Orientation direction
 * @param {boolean} instantBuild Skip construction animation
 * @param {boolean} onGround Align with terrain height
 * @param {number} x Target X coordinate
 * @param {number} y Target Y coordinate
 * @param {number} z Target Z coordinate
 * @param {string} callback Completion callback identifier
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Create unbreakable bridge segment
 * OUTPUT_EXT_SpawnBuildableWithoutCollision(
 *   "badger:bridge_segment",
 *   "neutral",
 *   "east",
 *   true,
 *   true,
 *   250,
 *   64,
 *   400,
 *   ""
 * );
 * @remarks
 * Coordinates are absolute world positions.
 * Collision override allows placement in liquid/air blocks.
 * Team parameter must match registered factions.
 * @see {@link OUTPUT_EXT_SpawnBuildableAtWithoutCollision} for entity-relative placement
 */
declare function OUTPUT_EXT_SpawnBuildableWithoutCollision(
  buildableName: string,
  buildableTeam: string,
  facingDirection: string,
  instantBuild: boolean,
  onGround: boolean,
  x: number,
  y: number,
  z: number,
  callback: string,
): void;

/**
 * Instantiates a single entity at specified world coordinates.
 * Creates a new game entity instance using the provided archetype definition.
 * @param {string} archetypeName Entity archetype identifier (e.g., "badger:unit_piglin_warrior")
 * @param {number} x World X coordinate for placement
 * @param {number} y World Y coordinate for placement
 * @param {number} z World Z coordinate for placement
 * @returns {number} Entity identifier for the newly created instance
 * @example
 * // Spawn treasure chest at coordinates
 * const chestEntity = OUTPUT_EXT_SpawnEntity("badger:chest_gold", 500, 128, 300);
 * @remarks
 * Coordinates must be within valid world bounds.
 * Archetype names require prior registration in content packs.
 * Returns entity ID for subsequent system references.
 * @see {@link QUERY_EXT_GetEntityPosition} for position verification
 */
declare function OUTPUT_EXT_SpawnEntity(
  archetypeName: string,
  x: number,
  y: number,
  z: number,
): number;

/**
 * Spawns an entity relative to a reference entity's position.
 * Creates new entity instances with positional offsets for proximity placement.
 * @param {string} archetypeName Entity archetype identifier
 * @param {number} srcEntity Reference entity identifier
 * @param {number} x X axis offset from reference entity
 * @param {number} y Y axis offset from reference entity
 * @param {number} z Z axis offset from reference entity
 * @returns {number} Entity identifier for the new instance
 * @example
 * // Spawn companion near player
 * const companion = OUTPUT_EXT_SpawnEntityRelative("badger:unit_guard", playerEntity, 2, 0, 0);
 * @remarks
 * Offsets are applied in world coordinate space.
 * Requires valid reference entity with position data.
 * Maintains team/faction association if applicable.
 * @see {@link OUTPUT_EXT_SpawnEntity} for absolute positioning
 */
declare function OUTPUT_EXT_SpawnEntityRelative(
  archetypeName: string,
  srcEntity: number,
  x: number,
  y: number,
  z: number,
): number;

/**
 * Places a predefined environmental feature at specified coordinates.
 * Creates decorative or functional world features from content packs.
 * @param {string} featureName Feature archetype identifier (e.g., "badger:feature_brokenlands_algae_01")
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Create swamp vegetation
 * OUTPUT_EXT_SpawnFeature("badger:feature_swamp_reeds", 200, 64, 150);
 * @remarks
 * Features are non-interactive environmental elements.
 * Automatically aligns to terrain height when applicable.
 * Coordinates must be within loaded chunks for proper placement.
 * @see {@link QUERY_EXT_GetBlockName} for terrain validation
 */
declare function OUTPUT_EXT_SpawnFeature(
  featureName: string,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Places a complex structure with advanced placement options.
 * Creates multi-block structures with rotation, mirroring, and integrity parameters.
 * @param {string} structureName Structure archetype identifier (e.g., "badger:gate_door_piglin")
 * @param {number} x0 Base X coordinate for structure placement
 * @param {number} y0 Base Y coordinate for structure placement
 * @param {number} z0 Base Z coordinate for structure placement
 * @param {number} x1 X axis offset for structure orientation
 * @param {number} y1 Y axis offset for vertical alignment
 * @param {number} z1 Z axis offset for structure placement
 * @param {boolean} includeEntities Collision check against existing entities
 * @param {boolean} includeBlocks Collision check against existing blocks
 * @param {number} rotation Rotation in 90-degree increments (0, 90, 180, 270)
 * @param {string} mirror Mirroring axis ("none", "x", "xz", "z")
 * @param {string} animationMode Construction animation style ("none", "layers", "blocks")
 * @param {number} ticks Animation duration in game ticks
 * @param {number} integrity Structural completeness percentage (0-100)
 * @returns {NoReturn} This function does not return a value
 * @example
 * // Place rotated fortress entrance
 * OUTPUT_EXT_SpawnStructure(
 *   "badger:fortress_gate",
 *   500, 128, 300,
 *   0, 0, 0,
 *   false, false,
 *   90, "none",
 *   "blocks", 200,
 *   85
 * );
 * @remarks
 * Structure placement considers world boundaries and biome compatibility.
 * Integrity values below 100 create partially destroyed structures.
 * Animation modes control visual construction effects.
 * Rotation/mirror parameters affect structure orientation.
 * @see {@link OUTPUT_EXT_SpawnBuildable} for simple structure placement
 */
declare function OUTPUT_EXT_SpawnStructure(
  structureName: string,
  x0: number,
  y0: number,
  z0: number,
  x1: number,
  y1: number,
  z1: number,
  includeEntities: boolean,
  includeBlocks: boolean,
  rotation: number,
  mirror: string,
  animationMode: string,
  ticks: number,
  integrity: number,
): void;
