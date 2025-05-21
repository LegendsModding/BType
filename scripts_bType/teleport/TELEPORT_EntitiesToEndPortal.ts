import { END_FactionNames } from "../FACTION_NAMES.ts";
import { QUERY_GetVillageEntityFromFaction } from "../queries/QUERY_GetVillageEntityFromFaction.ts";

/**
 * Teleports entities to a village's fast travel point.
 * Manages portal access permissions during transfer.
 * @param {EntityGroup} entities Entities to move
 * @param {SingleEntity} destination Target village entity
 * @example
 * // Relocate party to safe zone
 * TELEPORT_EntitiesToEndPortal(GetPartyMembers());
 * @description
 * Process steps:
 * 1. Validate destination village
 * 2. Temporarily enable fast travel
 * 3. Perform teleportation
 * 4. Restore travel permissions
 *
 * Special handling:
 * - Maintains entity orientation
 * - Preserves inventory states
 * - Triggers arrival events
 */
export const TELEPORT_EntitiesToEndPortal = (entities: EntityGroup): void => {
  const endPortalVillage = QUERY_GetVillageEntityFromFaction(
    END_FactionNames.ruinedPortal,
  );
  const endPortalVillageId = QUERY_GetVillageIDFromEntity(
    endPortalVillage as SingleEntity,
  );
  OUTPUT_SetFastTravelEnabled(endPortalVillageId, true);
  OUTPUT_TeleportFastTravel(entities, endPortalVillage as SingleEntity);
  OUTPUT_SetFastTravelEnabled(endPortalVillageId, false);
};
