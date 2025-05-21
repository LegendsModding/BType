/**
 * Represents the material type that receives damage for a block in Minecraft Legends.
 *
 * This interface specifies the material identifier for blocks that receive damage. It allows developers
 * to define damage-receiving properties for blocks.
 * @interface BadgerBlockDamageReceiverMaterial
 * @category Block Configuration
 * @property {BlockDamageReceiverMaterialType} [material] - The material identifier for the block. Must follow the namespace format (e.g., "example:block_material").
 * @example
 * const damageReceiverMaterial: BadgerBlockDamageReceiverMaterial = {
 *   material: "block"
 * };
 * @remarks
 * Properly configuring this setting ensures that damage-receiving materials are applied correctly.
 * Misconfigured values may lead to broken functionality or performance issues.
 */
interface BadgerBlockDamageReceiverMaterial {
  material?: BlockDamageReceiverMaterialType;
}

/**
 * Represents the material type that receives damage for a block in Minecraft Legends.
 *
 * This type specifies the material identifier for blocks that receive damage. It allows developers to
 * define damage-receiving properties for blocks.
 *
 * type {"block" | string} BlockDamageReceiverMaterialType
 * @category Block Configuration
 * @example
 * const damageReceiverMaterial: BlockDamageReceiverMaterialType = "block";
 * @remarks
 * Properly configuring this setting ensures that damage-receiving materials are applied correctly.
 * Misconfigured values may lead to broken functionality or performance issues.
 */
declare type BlockDamageReceiverMaterialType = "block" | string;
