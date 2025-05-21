import { HOSTS_FactionNames } from "../FACTION_NAMES.ts";
import { QUERY_GetVillageEntityFromFaction } from "../queries/QUERY_GetVillageEntityFromFaction.ts";

/**
 *
 * @param entities
 */
export const TELEPORT_EntitiesToWoA = (entities: EntityGroup): void => {
  const woaVillage = QUERY_GetVillageEntityFromFaction(
    HOSTS_FactionNames.action,
  );
  OUTPUT_TeleportFastTravel(entities, woaVillage as SingleEntity);
};
