import {
  FACTION_ACTION_ATTACK_VILLAGE_V2,
  FACTION_ACTION_UPGRADE_BASE,
  FACTION_ACTION_BUILD_NEW_OUTPOST,
} from "./FACTION_Actions.ts";

/**
 * Default piglin horde action priorities.
 * Defines base behavior patterns for piglin factions.
 */
export const FACTION_ACTIONS_PiglinDefault: FactionActionAmount[] = [
  { action: FACTION_ACTION_ATTACK_VILLAGE_V2, amount: 3 },
  { action: FACTION_ACTION_UPGRADE_BASE, amount: 1 },
  { action: FACTION_ACTION_BUILD_NEW_OUTPOST, amount: 1 },
];
