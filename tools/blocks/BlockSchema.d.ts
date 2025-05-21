/**
 * Represents the complete schema for a block in Minecraft Legends.
 *
 * This interface specifies the structure of a block schema, including the format version, block definition,
 * and metadata. It allows developers to define custom blocks with specific configurations.
 * @interface BlockSchema
 * @category Block Configuration
 * @property {FormatVersionType} [formatVersion] - The version of the block schema. Must match the expected version format (e.g., "1.8.0").
 * @property {MinecraftLegendsBlock} ["minecraft:block"] - The core block definition object.
 * @property {BlockMetadata} [metadata] - Metadata associated with the block schema.
 * @example
 * const blockSchema: BlockSchema = {
 *   formatVersion: "1.8.0",
 *   "minecraft:block": {
 *     description: { identifier: "example:custom_block" },
 *     components: {
 *       "minecraft:block_shape": { shape: "cube", renderLayer: "opaque" }
 *     }
 *   },
 *   metadata: {
 *     generatedAt: "2023-10-01T12:00:00Z",
 *     schemaVersion: "1.8.0"
 *   }
 * };
 * @remarks
 * Properly configuring this setting ensures that block schemas are structured consistently.
 * Misconfigured schemas may lead to broken functionality or validation errors.
 */
interface BlockSchema {
  formatVersion?: FormatVersionType;
  "minecraft:block"?: MinecraftLegendsBlock;
  metadata?: BlockMetadata;
}
