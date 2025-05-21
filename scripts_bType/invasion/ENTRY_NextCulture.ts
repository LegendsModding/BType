import { GV_CULTURE_ENTRY_START } from "scripts_bType/consts/GV_CULTURE_ENTRY_START.ts";
import { COUNTER_StaggeredEntryUndead } from "scripts_bType/counters/COUNTER_StaggeredEntryUndead.ts";
import { SNAPSHOT_CultureEntryStart } from "scripts_bType/snapshots/SNAPSHOT_CultureEntryStart.ts";

import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Marks a culture faction as having entered the game world.
 * Updates global state and progression counters for cultural expansion tracking.
 * @param {AnyCultureFaction} factionName Target culture faction identifier
 * @example
 * // Introduce drylands culture
 * ENTRY_NextCulture(CULTURE_FactionNames.drylands);
 * @description
 * Process flow:
 * 1. Sets GV_CULTURE_ENTRY_START flag for the faction
 * 2. Marks faction as entered in unified tracking system
 * 3. Increments undead entry counter (legacy behavior)
 * 4. Captures state snapshot for progression tracking
 *
 * Key interactions:
 * - FACTION_EntryUnified system for cross-faction coordination
 * - COUNTER_StaggeredEntryUndead for legacy progression tracking
 * - SNAPSHOT_CultureEntryStart for state validation
 */
export const ENTRY_NextCulture = (factionName: AnyCultureFaction): NoReturn => {
  OUTPUT_SetGlobalVariable(GV_CULTURE_ENTRY_START[factionName], 1);

  // Variables
  FACTION_EntryUnified.SetEntered(factionName, true);

  // Move the pointer
  COUNTER_StaggeredEntryUndead.Increment();

  // Record
  const snapshot = SNAPSHOT_CultureEntryStart(factionName) as SnapshotGeneric;
  snapshot.Take();
};
