import { CARD_District } from "scripts_bType/cards/CARD_District.ts";

/**
 * North-oriented district card for procedural world generation.
 * @readonly
 * @remarks
 * Represents the northern district archetype used in world layout systems.
 * Directional placement affects resource distribution and pathfinding networks.
 */
export const DISTRICT_NORTH = CARD_District("district_north");

/**
 * East-oriented district card for procedural world generation.
 * @readonly
 * @remarks
 * Defines eastern district characteristics for biome alignment and trade route placement.
 * Integrates with cultural village positioning systems.
 */
export const DISTRICT_EAST = CARD_District("district_east");

/**
 * South-oriented district card for procedural world generation.
 * @readonly
 * @remarks
 * Establishes southern district parameters affecting agricultural zones and defensive structure placement.
 */
export const DISTRICT_SOUTH = CARD_District("district_south");

/**
 * West-oriented district card for procedural world generation.
 * @readonly
 * @remarks
 * Configures western district attributes for resource node distribution and outpost alignment.
 */
export const DISTRICT_WEST = CARD_District("district_west");

/**
 * Registry of directional district card identifiers.
 * @readonly
 * @remarks
 * Centralizes NORTH/EAST/SOUTH/WEST district references for consistent world generation operations.
 * Used in procedural content distribution and spatial management systems.
 */
export const DISTRICT_CARDS = {
  NORTH: DISTRICT_NORTH,
  EAST: DISTRICT_EAST,
  SOUTH: DISTRICT_SOUTH,
  WEST: DISTRICT_WEST,
};
