/**
 * Randomized placement strategy identifier.
 * @readonly
 * @defaultValue "placeRandomly"
 * @remarks
 * Uses default procedural algorithms for entity positioning without specific constraints.
 */
export const PLACEMENT_RANDOM = "placeRandomly";

/**
 * Far-distance placement strategy from village origins.
 * @readonly
 * @defaultValue "placeFarFromVillageStart"
 * @remarks
 * Ensures entities spawn outside initial village development zones for exploration incentives.
 */
export const PLACEMENT_FAR_FROM_VILLAGE_START = "placeFarFromVillageStart";

/**
 * Proximity-based placement strategy to village origins.
 * @readonly
 * @defaultValue "placeCloseToVillageStart"
 * @remarks
 * Positions entities near starting villages to support early-game progression systems.
 */
export const PLACEMENT_CLOSE_TO_VILLAGE_START = "placeCloseToVillageStart";

/**
 * District proximity placement strategy.
 * @readonly
 * @defaultValue "closeToDistrictStart"
 * @remarks
 * Aligns entity placement with district boundaries for structural coherence.
 */
export const PLACEMENT_CLOSE_TO_DISTRICT_START = "closeToDistrictStart";

/**
 * Wall adjacency placement strategy.
 * @readonly
 * @defaultValue "placeCloseToWalls"
 * @remarks
 * Positions defensive structures and resource nodes near constructed walls.
 */
export const PLACEMENT_CLOSE_TO_WALLS = "placeCloseToWalls";

/**
 * Spacing-agnostic placement strategy.
 * @readonly
 * @defaultValue "placeWithoutSpacing"
 * @remarks
 * Allows overlapping entity placements for dense procedural generation scenarios.
 */
export const PLACEMENT_WITHOUT_SPACING = "placeWithoutSpacing";

/**
 * Path network connection placement strategy.
 * @readonly
 * @defaultValue "connectToPath"
 * @remarks
 * Ensures entities integrate with existing pathfinding networks for accessibility.
 */
export const PLACEMENT_CONNECT_TO_PATH = "connectToPath";

/**
 * External placement strategy relative to village boundaries.
 * @readonly
 * @defaultValue "placeOutsideVillage"
 * @remarks
 * Positions entities beyond village influence zones for challenge scenarios.
 */
export const PLACEMENT_OUTSIDE_VILLAGE = "placeOutsideVillage";

/**
 * Placement strategy identifiers for procedural generation.
 * @readonly
 * @remarks
 * Defines spatial placement rules affecting entity distribution patterns during world construction.
 */
export const PLACEMENT = {
  RANDOM: PLACEMENT_RANDOM,
  FAR_FROM_VILLAGE_START: PLACEMENT_FAR_FROM_VILLAGE_START,
  CLOSE_TO_VILLAGE_START: PLACEMENT_CLOSE_TO_VILLAGE_START,
  CLOSE_TO_DISTRICT_START: PLACEMENT_CLOSE_TO_DISTRICT_START,
  CLOSE_TO_WALLS: PLACEMENT_CLOSE_TO_WALLS,
  WITHOUT_SPACING: PLACEMENT_WITHOUT_SPACING,
  CONNECT_TO_PATH: PLACEMENT_CONNECT_TO_PATH,
  OUTSIDE_VILLAGE: PLACEMENT_OUTSIDE_VILLAGE,
};
