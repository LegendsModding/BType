import { FACTION_ATTACK_MilitaryBase } from "./attack/FACTION_ATTACK_MilitaryBase.ts";
import { FACTION_ATTACK_Outpost } from "./attack/FACTION_ATTACK_Outpost.ts";
import { FACTION_ATTACK_SendRaidingParty } from "./attack/FACTION_ATTACK_SendRaidingParty.ts";
import { FACTION_ATTACK_Village } from "./attack/FACTION_ATTACK_Village.ts";

/**
 * Attack action categories for military operations.
 * @readonly
 * @remarks
 * Contains identifiers for attacking military bases, outposts, villages,
 * and deploying raiding parties. Used in combat scenario generation and AI targeting systems.
 */
export const FACTION_ATTACK = {
  militaryBase: FACTION_ATTACK_MilitaryBase,
  outpost: FACTION_ATTACK_Outpost,
  sendRaidingParty: FACTION_ATTACK_SendRaidingParty,
  village: FACTION_ATTACK_Village,
};
