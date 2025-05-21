/**
 * Represents whether a block connects to solid blocks in Minecraft Legends.
 *
 * This type specifies whether the block can connect to other solid blocks. It allows developers to
 * define connectivity logic for blocks.
 *
 * type {boolean} BlockConnectToSolidType
 * @category Block Configuration
 * @example
 * const connectToSolid: BlockConnectToSolidType = true;
 * @remarks
 * Properly configuring this setting ensures that block connections are applied correctly.
 * Misconfigured settings may lead to visual or functional inconsistencies.
 */
declare type BlockConnectToSolidType = boolean;
