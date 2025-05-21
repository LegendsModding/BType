import { QUERY_GetFactionPhase } from "./QUERY_GetFactionPhase.ts";

/**
 * Checks if a faction has completed a specified progression phase.
 * @param faction Target faction identifier.
 * @param phase Target phase number.
 * @returns {boolean} True if current phase meets/exceeds target.
 * @remarks
 * Queries faction phase status via QUERY_GetFactionPhase and compares against target value.
 * Returns false for unregistered factions or invalid phase numbers.
 */
export const INVASION_IsFactionPhaseComplete = (
  faction: FactionNameId,
  phase: number,
): boolean => {
  return QUERY_GetFactionPhase(faction) >= phase;
};
