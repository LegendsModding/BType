import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";
import { HUD_DeEmphasizeItem } from "scripts_bType/HUD/HUD_DeEmphasizeItem.ts";
import { HUD_EmphasizeItem } from "scripts_bType/HUD/HUD_EmphasizeItem.ts";
import { QUERY_GetEntitiesWithTag } from "scripts_bType/queries/QUERY_GetEntitiesWithTag.ts";

/**
 *
 */
export const OUTPUT_UpdateStoneGolemHighlight = (): void => {
  const isEmphasizedVar = "gv_stone_golem_emphasized";
  const isEnabledVar = "gv_stone_golem_tracker_enabled";
  const isEmphasized = QUERY_GetGlobalVariable(isEmphasizedVar) === 1;
  const isEnabled = QUERY_GetGlobalVariable(isEnabledVar) === 1;
  if (!isEnabled) {
    if (isEmphasized) OUTPUT_SetGlobalVariable(isEmphasizedVar, 0);
    HUD_DeEmphasizeItem(["mobs", "badger:spawner_stone_golem"]);
    return;
  }
  const golemEntities = QUERY_GetEntitiesWithTag("stone_golem");
  const golemCount = QUERY_GetEntitiesCount(golemEntities);
  const atMobCap =
    QUERY_GetNumTicketsUsed(
      FILTER_RandomEntity(QUERY_GetAllPlayers()),
      "spawn",
    ) >=
    QUERY_GetTicketCap(FILTER_RandomEntity(QUERY_GetAllPlayers()), "spawn");

  if (!isEmphasized && golemCount < 8) {
    HUD_EmphasizeItem(["mobs", "badger:spawner_stone_golem"]);
    OUTPUT_SetGlobalVariable(isEmphasizedVar, 1);
  } else if (isEmphasized && (golemCount >= 10 || atMobCap)) {
    OUTPUT_SetGlobalVariable(isEmphasizedVar, 0);
    HUD_DeEmphasizeItem(["mobs", "badger:spawner_stone_golem"]);
  }
};
