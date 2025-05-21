/**
 * Represents the light emission level of a block in Minecraft Legends.
 *
 * This type specifies the numerical value of light emitted by the block. It allows developers
 * to define how much light a block emits into its surroundings.
 * type {number} BlockLightEmissionType
 * @category Block Configuration
 * @example
 * const lightEmission: BlockLightEmissionType = 15;
 * @remarks
 * Properly configuring this setting ensures that light emission levels are consistent.
 * Misconfigured values may lead to visual inconsistencies or gameplay imbalances.
 */
declare type BlockLightEmissionType = number;
