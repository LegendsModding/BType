import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { FACTION_GetUndeadShortName } from "scripts_bType/invasion/FACTION_GetUndeadShortName.ts";

import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a namespaced snapshot identifier for undead faction's first village construction events.
 * @param piglinFaction Undead faction identifier.
 * @returns {SnapshotGeneric | -999} Valid snapshot name or failure indicator.
 * @remarks Constructs keys using "snapshot_horde_first_base_built_{faction}" format. Returns SNAPSHOT_NOT_SET for invalid faction names.
 */
export const SNAPSHOT_UndeadFactionFirstVillageBuilt = (
  piglinFaction: AnyUndeadFaction,
): SnapshotGeneric | -999 => {
  const snapshot = SNAPSHOT_Generic(() => {
    const snapshotName = "snapshot_horde_first_base_built";
    const factionName = FACTION_GetUndeadShortName(piglinFaction);

    if (factionName === null) {
      return SNAPSHOT_NOT_SET; // Correctly return the indicator value
    }

    return `${snapshotName}_${factionName}`;
  });

  return snapshot; // Returns SnapshotGeneric or -999
};
