import { CUSTOM_OPTIONS } from "scripts_bType/consts/CUSTOM_OPTIONS.ts";
import { OUTPUT_IncrementGlobal } from "scripts_bType/output/OUTPUT_IncrementGlobal.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { DIFFICULTY_AllConfigs } from "./DIFFICULTY_AllConfigs.ts";
import { DIFFICULTY_SetConfigTo } from "./DIFFICULTY_SetConfigTo.ts";

/**
 * Sets all registered difficulty configurations to the specified difficulty level.
 * Handles special cases for custom difficulty mode.
 * @param {GameDifficulty} difficulty Target difficulty level
 * @example
 * // Switch to hard mode globally
 * DIFFICULTY_SetAllDifficultyConfigsTo("hard");
 * @description
 * Process flow:
 * 1. Iterates through all registered configurations
 * 2. Applies progressive merging for each config
 * 3. Handles custom difficulty special case
 *
 * Effects:
 * - Updates core configurations
 * - Modifies game behavior systematically
 * - Persists through save states
 *
 * Custom difficulty handling:
 * - Increments global skip counter
 * - Allows content bypass
 * - Maintains configuration consistency
 */
export const DIFFICULTY_SetAllDifficultyConfigsTo = (
  difficulty: GameDifficulty,
): NoReturn => {
  FORESIGHT.info(
    `[DIFFICULTY B#] Setting all configs for difficulty ${difficulty}`,
  );

  for (const configId in DIFFICULTY_AllConfigs) {
    DIFFICULTY_SetConfigTo(configId, difficulty);
  }

  if (difficulty === "custom") {
    OUTPUT_IncrementGlobal(CUSTOM_OPTIONS.SKIP_ACT_1);
  }
};
