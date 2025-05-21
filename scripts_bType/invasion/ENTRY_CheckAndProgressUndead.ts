import { COUNTER_StaggeredEntryUndead } from "scripts_bType/counters/COUNTER_StaggeredEntryUndead.ts";
import { UNDEAD_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { ENTRY_NextUndead } from "./ENTRY_NextUndead.ts";
import { ENTRY_UndeadConfig } from "./ENTRY_UndeadConfig.ts";
import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Progresses undead faction entry based on trigger conditions.
 * Controls zombie/skeleton faction introductions.
 * @param {TriggerTimeFull} triggerTime Evaluation time phase
 * @param {UndeadFactionEntry[]} [factionPool] Optional override pool
 * @example
 * // Trigger undead outbreak at dusk
 * ENTRY_CheckAndProgressUndead("DUSK");
 */
export const ENTRY_CheckAndProgressUndead = (
  triggerTime: TriggerTimeFull,
  factionPool: UndeadFactionEntry[],
): void => {
  const lastUndeadIndex = COUNTER_StaggeredEntryUndead.Get();
  // Use the provided factionPool if available; otherwise default to the configured undead factions.
  const undeadFactions: UndeadFactionEntry[] =
    factionPool ?? ENTRY_UndeadConfig.mobs;

  for (let i = lastUndeadIndex + 1; i < undeadFactions.length; i++) {
    const undeadFactionToIntroduce = undeadFactions[i];

    // If this faction was already introduced (or the counter is out of sync), skip.
    if (i <= COUNTER_StaggeredEntryUndead.Get()) {
      continue;
    }

    const trigger = undeadFactionToIntroduce.pregame[triggerTime];

    // Stop processing if the trigger for this faction is not defined.
    if (trigger === undefined) {
      break;
    }

    if (!trigger.eval()) {
      // The trigger conditions are not met yet.
      break;
    }

    let resultUndeadFaction = FACTION_EntryUnified.GetRandomEntry(
      undeadFactionToIntroduce.factionPool,
      false,
    );
    if (resultUndeadFaction === null) {
      resultUndeadFaction = FACTION_EntryUnified.GetRandomEntry(
        UNDEAD_FactionNames.all,
        false,
      );
    }

    ENTRY_NextUndead(resultUndeadFaction as AnyUndeadFaction);
  }
};
