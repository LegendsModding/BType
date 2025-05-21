import { FACTION_Personality } from "./FACTION_Personality.ts";

/**
 * Mapping between numerical keys and faction personality strategy names.
 * @readonly
 * @remarks
 * Translates internal numerical personality codes (1-4) to human-readable strategy identifiers for configuration systems.
 */
export const FACTION_PersonalityMap: Record<FactionPersonalityKey, string> = {
  1: FACTION_Personality.ASSAULT,
  2: FACTION_Personality.UPGRADE,
  3: FACTION_Personality.EXPANSION,
  4: FACTION_Personality.PASSIVE,
};
