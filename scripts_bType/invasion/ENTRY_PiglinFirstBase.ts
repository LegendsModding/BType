import { COUNTER_StaggeredEntry } from "scripts_bType/counters/COUNTER_StaggeredEntry.ts";
import { COUNTER_StaggeredEntryHordePhase } from "scripts_bType/counters/COUNTER_StaggeredEntryHordePhase.ts";
import { FACTION_SetMapRevealedState } from "scripts_bType/map/FACTION_SetMapRevealedState.ts";
import { SNAPSHOT_PiglinFactionFirstBaseBuilt } from "scripts_bType/snapshots/SNAPSHOT_PiglinFactionFirstBaseBuilt.ts";

import { ENTRY_SpawnPiglinCentralBase } from "./ENTRY_SpawnPiglinCentralBase.ts";
import { ENTRY_SuccessfulFirstVillage } from "./ENTRY_SuccessfulFirstVillage.ts";
import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Establishes a piglin horde's first base in the world.
 * Coordinates multiple systems for horde initialization.
 * @param {AnyPiglinMainHorde} faction Target piglin faction
 * @param {boolean} [_debugSkipCinematic=false] Bypass cinematic playback
 * @example
 * // Establish initial piglin base
 * ENTRY_PiglinFirstBase(PIGLIN_FactionNames.horderunners);
 * @description
 * Initialization steps:
 * 1. Updates progression counters
 * 2. Spawns central base structure
 * 3. Reveals map areas
 * 4. Captures state snapshot
 * 5. Triggers establishment events
 *
 * Key systems affected:
 * - Horde AI behavior
 * - Resource distribution
 * - Invasion scheduling
 * - Map visibility
 */
export const ENTRY_PiglinFirstBase = (
  faction: AnyPiglinMainHorde,
  _debugSkipCinematic: boolean = false,
): void => {
  const order: number = FACTION_EntryUnified.GetOrderByName(faction);
  COUNTER_StaggeredEntryHordePhase.Increment(order);
  COUNTER_StaggeredEntry.Increment();
  ENTRY_SpawnPiglinCentralBase(faction);
  FACTION_SetMapRevealedState(faction, true);
  const snapshot = SNAPSHOT_PiglinFactionFirstBaseBuilt(
    faction,
  ) as SnapshotGeneric;
  snapshot.Take();
  ENTRY_SuccessfulFirstVillage(faction);
};
