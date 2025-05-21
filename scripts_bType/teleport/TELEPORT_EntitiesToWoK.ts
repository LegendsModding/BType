import { HOSTS_FactionNames } from "../FACTION_NAMES.ts";
import { QUERY_GetVillageEntityFromFaction } from "../queries/QUERY_GetVillageEntityFromFaction.ts";

/**
 *
 * @param entities
 */
export const TELEPORT_EntitiesToWoK = (entities: EntityGroup): void => {
  const wokVillage = QUERY_GetVillageEntityFromFaction(
    HOSTS_FactionNames.knowledge,
  );
  OUTPUT_TeleportFastTravel(entities, wokVillage as SingleEntity);
};
