import { GAME_DIFFICULTY_PROGRESSION } from "scripts_bType/consts/GAME_DIFFICULTY_PROGRESSION.ts";
import { GAME_MODE } from "scripts_bType/consts/GAME_MODE.ts";
import { GV_FIRST_LOAD_GAME_DIFFICULTY } from "scripts_bType/consts/GV_FIRST_LOAD_GAME_DIFFICULTY.ts";
import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { WORLDDEF_Campaign } from "scripts_bType/worldgen/WORLDDEF_Campaign.ts";
import { WORLDDEF_CampaignCustom } from "scripts_bType/worldgen/WORLDDEF_CampaignCustom.ts";
import { WORLDDEF_Onboarding } from "scripts_bType/worldgen/WORLDDEF_Onboarding.ts";
import { WORLDGEN_SetDefinition } from "scripts_bType/worldgen/WORLDGEN_SetDefinition.ts";

import { DIFFICULTY_SetAllDifficultyConfigsTo } from "./DIFFICULTY_SetAllDifficultyConfigsTo.ts";

SNIPPET_LaunchFromLobby("", (firstLaunch: boolean) => {
  if (firstLaunch) {
    // Set listener
    LISTENFOR_DifficultyChanged({
      snippet: "dc_swap_difficulty_configs",
      ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    });

    // Initialize
    const firstGameLoadDifficulty = QUERY_GameDifficulty();
    OUTPUT_SetGlobalVariable(
      GV_FIRST_LOAD_GAME_DIFFICULTY,
      GAME_DIFFICULTY_PROGRESSION.indexOf(firstGameLoadDifficulty),
    );
    DIFFICULTY_SetAllDifficultyConfigsTo(firstGameLoadDifficulty);
    FORESIGHT.info(
      `[DIFFICULTY B#] Bootstrap running! Difficulty: ` +
        firstGameLoadDifficulty,
    );

    // DEBUG
    LISTENFOR_ExternalEvent({
      snippet: "ee_check_difficulty_values",
      ownerVillageId: OWNER_VILLAGE_OPT_OUT,
      eventName: "checkValues",
    });

    const gameMode = QUERY_GetGameMode();
    switch (gameMode) {
      case GAME_MODE.campaign:
        WORLDGEN_SetDefinition(WORLDDEF_Campaign);
        break;
      case GAME_MODE.campaignCustom:
        WORLDGEN_SetDefinition(WORLDDEF_CampaignCustom);
        break;
      case GAME_MODE.onboarding:
        WORLDGEN_SetDefinition(WORLDDEF_Onboarding);
        break;
      default:
        FORESIGHT.error(
          `No world definition set for given gamemode '${gameMode}'`,
        );
    }
  }
});

SNIPPET_GameLoadBootstrap("", (_isSavedLoaded) => {
  FORESIGHT.info(`[DIFFICULTY B#] GameLoad running!`);
  DIFFICULTY_SetAllDifficultyConfigsTo(QUERY_GameDifficulty());
});

SNIPPET_DifficultyChanged(
  "dc_swap_difficulty_configs",
  (prevDifficulty, newDifficulty, _payload) => {
    FORESIGHT.info(
      `[DIFFICULTY B#] Difficulty was changed from ${prevDifficulty} to ${newDifficulty}, changing the configs!!`,
    );
    DIFFICULTY_SetAllDifficultyConfigsTo(newDifficulty as GameDifficulty);
  },
);

// DEBUG
SNIPPET_ExternalEvent("ee_check_difficulty_values", (_variant, _payload) => {
  FORESIGHT.info(
    `[DIFFICULTY B#] Checking values, current difficulty is ${QUERY_GameDifficulty()}`,
  );

  //FORESIGHT.info(`myConfig.val1 is ${myConfig.val1}`);
  //FORESIGHT.info(`myConfig.val2 is ${myConfig.val2}`);
  //FORESIGHT.info(`myConfig.val3 is ${myConfig.val3}`);
});
