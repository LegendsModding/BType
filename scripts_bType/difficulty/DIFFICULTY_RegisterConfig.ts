import { FORESIGHT } from "../utility/Foresight.ts";
import { OBJECT_AssignRecursive } from "../utility/OBJECT_AssignRecursive.ts";

import { DIFFICULTY_AllConfigs } from "./DIFFICULTY_AllConfigs.ts";

/**
 * Registers a difficulty configuration with the system.
 * Ensures safe storage and proper merging of configuration layers.
 * @template T - Configuration type (object or invasion deck array)
 * @param {string} id Unique configuration identifier
 * @param {T} config Configuration data
 * @param {DifficultyLevel} difficulty Target difficulty level
 * @param {boolean} [respectFirstGameLoadDifficulty=false] Use original difficulty
 * @example
 * // Register easy mode for enemy stats
 * DIFFICULTY_RegisterConfig("enemyStats", { health: 100 }, "easy");
 *
 * // Register hard mode override
 * DIFFICULTY_RegisterConfig("enemyStats", { health: 200 }, "hard");
 * @description
 * Registration process:
 * 1. Initializes config container if needed
 * 2. Validates against duplicate registrations
 * 3. Stores core configuration (easy)
 * 4. Deep-copies difficulty overrides
 * 5. Sets special behavior flags
 *
 * Safety features:
 * - Type checking through generics
 * - Duplicate registration warnings
 * - Immutability through deep copying
 * - Clear error messaging
 */
export const DIFFICULTY_RegisterConfig = <
  T extends
    | DifficultyConfig
    | InvasionAttackStrengthDeck[]
    | TreasureChestCategoryConfig,
>(
  id: string,
  config: T,
  difficulty: DifficultyLevel,
  respectFirstGameLoadDifficulty: boolean = false,
): void => {
  /* Initialize an object for the given ID if it doesn't already exist. */
  if (DIFFICULTY_AllConfigs[id] === undefined) {
    DIFFICULTY_AllConfigs[id] = { core: {} } as AllDifficultyConfigs[string];
  }

  /* Log a warning if the same difficulty is defined more than once for the same ID. */
  if (DIFFICULTY_AllConfigs[id][difficulty] !== undefined) {
    FORESIGHT.error(
      `[DIFFICULTY BSharpTS] More than one difficulty config for id ${id} and difficulty ${difficulty}!`,
    );
  }

  /* Assign the "core" object if this is the first (easy) difficulty configuration. */
  if (difficulty === "easy") {
    DIFFICULTY_AllConfigs[id].core = config as DifficultyConfig; // Core will point to the original "easy" instance.
  }

  /* Perform a deep copy of the configuration to avoid shared references. */
  DIFFICULTY_AllConfigs[id][difficulty] = {};
  OBJECT_AssignRecursive(
    DIFFICULTY_AllConfigs[id][difficulty] as GenericObject,
    config as DifficultyConfig,
  );

  /* Optionally flag the configuration to respect the first game load difficulty. */
  if (respectFirstGameLoadDifficulty) {
    DIFFICULTY_AllConfigs[id].respectFirstGameLoadDifficulty =
      respectFirstGameLoadDifficulty;
  }
};

/**
 * Example Usage:
 *
 * ```typescript
 * // Define a sample configuration for "easy" difficulty.
 * const easyConfig = {
 *     healthMultiplier: 1.0,
 *     enemySpawnRate: 0.5,
 *     lootDropChance: 0.8
 * };
 *
 * // Register the configuration for "campaignMode" with "easy" difficulty.
 * RegisterDifficultyConfig("campaignMode", easyConfig, "easy");
 *
 * // Define a sample configuration for "hard" difficulty.
 * const hardConfig = {
 *     healthMultiplier: 2.0,
 *     enemySpawnRate: 1.5,
 *     lootDropChance: 0.4
 * };
 *
 * // Register the configuration for "campaignMode" with "hard" difficulty.
 * RegisterDifficultyConfig("campaignMode", hardConfig, "hard", true);
 *
 * // Access the registered configurations.
 * console.log(allDifficultyConfigs["campaignMode"]);
 * ```
 */
