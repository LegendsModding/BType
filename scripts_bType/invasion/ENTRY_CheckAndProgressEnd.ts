import { COUNTER_StaggeredEntryEnd } from "scripts_bType/counters/COUNTER_StaggeredEntryEnd.ts";
import { END_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { ENTRY_EndConfig } from "./ENTRY_EndConfig.ts";
import { ENTRY_NextEnd } from "./ENTRY_NextEnd.ts";
import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Progresses "end" faction entry based on trigger conditions.
 * Manages introduction of end factions.
 * @param {TriggerTimeFull} triggerTime Evaluation time phase
 * @param {EndFactionEntry[]} [factionPool] Optional override pool
 * @example
 * // Activate end factions after final boss
 * ENTRY_CheckAndProgressEnd("POST_BOSS", customEndFactions);
 */
export const ENTRY_CheckAndProgressEnd = (
  triggerTime: TriggerTimeFull,
  factionPool: EndFactionEntry[],
): void => {
  const lastEndIndex = COUNTER_StaggeredEntryEnd.Get();
  // Use the provided factionPool if available; otherwise default to the configured end factions.
  const endFactions: EndFactionEntry[] =
    factionPool ?? ENTRY_EndConfig.factions;

  for (let i = lastEndIndex + 1; i < endFactions.length; i++) {
    const endFactionToIntroduce = endFactions[i];

    // If this faction was already introduced (or the counter is out of sync), skip.
    if (i <= COUNTER_StaggeredEntryEnd.Get()) {
      continue;
    }

    const trigger = endFactionToIntroduce.pregame[triggerTime];

    // Stop processing if the trigger for this faction is not defined.
    if (trigger === undefined) {
      break;
    }

    if (!trigger.eval()) {
      // The trigger conditions are not met yet.
      break;
    }

    let resultEndFaction = FACTION_EntryUnified.GetRandomEntry(
      endFactionToIntroduce.factionPool,
      false,
    );
    if (resultEndFaction === null) {
      resultEndFaction = FACTION_EntryUnified.GetRandomEntry(
        END_FactionNames.all,
        false,
      );
    }

    ENTRY_NextEnd(resultEndFaction as AnyEndFaction);
  }
};
