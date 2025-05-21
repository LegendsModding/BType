import { COUNTER_DaysSince } from "scripts_bType/counters/COUNTER_DaysSince.ts";
import { COUNTER_DaysSinceAnyFactionEstablished } from "scripts_bType/counters/COUNTER_DaysSinceAnyFactionEstablished.ts";
import { OUTPUT_ProgressCampaign } from "scripts_bType/output/OUTPUT_ProgressCampaign.ts";
import { SNAPSHOT_EntryStarted } from "scripts_bType/snapshots/SNAPSHOT_EntryStarted.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { ENTRY_DEFAULT_CONFIG } from "./entry/ENTRY_DEFAULT_CONFIG.ts";
import { FACTION_Establishment } from "./FACTION_Establishment.ts";

/**
 * Core function for staggered faction entry progression.
 * Coordinates multiple faction categories based on trigger timing.
 * @param {StaggeredEntryConfig} config Progression configuration
 * @example
 * // Progress multiple factions at dawn
 * StaggeredEntryNext({
 *   triggerTime: "DAWN",
 *   factionProgressors: {
 *     culture: customCultureEntries
 *   },
 *   factionProgressFunctions: {
 *     culture: ENTRY_CheckAndProgressCulture
 *   }
 * });
 * @description
 * Process flow:
 * 1. Captures initial state snapshot
 * 2. Signals campaign progression
 * 3. Updates establishment counters
 * 4. Processes faction categories
 *
 * Key features:
 * - Trigger-based evaluation
 * - Configurable faction pools
 * - Modular progression handlers
 * - Difficulty-aware processing
 */
export const StaggeredEntryNext = (
  config: StaggeredEntryConfig = ENTRY_DEFAULT_CONFIG,
): void => {
  const { triggerTime, factionProgressors, factionProgressFunctions } = config;
  const totalDays: number = COUNTER_DaysSince.Get();

  // On the very first day, take a snapshot of the entry start state.
  if (totalDays === 0) {
    OUTPUT_DebugLogInvasion(
      `[ENTRY] Taking snapshot "SNAPSHOT_EntryStarted" on first day in StaggeredEntryNext with triggerTime: ${triggerTime}`,
    );
    FORESIGHT.info(`[ENTRY]`);
    const snapshot = SNAPSHOT_EntryStarted() as SnapshotGeneric;
    snapshot.Take();
  }

  // Signal campaign progress based on the provided trigger time.
  OUTPUT_ProgressCampaign(triggerTime);

  // If any faction is already established, increment the corresponding counter.
  if (FACTION_Establishment.GetFactions(true).length > 0) {
    COUNTER_DaysSinceAnyFactionEstablished.Increment();
  }

  // Dynamically process all factions based on the config
  for (const factionCategory of Object.keys(
    factionProgressFunctions,
  ) as (keyof FactionEntryMap)[]) {
    // Get properly typed function and entries using type assertion
    const progressFunction = factionProgressFunctions[factionCategory] as
      | FactionProgressFunction<typeof factionCategory>
      | undefined;

    const factionEntries = factionProgressors[factionCategory] as
      | FactionEntryMap[typeof factionCategory][]
      | undefined;

    if (factionEntries && progressFunction) {
      progressFunction(triggerTime, factionEntries);
    }
  }
};
