import { QUERY_GetVillageEntityFromID } from "../queries/QUERY_GetVillageEntityFromID.ts";

import { PRES_PlayToClosePlayers } from "./PRES_PlayToClosePlayers.ts";

/**
 *
 * @param eventName
 * @param villageId
 * @param delay
 * @param distance
 */
export const PRES_DelayedToClosePlayers = (
  eventName: PresentationEventName,
  villageId: VillageID,
  delay: TimeToDelay,
  distance: Distance = 300,
): NoReturn => {
  const villageEntity = QUERY_GetVillageEntityFromID(villageId);
  LISTENFOR_LocalTimer({
    snippet: "delayed_presentation_close",
    ownerVillageId: villageId,
    waitTime: delay,
    payloadEntities: villageEntity,
    payloadString: eventName,
    payloadInt: distance,
  });
};

SNIPPET_LocalTimer("delayed_presentation_close", (payload) => {
  PRES_PlayToClosePlayers(payload.string, payload.entities as SingleEntity);
});
