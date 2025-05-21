import { FACTION_ESTABLISH_Main } from "./establish/FACTION_ESTABLISH_Main.ts";
import { FACTION_ESTABLISH_MixedFaction } from "./establish/FACTION_ESTABLISH_MixedFaction.ts";
import { FACTION_ESTABLISH_SubFaction } from "./establish/FACTION_ESTABLISH_SubFaction.ts";

/**
 * Establishment action categories for faction foundation systems.
 * @readonly
 * @remarks
 * Contains main/mixed/sub-faction establishment types. Used during world generation
 * and dynamic faction creation events to validate founding parameters.
 */
export const FACTION_ESTABLISH = {
  main: FACTION_ESTABLISH_Main,
  mixedFaction: FACTION_ESTABLISH_MixedFaction,
  subFaction: FACTION_ESTABLISH_SubFaction,
};
