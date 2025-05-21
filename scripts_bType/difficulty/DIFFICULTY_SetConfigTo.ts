import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { GAME_DIFFICULTY_PROGRESSION } from "scripts_bType/consts/GAME_DIFFICULTY_PROGRESSION.ts";
import { GV_FIRST_LOAD_GAME_DIFFICULTY } from "scripts_bType/consts/GV_FIRST_LOAD_GAME_DIFFICULTY.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { OBJECT_AssignRecursive } from "scripts_bType/utility/OBJECT_AssignRecursive.ts";

import { DIFFICULTY_AllConfigs } from "./DIFFICULTY_AllConfigs.ts";

/**
 * Applies the appropriate difficulty configuration based on current settings.
 * Uses progressive merging from easy to target difficulty.
 * @param {string} configId Configuration identifier
 * @param {GameDifficulty} difficulty Target difficulty level
 * @example
 * // Set to hard difficulty
 * DIFFICULTY_SetConfigTo("enemyStats", "hard");
 * @description
 * Configuration process:
 * 1. Checks for base easy configuration
 * 2. Determines target difficulty index
 * 3. Progressively merges configurations
 * 4. Applies final overrides
 *
 * Special handling:
 * - Respects first-load difficulty setting
 * - Maintains configuration hierarchy
 * - Ensures backward compatibility
 */
export const DIFFICULTY_SetConfigTo = (
  configId: string,
  difficulty: GameDifficulty,
): NoReturn => {
  // Baseline is EASY difficulty, and it should always exist
  if (DIFFICULTY_AllConfigs[configId][GAME_DIFFICULTY.easy] === undefined) {
    FORESIGHT.warning(
      `Couldn't find EASY difficulty configuration for ${configId}, but it needs to be defined. Will not set config to specified difficulty.`,
    );
    return;
  }

  const easyDifficultyIndex = GAME_DIFFICULTY_PROGRESSION.indexOf(
    GAME_DIFFICULTY.easy,
  );

  // Some configs will always be set to the original difficulty, regardless whether the difficulty changes later or not
  // In particular applies to any configs related to the world size in any fashion
  const targetDifficultyIndex = DIFFICULTY_AllConfigs[configId]
    .respectFirstGameLoadDifficulty
    ? QUERY_GetGlobalVariable(GV_FIRST_LOAD_GAME_DIFFICULTY)
    : GAME_DIFFICULTY_PROGRESSION.indexOf(difficulty);
  const targetDifficulty = GAME_DIFFICULTY_PROGRESSION[targetDifficultyIndex];

  // We step either from Easy in positive direction to make game harder or to negative to make the game easier
  // We apply overrides on each step so that each layer gets all the changes from the previous layer
  const step = targetDifficultyIndex < easyDifficultyIndex ? -1 : 1;
  for (let i = easyDifficultyIndex; i !== targetDifficultyIndex; i += step) {
    const difficultyAtIndex = GAME_DIFFICULTY_PROGRESSION[i];
    if (DIFFICULTY_AllConfigs[configId][difficultyAtIndex] !== undefined) {
      OBJECT_AssignRecursive(
        DIFFICULTY_AllConfigs[configId].core,
        DIFFICULTY_AllConfigs[configId][
          difficultyAtIndex
        ] as Partial<DifficultyConfig>,
      );
    }
  }

  // Finally apply the target difficulty if it exists - but if it doesn't, we at least get all overrides from the previous layers
  if (DIFFICULTY_AllConfigs[configId][targetDifficulty] !== undefined) {
    OBJECT_AssignRecursive(
      DIFFICULTY_AllConfigs[configId].core,
      DIFFICULTY_AllConfigs[configId][
        targetDifficulty
      ] as Partial<DifficultyConfig>,
    );
  }
};
