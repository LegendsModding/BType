import { FACTION_GetVillages } from "./FACTION_GetVillages.ts";
import { INVASION_GetFactionAllowedSizes } from "./INVASION_GetFactionAllowedSizes.ts";

/**
 * Retrieves invasion-eligible villages for specified factions.
 * @param factionName Target faction identifier.
 * @returns {EntityGroup} Filtered collection of valid invasion villages.
 * @remarks
 * Applies INVASION_GetFactionAllowedSizes restrictions to FACTION_GetVillages results.
 * Uses FILTER_ByVillageSize for size classification validation. Returns empty group when no valid villages exist.
 */
export const FACTION_GetInvasionVillages = (
  factionName: FactionNameId,
): EntityGroup => {
  const invasionVillages = FILTER_ByVillageSize(
    FACTION_GetVillages(factionName),
    INVASION_GetFactionAllowedSizes(factionName),
  );

  return invasionVillages;
};
