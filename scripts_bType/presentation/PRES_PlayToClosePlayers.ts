/**
 * Plays a presentation action to players close to a reference point.
 * @param eventName The event name.
 * @param pointOfReference The reference entity.
 * @param distance
 */
export const PRES_PlayToClosePlayers = (
  eventName: PresentationEventName,
  pointOfReference: SingleEntity,
  distance: Distance = 300,
): NoReturn => {
  const closePlayers = FILTER_ByDistance(
    QUERY_GetAllPlayers(),
    pointOfReference,
    distance,
  );
  OUTPUT_SendGlobalEventToPlayers(
    eventName,
    "PresentationAction",
    closePlayers,
  );
};
