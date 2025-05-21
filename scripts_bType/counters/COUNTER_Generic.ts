import { OUTPUT_DecrementGlobal } from "scripts_bType/output/OUTPUT_DecrementGlobal.ts";
import { OUTPUT_IncrementGlobal } from "scripts_bType/output/OUTPUT_IncrementGlobal.ts";
import { OUTPUT_ProgressCampaign } from "scripts_bType/output/OUTPUT_ProgressCampaign.ts";
import { QUERY_GetRestParameter } from "scripts_bType/queries/QUERY_GetRestParameter.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { COUNTER_All } from "./COUNTER_All.ts";
import { TRIGGER_TIME_IMMEDIATE } from "./CountersTriggersConst.ts";

/**
 * Factory function for creating type-safe multi-dimensional counters.
 * @template T Input parameter type combinations.
 * @param gvName Global variable prefix for counter storage.
 * @param defaultValue Initial numerical value for counter instances.
 * @param allowedInput Array of valid input combinations for counter dimensions.
 * @returns {GenericCounterType<T>} Configured counter object with tracking methods.
 * @example
 * // Create mission progress counter
 * const missionCounter = COUNTER_Generic(
 *   "mission_progress",
 *   0,
 *   ["main", "side"],
 *   [1, 2, 3]
 * );
 * @remarks
 * Registers created counters in COUNTER_All registry for system-wide tracking.
 * Validates input combinations against allowedInput dimensions during method calls.
 * Persists data through global variables with composite naming (gvName + input parameters).
 */
export const COUNTER_Generic = <T extends (string | number | boolean)[]>(
  gvName: string,
  defaultValue: number,
  ...allowedInput: T[]
): GenericCounterType<T> => {
  const counter: GenericCounterType<T> = {
    gv: gvName,
    allowedInput,
    inputSize: allowedInput.length,

    /**
     * Generates composite global variable identifier based on input parameters.
     * @param input Parameter combination for dimension selection.
     * @returns {string} Formatted global variable name.
     * @throws Error when input length doesn't match counter dimensions.
     * @remarks
     * Constructs GV names using prefix + parameter concatenation.
     * Validates input count against allowedInput array length with error logging.
     */
    GetGV: function (...input: (string | number | boolean)[]): string {
      // Cast the widened input to T for internal processing.
      const typedInput = QUERY_GetRestParameter(input) as T;
      if (this.inputSize !== typedInput.length) {
        FORESIGHT.error(
          `Invalid number of arguments for counter ${this.gv}. Expected ${this.inputSize} but received ${typedInput.length}.`,
        );
        throw new Error("Invalid input length");
      }
      let resultGV = this.gv;
      for (const elem of typedInput) {
        resultGV += "_" + elem;
      }
      return resultGV;
    },

    /**
     * Resets counter value to default for specified input combination.
     * @param input Parameter combination for target counter instance.
     * @returns {NoReturn}
     * @remarks
     * Uses composite GV naming from GetGV method.
     * Initializes unset variables automatically through default value assignment.
     */
    Reset: function (...input: (string | number | boolean)[]): void {
      const typedInput = QUERY_GetRestParameter(input) as T;
      const GV = this.GetGV(...typedInput);
      OUTPUT_SetGlobalVariable(GV, defaultValue);
    },

    /**
     * Retrieves current counter value with auto-initialization.
     * @param input Parameter combination for target counter instance.
     * @returns {number} Current counter value or defaultValue if uninitialized.
     * @remarks
     * Calls Reset method when encountering unset variables.
     * Ensures consistent state through composite GV naming system.
     */
    Get: function (...input: (string | number | boolean)[]): number {
      const typedInput = QUERY_GetRestParameter(input) as T;
      const GV = this.GetGV(...typedInput);
      if (!QUERY_IsGlobalVariableSet(GV)) {
        this.Reset(...typedInput);
      }
      return QUERY_GetGlobalVariable(GV);
    },

    /**
     * Increments counter value with campaign progression trigger.
     * @param input Parameter combination for target counter instance.
     * @returns {number} Updated counter value post-increment.
     * @remarks
     * Executes atomic increment operation.
     * Triggers TRIGGER_TIME_IMMEDIATE campaign update after modification.
     */
    Increment: function (...input: (string | number | boolean)[]): number {
      const typedInput = QUERY_GetRestParameter(input) as T;
      const GV = this.GetGV(...typedInput);
      if (!QUERY_IsGlobalVariableSet(GV)) {
        this.Reset(...typedInput);
      }
      OUTPUT_IncrementGlobal(GV);
      OUTPUT_ProgressCampaign(TRIGGER_TIME_IMMEDIATE);
      return this.Get(...typedInput);
    },

    /**
     * Decrements counter value with campaign progression trigger.
     * @param input Parameter combination for target counter instance.
     * @returns {number} Updated counter value post-decrement.
     * @remarks
     * Executes atomic decrement operation.
     * Triggers TRIGGER_TIME_IMMEDIATE campaign update after modification.
     */
    Decrement: function (...input: (string | number | boolean)[]): number {
      const typedInput = QUERY_GetRestParameter(input) as T;
      const GV = this.GetGV(...typedInput);
      if (!QUERY_IsGlobalVariableSet(GV)) {
        this.Reset(...typedInput);
      }
      OUTPUT_DecrementGlobal(GV);
      OUTPUT_ProgressCampaign(TRIGGER_TIME_IMMEDIATE);
      return this.Get(...typedInput);
    },

    /**
     * Sets counter value with campaign progression trigger.
     * @param value Target numerical value to assign.
     * @param input Parameter combination for target counter instance.
     * @returns {number} Confirmed counter value post-assignment.
     * @remarks
     * Validates input dimensions before assignment.
     * Triggers TRIGGER_TIME_IMMEDIATE campaign update after modification.
     */
    Set: function (
      value: number,
      ...input: (string | number | boolean)[]
    ): number {
      const typedInput = QUERY_GetRestParameter(input) as T;
      const GV = this.GetGV(...typedInput);
      if (!QUERY_IsGlobalVariableSet(GV)) {
        this.Reset(...typedInput);
      }
      OUTPUT_SetGlobalVariable(GV, value);
      OUTPUT_ProgressCampaign(TRIGGER_TIME_IMMEDIATE);
      return this.Get(...typedInput);
    },

    /**
     * Checks if counter has restricted input combinations.
     * @returns {boolean} True if all input dimensions have defined restrictions.
     * @remarks
     * Validates allowedInput arrays for non-empty entries across all dimensions.
     */
    IsRestricted: function (): boolean {
      return this.allowedInput.every((arr) => arr.length > 0);
    },
  };

  // Now push the counter into the global array.
  // (No casting is needed because the method signatures match.)
  COUNTER_All.push(counter);
  return counter;
};
