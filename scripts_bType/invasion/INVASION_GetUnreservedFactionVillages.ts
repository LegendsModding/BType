import { FACTION_GetInvasionVillages } from "./FACTION_GetInvasionVillages.ts";
import { TAG_InvasionReserved } from "./TAG_InvasionReserved.ts";

/**
 * Retrieves non-reserved invasion villages for specified factions.
 * @param factionName Target faction identifier.
 * @returns {EntityGroup} Collection of eligible villages or empty group.
 * @remarks
 * Filters FACTION_GetInvasionVillages results using TAG_InvasionReserved exclusion.
 * Returns empty group when no valid villages exist or faction data is missing.
 */
export const INVASION_GetUnreservedFactionVillages = (
  factionName: FactionNameId,
): EntityGroup => {
  return FILTER_InvasionParticipant(
    FILTER_ByTagFilter(
      FACTION_GetInvasionVillages(factionName),
      [],
      [TAG_InvasionReserved],
    ),
    false,
  );
};
