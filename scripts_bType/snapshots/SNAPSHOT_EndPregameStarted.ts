import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { FACTION_GetEndShortName } from "scripts_bType/invasion/FACTION_GetEndShortName.ts";

import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a namespaced snapshot identifier for end faction pregame initialization.
 * @param factionName End faction identifier.
 * @returns {SnapshotGeneric | -999} Valid snapshot name or failure indicator.
 * @remarks Constructs keys using "snapshot_faction_end_{faction}_pregame_started" format. Returns SNAPSHOT_NOT_SET for invalid faction names.
 */
export const SNAPSHOT_EndPregameStarted = (
  factionName: AnyEndFaction,
): SnapshotGeneric | -999 => {
  const snapshot = SNAPSHOT_Generic(() => {
    const shortName = FACTION_GetEndShortName(factionName);
    if (shortName === null) {
      return SNAPSHOT_NOT_SET; // Return SNAPSHOT_NOT_SET when the horde name is null
    }
    const snapshotName = `snapshot_faction_end_${shortName}_pregame_started`;

    return snapshotName; // Return the snapshot name with the horde name
  });

  return snapshot; // Return the snapshot or SNAPSHOT_NOT_SET
};
