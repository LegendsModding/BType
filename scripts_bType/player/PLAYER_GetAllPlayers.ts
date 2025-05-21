/**
 * Retrieves all players (including dead ones).
 * @returns An array of all player entity IDs.
 */
export const PLAYER_GetAllPlayers = (): EntityGroup => {
  return QUERY_GetAllPlayers();
};
