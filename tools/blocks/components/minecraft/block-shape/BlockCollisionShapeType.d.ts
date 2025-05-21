/**
 * Represents the possible collision shapes for blocks within the game.
 *
 * This type defines the geometric shapes that determine how entities interact with blocks during collisions.
 * Each shape corresponds to a specific physical representation, such as a cube, slab, or empty space.
 * These shapes are critical for gameplay mechanics, including movement, pathfinding, and interactions.
 *
 * type {string}
 * @category Block Physics
 * @example
 * const collisionShape: BlockCollisionShapeType = "slab";
 * @remarks
 * - The "empty" shape indicates no collision, allowing entities to pass through the block.
 * - Shapes like "cube", "brick", and "chunk" represent solid, fully enclosed volumes.
 * - Shapes like "slab", "sheet", and "path" represent partial volumes, often used for platforms or decorative elements.
 * - Ensure that the collision shape aligns with the block's intended functionality and visual design.
 */
declare type BlockCollisionShapeType =
  | "empty"
  | "cube"
  | "brick"
  | "chunk"
  | "column"
  | "block"
  | "slab"
  | "sheet"
  | "path"
  | "post"
  | "stairs"
  | "pillar";
