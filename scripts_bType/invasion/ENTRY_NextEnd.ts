import { GV_END_ENTRY_START } from "scripts_bType/consts/GV_END_ENTRY_START.ts";
import { COUNTER_StaggeredEntryEnd } from "scripts_bType/counters/COUNTER_StaggeredEntryEnd.ts";
import { SNAPSHOT_EndEntryStart } from "scripts_bType/snapshots/SNAPSHOT_EndEntryStart.ts";

import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Marks an end-game faction as active in the world.
 * Updates global state and progression counters for end-phase tracking.
 * @param {AnyEndFaction} factionName Target end faction identifier
 * @example
 * // Activate ruined portal faction
 * ENTRY_NextEnd(END_FactionNames.ruinedPortal);
 * @description
 * Process flow:
 * 1. Sets GV_END_ENTRY_START flag for the faction
 * 2. Marks faction as entered in unified system
 * 3. Increments end faction counter
 * 4. Captures state snapshot
 *
 * Key interactions:
 * - End-game progression systems
 * - World completion tracking
 * - Final boss activation
 */
export const ENTRY_NextEnd = (factionName: AnyEndFaction): NoReturn => {
  OUTPUT_SetGlobalVariable(GV_END_ENTRY_START[factionName], 1);

  // Variables
  FACTION_EntryUnified.SetEntered(factionName, true);

  // Move the pointer
  COUNTER_StaggeredEntryEnd.Increment();

  // Record
  const snapshot = SNAPSHOT_EndEntryStart(factionName) as SnapshotGeneric;
  snapshot.Take();
};
