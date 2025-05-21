import { SNAPSHOT_Generic } from "./SNAPSHOT_Generic.ts";

/**
 * Creates a snapshot for tracking initial pregame condition fulfillment.
 * @returns {SnapshotGeneric} Initialized snapshot interface.
 * @remarks Monitors state changes for "snapshot_first_pregame_conditions_fulfilled" game progression milestone.
 */
export const SNAPSHOT_FirstPregameConditionsFulfilled = (): SnapshotGeneric => {
  return SNAPSHOT_Generic(() => {
    return "snapshot_first_pregame_conditions_fulfilled";
  }) as SnapshotGeneric;
};
