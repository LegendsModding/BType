/**
 * Represents the material type of a block in Minecraft Legends.
 *
 * This type specifies the composition or substance of a block, influencing its appearance, durability,
 * and interaction properties. Material types are crucial for defining how blocks behave under various
 * conditions, such as mining, crafting, or environmental effects. For example, a block with a material
 * type of `"badger_stone"` behaves differently from one with `"badger_wood"`, affecting its resistance
 * to tools and environmental factors.
 *
 * The predefined material types include:
 * - `"badger_stone"`: Represents blocks made of stone, commonly used for construction and resource gathering.
 * - `"badger_snow"`: Defines blocks covered in snow, often found in cold biomes.
 * - `"badger_bone"`: Identifies blocks made of bone, suitable for skeletal structures.
 * - `"badger_wood"`: Specifies blocks made of wood, commonly harvested for crafting.
 * - `"badger_metal"`: Marks blocks made of metal, known for their durability and strength.
 * - `"badger_nether"`: Defines blocks specific to the Nether dimension, often fiery or rugged.
 * - `"badger_sand"`: Identifies blocks made of sand, typically found in desert biomes.
 * - `"badger_grass"`: Specifies blocks with grassy surfaces, common in plains and forest biomes.
 * - `"badger_goop"`: Marks blocks made of gooey or sticky substances, often hazardous.
 * - `"badger_bushes"`: Defines blocks resembling bushes or shrubs, suitable for decoration.
 * - `"badger_ice"`: Specifies blocks made of ice, often found in frozen biomes.
 * - `"badger_lilypad"`: Identifies blocks resembling lily pads, used in aquatic environments.
 * - `"badger_gravel"`: Marks blocks made of gravel, prone to collapsing or shifting.
 * - `"badger_leaves"`: Defines blocks resembling leaves, commonly found on trees.
 * - `"badger_dirt"`: Specifies blocks made of dirt, commonly used for farming.
 * - `"badger_grass_long"`: Identifies blocks with tall grass, suitable for decoration.
 * - `"badger_water"`: Marks blocks representing water, essential for aquatic environments.
 * - `"badger_grass_frost"`: Defines blocks with frost-covered grass, found in cold biomes.
 * - `"badger_magma"`: Specifies blocks made of magma, emitting heat and light.
 * - `"badger_grass_wet"`: Identifies blocks with wet grass, often found near water sources.
 * - `"badger_lava"`: Marks blocks representing molten lava, posing hazards to players and entities.
 *
 * These material types enable developers to create diverse and immersive environments by assigning realistic
 * properties to blocks. For instance, a block with a material type of `"badger_ice"` will be slippery, while
 * a block with `"badger_lava"` will emit light and damage entities.
 * @category Block Configuration
 * @example
 * const blockMaterial: BlockMaterialType = "badger_wood";
 * @remarks
 * Properly configuring material types ensures that blocks behave consistently and realistically within their
 * environments. Misconfigured material types may lead to visual or functional inconsistencies, breaking immersion
 * or gameplay mechanics.
 */
declare type BlockMaterial =
  | "badger_stone"
  | "badger_snow"
  | "badger_bone"
  | "badger_wood"
  | "badger_metal"
  | "badger_nether"
  | "badger_sand"
  | "badger_grass"
  | "badger_goop"
  | "badger_bushes"
  | "badger_ice"
  | "badger_lilypad"
  | "badger_gravel"
  | "badger_leaves"
  | "badger_dirt"
  | "badger_grass_long"
  | "badger_water"
  | "badger_grass_frost"
  | "badger_magma"
  | "badger_grass_wet"
  | "badger_lava";
