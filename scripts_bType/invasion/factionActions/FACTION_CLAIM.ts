import { FACTION_CLAIM_Area } from "./claim/FACTION_CLAIM_Area.ts";
import { FACTION_CLAIM_Poi } from "./claim/FACTION_CLAIM_Poi.ts";
import { FACTION_CLAIM_Village } from "./claim/FACTION_CLAIM_Village.ts";

/**
 * Claim action categories for territorial control systems.
 * @readonly
 * @remarks
 * Includes area/village/poi claim types. Used for tracking ownership changes
 * and validating territorial acquisition requests during gameplay.
 */
export const FACTION_CLAIM = {
  area: FACTION_CLAIM_Area,
  village: FACTION_CLAIM_Village,
  poi: FACTION_CLAIM_Poi,
};
