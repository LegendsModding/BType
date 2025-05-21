import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { QUERY_GetRestParameter } from "scripts_bType/queries/QUERY_GetRestParameter.ts";

/**
 * Selects the highest difference from a list of snapshots.
 * @param snapshots An array of snapshot objects that implement SnapshotGeneric.
 * @returns An object with a `Get` method, which returns the highest difference or SNAPSHOT_NOT_SET.
 */
export const SNAPSHOT_OR = (
  snapshots: SnapshotGeneric[],
): SnapshotComparator => {
  return {
    /**
     * Gets the highest difference between a counter and all snapshots.
     * @param counter A generic counter.
     * @param input Zero or more parameters passed to the counter.
     * @returns The highest difference or SNAPSHOT_NOT_SET if no valid snapshot is found.
     */
    Get: function (
      counter: GenericCounterType,
      ...input: (string | number | boolean)[]
    ): number {
      // Process rest parameters
      input = QUERY_GetRestParameter(input);

      let maxValue = -Number.MAX_VALUE;
      for (const snapshot of snapshots) {
        const value = snapshot.Get(counter, ...input);
        if (value === SNAPSHOT_NOT_SET) {
          continue;
        }

        if (value > maxValue) {
          maxValue = value;
        }
      }

      if (maxValue === -Number.MAX_VALUE) {
        return SNAPSHOT_NOT_SET;
      } else {
        return maxValue;
      }
    },
  };
};
