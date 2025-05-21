import { OUTPUT_DoOnce } from "../output/OUTPUT_DoOnce.ts";
import { PRES_PlayToPlayers } from "../presentation/PRES_PlayToPlayers.ts";
import { QUERY_GetPlayersInsideAVillage } from "../queries/QUERY_GetPlayersInsideAVillage.ts";
import { QUERY_IsShowingThisAct1NudgeForAllPlayers } from "../queries/QUERY_IsShowingThisAct1NudgeForAllPlayers.ts";
import { TUTORIAL_UpdateFirstSkirmishNudge } from "../tutorial/TUTORIAL_UpdateFirstSkirmishNudge.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";
import { ACT1_GetSecondVillageEntity } from "./ACT1_GetSecondVillageEntity.ts";

/**
 *
 * @param playerEntity
 */
export const ACT1_HandlePlayerEnteredFirstSkirmish = (
  // TODO: Entity type
  playerEntity: SingleEntity,
): void => {
  if (
    QUERY_GetGlobalVariable(
      ACT1_FlowVal.firstSkirmish.global.firstSkirmishNudgesEnabled,
    ) === 0
  ) {
    return;
  }

  const message = TUTORIAL_UpdateFirstSkirmishNudge(playerEntity, false);
  if (
    QUERY_IsShowingThisAct1NudgeForAllPlayers(
      ACT1_FlowVal.firstSkirmish.message.repairFountainNudge,
    ) ||
    message === ACT1_FlowVal.firstSkirmish.message.repairFountainNudge
  ) {
    if (OUTPUT_DoOnce(ACT1_FlowVal.firstSkirmish.vo.returnToOccupiedVillage)) {
      const villageId = QUERY_GetVillageIDFromEntity(
        ACT1_GetSecondVillageEntity() as SingleEntity,
      );
      const players = OPER_Union(
        playerEntity,
        QUERY_GetPlayersInsideAVillage(villageId),
      );
      PRES_PlayToPlayers(
        ACT1_FlowVal.firstSkirmish.vo.returnToOccupiedVillage,
        players,
      );
    }
  }
};
