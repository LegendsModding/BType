import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { FACTION_GetUndeadShortName } from "scripts_bType/invasion/FACTION_GetUndeadShortName.ts";

import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a namespaced snapshot identifier for undead faction pregame start events.
 * @param factionName Undead faction identifier.
 * @returns {SnapshotGeneric | -999} Valid snapshot name or failure indicator.
 * @remarks Constructs keys using "snapshot_faction_undead_{faction}_pregame_started" format. Returns SNAPSHOT_NOT_SET for invalid faction names.
 */
export const SNAPSHOT_UndeadPregameStarted = (
  factionName: AnyUndeadFaction,
): SnapshotGeneric | -999 => {
  const snapshot = SNAPSHOT_Generic(() => {
    const shortName = FACTION_GetUndeadShortName(factionName);
    if (shortName === null) {
      return SNAPSHOT_NOT_SET; // Return SNAPSHOT_NOT_SET when the horde name is null
    }
    const snapshotName = `snapshot_faction_undead_${shortName}_pregame_started`;

    return snapshotName; // Return the snapshot name with the horde name
  });

  return snapshot; // Return the snapshot or SNAPSHOT_NOT_SET
};
