import {
  FACTION_ACTION_ATTACK_VILLAGE_V2,
  FACTION_ACTION_UPGRADE_BASE,
  FACTION_ACTION_BUILD_NEW_OUTPOST,
} from "./FACTION_Actions.ts";

/**
 * Default action distribution for undead faction invasion strategies.
 * @readonly
 * @remarks
 * Contains weighted action allocations:
 * - 3x FACTION_ACTION_ATTACK_VILLAGE_V2 for offensive operations
 * - 1x FACTION_ACTION_UPGRADE_BASE for infrastructure enhancement
 * - 1x FACTION_ACTION_BUILD_NEW_OUTPOST for territorial expansion
 * Used as baseline for undead faction behavior patterns.
 */
export const FACTION_ACTIONS_UndeadDefault: FactionActionAmount[] = [
  { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
  { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
  { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 },
];
