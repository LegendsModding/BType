/**
 * =============================================================================
 * Top-Level Faction Build Actions
 * =============================================================================
 *
 * This aggregated type includes all categories:
 *   - Camp, Outpost, Fortress, Citadel, Bastion, Village, Structure,
 *     Wonder, Communication, Trap, Agriculture, and Research.
 */

import { FACTION_BUILD_Agriculture } from "./build/FACTION_BUILD_Agriculture.ts";
import { FACTION_BUILD_Bastion } from "./build/FACTION_BUILD_Bastion.ts";
import { FACTION_BUILD_Camp } from "./build/FACTION_BUILD_Camp.ts";
import { FACTION_BUILD_Citadel } from "./build/FACTION_BUILD_Citadel.ts";
import { FACTION_BUILD_Communication } from "./build/FACTION_BUILD_Communication.ts";
import { FACTION_BUILD_Fortress } from "./build/FACTION_BUILD_Fortress.ts";
import { FACTION_BUILD_Outpost } from "./build/FACTION_BUILD_Outpost.ts";
import { FACTION_BUILD_Structure } from "./build/FACTION_BUILD_Structure.ts";
import { FACTION_BUILD_Trap } from "./build/FACTION_BUILD_Trap.ts";
import { FACTION_BUILD_Village } from "./build/FACTION_BUILD_Village.ts";
import { FACTION_BUILD_Wonder } from "./build/FACTION_BUILD_Wonder.ts";

/**
 * Aggregated build action categories for faction construction systems.
 * @readonly
 * typeParam FactionActionBuild
 * @remarks
 * Contains camp/outpost/fortress construction types for military expansion,
 * citadel/bastion/village for defensive structures,
 * and agriculture/communication/trap/wonder for specialized construction operations.
 * Serves as a registry for valid build actions during procedural generation and player interactions.
 */
export const FACTION_BUILD = {
  camp: FACTION_BUILD_Camp,
  outpost: FACTION_BUILD_Outpost,
  fortress: FACTION_BUILD_Fortress,
  citadel: FACTION_BUILD_Citadel,
  bastion: FACTION_BUILD_Bastion,
  village: FACTION_BUILD_Village,
  structure: FACTION_BUILD_Structure,
  wonder: FACTION_BUILD_Wonder,
  communication: FACTION_BUILD_Communication,
  trap: FACTION_BUILD_Trap,
  agriculture: FACTION_BUILD_Agriculture,
} as const satisfies FactionActionBuild;
