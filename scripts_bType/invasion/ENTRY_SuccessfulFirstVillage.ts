/**
 * Logs successful village establishment for faction progression.
 * Used for debugging and milestone tracking.
 * @param {FactionNameId} faction Established faction identifier
 * @example
 * // Track village creation
 * ENTRY_SuccessfulFirstVillage("piglin_red");
 * @description
 * This function serves as:
 * - Progression milestone marker
 * - Debug verification point
 * - Trigger for subsequent systems
 *
 * Key interactions:
 * - Village generation pipelines
 * - Quest activation
 * - Resource node spawning
 */
export const ENTRY_SuccessfulFirstVillage = (faction: FactionNameId): void => {
  OUTPUT_DebugLogInvasion(`The faction ${faction} is building a First Base!`);
};
