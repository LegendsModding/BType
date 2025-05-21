import { COUNTER_StaggeredEntryHordePhase } from "scripts_bType/counters/COUNTER_StaggeredEntryHordePhase.ts";
import { SNAPSHOT_PiglinPregameStarted } from "scripts_bType/snapshots/SNAPSHOT_PiglinPregameStarted.ts";

import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 *
 * @param faction
 */
export const PREGAME_PiglinStart = (faction: AnyPiglinFaction): void => {
  FACTION_EntryUnified.SetEntered(faction, true);
  const order: number = FACTION_EntryUnified.GetOrderByName(faction);
  COUNTER_StaggeredEntryHordePhase.Increment(order);
  const snapshot = SNAPSHOT_PiglinPregameStarted(
    faction as AnyPiglinMainHorde,
  ) as SnapshotGeneric;
  snapshot.Take();
};
