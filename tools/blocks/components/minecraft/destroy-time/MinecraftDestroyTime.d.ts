/**
 * Represents the time required to destroy a block in Minecraft Legends.
 *
 * This interface specifies the numerical value of time (in seconds) required to destroy the block.
 * It allows developers to define the durability of blocks.
 * @interface MinecraftDestroyTime
 * @category Block Configuration
 * @property {BlockDestroyTimeType} [value] - The time required to destroy the block.
 * @example
 * const destroyTime: MinecraftDestroyTime = {
 *   value: 5
 * };
 * @remarks
 * Properly configuring this setting ensures that destruction times are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface MinecraftDestroyTime {
  value?: BlockDestroyTimeType;
}

/**
 * Represents the time required to destroy a block in Minecraft Legends.
 *
 * This type specifies the amount of time (in seconds) required to destroy the block. It allows developers
 * to define the durability of blocks.
 *
 * type {number} BlockDestroyTimeType
 * @category Block Configuration
 * @example
 * const destroyTime: BlockDestroyTimeType = 5;
 * @remarks
 * Properly configuring this setting ensures that block destruction times are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockDestroyTimeType = number;
