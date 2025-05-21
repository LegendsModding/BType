import { HOSTS_FactionNames } from "../FACTION_NAMES.ts";
import { QUERY_GetVillageEntityFromFaction } from "../queries/QUERY_GetVillageEntityFromFaction.ts";

/**
 *
 * @param entities
 */
export const TELEPORT_EntitiesToWoF = (entities: EntityGroup): void => {
  const wofVillage = QUERY_GetVillageEntityFromFaction(
    HOSTS_FactionNames.foresight,
  );
  OUTPUT_TeleportFastTravel(entities, wofVillage as SingleEntity);
};
