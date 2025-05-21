/**
 * Represents whether a block checks corners for placement in Minecraft Legends.
 *
 * This type specifies whether the block validates corner positions during placement. It allows developers
 * to define precise placement rules for blocks.
 *
 * type {boolean} BlockCheckCornersType
 * @category Block Configuration
 * @example
 * const checkCorners: BlockCheckCornersType = true;
 * @remarks
 * Properly configuring this setting ensures that block placement is validated correctly.
 * Misconfigured settings may lead to broken functionality or performance issues.
 */
declare type BlockCheckCornersType = boolean;
