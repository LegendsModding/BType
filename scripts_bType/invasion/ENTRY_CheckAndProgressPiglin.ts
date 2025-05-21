import { COUNTER_StaggeredEntry } from "scripts_bType/counters/COUNTER_StaggeredEntry.ts";
import { COUNTER_StaggeredEntryHordePhase } from "scripts_bType/counters/COUNTER_StaggeredEntryHordePhase.ts";
import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import {
  ENTRY_PHASE_NONE,
  ENTRY_PHASE_PREGAME,
} from "./entry/EntryPhaseConst.ts";
import { ENTRY_PiglinConfig } from "./ENTRY_PiglinConfig.ts";
import { ENTRY_PiglinFirstBase } from "./ENTRY_PiglinFirstBase.ts";
import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";
import { PREGAME_PiglinStart } from "./PREGAME_PiglinStart.ts";

/**
 * Manages piglin horde entry progression through multiple phases.
 * Handles both pre-game setup and first base establishment.
 * @param {TriggerTimeFull} triggerTime Evaluation time phase
 * @param {PiglinFactionEntry[]} [factionPool] Optional override pool
 * @example
 * // Begin piglin invasion sequence
 * ENTRY_CheckAndProgressPiglin("DAWN", eliteHordes);
 */
export const ENTRY_CheckAndProgressPiglin = (
  triggerTime: TriggerTimeFull,
  factionPool: PiglinFactionEntry[],
): void => {
  const lastArrivedHordeIndex = COUNTER_StaggeredEntry.Get();
  // Use the provided factionPool if available; otherwise default to the configured piglin hordes.
  const hordes: PiglinFactionEntry[] = factionPool ?? ENTRY_PiglinConfig.hordes;

  for (let i = lastArrivedHordeIndex; i < hordes.length; i++) {
    const hordeInQuestion = hordes[i];

    let entryPhase = COUNTER_StaggeredEntryHordePhase.Get(i);
    if (entryPhase === ENTRY_PHASE_NONE) {
      const trigger = hordeInQuestion.pregame[triggerTime];

      if (trigger === undefined) {
        // No such trigger time was specified for this faction.
        break;
      }

      if (!trigger.eval()) {
        // Trigger conditions failed; cannot advance this faction yet.
        break;
      }

      // Start pre-game entry for this faction.
      let resultHorde = FACTION_EntryUnified.GetRandomEntry(
        hordeInQuestion.factionPool,
        false,
      );
      // Or start pre-game entry for a random horde
      if (resultHorde === null) {
        resultHorde = FACTION_EntryUnified.GetRandomEntry(
          PIGLIN_FactionNames.hordes,
          false,
        );
      }

      PREGAME_PiglinStart(resultHorde as AnyPiglinMainHorde);
    }

    entryPhase = COUNTER_StaggeredEntryHordePhase.Get(i);
    if (entryPhase === ENTRY_PHASE_PREGAME) {
      const trigger = hordeInQuestion.firstBase[triggerTime];

      if (trigger === undefined) {
        break;
      }

      if (!trigger.eval()) {
        break;
      }

      const horde = FACTION_EntryUnified.GetByArrivedOrder(i);
      ENTRY_PiglinFirstBase(horde as AnyPiglinMainHorde);
    }
  }
};
