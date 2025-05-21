/**
 * Ally piece classification tags for village construction tracking.
 * @readonly
 * @remarks
 * diorite/oak/stone/brick: Material-specific construction tags.
 * any: General ally piece identifier.
 * Used in village upgrade systems and resource management calculations.
 */
export const TAGS_VILLAGE_ALLY_PIECES = {
  diorite: "hasAllyPieceDiorite",
  oak: "hasAllyPieceOak",
  stone: "hasAllyPieceStone",
  brick: "hasAllyPieceBrick",
  any: "hasAllyPiece",
};

/**
 * Village entity classification tags.
 * @readonly
 * @remarks
 * allyPieces: Material construction progress tags.
 * fountain: Village center structures.
 * heart: Village health/core systems.
 * portal: Fast travel network components.
 * inactive: Suspended/dormant village state.
 * tempBehaviorState: Transient village behavior flags.
 * firstVillage: Initial player spawn proximity marker.
 */
export const TAGS_VILLAGE = {
  allyPieces: TAGS_VILLAGE_ALLY_PIECES,
  fountain: "fountain",
  heart: "heart",
  portal: "portal",
  inactive: "inactiveVillage",
  tempBehaviorState: "village_temp_behavior_state",
  firstVillage: "village_closest_to_player_spawn",
};

/**
 * Player entity classification tags.
 * @readonly
 * @remarks
 * player: Base identifier for player-controlled entities.
 * Used in targeting systems and ownership calculations.
 */
export const TAGS_PLAYER = {
  player: "player",
};

/**
 * Buildable structure classification tags.
 * @readonly
 * @remarks
 * buildable: General constructible entity identifier.
 * mobAllegiance: Tracks mob alliance unlock status.
 * outpost: Marks defensive structures for territorial claims.
 */
export const TAGS_BUILDABLES = {
  buildable: "buildable_structure",
  mobAllegiance: "totem_unlock_mob_alliance",
  outpost: "outpost",
};

/**
 * Consolidated entity classification tag registry.
 * @readonly
 * @remarks
 * Centralizes VILLAGE, PLAYER, and BUILDABLES tags for system-wide consistency.
 * Used in targeting, AI behavior, and procedural generation systems.
 */
export const TAGS = {
  VILLAGE: TAGS_VILLAGE,
  PLAYER: TAGS_PLAYER,
  BUILDABLES: TAGS_BUILDABLES,
};
