/**
 * Listens for player(s) entering a specific village.
 * Supports player count thresholds for group detection.
 * @param {string} snippet Listener identifier
 * @param {number} villageId Target village ID
 * @param {number} [threshold=1] Required player count
 * @example
 * // Trigger when 2 players enter village 5
 * LF_PlayerEnteredVillageId("village_5_trigger", 5, 2);
 *
 * LISTENFOR_PlayerEnteredVillage({
 *   snippet: "village_5_trigger",
 *   callback: (villageId, playerCount) => {
 *     SHOW_Message("Both players arrived!");
 *   }
 * });
 * @description
 * Detection logic:
 * - Counts players within village bounds
 * - Triggers when count >= threshold
 * - Re-triggers if count drops below and rises again
 *
 * Use cases:
 * - Multiplayer checkpoints
 * - Group-based content unlocking
 * - Dynamic difficulty adjustment
 */
export const LF_PlayerEnteredVillageId = (
  snippet: string,
  villageId: VillageID,
  threshold: Threshold = 1,
): NoReturn => {
  LISTENFOR_PlayerEnteredVillage({
    snippet: snippet,
    ownerVillageId: villageId,
    villageId: villageId,
    threshold: threshold,
  });
};
