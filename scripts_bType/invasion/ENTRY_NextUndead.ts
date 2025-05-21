import { GV_UNDEAD_ENTRY_START } from "scripts_bType/consts/GV_UNDEAD_ENTRY_START.ts";
import { COUNTER_StaggeredEntryUndead } from "scripts_bType/counters/COUNTER_StaggeredEntryUndead.ts";
import { SNAPSHOT_UndeadEntryStart } from "scripts_bType/snapshots/SNAPSHOT_UndeadEntryStart.ts";

import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Marks an undead faction as active in the game world.
 * Updates global state and progression tracking for undead groups.
 * @param {AnyUndeadFaction} factionName Target undead faction identifier
 * @example
 * // Activate skeleton faction
 * ENTRY_NextUndead(UNDEAD_FactionNames.skeleton);
 * @description
 * Process flow:
 * 1. Sets GV_UNDEAD_ENTRY_START flag
 * 2. Registers faction entry in unified system
 * 3. Increments undead entry counter
 * 4. Captures state snapshot
 *
 * Key interactions:
 * - Undead spawn systems
 * - Graveyard generation
 * - Night cycle events
 */
export const ENTRY_NextUndead = (factionName: AnyUndeadFaction): NoReturn => {
  OUTPUT_SetGlobalVariable(GV_UNDEAD_ENTRY_START[factionName], 1);

  // Variables
  FACTION_EntryUnified.SetEntered(factionName, true);

  // Move the pointer
  COUNTER_StaggeredEntryUndead.Increment();

  // Record
  const snapshot = SNAPSHOT_UndeadEntryStart(factionName) as SnapshotGeneric;
  snapshot.Take();
};
