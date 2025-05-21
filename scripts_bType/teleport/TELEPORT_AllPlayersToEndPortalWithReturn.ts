import { TELEPORT_EntitiesToEndPortal } from "./TELEPORT_EntitiesToEndPortal.ts";

// Helper to teleport all players to the ruined end portal at the beginning of the campaign, with the addition of returning the EG containing the players.

/**
 * Teleports all active players to the end portal location.
 * @returns {EntityGroup} Collection of successfully teleported player entities.
 * @remarks Convenience function combining player retrieval and teleportation operations. Maintains entity references post-operation.
 */
export const TELEPORT_AllPlayersToEndPortalWithReturn = (): EntityGroup => {
  let allPlayers: EntityGroup = [];
  allPlayers = QUERY_GetAlivePlayers();
  TELEPORT_EntitiesToEndPortal(allPlayers);
  return allPlayers;
};
