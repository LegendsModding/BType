/**
 * Difficulty configuration object type.
 * Allows arbitrary key-value pairs for flexible configuration.
 * @example
 * {
 *   enemySpawnRate: 1.5,
 *   lootMultiplier: 0.8,
 *   specialAbilities: {
 *     fireDamage: true,
 *     stealthMechanics: false
 *   }
 * }
 */
type DifficultyConfig = Record<string, unknown>;

type DrawDeck = {
  factionName: FactionNameId;
  deckName: string;
  phases: unknown[];
};

type DrawDeckConfig = {
  hordeDrawDeck: DrawDeck[];
  drawInfoByPhase: object;
};

/**
 * Structure of the global difficulty configuration registry.
 * Contains all registered configurations with their layers.
 * @example
 * {
 *   "campaignAI": {
 *     core: { aggression: 3 },
 *     normal: { aggression: 5 },
 *     hard: { aggression: 7 },
 *     respectFirstGameLoadDifficulty: true
 *   }
 * }
 */
type AllDifficultyConfigs = Record<
  string,
  {
    core: DifficultyConfig;
    [difficulty: string]:
      | DifficultyConfig
      | PacingConfig[]
      | boolean
      | undefined; // Difficulties or flags like `respectFirstGameLoadDifficulty`
    respectFirstGameLoadDifficulty?: boolean;
  }
>;

type DifficultyLevel = string;

declare type GameDifficultyPeaceful = "peaceful";
declare type GameDifficultyEasy = "easy";
declare type GameDifficultyNormal = "normal";
declare type GameDifficultyHard = "hard";
declare type GameDifficultyCustom = "custom";

declare type GameDifficulty =
  | GameDifficultyPeaceful
  | GameDifficultyEasy
  | GameDifficultyNormal
  | GameDifficultyHard
  | GameDifficultyCustom;

/**
 * A tuple that defines the ordered list of game difficulties.
 */
declare type GameDifficultyOrder = readonly [
  GameDifficultyPeaceful,
  GameDifficultyEasy,
  GameDifficultyNormal,
  GameDifficultyHard,
  GameDifficultyCustom,
];

type GameDifficulties = {
  peaceful: GameDifficultyPeaceful;
  easy: GameDifficultyEasy;
  normal: GameDifficultyNormal;
  hard: GameDifficultyHard;
  custom: GameDifficultyCustom;
};
