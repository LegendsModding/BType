import { FILTER_RandomEntity } from "scripts_bType/filter/FILTER_RandomEntity.ts";
import { HUD_DeEmphasizeItem } from "scripts_bType/HUD/HUD_DeEmphasizeItem.ts";
import { HUD_EmphasizeItem } from "scripts_bType/HUD/HUD_EmphasizeItem.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 *
 */
export const OUTPUT_UpdateWoodGolemHighlight = (): void => {
  const isEmphasizedVar = "gv_wood_golem_emphasized";
  const isEnabledVar = "gv_wood_golem_tracker_enabled";
  const isEmphasized = QUERY_GetGlobalVariable(isEmphasizedVar) === 1;
  const isEnabled = QUERY_GetGlobalVariable(isEnabledVar) === 1;
  FORESIGHT.info("=============== UPDATING");
  if (!isEnabled) {
    if (isEmphasized) OUTPUT_SetGlobalVariable(isEmphasizedVar, 0);
    HUD_DeEmphasizeItem(["mobs", "badger:spawner_wood_golem"]);
    return;
  }
  const golemEntities = QUERY_GetEntitiesWithTags(["wood golem"]);
  const golemCount = QUERY_GetEntitiesCount(golemEntities);
  const atMobCap =
    QUERY_GetNumTicketsUsed(
      FILTER_RandomEntity(QUERY_GetAllPlayers()),
      "spawn",
    ) >=
    QUERY_GetTicketCap(FILTER_RandomEntity(QUERY_GetAllPlayers()), "spawn");

  if (!isEmphasized && golemCount < 8) {
    HUD_EmphasizeItem(["mobs", "badger:spawner_wood_golem"]);
    OUTPUT_SetGlobalVariable(isEmphasizedVar, 1);
  } else if (isEmphasized && (golemCount >= 10 || atMobCap)) {
    OUTPUT_SetGlobalVariable(isEmphasizedVar, 0);
    HUD_DeEmphasizeItem(["mobs", "badger:spawner_wood_golem"]);
  }
};
