import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { ACT1_GetFirstVillageEntity } from "../act1/ACT1_GetFirstVillageEntity.ts";
import { CAMPAIGN_CheckIfStepIsCompleteOrActive } from "../CAMPAIGN_CheckIfStepIsCompleteOrActive.ts";
import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { LISTENFOR_PEV_ModulatedVillage } from "../LISTENFOR_PEV_ModulatedVillage.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { TUTORIAL_SetAsCurrentStep } from "./TUTORIAL_SetAsCurrentStep.ts";
import { TUTORIAL_StartLinearMessages } from "./TUTORIAL_StartLinearMessages.ts";

/**
 *
 */
export const TUTORIAL_StartTwoPiglinCamps = (): void => {
  if (CAMPAIGN_CheckIfStepIsCompleteOrActive(ACT1_FlowVal.threePiglinCamps)) {
    return;
  }

  FORESIGHT.info("_StartTwoPiglinBasesOnboarding");
  //_ResetIconDistanceForEntity(_GetSecondVillageEntity())
  const villageEntity = ACT1_GetFirstVillageEntity();
  const villageId = QUERY_GetVillageIDFromEntity(villageEntity as SingleEntity);
  LISTENFOR_PEV_ModulatedVillage(villageId, ACT1_FlowVal.threePiglinCamps.id);

  TUTORIAL_SetAsCurrentStep(ACT1_FlowVal.threePiglinCamps);
  TUTORIAL_StartLinearMessages(ACT1_FlowVal.threePiglinCamps);

  LISTENFOR_EntitySpawned({
    snippet: "es_stone_golem_outpost_strength",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    includeTags: ["stone_golem"],
  });

  LISTENFOR_NonPopCappedEntityDestroyed({
    snippet: "ed_three_camp_barracks",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    includeTags: ["barracks"],
  });

  LISTENFOR_ResourcesChanged({
    snippet: "rc_emerald_three_camps",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    resourceName: "emerald",
  });

  LISTENFOR_Timer({
    snippet: "t_go_to_camps_reminder",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    timerName: ACT1_FlowVal.threePiglinCamps.timers.goToCampsReminderTimer,
    threshold: 0,
  });
  OUTPUT_SetNamedTimer(
    ACT1_FlowVal.threePiglinCamps.timers.goToCampsReminderTimer,
    ACT1_FlowVal.threePiglinCamps.consts.timeGoToCampsReminder,
  );
};
