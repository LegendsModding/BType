/**
 *
 * @param eventName
 * @param team
 */
export const PRES_PlayToTeam = (
  eventName: PresentationEventName,
  team: TeamName,
): NoReturn => {
  OUTPUT_SendGlobalEventToTeam(eventName, "PresentationAction", team);
};
