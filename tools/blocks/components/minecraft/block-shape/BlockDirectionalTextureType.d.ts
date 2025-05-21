/**
 * Represents whether a block has directional textures in Minecraft Legends.
 *
 * This type specifies whether the block's texture changes based on its orientation. It allows developers
 * to define visually dynamic blocks.
 *
 * type {boolean} BlockDirectionalTextureType
 * @category Block Configuration
 * @example
 * const directionalTexture: BlockDirectionalTextureType = true;
 * @remarks
 * Properly configuring this setting ensures that directional textures are applied correctly.
 * Misconfigured settings may lead to visual inconsistencies.
 */
declare type BlockDirectionalTextureType = boolean;
