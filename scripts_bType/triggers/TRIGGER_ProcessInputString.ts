import { FACTION_GetPiglinShortName } from "scripts_bType/invasion/FACTION_GetPiglinShortName.ts";
import { FACTION_GetUndeadShortName } from "scripts_bType/invasion/FACTION_GetUndeadShortName.ts";

import { IsInputPiglin } from "./IsInputPiglin.ts";
import { IsInputUndead } from "./IsInputUndead.ts";

// Returns either original string or transformed string or null

/**
 * Processes faction identifier strings for trigger system compatibility.
 * @param input Faction identifier string to validate/transform.
 * @returns {FactionNameId | null} Processed faction name or null for invalid inputs.
 * @remarks Handles piglin/undead faction name conversions. Returns null for unrecognized faction identifiers. Requires valid FACTION_GetPiglinShortName and FACTION_GetUndeadShortName implementations.
 */
export const TRIGGER_ProcessInputString = (
  input: FactionNameId,
): FactionNameId | null => {
  if (IsInputPiglin(input)) {
    return FACTION_GetPiglinShortName(
      input as AnyPiglinMainHorde,
    ) as FactionNameId;
  }

  if (IsInputUndead(input)) {
    return FACTION_GetUndeadShortName(
      input as AnyUndeadFaction,
    ) as FactionNameId;
  }

  return input;
};
