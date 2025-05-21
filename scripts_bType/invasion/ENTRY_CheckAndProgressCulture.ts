import { COUNTER_StaggeredEntryCulture } from "scripts_bType/counters/COUNTER_StaggeredEntryCulture.ts";
import { CULTURE_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { ENTRY_CultureConfig } from "./ENTRY_CultureConfig.ts";
import { ENTRY_NextCulture } from "./ENTRY_NextCulture.ts";
import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Progresses culture faction entry based on trigger conditions.
 * Handles staggered introduction of cultural groups into the world.
 * @param {TriggerTimeFull} triggerTime Evaluation time phase
 * @param {CultureFactionEntry[]} [culturePool] Optional override pool
 * @example
 * // Introduce new culture at dawn
 * ENTRY_CheckAndProgressCulture("DAWN");
 */
export const ENTRY_CheckAndProgressCulture = (
  triggerTime: TriggerTimeFull,
  culturePool: CultureFactionEntry[],
): void => {
  const lastCultureIndex = COUNTER_StaggeredEntryCulture.Get();
  // Use the provided factionPool if available; otherwise default to the configured culture factions.
  const cultureFactions: CultureFactionEntry[] =
    culturePool ?? ENTRY_CultureConfig.cultures;

  for (let i = lastCultureIndex + 1; i < cultureFactions.length; i++) {
    const cultureToIntroduce = cultureFactions[i];

    // If this faction was already introduced (or the counter is out of sync), skip.
    if (i <= COUNTER_StaggeredEntryCulture.Get()) continue;

    const trigger = cultureToIntroduce.pregame[triggerTime];

    if (!trigger) break;

    if (!trigger.eval()) break;

    let resultCulture = FACTION_EntryUnified.GetRandomEntry(
      cultureToIntroduce.factionPool,
      false,
    );
    if (resultCulture === null) {
      resultCulture = FACTION_EntryUnified.GetRandomEntry(
        CULTURE_FactionNames.all,
        false,
      );
    }

    ENTRY_NextCulture(resultCulture as AnyCultureFaction);
  }
};
