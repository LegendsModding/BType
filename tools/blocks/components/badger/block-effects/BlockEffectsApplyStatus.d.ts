/**
 * Represents the configuration for applying various status effects to entities interacting with a block in Minecraft Legends.
 *
 * This interface specifies parameters for defining the strength and conditions of multiple status effects,
 * such as poisoning, healing, jumping enhancements, and more. These parameters allow developers to create
 * dynamic and interactive blocks with specific effects.
 * @interface BlockEffectsApplyStatus
 * @category Block Effects
 * @property {BlockEffectsApplyStatusPoisoned} [poisoned] - Configuration for the poisoned status effect.
 * @property {BlockEffectsApplyStatusHealingStone} [healingStone] - Configuration for the healing stone status effect.
 * @property {BlockEffectsApplyStatusPlayerJump} [playerJump] - Configuration for the player jump status effect.
 * @property {BlockEffectsApplyStatusSlowedPiglinBramble} [slowedPiglinBramble] - Configuration for the slowed piglin bramble status effect.
 * @property {BlockEffectsApplyStatusBurning} [burning] - Configuration for the burning status effect.
 * @property {BlockEffectsApplyStatusSlowedThorns} [slowedThorns] - Configuration for the slowed thorns status effect.
 * @property {BlockEffectsApplyStatusPlayerSpeed} [playerSpeed] - Configuration for the player speed status effect.
 * @property {BlockEffectsApplyStatusEngaged} [engaged] - Configuration for the engaged status effect.
 * @property {BlockEffectsApplyStatusLava} [lava] - Configuration for the lava status effect.
 * @property {BlockEffectsApplyStatusPoisonedNoVfx} [poisonedNoVfx] - Configuration for the poisoned (no visual effects) status effect.
 * @property {BlockEffectsApplyStatusSlowedTar} [slowedTar] - Configuration for the slowed tar status effect.
 * @property {BlockEffectsApplyStatusWet} [wet] - Configuration for the wet status effect.
 * @property {BlockEffectsApplyStatusWater} [water] - Configuration for the water status effect.
 * @example
 * const blockEffectsApplyStatus: BlockEffectsApplyStatus = {
 *   poisoned: { strength: 5 },
 *   healingStone: { strength: 10, onlyApplyToDamaged: true },
 *   playerJump: { strength: 2 },
 *   slowedPiglinBramble: { strength: 3 },
 *   burning: { strength: 6 },
 *   slowedThorns: { strength: 4 },
 *   playerSpeed: { strength: 2 },
 *   engaged: { strength: 5 },
 *   lava: { strength: 7 },
 *   poisonedNoVfx: { strength: 3 },
 *   slowedTar: { strength: 4 },
 *   wet: { strength: 2 },
 *   water: { strength: 3 }
 * };
 * @remarks
 * Properly configuring these settings ensures that status effects are applied consistently and effectively.
 * Misconfigured values may lead to gameplay imbalances or unexpected behavior.
 */
interface BlockEffectsApplyStatus {
  poisoned?: BlockEffectsApplyStatusPoisoned;
  healingStone?: BlockEffectsApplyStatusHealingStone;
  playerJump?: BlockEffectsApplyStatusPlayerJump;
  slowedPiglinBramble?: BlockEffectsApplyStatusSlowedPiglinBramble;
  burning?: BlockEffectsApplyStatusBurning;
  slowedThorns?: BlockEffectsApplyStatusSlowedThorns;
  playerSpeed?: BlockEffectsApplyStatusPlayerSpeed;
  engaged?: BlockEffectsApplyStatusEngaged;
  lava?: BlockEffectsApplyStatusLava;
  poisonedNoVfx?: BlockEffectsApplyStatusPoisonedNoVfx;
  slowedTar?: BlockEffectsApplyStatusSlowedTar;
  wet?: BlockEffectsApplyStatusWet;
  water?: BlockEffectsApplyStatusWater;
}

/**
 * Represents the configuration for the poisoned status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the poison effect. It allows developers to define how much
 * a block poisons entities interacting with it.
 * @interface BlockEffectsApplyStatusPoisoned
 * @category Block Effects
 * @property {BlockEffectsApplyStatusPoisonedStrengthType} [strength] - The strength of the poisoned status effect.
 * @example
 * const poisonedEffect: BlockEffectsApplyStatusPoisoned = {
 *   strength: 5
 * };
 * @remarks
 * Properly configuring this setting ensures that poison effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusPoisoned {
  strength?: BlockEffectsApplyStatusPoisonedStrengthType;
}

/**
 * Represents the configuration for the healing stone status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the healing effect and whether it should only apply to damaged entities.
 * It allows developers to define how much a block heals entities and under what conditions.
 * @interface BlockEffectsApplyStatusHealingStone
 * @category Block Effects
 * @property {BlockEffectsApplyStatusHealingStoneStrengthType} [strength] - The strength of the healing stone status effect.
 * @property {BlockEffectsApplyStatusHealingStoneOnlyApplyToDamagedType} [onlyApplyToDamaged] - Whether the healing effect only applies to damaged entities.
 * @example
 * const healingStoneEffect: BlockEffectsApplyStatusHealingStone = {
 *   strength: 10,
 *   onlyApplyToDamaged: true
 * };
 * @remarks
 * Properly configuring this setting ensures that healing effects are applied correctly.
 * Misconfigured values may lead to unintended behavior.
 */
interface BlockEffectsApplyStatusHealingStone {
  strength?: BlockEffectsApplyStatusHealingStoneStrengthType;
  onlyApplyToDamaged?: BlockEffectsApplyStatusHealingStoneOnlyApplyToDamagedType;
}

/**
 * Represents the configuration for the player jump status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the jump enhancement. It allows developers to define how much
 * a block enhances the player's jumping ability.
 * @interface BlockEffectsApplyStatusPlayerJump
 * @category Block Effects
 * @property {BlockApplyStatusPlayerJumpStrengthType} [strength] - The strength of the player jump status effect.
 * @example
 * const playerJumpEffect: BlockEffectsApplyStatusPlayerJump = {
 *   strength: 2
 * };
 * @remarks
 * Properly configuring this setting ensures that jump effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusPlayerJump {
  strength?: BlockApplyStatusPlayerJumpStrengthType;
}

/**
 * Represents the configuration for the slowed piglin bramble status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the slowing effect caused by piglin brambles. It allows developers
 * to define how much a block slows down entities interacting with it.
 * @interface BlockEffectsApplyStatusSlowedPiglinBramble
 * @category Block Effects
 * @property {BlockApplyStatusSlowedPiglinBrambleStrengthType} [strength] - The strength of the slowed piglin bramble status effect.
 * @example
 * const slowedPiglinBrambleEffect: BlockEffectsApplyStatusSlowedPiglinBramble = {
 *   strength: 3
 * };
 * @remarks
 * Properly configuring this setting ensures that slowing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusSlowedPiglinBramble {
  strength?: BlockApplyStatusSlowedPiglinBrambleStrengthType;
}

/**
 * Represents the configuration for the burning status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the burning effect. It allows developers to define
 * how much a block enhances or reduces the burning intensity.
 * @interface BlockEffectsApplyStatusBurning
 * @category Block Effects
 * @property {BlockApplyStatusBurningStrengthType} [strength] - The strength of the burning status effect.
 * @example
 * const burningEffect: BlockEffectsApplyStatusBurning = {
 *   strength: 5
 * };
 * @remarks
 * Properly configuring this setting ensures that burning effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusBurning {
  strength?: BlockApplyStatusBurningStrengthType;
}

/**
 * Represents the configuration for the slowed thorns status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the slowing effect caused by thorns. It allows developers
 * to define how much a block slows down entities interacting with it.
 * @interface BlockEffectsApplyStatusSlowedThorns
 * @category Block Effects
 * @property {BlockApplyStatusSlowedThornsStrengthType} [strength] - The strength of the slowed thorns status effect.
 * @example
 * const slowedThornsEffect: BlockEffectsApplyStatusSlowedThorns = {
 *   strength: 4
 * };
 * @remarks
 * Properly configuring this setting ensures that slowing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusSlowedThorns {
  strength?: BlockApplyStatusSlowedThornsStrengthType;
}

/**
 * Represents the configuration for the player speed status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the speed enhancement. It allows developers to define
 * how much a block increases or decreases the player's movement speed.
 * @interface BlockEffectsApplyStatusPlayerSpeed
 * @category Block Effects
 * @property {BlockApplyStatusPlayerSpeedStrengthType} [strength] - The strength of the player speed status effect.
 * @example
 * const playerSpeedEffect: BlockEffectsApplyStatusPlayerSpeed = {
 *   strength: 2
 * };
 * @remarks
 * Properly configuring this setting ensures that speed effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusPlayerSpeed {
  strength?: BlockApplyStatusPlayerSpeedStrengthType;
}

/**
 * Represents the configuration for the engaged status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the engagement effect. It allows developers to define
 * how much a block influences the "engaged" state of entities.
 * @interface BlockEffectsApplyStatusEngaged
 * @category Block Effects
 * @property {BlockApplyStatusEngagedStrengthType} [strength] - The strength of the engaged status effect.
 * @example
 * const engagedEffect: BlockEffectsApplyStatusEngaged = {
 *   strength: 4
 * };
 * @remarks
 * Properly configuring this setting ensures that engagement effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusEngaged {
  strength?: BlockApplyStatusEngagedStrengthType;
}

/**
 * Represents the configuration for the lava status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the lava effect. It allows developers to define
 * how much a block influences the impact of lava on entities.
 * @interface BlockEffectsApplyStatusLava
 * @category Block Effects
 * @property {BlockApplyStatusLavaStrengthType} [strength] - The strength of the lava status effect.
 * @example
 * const lavaEffect: BlockEffectsApplyStatusLava = {
 *   strength: 6
 * };
 * @remarks
 * Properly configuring this setting ensures that lava effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusLava {
  strength?: BlockApplyStatusLavaStrengthType;
}

/**
 * Represents the configuration for the poisoned (no visual effects) status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the poison effect without visual feedback. It allows developers
 * to define how much a block poisons entities silently.
 * @interface BlockEffectsApplyStatusPoisonedNoVfx
 * @category Block Effects
 * @property {BlockApplyStatusPoisonedNoVfxStrengthType} [strength] - The strength of the poisoned (no visual effects) status effect.
 * @example
 * const poisonedNoVfxEffect: BlockEffectsApplyStatusPoisonedNoVfx = {
 *   strength: 3
 * };
 * @remarks
 * Properly configuring this setting ensures that poison effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusPoisonedNoVfx {
  strength?: BlockApplyStatusPoisonedNoVfxStrengthType;
}

/**
 * Represents the configuration for the slowed tar status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the slowing effect caused by tar. It allows developers
 * to define how much a block slows down entities interacting with it.
 * @interface BlockEffectsApplyStatusSlowedTar
 * @category Block Effects
 * @property {BlockApplyStatusSlowedTarStrengthType} [strength] - The strength of the slowed tar status effect.
 * @example
 * const slowedTarEffect: BlockEffectsApplyStatusSlowedTar = {
 *   strength: 4
 * };
 * @remarks
 * Properly configuring this setting ensures that slowing effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusSlowedTar {
  strength?: BlockApplyStatusSlowedTarStrengthType;
}

/**
 * Represents the configuration for the wet status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the wet effect. It allows developers to define
 * how much a block influences the "wet" state of entities.
 * @interface BlockEffectsApplyStatusWet
 * @category Block Effects
 * @property {BlockApplyStatusWetStrengthType} [strength] - The strength of the wet status effect.
 * @example
 * const wetEffect: BlockEffectsApplyStatusWet = {
 *   strength: 2
 * };
 * @remarks
 * Properly configuring this setting ensures that wet effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusWet {
  strength?: BlockApplyStatusWetStrengthType;
}

/**
 * Represents the configuration for the water status effect applied by a block in Minecraft Legends.
 *
 * This interface specifies the strength of the water effect. It allows developers to define
 * how much a block influences the interaction with water.
 * @interface BlockEffectsApplyStatusWater
 * @category Block Effects
 * @property {BlockApplyStatusWaterStrengthType} [strength] - The strength of the water status effect.
 * @example
 * const waterEffect: BlockEffectsApplyStatusWater = {
 *   strength: 3
 * };
 * @remarks
 * Properly configuring this setting ensures that water effects are consistent.
 * Misconfigured values may lead to gameplay imbalances.
 */
interface BlockEffectsApplyStatusWater {
  strength?: BlockApplyStatusWaterStrengthType;
}
