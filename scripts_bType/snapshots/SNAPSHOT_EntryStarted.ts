import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a general-purpose entry tracking snapshot.
 * @returns {SnapshotGeneric | -999} Initialized snapshot interface or failure indicator.
 * @remarks Captures state for "snapshot_entry_started" system events.
 */
export const SNAPSHOT_EntryStarted = (): -999 | SnapshotGeneric => {
  return SNAPSHOT_Generic(() => {
    return "snapshot_entry_started";
  });
};
