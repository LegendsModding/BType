import { FACTION_GetShortName } from "./FACTION_GetShortName.ts";
import { FACTION_GetType } from "./FACTION_GetType.ts";

/**
 * Retrieves faction's short name and category classification.
 * @param factionName Target faction identifier.
 * @returns {FactionShortNameAndType | null} Object containing short name and type or null if unresolved.
 * @remarks
 * Combines FACTION_GetShortName and FACTION_GetType results.
 * Returns null when either component cannot be resolved for the specified faction.
 */
export const FACTION_GetShortNameAndType = (
  factionName: FactionNameId,
): FactionShortNameAndType | null => {
  const factionShortName = FACTION_GetShortName(factionName);
  const factionType = FACTION_GetType(factionName);
  if (factionShortName && factionType) {
    return { factionShortName, factionType };
  } else return null;
};
