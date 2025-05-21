import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { FACTION_GetCultureShortName } from "scripts_bType/invasion/FACTION_GetCultureShortName.ts";

import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a namespaced snapshot identifier for culture faction world entry events.
 * @param factionName Culture faction identifier.
 * @returns {SnapshotGeneric | -999} Valid snapshot name or failure indicator.
 * @remarks Constructs keys using "snapshot_faction_culture_{faction}_entry_started" format. Returns SNAPSHOT_NOT_SET for invalid faction names.
 */
export const SNAPSHOT_CultureEntryStart = (
  factionName: AnyCultureFaction,
): SnapshotGeneric | -999 => {
  const snapshot = SNAPSHOT_Generic(() => {
    const factionShortName = FACTION_GetCultureShortName(factionName);
    const snapshotName = `snapshot_faction_culture_${factionShortName}_entry_started`;
    if (factionShortName === null) {
      return SNAPSHOT_NOT_SET; // Return the indicator value properly
    }

    return snapshotName;
  });

  return snapshot; // Returns SnapshotGeneric or -999
};
