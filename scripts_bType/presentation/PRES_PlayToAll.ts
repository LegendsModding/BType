/**
 * Triggers a presentation action for all players.
 * Coordinates synchronized narrative events across clients.
 * @param {PresentationEventName} eventName Event identifier
 * @example
 * // Play opening cinematic
 * PRES_PlayToAll("CINEMATIC_OPENING_SCENE");
 */
export const PRES_PlayToAll = (eventName: PresentationEventName): NoReturn => {
  OUTPUT_SendGlobalEventToAll(eventName, "PresentationAction");
};
