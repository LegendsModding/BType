/**
 * Represents the strength of the player jump status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the jump strength. It allows developers to define
 * how much a block enhances or reduces the player's jumping ability.
 * @category Block Effects
 * @example
 * const jumpStrength: BlockApplyStatusPlayerJumpStrengthType = 5;
 * @remarks
 * Properly configuring this setting ensures that jump strength effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusPlayerJumpStrengthType = number;

/**
 * Represents the strength of the slowed piglin bramble status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the slowing effect. It allows developers to define
 * how much a block slows down entities in brambles.
 *
 * type {number} BlockApplyStatusSlowedPiglinBrambleStrengthType
 * @category Block Effects
 * @example
 * const slowedPiglinBrambleStrength: BlockApplyStatusSlowedPiglinBrambleStrengthType = 3;
 * @remarks
 * Properly configuring this setting ensures that slowing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusSlowedPiglinBrambleStrengthType = number;

/**
 * Represents the strength of the burning status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the burning effect. It allows developers to define
 * how much a block enhances or reduces the burning intensity.
 *
 * type {number} BlockApplyStatusBurningStrengthType
 * @category Block Effects
 * @example
 * const burningStrength: BlockApplyStatusBurningStrengthType = 5;
 * @remarks
 * Properly configuring this setting ensures that burning effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusBurningStrengthType = number;

/**
 * Represents the strength of the slowed thorns status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the slowing effect caused by thorns. It allows developers
 * to define how much a block slows down entities interacting with it.
 *
 * type {number} BlockApplyStatusSlowedThornsStrengthType
 * @category Block Effects
 * @example
 * const slowedThornsStrength: BlockApplyStatusSlowedThornsStrengthType = 3;
 * @remarks
 * Properly configuring this setting ensures that slowing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusSlowedThornsStrengthType = number;

/**
 * Represents the strength of the player speed status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the speed enhancement. It allows developers to define
 * how much a block increases or decreases the player's movement speed.
 *
 * type {number} BlockApplyStatusPlayerSpeedStrengthType
 * @category Block Effects
 * @example
 * const playerSpeedStrength: BlockApplyStatusPlayerSpeedStrengthType = 2;
 * @remarks
 * Properly configuring this setting ensures that speed effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusPlayerSpeedStrengthType = number;

/**
 * Represents the strength of the engaged status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the engagement effect. It allows developers to define
 * how much a block influences the "engaged" state of entities.
 *
 * type {number} BlockApplyStatusEngagedStrengthType
 * @category Block Effects
 * @example
 * const engagedStrength: BlockApplyStatusEngagedStrengthType = 4;
 * @remarks
 * Properly configuring this setting ensures that engagement effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusEngagedStrengthType = number;

/**
 * Represents the strength of the lava status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the lava effect. It allows developers to define
 * how much a block enhances or reduces the impact of lava on entities.
 *
 * type {number} BlockApplyStatusLavaStrengthType
 * @category Block Effects
 * @example
 * const lavaStrength: BlockApplyStatusLavaStrengthType = 6;
 * @remarks
 * Properly configuring this setting ensures that lava effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusLavaStrengthType = number;

/**
 * Represents the strength of the poisoned (no visual effects) status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the poison effect without visual feedback. It allows developers
 * to define how much a block poisons entities silently.
 *
 * type {number} BlockApplyStatusPoisonedNoVfxStrengthType
 * @category Block Effects
 * @example
 * const poisonedNoVfxStrength: BlockApplyStatusPoisonedNoVfxStrengthType = 3;
 * @remarks
 * Properly configuring this setting ensures that poison effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusPoisonedNoVfxStrengthType = number;

/**
 * Represents the strength of the slowed tar status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the slowing effect caused by tar. It allows developers
 * to define how much a block slows down entities interacting with it.
 *
 * type {number} BlockApplyStatusSlowedTarStrengthType
 * @category Block Effects
 * @example
 * const slowedTarStrength: BlockApplyStatusSlowedTarStrengthType = 4;
 * @remarks
 * Properly configuring this setting ensures that slowing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusSlowedTarStrengthType = number;

/**
 * Represents the strength of the wet status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the wet effect. It allows developers to define
 * how much a block influences the "wet" state of entities.
 *
 * type {number} BlockApplyStatusWetStrengthType
 * @category Block Effects
 * @example
 * const wetStrength: BlockApplyStatusWetStrengthType = 2;
 * @remarks
 * Properly configuring this setting ensures that wet effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusWetStrengthType = number;

/**
 * Represents the strength of the water status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the water effect. It allows developers to define
 * how much a block influences the interaction with water.
 *
 * type {number} BlockApplyStatusWaterStrengthType
 * @category Block Effects
 * @example
 * const waterStrength: BlockApplyStatusWaterStrengthType = 3;
 * @remarks
 * Properly configuring this setting ensures that water effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockApplyStatusWaterStrengthType = number;

/**
 * Represents the strength of the poisoned status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the poison effect. It allows developers to define
 * how much a block poisons entities.
 *
 * type {number} BlockEffectsApplyStatusPoisonedStrengthType
 * @category Block Effects
 * @example
 * const poisonedStrength: BlockEffectsApplyStatusPoisonedStrengthType = 5;
 * @remarks
 * Properly configuring this setting ensures that poison effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockEffectsApplyStatusPoisonedStrengthType = number;

/**
 * Represents the strength of the healing stone status effect applied by a block in Minecraft Legends.
 *
 * This type specifies the numerical value of the healing effect. It allows developers to define
 * how much a block heals entities.
 *
 * type {number} BlockEffectsApplyStatusHealingStoneStrengthType
 * @category Block Effects
 * @example
 * const healingStoneStrength: BlockEffectsApplyStatusHealingStoneStrengthType = 10;
 * @remarks
 * Properly configuring this setting ensures that healing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
declare type BlockEffectsApplyStatusHealingStoneStrengthType = number;

/**
 * Represents whether the healing stone effect should only apply to damaged entities in Minecraft Legends.
 *
 * This type specifies whether the healing effect is conditional on the entity being damaged. It allows
 * developers to control the conditions under which healing occurs.
 *
 * type {boolean} BlockEffectsApplyStatusHealingStoneOnlyApplyToDamagedType
 * @category Block Effects
 * @example
 * const onlyApplyToDamaged: BlockEffectsApplyStatusHealingStoneOnlyApplyToDamagedType = true;
 * @remarks
 * Properly configuring this setting ensures that healing effects are applied correctly.
 * Misconfigured values may lead to unintended behavior.
 */
declare type BlockEffectsApplyStatusHealingStoneOnlyApplyToDamagedType =
  boolean;
