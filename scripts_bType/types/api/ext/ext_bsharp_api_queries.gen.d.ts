/*
========== INFO ==========
This file is partially auto-generated. Please resolve all "TODO _ DOC"s (without the spaces) before submitting.
These functions are managed on the code end, contact the BSharp programmer team if this file is out of date.
==========================
*/

/**
 * Retrieves all tags associated with an entity.
 * Returns a string array containing all semantic tags applied to the entity.
 * @param {number} entity Target entity identifier
 * @returns {string[]} Array of tag strings
 * @example
 * // Check entity classification
 * const tags = QUERY_EXT_GetAllTags(villageCenter);
 * if(tags.includes("military")) APPLY_DefenseBonus(villageCenter);
 * @see {@link TAGS} for standard tag definitions
 * @see {@link FILTER_ByTags} for tag-based entity filtering
 */
declare function QUERY_EXT_GetAllTags(entity: number): string[];

/**
 * Queries block state data by numerical ID at specified world coordinates.
 * Returns the state value associated with the block's configuration.
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @param {number} stateID Target state identifier
 * @returns {number} Block state value
 * @example
 * // Check terrain stability
 * const stability = QUERY_EXT_GetBlockDataByID(100, 64, 200, 15);
 * @remarks
 * Coordinates are absolute world positions.
 * Returns 0 if block doesn't exist or state isn't present.
 */
declare function QUERY_EXT_GetBlockDataByID(
  x: number,
  y: number,
  z: number,
  stateID: number,
): number;

/**
 * Queries block state data by ID relative to an entity's position.
 * Calculates coordinates based on entity's location and provided offsets.
 * @param {number} relativeEntity Reference entity identifier
 * @param {number} x X offset from entity position
 * @param {number} y Y offset from entity position
 * @param {number} z Z offset from entity position
 * @param {number} stateID Target state identifier
 * @returns {number} Block state value
 * @example
 * // Check block state near structure
 * const moistureLevel = QUERY_EXT_GetBlockDataByIDRelative(farm, 0, 1, 0, 7);
 * @see {@link QUERY_EXT_GetEntityPosition} for position resolution
 */
declare function QUERY_EXT_GetBlockDataByIDRelative(
  relativeEntity: number,
  x: number,
  y: number,
  z: number,
  stateID: number,
): number;

/**
 * Queries block state data by name at absolute world coordinates.
 * Resolves state values based on human-readable state identifiers.
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @param {string} stateName State identifier string
 * @returns {number} Block state value
 * @example
 * // Check portal activation state
 * const isActive = QUERY_EXT_GetBlockDataByName(500, 128, 300, "portal_active");
 * @throws {Error} If stateName is invalid or unrecognized
 */
declare function QUERY_EXT_GetBlockDataByName(
  x: number,
  y: number,
  z: number,
  stateName: string,
): number;

/**
 * Queries block state data by name relative to an entity's position.
 * Combines entity position resolution with named state queries.
 * @param {number} relativeEntity Reference entity identifier
 * @param {number} x X offset from entity
 * @param {number} y Y offset from entity
 * @param {number} z Z offset from entity
 * @param {string} stateName Target state name
 * @returns {number} Block state value
 * @example
 * // Check trap activation near entrance
 * const trapState = QUERY_EXT_GetBlockDataByNameRelative(gate, 0, 0, 5, "trap_armed");
 * @see {@link QUERY_EXT_GetEntityPosition} for coordinate calculation
 */
declare function QUERY_EXT_GetBlockDataByNameRelative(
  relativeEntity: number,
  x: number,
  y: number,
  z: number,
  stateName: string,
): number;

/**
 * Retrieves block type identifier at absolute world coordinates.
 * Returns the registered block name for the specified position.
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @returns {string} Block type identifier
 * @example
 * // Identify terrain type
 * const terrainType = QUERY_EXT_GetBlockName(200, 64, 150);
 * @remarks
 * Returns empty string for invalid positions or unregistered blocks.
 * Coordinates are checked against world boundaries and chunk availability.
 */
declare function QUERY_EXT_GetBlockName(
  x: number,
  y: number,
  z: number,
): string;

/**
 * Retrieves block type name relative to an entity's position.
 * Calculates world coordinates based on entity location and offsets.
 * @param {number} relativeEntity Reference entity identifier
 * @param {number} x X offset from entity position
 * @param {number} y Y offset from entity position
 * @param {number} z Z offset from entity position
 * @returns {string} Block type identifier
 * @example
 * // Check foundation material
 * const material = QUERY_EXT_GetBlockNameRelative(fortress, 0, -1, 0);
 * @see {@link QUERY_EXT_GetEntityPosition} for position resolution
 */
declare function QUERY_EXT_GetBlockNameRelative(
  relativeEntity: number,
  x: number,
  y: number,
  z: number,
): string;

/**
 * Retrieves an entity's position in world coordinates.
 * Returns a numerical array in [x, y, z] format.
 * @param {number} targetEntity Entity identifier
 * @returns {number[]} Position coordinates
 * @example
 * // Calculate distance between entities
 * const [x, y, z] = QUERY_EXT_GetEntityPosition(villageHall);
 * @throws {Error} If entity doesn't exist or has no position
 */
declare function QUERY_EXT_GetEntityPosition(targetEntity: number): number[];

/**
 * Tests for specific block presence at world coordinates.
 * Checks if the block at the given position matches the target name.
 * @param {string} blockName Target block identifier
 * @param {number} x World X coordinate
 * @param {number} y World Y coordinate
 * @param {number} z World Z coordinate
 * @returns {boolean} True if block matches
 * @example
 * // Detect portal activation
 * const portalActive = QUERY_EXT_TestBlock("portal_block", 500, 128, 300);
 */
declare function QUERY_EXT_TestBlock(
  blockName: string,
  x: number,
  y: number,
  z: number,
): boolean;

/**
 * Compares two world regions for identical block composition.
 * Verifies if source and destination areas have matching block types and states.
 * @param {number} srcMinX Source area minimum X
 * @param {number} srcMinY Source area minimum Y
 * @param {number} srcMinZ Source area minimum Z
 * @param {number} dstMinX Destination area minimum X
 * @param {number} dstMinY Destination area minimum Y
 * @param {number} dstMinZ Destination area minimum Z
 * @param {number} areaMaxX Area size in X dimension
 * @param {number} areaMaxY Area size in Y dimension
 * @param {number} areaMaxZ Area size in Z dimension
 * @returns {boolean} True if areas match exactly
 * @example
 * // Verify structure integrity
 * const matches = QUERY_EXT_TestBlockArea(
 *   100, 64, 200,
 *   150, 64, 250,
 *   10, 5, 10
 * );
 * @remarks
 * Areas must be axis-aligned and of equal dimensions.
 * Comparison includes all blocks within the defined bounding boxes.
 */
declare function QUERY_EXT_TestBlockArea(
  srcMinX: number,
  srcMinY: number,
  srcMinZ: number,
  dstMinX: number,
  dstMinY: number,
  dstMinZ: number,
  areaMaxX: number,
  areaMaxY: number,
  areaMaxZ: number,
): boolean;
