/**
 * Represents the terrain type of a block in Minecraft Legends.
 *
 * This type specifies the material or surface characteristics of a block, defining its role in the game world.
 * Terrain types are crucial for determining how blocks interact with entities, tools, and environmental effects.
 * For example, a block with a terrain type of `"stone"` behaves differently from one with `"lava"`, affecting
 * movement, durability, and resource gathering mechanics.
 *
 * The predefined terrain types include:
 * - `"stone"`: Represents blocks made of stone, commonly used for construction and resource gathering.
 * - `"snow"`: Defines blocks covered in snow, often found in cold biomes.
 * - `"netherrack"`: Identifies blocks specific to the Nether dimension, known for their fiery and rugged nature.
 * - `"sand"`: Marks blocks made of sand, typically found in desert biomes.
 * - `"grass"`: Specifies blocks with grassy surfaces, common in plains and forest biomes.
 * - `"lava"`: Tags blocks representing molten lava, posing hazards to players and entities.
 * - `"mud"`: Defines blocks made of mud, often found in swampy or wet areas.
 * - `"poison"`: Marks blocks that emit poisonous effects, such as poison clouds or toxic terrain.
 * - `"wood"`: Identifies blocks made of wood, commonly harvested for crafting.
 * - `"tar"`: Specifies blocks made of tar, which may slow down movement or cause damage.
 * - `"water"`: Tags blocks representing water, essential for aquatic environments.
 *
 * These terrain types enable developers to create diverse and immersive environments by assigning realistic
 * properties to blocks. For instance, a block tagged as `"lava"` will emit light and damage entities, while
 * a block tagged as `"grass"` may support plant growth or provide traction for movement.
 *
 * type {"stone" | "snow" | "netherrack" | "sand" | "grass" | "lava" | "netherwart_acid" | "mud" | "poison" | "wood" | "tar" | "water"} BlockTerrainType
 * @category Block Configuration
 * @example
 * const terrainType: BlockTerrainType = "grass";
 * @remarks
 * Properly configuring terrain types ensures that blocks behave consistently and realistically within their
 * environments. Misconfigured terrain types may lead to visual or functional inconsistencies, breaking immersion
 * or gameplay mechanics.
 */
declare type BlockTerrainType =
  | "stone"
  | "snow"
  | "netherrack"
  | "sand"
  | "grass"
  | "lava"
  | "netherwart_acid"
  | "mud"
  | "poison"
  | "wood"
  | "tar"
  | "water"
  | "sulphuric_acid";

// TODO: New types need added
