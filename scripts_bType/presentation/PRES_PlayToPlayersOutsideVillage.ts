import { QUERY_GetPlayersOutsideAVillage } from "../queries/QUERY_GetPlayersOutsideAVillage.ts";

/**
 * Plays a presentation action to players outside a village.
 * @param eventName The event name.
 * @param villageId The village ID.
 */
export const PRES_PlayToPlayersOutsideVillage = (
  eventName: PresentationEventName,
  villageId: VillageID,
): NoReturn => {
  const players = QUERY_GetPlayersOutsideAVillage(villageId);
  OUTPUT_SendGlobalEventToPlayers(eventName, "PresentationAction", players);
};
