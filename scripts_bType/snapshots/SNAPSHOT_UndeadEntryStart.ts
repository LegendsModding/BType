import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { FACTION_GetUndeadShortName } from "scripts_bType/invasion/FACTION_GetUndeadShortName.ts";

import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a namespaced snapshot identifier for undead faction world entry events.
 * @param factionName Undead faction identifier.
 * @returns {SnapshotGeneric | -999} Valid snapshot name or failure indicator.
 * @remarks Constructs keys using "snapshot_faction_undead_{faction}_entry_started" format. Returns SNAPSHOT_NOT_SET for invalid faction names.
 */
export const SNAPSHOT_UndeadEntryStart = (
  factionName: AnyUndeadFaction,
): SnapshotGeneric | -999 => {
  const snapshot = SNAPSHOT_Generic(() => {
    const factionShortName = FACTION_GetUndeadShortName(factionName);
    const snapshotName = `snapshot_faction_undead_${factionShortName}_entry_started`;
    if (factionShortName === null) {
      return SNAPSHOT_NOT_SET; // Return the indicator value properly
    }

    return snapshotName;
  });

  return snapshot; // Returns SnapshotGeneric or -999
};
