import { TEAM } from "../consts/TEAM.ts";
import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";

/**
 *
 * @param players
 * @param tutorialKey
 * @param grantRes
 * @param bypass
 * @param skipIfAlreadySeen
 * @param doNotMarkCompleted
 */
export const TRIGGER_TutorialForSpecificPlayers = (
  players: EntityGroup,
  tutorialKey: TutorialKey,
  grantRes: ResourceName = "",
  bypass: boolean = false,
  skipIfAlreadySeen: boolean = true,
  doNotMarkCompleted: boolean = false,
): NoReturn => {
  if (!QUERY_HasEntities(players)) {
    return;
  }
  let skip = skipIfAlreadySeen;
  if (QUERY_GetGlobalVariable("gv_do_not_skip_seen_tutorials") === 1) {
    skip = false;
  }
  OUTPUT_TriggerTutorialForSpecificPlayers(
    tutorialKey,
    bypass,
    skip,
    doNotMarkCompleted,
    players,
  );

  if (grantRes !== "") {
    if (QUERY_GetCampaignResource(grantRes) === 0) {
      OUTPUT_AddOrRemoveTeamResource(TEAM.blue as TeamName, grantRes, 1, false);
    }
  }
};
