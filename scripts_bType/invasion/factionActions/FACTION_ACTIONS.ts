import { FACTION_ATTACK } from "./FACTION_ATTACK.ts";
import { FACTION_BUILD } from "./FACTION_BUILD.ts";
import { FACTION_CLAIM } from "./FACTION_CLAIM.ts";
import { FACTION_ESTABLISH } from "./FACTION_ESTABLISH.ts";
import { FACTION_OCCUPY } from "./FACTION_OCCUPY.ts";
import { FACTION_OOPS } from "./FACTION_OOPS.ts";
import { FACTION_UPGRADE } from "./FACTION_UPGRADE.ts";

/**
 * Collection of valid faction action categories for invasion systems.
 * @readonly
 * @remarks
 * Contains all recognized action types including construction, upgrades, territorial claims, and military operations.
 * Used for validating action requests and coordinating procedural generation behaviors.
 */
export const FACTION_ACTIONS = [
  // All invasion action categories
  FACTION_BUILD,
  FACTION_UPGRADE,
  FACTION_OOPS,
  FACTION_CLAIM,
  FACTION_ATTACK,
  FACTION_ESTABLISH,
  FACTION_OCCUPY,
];
