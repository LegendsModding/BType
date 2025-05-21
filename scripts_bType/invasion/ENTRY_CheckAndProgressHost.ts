import { COUNTER_StaggeredEntryHost } from "scripts_bType/counters/COUNTER_StaggeredEntryHost.ts";
import { COUNTER_StaggeredEntryUndead } from "scripts_bType/counters/COUNTER_StaggeredEntryUndead.ts";
import { HOSTS_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { ENTRY_HostConfig } from "./ENTRY_HostConfig.ts";
import { ENTRY_NextHost } from "./ENTRY_NextHost.ts";
import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Progresses host faction entry based on trigger conditions.
 * Controls introduction of Host AI factions.
 * @param {TriggerTimeFull} triggerTime Evaluation time phase
 * @param {HostFactionEntry[]} [factionPool] Optional override pool
 * @example
 * // Introduce new host faction mid-game
 * ENTRY_CheckAndProgressHost("MIDGAME", hostFactions);
 */
export const ENTRY_CheckAndProgressHost = (
  triggerTime: TriggerTimeFull,
  factionPool: HostFactionEntry[],
): void => {
  const lastHostIndex = COUNTER_StaggeredEntryHost.Get();
  // Use the provided factionPool if available; otherwise default to the configured undead factions.
  const hostFactions: HostFactionEntry[] =
    factionPool ?? ENTRY_HostConfig.hosts;

  for (let i = lastHostIndex + 1; i < hostFactions.length; i++) {
    const hostFactionToIntroduce = hostFactions[i];

    // If this faction was already introduced (or the counter is out of sync), skip.
    if (i <= COUNTER_StaggeredEntryUndead.Get()) {
      continue;
    }

    const trigger = hostFactionToIntroduce.pregame[triggerTime];

    // Stop processing if the trigger for this faction is not defined.
    if (trigger === undefined) {
      break;
    }

    if (!trigger.eval()) {
      // The trigger conditions are not met yet.
      break;
    }

    let resultHostFaction = FACTION_EntryUnified.GetRandomEntry(
      hostFactionToIntroduce.factionPool,
      false,
    );
    if (resultHostFaction === null) {
      resultHostFaction = FACTION_EntryUnified.GetRandomEntry(
        HOSTS_FactionNames.all,
        false,
      );
    }

    ENTRY_NextHost(resultHostFaction as AnyHostFaction);
  }
};
