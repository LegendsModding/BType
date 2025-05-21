import { FACTION_OOPS_Construction } from "./oops/FACTION_OOPS_Construction.ts";
import { FACTION_OOPS_InnerConflict } from "./oops/FACTION_OOPS_InnerConflict.ts";
import { FACTION_OOPS_RebelFaction } from "./oops/FACTION_OOPS_RebelFaction.ts";
import { FACTION_OOPS_Research } from "./oops/FACTION_OOPS_Research.ts";

/**
 * Oops action categories for procedural mishap systems.
 * @readonly
 * @remarks
 * Contains construction/inner-conflict/rebel/research failure types.
 * Used for generating unexpected events and narrative disruptions during gameplay.
 */
export const FACTION_OOPS = {
  construction: FACTION_OOPS_Construction,
  innerConflict: FACTION_OOPS_InnerConflict,
  rebelFaction: FACTION_OOPS_RebelFaction,
  research: FACTION_OOPS_Research,
};
