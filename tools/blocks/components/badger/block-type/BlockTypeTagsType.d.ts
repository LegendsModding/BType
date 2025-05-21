/**
 * Represents the tags associated with block types in Minecraft Legends.
 *
 * This type specifies a wide variety of predefined tags that categorize blocks based on their behavior,
 * functionality, or interaction properties. Tags allow developers to define how blocks interact with entities,
 * tools, or other blocks within the game world. For example, a block tagged as `"boss_solid"` may be used
 * to define solid structures that are resistant to specific interactions, while a tag like `"gatherable_wood"`
 * indicates that the block can be harvested for wood resources.
 *
 * The predefined tags include:
 * - `"boss_solid"`: Indicates blocks that are solid and resistant to specific interactions.
 * - `"barrier"`: Defines blocks that act as barriers, preventing movement or interaction.
 * - `"gatherable_denether"`: Specifies blocks that can be gathered in the Nether dimension.
 * - `"piglin_base_not_buildable"`: Marks blocks where piglins cannot build structures.
 * - `"villager_solid"`: Defines blocks that villagers recognize as solid surfaces.
 * - `"deco_nether"`: Tags decorative blocks specific to the Nether dimension.
 * - `"gatherable_stone"`: Indicates blocks that can be mined for stone resources.
 * - `"gatherable_wood"`: Specifies blocks that yield wood when gathered.
 * - `"world_hazard"`: Marks blocks that pose hazards to players or entities.
 * - `"netherrack"`: Identifies blocks made of Netherrack material.
 * - `"gatherable_coal"`, `"gatherable_diamond"`, `"gatherable_iron"`, etc.: Define blocks that yield specific resources.
 * - `"lava"` and `"water"`: Tag blocks representing liquid elements.
 * - `"grass"`, `"stone"`, `"sand"`, etc.: Categorize blocks by their material or terrain type.
 *
 * Developers can also define custom tags using arbitrary strings. These tags are essential for organizing
 * blocks into logical groups, enabling efficient querying and interaction logic. For instance, a tool might
 * only interact with blocks tagged as `"gatherable_wood"`, ensuring that it behaves consistently across
 * different block types.
 *
 * type {"boss_solid" | "barrier" | "gatherable_denether" | "piglin_base_not_buildable" | "barrier_waterfall" | "villager_solid" | "deco_nether" | "gatherable_stone" | "gatherable_wood" | "world_hazard" | "netherrack" | "gatherable_wood_sml" | "gatherable_coal" | "gatherable_diamond" | "gatherable_iron" | "gatherable_redstone" | "wof" | "gatherable_no_resources_wood" | "lava" | "water" | "gatherable_stone_sml" | "gatherable_gold" | "block_sand" | "block_pigsty_mud" | "gatherable_luminescent" | "stone" | "gatherable_no_resources" | "block_tar" | "gatherable_no_resources_stone" | "grass" | string} BlockTypeTagsType
 * @category Block Configuration
 * @example
 * const blockTags: BlockTypeTagsType[] = ["gatherable_wood", "world_hazard"];
 * @remarks
 * Properly configuring these tags ensures that blocks are categorized correctly and interact as intended.
 * Misconfigured tags may lead to broken functionality or unintended behavior in gameplay mechanics.
 */
declare type BlockTypeTagsType =
  | "boss_solid"
  | "barrier"
  | "gatherable_denether"
  | "piglin_base_not_buildable"
  | "barrier_waterfall"
  | "villager_solid"
  | "deco_nether"
  | "gatherable_stone"
  | "gatherable_wood"
  | "world_hazard"
  | "netherrack"
  | "gatherable_wood_sml"
  | "gatherable_coal"
  | "gatherable_diamond"
  | "gatherable_iron"
  | "gatherable_redstone"
  | "wof"
  | "gatherable_no_resources_wood"
  | "lava"
  | "water"
  | "gatherable_stone_sml"
  | "gatherable_gold"
  | "block_sand"
  | "block_pigsty_mud"
  | "gatherable_luminescent"
  | "stone"
  | "gatherable_no_resources"
  | "block_tar"
  | "gatherable_no_resources_stone"
  | "grass"
  | string;
