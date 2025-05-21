import { TEAM } from "../consts/TEAM.ts";

import { PRES_PlayToTeam } from "./PRES_PlayToTeam.ts";

/**
 * Helper to play presentation actions to friendly and enemy teams.
 * @param messageFriendly The event for friendly team.
 * @param messageEnemy The event for enemy team.
 * @param friendlyTeam The friendly team.
 */
export const PRES_TeamsHelper = (
  messageFriendly: PresentationMessage,
  messageEnemy: PresentationMessage,
  friendlyTeam: TeamName,
): void => {
  if (friendlyTeam === TEAM.red) {
    PRES_PlayToTeam(messageFriendly, TEAM.red);
    PRES_PlayToTeam(messageEnemy, TEAM.blue);
  } else if (friendlyTeam === TEAM.blue) {
    PRES_PlayToTeam(messageFriendly, TEAM.blue);
    PRES_PlayToTeam(messageEnemy, TEAM.red);
  }
};
