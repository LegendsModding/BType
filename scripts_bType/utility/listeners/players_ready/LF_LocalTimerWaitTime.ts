import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Simplifies creating delayed events using game timer system.
 * Defaults to no specific village ownership.
 * @param {string} snippet Listener identifier
 * @param {number} waitTime Delay in seconds
 * @param {number} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village
 * @example
 * // Delayed treasure spawn
 * LF_LocalTimerWaitTime("spawn_treasure", 10);
 *
 * LISTENFOR_LocalTimer({
 *   snippet: "spawn_treasure",
 *   callback: () => {
 *     SPAWN_Item("gold_chest", GetPlayerPosition());
 *   }
 * });
 * @description
 * Timer behavior:
 * - Starts immediately when listener created
 * - Uses game's fixed timestep (not real-time)
 * - Pauses during cinematics/loading
 *
 * Typical uses:
 * - Cooldown periods
 * - Delayed effects (explosions, buffs)
 * - Sequenced events
 */
export const LF_LocalTimerWaitTime = (
  snippet: string,
  waitTime: number,
  ownerVillageId: VillageID = OWNER_VILLAGE_OPT_OUT,
): void => {
  LISTENFOR_LocalTimer({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
    waitTime: waitTime,
  });
};
