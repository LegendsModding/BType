import { CAMPAIGN_CheckIfStepIsComplete } from "../CAMPAIGN_CheckIfStepIsComplete.ts";
import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { LISTENFOR_PEV_ModulatedVillage } from "../LISTENFOR_PEV_ModulatedVillage.ts";
import { QUERY_IsCurrentAct } from "../queries/QUERY_IsCurrentAct.ts";
import { TUTORIAL_StartLinearMessages } from "../tutorial/TUTORIAL_StartLinearMessages.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";
import { ACT1_GetFirstVillageEntity } from "./ACT1_GetFirstVillageEntity.ts";

/**
 *
 */
export const ACT1_StartFindVillage = (): void => {
  if (CAMPAIGN_CheckIfStepIsComplete(ACT1_FlowVal.findVillageUnderAttack)) {
    return;
  }
  // TODO
  if (!QUERY_IsCurrentAct("act1")) {
    return;
  }

  LISTENFOR_LocalTimer({
    snippet: "lt_wmap_tutorial",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    waitTime: ACT1_FlowVal.misc.miscTutorials.worldMap.delay,
  });

  LISTENFOR_LocalTimer({
    snippet: "lt_compass_reveal",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    waitTime: ACT1_FlowVal.misc.miscTutorials.compass.delay,
  });

  const firstUnderAttackVillage = ACT1_GetFirstVillageEntity();
  const villageID = QUERY_GetVillageIDFromEntity(
    firstUnderAttackVillage as SingleEntity,
  );
  LISTENFOR_PEV_ModulatedVillage(villageID, ACT1_FlowVal.repairFountain.id);

  TUTORIAL_StartLinearMessages(ACT1_FlowVal.findVillageUnderAttack);
};
