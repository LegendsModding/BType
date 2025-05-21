import { QUERY_GetFactionPhase } from "./QUERY_GetFactionPhase.ts";

/**
 * Checks if a faction has completed a specific progression phase.
 * @param faction Target faction identifier.
 * @param phase Target phase number.
 * @returns {boolean} True if current phase meets/exceeds target.
 * @remarks
 * Uses INVASION_FactionPhaseState for phase tracking. Returns false for unregistered factions or phases.
 */
export const QUERY_IsFactionPhaseComplete = (
  faction: FactionNameId,
  phase: number,
): boolean => {
  return QUERY_GetFactionPhase(faction) >= phase;
};
