/**
 * Represents the effects applied by a block in Minecraft Legends.
 *
 * This interface specifies parameters for defining the effects of a block, including damage amounts,
 * damage types, effect frequencies, and status applications. These parameters allow developers to create
 * dynamic and interactive blocks.
 * @interface BadgerBlockEffects
 * @category Block Effects
 * @property {BlockEffectsDamageAmountType} [damageAmount] - The amount of damage dealt by the block's effects.
 * @property {BlockEffectsDamageTypesType[]} [damageTypes] - An array of damage types caused by the block.
 * @property {BlockEffectsEffectFrequencyType} [effectFrequency] - The frequency of the block's effects.
 * @property {BlockEffectsApplyStatus} [applyStatus] - Status effects applied by the block.
 * @example
 * const blockEffects: BadgerBlockEffects = {
 *   damageAmount: 10,
 *   damageTypes: ["fire", "hazard"],
 *   effectFrequency: 0.5,
 *   applyStatus: {
 *     poisoned: { strength: 5 },
 *     burning: { strength: 3 }
 *   }
 * };
 * @remarks
 * Properly configuring these settings ensures that block effects are applied consistently and effectively.
 * Misconfigured settings may lead to gameplay imbalances or performance issues.
 */
interface BadgerBlockEffects {
  damageAmount?: BlockEffectsDamageAmountType;
  damageTypes?: BlockEffectsDamageTypesType[];
  effectFrequency?: BlockEffectsEffectFrequencyType;
  applyStatus?: BlockEffectsApplyStatus;
}

/**
 * Represents the amount of damage dealt by a block's effects in Minecraft Legends.
 *
 * This type specifies the numerical value of damage dealt by the block's effects. It allows developers
 * to define the intensity of damage caused by blocks.
 *
 * type {number} BlockEffectsDamageAmountType
 * @category Block Effects
 * @example
 * const damageAmount: BlockEffectsDamageAmountType = 10;
 * @remarks
 * Properly configuring this setting ensures that damage amounts are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockEffectsDamageAmountType = number; // float

/**
 * Represents the type of damage dealt by a block's effects in Minecraft Legends.
 *
 * This type specifies the category of damage dealt by the block's effects. It allows developers to
 * define the nature of damage caused by blocks.
 *
 * type {"hazard" | "fire" | "lava" | string} BlockEffectsDamageTypesType
 * @category Block Effects
 * @example
 * const damageType: BlockEffectsDamageTypesType = "fire";
 * @remarks
 * Properly configuring this setting ensures that damage types are applied correctly.
 * Misconfigured values may lead to broken functionality or performance issues.
 */
declare type BlockEffectsDamageTypesType = "hazard" | "fire" | "lava" | string;

declare type BlockEffectsEffectFrequencyType = number; // float
