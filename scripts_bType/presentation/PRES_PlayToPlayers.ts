/**
 * Plays a presentation action to specified players.
 * @param eventName The event name.
 * @param players The target players.
 */
export const PRES_PlayToPlayers = (
  eventName: PresentationEventName,
  players: EntityGroup,
): NoReturn => {
  OUTPUT_SendGlobalEventToPlayers(eventName, "PresentationAction", players);
};
