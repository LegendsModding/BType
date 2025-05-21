import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

import { INVASION_PhaseState } from "./INVASION_PhaseState.ts";

/**
 * Identifies factions currently active in invasion systems.
 * @returns {FactionNameArray} Array of non-destroyed horde factions.
 * @remarks
 * Queries INVASION_PhaseState global variables (ATTACK/DEFEND/OBSTACLE_HORDE_DESTROYED) to determine
 * active piglin factions (horderunners, unbreakables, rotters). Returns empty array when all tracked
 * factions are destroyed.
 */
export const INVASION_GetAliveFactions = (): FactionNameArray => {
  const result: FactionNameArray = [];
  if (
    QUERY_GetGlobalVariable(INVASION_PhaseState.ATTACK_HORDE_DESTROYED) === 0
  ) {
    result.push(PIGLIN_FactionNames.horderunners);
  }
  if (
    QUERY_GetGlobalVariable(INVASION_PhaseState.DEFEND_HORDE_DESTROYED) === 0
  ) {
    result.push(PIGLIN_FactionNames.unbreakables);
  }
  if (
    QUERY_GetGlobalVariable(INVASION_PhaseState.OBSTACLE_HORDE_DESTROYED) === 0
  ) {
    result.push(PIGLIN_FactionNames.rotters);
  }
  return result;
};
