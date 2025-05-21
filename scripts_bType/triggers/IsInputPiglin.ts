import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Validates if input matches piglin faction identifiers or arrival event patterns.
 * @param input Faction name or event identifier string.
 * @returns {boolean} True for valid piglin faction names or arrival event prefixes.
 * @remarks Checks against PIGLIN_FactionNames.hordes and "piglin_arrived_" pattern matches.
 */
export const IsInputPiglin = (input: FactionNameId): boolean => {
  return (
    PIGLIN_FactionNames.hordes.includes(input as AnyPiglinMainHorde) ||
    input.includes("piglin_arrived_")
  );
};
