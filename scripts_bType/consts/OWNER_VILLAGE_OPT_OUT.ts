/**
 * Special village ID indicating no specific owner.
 * Used in listeners to ignore village ownership checks.
 * @constant
 * type {number}
 * @example
 * // Global listener for all villages
 * LISTENFOR_VillageGenerated({
 *   snippet: "any_village",
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT,
 *   callback: (villageId) => {
 *     // Handle any village generation
 *   }
 * });
 * @description
 * Common use cases:
 * - System-wide event tracking
 * - Global progression listeners
 * - Cross-village synchronization
 *
 * Warning: May increase event processing load if overused.
 */
export const OWNER_VILLAGE_OPT_OUT: number = 1234567890;
