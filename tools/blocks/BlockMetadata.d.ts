/**
 * Represents metadata associated with a block schema in Minecraft Legends.
 *
 * This interface specifies metadata such as the generation timestamp and schema version. It allows
 * developers to track when the block schema was generated and which version of the schema is being used.
 * @interface BlockMetadata
 * @category Block Configuration
 * @property {string} generatedAt - The timestamp indicating when the block schema was generated. Must follow ISO 8601 format (e.g., "2023-10-01T12:00:00Z").
 * @property {string} schemaVersion - The version of the block schema. Must match the expected version format (e.g., "1.8.0").
 * @example
 * const blockMetadata: BlockMetadata = {
 *   generatedAt: "2023-10-01T12:00:00Z",
 *   schemaVersion: "1.8.0"
 * };
 * @remarks
 * Properly configuring this setting ensures that metadata is tracked correctly.
 * Misconfigured values may lead to versioning or tracking issues.
 */
interface BlockMetadata {
  generatedAt: string;
  schemaVersion: string;
}
