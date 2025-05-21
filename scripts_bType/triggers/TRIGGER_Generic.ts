import { SNAPSHOT_NOT_SET } from "scripts_bType/counters/CountersTriggersConst.ts";
import { QUERY_GetAllPermutations } from "scripts_bType/utility/QUERY_GetAllPermutations.ts";

import { TRIGGER_ProcessInputAll } from "./TRIGGER_ProcessInputAll.ts";

/**
 * Constructs a generic trigger condition based on counter value thresholds.
 * @param expectedNum Minimum required value for trigger activation.
 * @param counter Counter system identifier for value accumulation.
 * @param snapshot Snapshot system for data retrieval.
 * @param input Variable input parameters for permutation processing.
 * @returns {GenericTriggerResult} Configured trigger object with evaluation logic.
 * @remarks Processes input permutations via QUERY_GetAllPermutations. Aggregates values from the snapshot and compares against the threshold. Returns false if no valid permutations exist.
 */
export const TRIGGER_Generic = (
  expectedNum: number,
  counter: GenericCounterType,
  snapshot: SnapshotGeneric,
  ...input: InputElementTrigger[]
): GenericTriggerResult => {
  return {
    /**
     * Evaluates the trigger condition against the snapshot data.
     * @returns {boolean}
     */
    eval: function (): boolean {
      const unpackedInput = TRIGGER_ProcessInputAll(input);
      const permutations = QUERY_GetAllPermutations(unpackedInput);

      let finalSum = 0;
      let canEvaluate = false;

      if (permutations.length === 0) {
        finalSum = snapshot.Get(counter);
        if (finalSum === SNAPSHOT_NOT_SET) {
          return false;
        }
        canEvaluate = true;
      } else {
        for (const inputPermutation of permutations) {
          // Ensure inputPermutation is flattened and passed as individual arguments
          const snapshotVal = snapshot.Get(counter, ...inputPermutation.flat());

          if (snapshotVal === SNAPSHOT_NOT_SET) {
            continue;
          }
          canEvaluate = true;
          finalSum += snapshotVal;
        }
      }

      return canEvaluate && finalSum >= expectedNum;
    },
  };
};
