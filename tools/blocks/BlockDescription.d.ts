/**
 * Represents the metadata describing a block in Minecraft Legends.
 *
 * This interface specifies the identifier and material type of the block. It allows developers to define
 * unique identifiers and materials for blocks.
 * @interface BlockDescription
 * @category Block Configuration
 * @property {BlockIdentifier} [identifier] - A unique identifier for the block. Must follow the namespace format (e.g., "example:custom_block").
 * @property {BlockMaterialType} [material] - The material type of the block.
 * @example
 * const blockDescription: BlockDescription = {
 *   identifier: "example:custom_block",
 *   material: "stone"
 * };
 * @remarks
 * Properly configuring this setting ensures that blocks are uniquely identified and categorized correctly.
 * Misconfigured identifiers or materials may lead to broken functionality.
 */
interface BlockDescription {
  identifier: BlockIdentifier;
  material: BlockMaterial;
}
