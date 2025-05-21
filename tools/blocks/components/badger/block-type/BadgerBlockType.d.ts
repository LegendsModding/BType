/**
 * Represents the tags associated with a block in Minecraft Legends.
 *
 * This interface specifies an array of tags that define the block's behavior or categorization. It allows
 * developers to classify blocks for specific purposes.
 * @interface BadgerBlockType
 * @category Block Configuration
 * @property {BlockTypeTagsType[]} [tags] - An array of tags associated with the block.
 * @example
 * const blockType: BadgerBlockType = {
 *   tags: ["tag1", "tag2"]
 * };
 * @remarks
 * Properly configuring this setting ensures that block tags are applied correctly.
 * Misconfigured tags may lead to broken functionality or classification issues.
 */
interface BadgerBlockType {
  tags?: BlockTypeTagsType[];
}
