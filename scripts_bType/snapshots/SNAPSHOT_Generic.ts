import { COUNTER_All } from "scripts_bType/counters/COUNTER_All.ts";
import {
  SNAPSHOT_NOT_SET,
  TRIGGER_TIME_IMMEDIATE,
} from "scripts_bType/counters/CountersTriggersConst.ts";
import { OUTPUT_ProgressCampaign } from "scripts_bType/output/OUTPUT_ProgressCampaign.ts";
import { QUERY_GetRestParameter } from "scripts_bType/queries/QUERY_GetRestParameter.ts";
import { QUERY_GetAllPermutations } from "scripts_bType/utility/QUERY_GetAllPermutations.ts";

/**
 * Factory function for creating configurable snapshot objects.
 * @param nameFunc Function generating the base snapshot name.
 * @returns {SnapshotGeneric | -999} Initialized snapshot interface or failure indicator.
 * @remarks Handles counter permutations and global variable synchronization. Returns -999 when name resolution fails.
 */
export const SNAPSHOT_Generic = (
  nameFunc: () => string | -999,
): SnapshotGeneric | -999 => {
  const baseSnapshotName = nameFunc();

  // If nameFunc resolves to SNAPSHOT_NOT_SET (-999), return it immediately.
  if (baseSnapshotName === SNAPSHOT_NOT_SET) {
    return SNAPSHOT_NOT_SET;
  }

  return {
    /**
     * Retrieves the base snapshot name.
     * @returns {string} Base identifier for the snapshot.
     * @remarks Name is determined during snapshot initialization.
     */
    GetSnapshotName: (): string => baseSnapshotName,

    /**
     * Resets all tracked counter values to SNAPSHOT_NOT_SET.
     * @returns {NoReturn}
     * @remarks Iterates through COUNTER_All and clears stored values for all permutations.
     */
    Reset: function (): NoReturn {
      for (const counter of COUNTER_All) {
        if (!counter.IsRestricted()) continue;
        const inputPermutations = QUERY_GetAllPermutations(
          counter.allowedInput,
        );
        if (inputPermutations.length === 0) {
          // No permutations; call without parameters.
          const GV = counter.GetGV(); // No arguments passed
          const resultSnapshotName = baseSnapshotName + "_" + GV;
          OUTPUT_SetGlobalVariable(resultSnapshotName, SNAPSHOT_NOT_SET);
        } else {
          for (const permutation of inputPermutations) {
            const GV = counter.GetGV(...permutation.flat());

            const resultSnapshotName = baseSnapshotName + "_" + GV;
            OUTPUT_SetGlobalVariable(resultSnapshotName, SNAPSHOT_NOT_SET);
          }
        }
      }
    },

    /**
     * Captures current counter values into the snapshot system.
     * @remarks Persists counter states across game sessions. Triggers campaign progression updates.
     */
    Take: function () {
      for (const counter of COUNTER_All) {
        if (!counter.IsRestricted()) continue;
        const inputPermutations = QUERY_GetAllPermutations(
          counter.allowedInput,
        );
        if (inputPermutations.length === 0) {
          const GV = counter.GetGV();
          const resultSnapshotName = baseSnapshotName + "_" + GV;
          OUTPUT_SetGlobalVariable(resultSnapshotName, counter.Get());
        } else {
          for (const permutation of inputPermutations) {
            const GV = counter.GetGV(...permutation.flat());

            const resultSnapshotName = baseSnapshotName + "_" + GV;
            OUTPUT_SetGlobalVariable(
              resultSnapshotName,
              counter.Get(...permutation.flat()),
            );
          }
        }
      }
      OUTPUT_ProgressCampaign(TRIGGER_TIME_IMMEDIATE);
    },

    /**
     * Retrieves delta between current counter value and snapshot state.
     * @param counter Target counter system to evaluate.
     * @param input Counter-specific input parameters for value lookup.
     * @returns {number} Difference between current and snapshotted values, or SNAPSHOT_NOT_SET if invalid.
     * @remarks Calculates value deltas using stored snapshot data. Returns SNAPSHOT_NOT_SET if no valid data exists.
     */
    Get: function (
      counter: GenericCounterType,
      ...input: (string | number | boolean)[]
    ): number {
      input = QUERY_GetRestParameter(input);
      const GV = counter.GetGV(...input);
      const resultSnapshotName = baseSnapshotName + "_" + GV;

      if (QUERY_IsGlobalVariableSet(resultSnapshotName)) {
        const globalVal = counter.Get(...input);
        const snapshotVal = QUERY_GetGlobalVariable(resultSnapshotName);
        return snapshotVal === SNAPSHOT_NOT_SET
          ? SNAPSHOT_NOT_SET
          : globalVal - snapshotVal;
      } else {
        return SNAPSHOT_NOT_SET;
      }
    },

    /**
     * Manually sets snapshot values for specific counter configurations.
     * @param counter Target counter system to modify.
     * @param value New value to store in the snapshot.
     * @param input Counter-specific input parameters for value storage.
     * @remarks Directly modifies snapshot storage without triggering capture sequence.
     */
    PatchSet: function (
      counter: GenericCounterType,
      value: number,
      ...input: (string | number | boolean)[]
    ) {
      input = QUERY_GetRestParameter(input);
      const GV = counter.GetGV(...input);
      const resultSnapshotName = baseSnapshotName + "_" + GV;
      OUTPUT_SetGlobalVariable(resultSnapshotName, value);
    },
  };
};
