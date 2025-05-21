import { QUERY_GetPlayersInsideAVillage } from "../queries/QUERY_GetPlayersInsideAVillage.ts";

/**
 * Plays a presentation action to players inside a village.
 * @param eventName The event name.
 * @param villageId The village ID.
 */
export const PRES_PlayToPlayersInsideVillage = (
  eventName: PresentationEventName,
  villageId: VillageID,
): NoReturn => {
  const players = QUERY_GetPlayersInsideAVillage(villageId);
  OUTPUT_SendGlobalEventToPlayers(eventName, "PresentationAction", players);
};
