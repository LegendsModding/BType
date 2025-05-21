/**
 * Represents the shape of a block in Minecraft Legends.
 *
 * This type specifies the geometric or structural form of a block, influencing its appearance, collision
 * properties, and interaction behavior. Shapes are essential for defining how blocks fit into the game world
 * and how they interact with entities, tools, and other blocks. For example, a block with a shape of `"cube"`
 * is a standard rectangular prism, while a shape of `"stair"` defines a block with a sloped surface for climbing.
 *
 * The predefined shapes include:
 * - `"cube"`: A standard rectangular prism, commonly used for walls, floors, and ceilings.
 * - `"block"`: A generic block shape, often interchangeable with `"cube"`.
 * - `"brick"`: Represents blocks resembling bricks, suitable for construction.
 * - `"slab"`: Defines half-height blocks, often used for flooring or steps.
 * - `"carpet"`: Specifies thin, flat blocks, ideal for decorative purposes.
 * - `"chunk"`: Marks irregularly shaped blocks, often used for natural formations.
 * - `"column"`: Identifies cylindrical blocks, suitable for pillars or posts.
 * - `"empty"`: Represents non-collidable, invisible blocks.
 * - `"fence"`: Defines blocks used for fencing or barriers.
 * - `"floor"`: Specifies blocks designed for horizontal surfaces.
 * - `"path"`: Marks blocks used for walkways or trails.
 * - `"pillar"`: Identifies vertical supports, often used in construction.
 * - `"upright"`: Defines blocks with an upright orientation, such as statues.
 * - `"plane"`: Specifies flat, two-dimensional blocks.
 * - `"post"`: Marks blocks used as posts or markers.
 * - `"sheet"`: Defines thin, flat blocks, similar to `"carpet"`.
 * - `"stair"`: Specifies blocks with a sloped surface for climbing.
 * - `"wall"`: Identifies blocks used for vertical barriers.
 *
 * These shapes enable developers to create visually and functionally diverse blocks, enhancing the realism
 * and interactivity of the game world. For instance, a block with a shape of `"stair"` allows players to ascend
 * smoothly, while a block with a shape of `"wall"` prevents movement and provides structural support.
 *
 * type {"cube" | "block" | "brick" | "slab" | "carpet" | "chunk" | "column" | "empty" | "fence" | "floor" | "path" | "pillar" | "upright" | "plane" | "post" | "sheet" | "stair" | "wall"} BlockShapeType
 * @category Block Configuration
 * @example
 * const blockShape: BlockShapeType = "stair";
 * @remarks
 * Properly configuring block shapes ensures that blocks behave consistently and realistically within their
 * environments. Misconfigured shapes may lead to visual or functional inconsistencies, breaking immersion
 * or gameplay mechanics.
 */
declare type BlockShapeType =
  | "cube"
  | "block"
  | "brick"
  | "slab"
  | "carpet"
  | "chunk"
  | "column"
  | "empty"
  | "fence"
  | "floor"
  | "path"
  | "pillar"
  | "upright"
  | "plane"
  | "post"
  | "sheet"
  | "stair"
  | "wall";
