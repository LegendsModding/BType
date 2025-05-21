import { TELEPORT_EntitiesToEndPortal } from "./TELEPORT_EntitiesToEndPortal.ts";

/**
 * Teleports all living players to the campaign start portal.
 * Handles edge cases with dead/missing players.
 * @example
 * // Begin campaign sequence
 * TELEPORT_AllPlayersToEndPortal();
 * @description
 * Process flow:
 * 1. Queries alive players
 * 2. Finds portal village
 * 3. Enables temporary fast travel
 * 4. Performs teleportation
 * 5. Disables fast travel
 *
 * Safety features:
 * - Validates portal existence
 * - Handles empty player groups
 * - Maintains entity integrity
 */
export const TELEPORT_AllPlayersToEndPortal = (): NoReturn => {
  let allPlayers: EntityGroup = [];
  allPlayers = QUERY_GetAlivePlayers();
  TELEPORT_EntitiesToEndPortal(allPlayers);
};
