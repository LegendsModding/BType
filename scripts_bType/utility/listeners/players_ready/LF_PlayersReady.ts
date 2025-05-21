import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Listens for player readiness state.
 * Typically used for multiplayer synchronization.
 * @param {string} snippet Listener identifier
 * @param {number} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village
 * @example
 * // Start game when all ready
 * LF_PlayersReady("all_ready");
 *
 * LISTENFOR_PlayersReady({
 *   snippet: "all_ready",
 *   callback: () => {
 *     START_Game();
 *   }
 * });
 * @description
 * Triggers when:
 * - All human players press "Ready"
 * - Scripted ready state set (for AI)
 * - Matchmaking completion
 *
 * Use for:
 * - Match start coordination
 * - Post-tutorial progression
 * - Difficulty selection confirmation
 */
export const LF_PlayersReady = (
  snippet: string,
  ownerVillageId: number = OWNER_VILLAGE_OPT_OUT,
): void => {
  LISTENFOR_PlayersReady({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
  });
};
