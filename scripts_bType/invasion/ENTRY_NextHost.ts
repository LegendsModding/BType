import { GV_HOST_ENTRY_START } from "scripts_bType/consts/GV_HOST_ENTRY_START.ts";
import { COUNTER_StaggeredEntryHost } from "scripts_bType/counters/COUNTER_StaggeredEntryHost.ts";
import { SNAPSHOT_HostEntryStart } from "scripts_bType/snapshots/SNAPSHOT_HostEntryStart.ts";

import { FACTION_EntryUnified } from "./FACTION_EntryUnified.ts";

/**
 * Activates a host faction in the game world.
 * Updates tracking systems and global state for neutral/hostile AI groups.
 * @param {AnyHostFaction} factionName Target host faction identifier
 * @example
 * // Introduce knowledge host faction
 * ENTRY_NextHost(HOSTS_FactionNames.knowledge);
 * @description
 * Process flow:
 * 1. Sets GV_HOST_ENTRY_START flag
 * 2. Registers faction entry in unified system
 * 3. Increments host entry counter
 * 4. Captures baseline snapshot
 *
 * Key interactions:
 * - AI alliance systems
 * - Quest generation
 * - World event triggers
 */
export const ENTRY_NextHost = (factionName: AnyHostFaction): NoReturn => {
  OUTPUT_SetGlobalVariable(GV_HOST_ENTRY_START[factionName], 1);

  // Variables
  FACTION_EntryUnified.SetEntered(factionName, true);

  // Move the pointer
  COUNTER_StaggeredEntryHost.Increment();

  // Record
  const snapshot = SNAPSHOT_HostEntryStart(factionName) as SnapshotGeneric;
  snapshot.Take();
};
