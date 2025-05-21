import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Simplifies listening for player fast travel events.
 * Defaults to global monitoring.
 * @param {string} snippet Listener identifier
 * @param {number} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village
 * @example
 * // Track teleportation usage
 * LF_PlayerFastTraveled("teleport_used");
 *
 * LISTENFOR_PlayerFastTravelled({
 *   snippet: "teleport_used",
 *   callback: (playerId, destination) => {
 *     LOG_Write(`Player ${playerId} teleported to ${destination}`);
 *   }
 * });
 * @description
 * Detects:
 * - Waypoint usage
 * - Command-based teleports (/tp)
 * - Scripted movement (CUTSCENE_MovePlayer())
 *
 * Callback data:
 * - Player entity ID
 * - Target coordinates
 * - Previous location
 */
export const LF_PlayerFastTraveled = (
  snippet: string,
  ownerVillageId = OWNER_VILLAGE_OPT_OUT,
): void => {
  LISTENFOR_PlayerFastTravelled({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
  });
};
