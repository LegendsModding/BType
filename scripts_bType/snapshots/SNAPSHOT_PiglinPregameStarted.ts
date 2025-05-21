import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { FACTION_GetPiglinShortName } from "scripts_bType/invasion/FACTION_GetPiglinShortName.ts";

import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a namespaced snapshot identifier for piglin horde pregame start events.
 * @param factionName Piglin horde identifier.
 * @returns {SnapshotGeneric | -999} Valid snapshot name or failure indicator.
 * @remarks Constructs keys using "snapshot_act2_started_{faction}" format. Returns SNAPSHOT_NOT_SET for invalid faction names.
 */
export const SNAPSHOT_PiglinPregameStarted = (
  factionName: AnyPiglinMainHorde,
): SnapshotGeneric | -999 => {
  const snapshot = SNAPSHOT_Generic(() => {
    const snapshotName = "snapshot_act2_started";
    const shortName = FACTION_GetPiglinShortName(factionName);

    if (shortName === null) {
      return SNAPSHOT_NOT_SET; // Return SNAPSHOT_NOT_SET when the horde name is null
    }

    return `${snapshotName}_${shortName}`; // Return the snapshot name with the horde name
  });

  return snapshot; // Return the snapshot or SNAPSHOT_NOT_SET
};
