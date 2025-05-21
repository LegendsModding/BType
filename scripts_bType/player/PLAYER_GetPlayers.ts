/**
 * Retrieves all alive players.
 * @returns An array of alive player entity IDs.
 */
export const PLAYER_GetPlayers = (): EntityGroup => {
  return QUERY_GetAlivePlayers();
};
