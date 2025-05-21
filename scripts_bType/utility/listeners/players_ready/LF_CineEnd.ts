import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Simplifies listening for cinematic completion events.
 * Automatically sets owner village to opt-out by default.
 * @param {string} snippet Listener identifier
 * @param {string} cinematicName Exact cinematic identifier
 * @param {number} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village ID
 * @example
 * // Trigger post-cinematic dialogue
 * LF_CineEnd("cine_end_main", "opening_scene");
 *
 * LISTENFOR_CinematicFinished({
 *   snippet: "cine_end_main",
 *   cinematicName: "opening_scene",
 *   ownerVillageId: OWNER_VILLAGE_OPT_OUT,
 *   callback: () => {
 *     SHOW_Dialogue("Welcome to the world!");
 *   }
 * });
 * @description
 * Handles:
 * - Cutscene endings
 * - Tutorial sequence completion
 * - Story milestone tracking
 *
 * Best practices:
 * 1. Use unique snippet names per cinematic
 * 2. Pair with LF_LocalTimerWaitTime() for post-cinematic delays
 * 3. Validate cinematicName exists in content pack
 */
export const LF_CineEnd = (
  snippet: string,
  cinematicName: string,
  ownerVillageId: VillageID = OWNER_VILLAGE_OPT_OUT,
): void => {
  LISTENFOR_CinematicFinished({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
    cinematicName: cinematicName,
  });
};
