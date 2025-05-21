/**
 * Faction AI behavior strategy identifiers.
 * @readonly
 * @remarks
 * Defines valid AI personality types for faction management. NONE indicates default behavior while others specify attack/defense strategies.
 */
export const FACTION_Personality = {
  NONE: "none",
  ASSAULT: "assault",
  UPGRADE: "upgrade",
  EXPANSION: "expansion",
  PASSIVE: "passive",
} as const;
