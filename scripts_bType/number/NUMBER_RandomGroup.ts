/**
 * Randomization group identifier for attack horde behavior patterns.
 * @readonly
 * @defaultValue "random_group_attack_horde"
 * @remarks
 * Used in procedural generation systems to synchronize attack wave compositions and mob distribution patterns across horde factions.
 */
export const RANDOM_GROUP_AttackHorde = "random_group_attack_horde";

/**
 * Randomization group identifier for defensive horde operations.
 * @readonly
 * @defaultValue "random_group_defend_horde"
 * @remarks
 * Manages consistency in defensive structure placements and bastion reinforcement patterns for defending factions.
 */
export const RANDOM_GROUP_DefendHorde = "random_group_defend_horde";

/**
 * Randomization group identifier for obstacle horde generation.
 * @readonly
 * @defaultValue "random_group_obstacle_horde"
 * @remarks
 * Controls procedural distribution of environmental hazards and terrain-altering structures for obstacle-focused factions.
 */
export const RANDOM_GROUP_ObstacleHorde = "random_group_obstacle_horde";

/**
 * Randomization group identifier for villager population distribution.
 * @readonly
 * @defaultValue "random_group_villager"
 * @remarks
 * Ensures consistent NPC placement patterns across cultural villages and allied settlements.
 */
export const RANDOM_GROUP_Villager = "random_group_villager";

/**
 * Randomization group identifier for invasion event coordination.
 * @readonly
 * @defaultValue "random_group_invasion"
 * @remarks
 * Synchronizes procedural generation of invasion-related structures and attack formations across multiple systems.
 */
export const RANDOM_GROUP_Invasion = "random_group_invasion";

/**
 * Randomization group identifier for mob alliance occupation systems.
 * @readonly
 * @defaultValue "random_group_mob_occupation"
 * @remarks
 * Manages consistency in mob faction territory claims and occupation patterns during world generation.
 */
export const RANDOM_GROUP_MobOccupation = "random_group_mob_occupation";

/**
 * Randomization group identifiers for procedural systems.
 * @readonly
 * @remarks
 * attack: horderunners
 * defend: unbreakables
 * obstacle: rotters
 * dbb: Dark beacon base procedural factors
 * wofPig: Well of Fate piglin behavior randomness
 * villager: NPC population distribution
 * invasion: Attack wave composition variation
 * mobOccupation: Mob alliance occupation patterns
 */
export const RANDOM_GROUP = {
  attack: RANDOM_GROUP_AttackHorde,
  defend: RANDOM_GROUP_DefendHorde,
  obstacle: RANDOM_GROUP_ObstacleHorde,
  villager: RANDOM_GROUP_Villager,
  invasion: RANDOM_GROUP_Invasion,
  mobOccupation: RANDOM_GROUP_MobOccupation,
};
