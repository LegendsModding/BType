import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Generates unique keys for village-specific global variables.
 * Enforces naming conventions for persistent village data storage.
 * @param {VillageID} villageId Target village identifier
 * @param {string} key Base variable name
 * @returns {string} Formatted global variable key
 * @throws {Error} If key parameter is empty or undefined
 * @example
 * // Create health storage key
 * const healthKey = VILLAGE_GetVariableKey(5, "health");
 * @remarks
 * The generated format is "village_var_{villageId}_{key}".
 * Validates input parameters to prevent invalid variable names.
 * @see {@link VILLAGE_ResourceStore} for usage example
 */
export const VILLAGE_GetVariableKey = (
  villageId: VillageID,
  key: string,
): string => {
  if (!key) {
    FORESIGHT.error(
      `Call to GetVillageVariableKey made with undefined or empty string!`,
    );
  }
  return `village_var_${villageId}_${key}`;
};
