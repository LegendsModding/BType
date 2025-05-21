import { VILLAGE_GetVariableKey } from "./VILLAGE_GetVariableKey.ts";

/**
 * Creates a village-specific resource storage interface.
 * Returns an object with type-safe access to village reward resources.
 * @param {VillageID} villageId Target village identifier
 * @returns {VillageResourceStore} Resource management interface
 * @example
 * // Modify village iron reserves
 * const store = VILLAGE_ResourceStore(10);
 * store.Set("iron", 500);
 * @remarks
 * Uses VILLAGE_GetVariableKey() for unique variable naming.
 * The returned object provides Get/Set methods for resource manipulation.
 * @see {@link VILLAGE_GetVariableKey} for key generation
 */
export const VILLAGE_ResourceStore = (
  villageId: VillageID,
): {
  key: string;
  Get: (resourceName: string) => number;
  Set: (resourceName: string, value: number) => void;
} => {
  const counter = {
    key: VILLAGE_GetVariableKey(villageId, "village_chest_rewards_"),

    /**
     * Retrieves the current value of a specific resource in the village store.
     * Uses the generated variable key pattern for storage access.
     * @param {string} resourceName Resource identifier (e.g., "iron", "gold")
     * @returns {number} Current resource quantity
     * @example
     * const ironCount = store.Get("iron");
     * @see {@link VILLAGE_GetVariableKey} for key generation pattern
     * @see {@link QUERY_GetGlobalVariable} for underlying storage access
     */
    Get: function (resourceName: string) {
      return QUERY_GetGlobalVariable(this.key + resourceName);
    },

    /**
     * Sets a new value for a specific resource in the village store.
     * Updates the persistent global variable storage.
     * @param {string} resourceName Resource identifier
     * @param {number} value New resource quantity
     * @returns {NoReturn}
     * @example
     * store.Set("diamond", 250);
     * @see {@link OUTPUT_SetGlobalVariable} for storage modification
     */
    Set: function (resourceName: string, value: number): NoReturn {
      return OUTPUT_SetGlobalVariable(this.key + resourceName, value);
    },
  };
  return counter;
};
