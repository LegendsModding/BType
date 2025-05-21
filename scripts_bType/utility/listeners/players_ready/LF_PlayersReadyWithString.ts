import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Listens for player readiness with string payload.
 * Useful for distinguishing different ready states.
 * @param {string} snippet Listener identifier
 * @param {string} [payloadString="[DEBUG] LF_PlayersReady"] Event data
 * @param {number} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village
 * @example
 * // Differentiate ready states
 * LF_PlayersReadyWithString("class_select", "warrior");
 *
 * LISTENFOR_PlayersReady({
 *   snippet: "class_select",
 *   callback: (payload) => {
 *     if(payload === "warrior") INIT_Class("melee");
 *   }
 * });
 * @description
 * Payload usage:
 * - Game mode selection
 * - Character class choices
 * - Difficulty settings
 *
 * Combine with UI selections to pass context.
 */
export const LF_PlayersReadyWithString = (
  snippet: string,
  payloadString: string = "[DEBUG] LF_PlayersReady",
  ownerVillageId: number = OWNER_VILLAGE_OPT_OUT,
): void => {
  LISTENFOR_PlayersReady({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
    payloadString: payloadString,
  });
};
