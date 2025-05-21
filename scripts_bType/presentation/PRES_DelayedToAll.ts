import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";

import { PRES_PlayToAll } from "./PRES_PlayToAll.ts";

/**
 *
 * @param eventName
 * @param delay
 */
export const PRES_DelayedToAll = (
  eventName: PresentationEventName,
  delay: TimeToDelay,
): NoReturn => {
  LISTENFOR_LocalTimer({
    snippet: "delayed_presentation",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    waitTime: delay,
    payloadString: eventName,
  });
};

SNIPPET_LocalTimer("delayed_presentation", (payload) => {
  PRES_PlayToAll(payload.string);
});
