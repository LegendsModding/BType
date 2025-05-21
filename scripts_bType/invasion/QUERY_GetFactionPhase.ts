import { INVASION_FactionPhaseState } from "./INVASION_FactionPhaseState.ts";

// GetFactionPhase now pulls the phase state from this map

/**
 * Retrieves current progression phase for specified factions.
 * @param faction Target faction identifier.
 * @returns {number} Current phase number or 0 if unregistered.
 * @remarks
 * Queries INVASION_FactionPhaseState global variable. Default value 0 indicates uninitialized state.
 */
export function QUERY_GetFactionPhase(faction: FactionNameId): number {
  const currentPhase = INVASION_FactionPhaseState[faction]; // Retrieve the phase of the faction
  return currentPhase ?? 0; // Default to phase 0 if not found
}
