/**
 * Central registry for all game difficulty configurations.
 * Stores configurations by ID with:
 * - Core (easy) configuration
 * - Difficulty-specific overrides
 * - Special behavior flags
 * @example
 * {
 *   "campaignMode": {
 *     core: { enemyHealth: 100 },
 *     hard: { enemyHealth: 200 },
 *     respectFirstGameLoadDifficulty: true
 *   }
 * }
 */
export const DIFFICULTY_AllConfigs: AllDifficultyConfigs = {};
