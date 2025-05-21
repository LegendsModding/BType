/**
 * Determines if a village belongs to specified factions.
 * Checks village's faction against provided list for access control.
 * @param {VillageID} villageId Target village identifier
 * @param {FactionNameArray} factionNames Array of factions to check
 * @returns {boolean} True if village faction is in the list
 * @example
 * // Check for hostile faction presence
 * const isHostile = VILLAGE_IsFactionVillage(20, ["undead", "piglin"]);
 * @see {@link QUERY_GetFactionNameFromVillageID} for faction resolution
 */
export const VILLAGE_IsFactionVillage = (
  villageId: VillageID,
  factionNames: FactionNameArray,
): boolean => {
  return factionNames.includes(
    QUERY_GetFactionNameFromVillageID(villageId) as FactionNameId,
  );
};
