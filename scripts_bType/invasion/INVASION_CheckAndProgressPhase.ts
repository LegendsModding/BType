import { COUNTER_InvasionPhase } from "scripts_bType/counters/COUNTER_InvasionPhase.ts";
import { FACTION_ALL_NO_PLAYER } from "scripts_bType/FACTION_NAMES.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";
import { INVASION_ProgressFactionPhase } from "./INVASION_ProgressFactionPhase.ts";
import { INVASION_UpdateGlobalState } from "./INVASION_UpdateGlobalState.ts";
import { QUERY_GetFactionPhase } from "./QUERY_GetFactionPhase.ts";
import { QUERY_GetFactionPhaseConfig } from "./QUERY_GetFactionPhaseConfig.ts";
import { QUERY_IsFactionPhaseComplete } from "./QUERY_IsFactionPhaseComplete.ts";

/**
 *
 * @param triggerTime
 */
export const INVASION_CheckAndProgressPhase = (triggerTime: string): void => {
  const currentPhase = COUNTER_InvasionPhase.Get();
  const nextPhase = currentPhase + 1;

  const activeFactions = FACTION_ALL_NO_PLAYER.filter(
    (faction) =>
      FACTION_EntryUnified.IsEntered(faction) &&
      !QUERY_IsFactionPhaseComplete(faction, currentPhase),
  );

  if (activeFactions.length === 0) return;

  activeFactions.forEach((faction) => {
    const phaseConfig = QUERY_GetFactionPhaseConfig(faction, nextPhase);
    if (!phaseConfig[nextPhase].triggers) {
      FORESIGHT.error(`Triggers is not defined!`);
    }
    // Correctly accessing triggers and actions
    if (phaseConfig[nextPhase].triggers?.[triggerTime]?.eval()) {
      INVASION_ProgressFactionPhase(faction, nextPhase);
    }
  });

  // Optionally, check if the global invasion phase should progress
  if (
    activeFactions.some(
      (faction) => QUERY_GetFactionPhase(faction) > currentPhase,
    )
  ) {
    COUNTER_InvasionPhase.Set(nextPhase);
    INVASION_UpdateGlobalState();
  }
};
