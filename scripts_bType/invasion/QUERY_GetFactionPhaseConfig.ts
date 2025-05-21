import { INVASION_FactionPhaseConfigs } from "./INVASION_FactionPhaseConfigs.ts";

// Retrieve the configuration for a given faction and phase

/**
 * Retrieves faction-specific phase configuration data.
 * @param faction Target faction identifier.
 * @param _phase Target phase number (unused in current implementation).
 * @returns {InvasionPhaseConfig} Configuration object or empty if unregistered.
 * @remarks
 * Accesses INVASION_FactionPhaseConfigs registry. Returns empty object for undefined configurations.
 */
export const QUERY_GetFactionPhaseConfig = (
  faction: FactionNameId,
  _phase: number,
): InvasionPhaseConfig => {
  return INVASION_FactionPhaseConfigs[faction] || {};
};
