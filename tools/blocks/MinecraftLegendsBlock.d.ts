/**
 * Represents the configuration for a block in Minecraft Legends.
 *
 * This interface specifies metadata and components that define the behavior and appearance of a block.
 * These parameters allow developers to create custom blocks with specific properties and effects.
 * @interface MinecraftLegendsBlock
 * @category Block Configuration
 * @property {BlockDescription} [description] - Optional metadata describing the block.
 * @property {BlockComponents} [components] - Components that define the block's behavior and appearance.
 * @example
 * const block: MinecraftLegendsBlock = {
 *   description: { identifier: "example:custom_block" },
 *   components: {
 *     "minecraft:block_shape": { shape: "cube", renderLayer: "opaque" },
 *     "minecraft:destroy_time": { value: 5 }
 *   }
 * };
 * @remarks
 * Properly configuring these settings ensures that blocks are defined consistently and effectively.
 * Misconfigured settings may lead to broken functionality or performance issues.
 */
interface MinecraftLegendsBlock {
  description?: BlockDescription;
  components?: BlockComponents;
}
