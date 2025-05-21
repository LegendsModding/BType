import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

import { OUTPUT_RegisterForCleanup } from "./OUTPUT_RegisterForCleanup.ts";

/**
 * Configures a spatial trigger volume with comprehensive parameters.
 * Sets ownership, team affiliation, and filtering criteria for entity detection.
 * @param {SingleEntity} lifetimeEg Entity controlling volume lifespan
 * @param {SingleEntity} volume Base volume entity
 * @param {TeamName} team Associated team name
 * @param {VillageID} villageId Owning village identifier
 * @param {boolean} stretchVertically Flag to expand vertical bounds
 * @param {TagArray} includeTags Required entity tags
 * @param {TagArray} excludeTags Forbidden entity tags
 * @param {string} alliance Alliance restriction string
 * @returns {EntityGroup} Configured trigger volume
 * @example
 * // Create fortress detection zone
 * const fortressZone = OUTPUT_SetTriggerVolume(
 *   cleanupEntity,
 *   baseVolume,
 *   "defenders",
 *   10,
 *   true,
 *   ["military"],
 *   ["civilian"],
 *   "allied"
 * );
 * @throws {Error} If villageId is invalid
 * @see {@link OUTPUT_RegisterForCleanup} for resource management
 * @remarks
 * This function handles:
 * - Team ownership assignment
 * - Vertical bounds expansion
 * - Tag-based filtering
 * - Automatic cleanup registration
 */
export const OUTPUT_SetTriggerVolume = (
  lifetimeEg: SingleEntity,
  volume: SingleEntity,
  team: TeamName,
  villageId: VillageID,
  stretchVertically: boolean,
  includeTags: TagArray,
  excludeTags: TagArray,
  alliance: string,
): EntityGroup => {
  OUTPUT_SetTeam(volume, team);
  if (villageId !== undefined && villageId >= 0) {
    OUTPUT_SetOwnerVillageById(volume, villageId);
    OUTPUT_SetFactionByName(
      volume,
      QUERY_GetFactionNameFromVillageID(villageId),
    );
  }
  if (stretchVertically) {
    OUTPUT_VerticallyStretchAABBToMax(volume);
  }
  OUTPUT_OverwriteTriggerCriteriaTags(
    volume,
    includeTags,
    excludeTags,
    alliance,
  );
  // clean yourself up if your lifetime entity is destroyed
  if (lifetimeEg !== undefined) {
    const ownerId = villageId ?? OWNER_VILLAGE_OPT_OUT;
    OUTPUT_RegisterForCleanup(ownerId, lifetimeEg, volume);
  }

  return volume;
};
