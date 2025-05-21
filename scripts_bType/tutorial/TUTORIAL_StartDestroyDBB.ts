import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { CULTURE_FactionNames } from "../FACTION_NAMES.ts";
import { OUTPUT_ResetIconDistanceForFactions } from "../output/OUTPUT_ResetIconDistanceForFactions.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { TUTORIAL_InterruptMessage } from "./TUTORIAL_InterruptMessage.ts";
import { TUTORIAL_SetAsCurrentStep } from "./TUTORIAL_SetAsCurrentStep.ts";

/**
 *
 */
export const TUTORIAL_StartDestroyDBB = (): NoReturn => {
  FORESIGHT.info("_StartDestroyDBBOnboarding");
  //_ClearPiglinIcons()
  OUTPUT_ResetIconDistanceForFactions(CULTURE_FactionNames.all);
  //OUTPUT_ResetIconDistanceForFactions(FACTION_POI_ALL as FactionNamesArray);
  //OUTPUT_ResetIconDistanceForFactions(MOB_FACTION_NAMES.all);
  TUTORIAL_InterruptMessage(true);
  TUTORIAL_SetAsCurrentStep(ACT1_FlowVal.destroyDBB);

  LISTENFOR_LocalTimer({
    snippet: "lt_send_player_to_final_base",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    waitTime: ACT1_FlowVal.destroyDBB.consts.timeToTriggerNudgeAfterVO,
  });

  LISTENFOR_VillageDestroyed({
    snippet: "vd_final_dbb",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    despawned: false,
  });

  LISTENFOR_PlayerEnteredVillage({
    snippet: "telemetry_player_entered_dbb",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    villageSize: "TODO_checkfirstvillagesize",
  });
};
