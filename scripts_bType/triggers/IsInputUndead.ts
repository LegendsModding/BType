import { UNDEAD_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Validates if input matches undead faction identifiers or occupation event patterns.
 * @param input Faction name or event identifier string.
 * @returns {boolean} True for valid undead faction names or occupation event prefixes.
 * @remarks Checks against UNDEAD_FactionNames.all and "undead_occupation_started_" pattern matches.
 */
export const IsInputUndead = (input: FactionNameId): boolean => {
  return (
    UNDEAD_FactionNames.all.includes(input as AnyUndeadFaction) ||
    input.includes("undead_occupation_started_")
  );
};
