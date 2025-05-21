/**
 * Represents the mapping of block types to their schemas and dependencies in Minecraft Legends.
 *
 * This interface specifies the type map and dependencies for blocks. It allows developers to define
 * relationships between block schemas and their required dependencies.
 * @interface BlockTypeMap
 * @category Block Configuration
 * @property {BlockSchema} typeMap - The block schema associated with the type map.
 * @property {string[]} dependencies - An array of dependency identifiers required by the block schema.
 * @example
 * const blockTypeMap: BlockTypeMap = {
 *   typeMap: {
 *     formatVersion: "1.8.0",
 *     "minecraft:block": {
 *       description: { identifier: "example:custom_block" },
 *       components: {
 *         "minecraft:block_shape": { shape: "cube", renderLayer: "opaque" }
 *       }
 *     }
 *   },
 *   dependencies: ["dependency1", "dependency2"]
 * };
 * @remarks
 * Properly configuring this setting ensures that block dependencies are resolved correctly.
 * Misconfigured dependencies may lead to broken functionality or missing resources.
 */
interface BlockTypeMap {
  typeMap: BlockSchema;
  dependencies: string[];
}
