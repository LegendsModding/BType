import { TEAM } from "../consts/TEAM.ts";

/**
 *
 */
export const TUTORIAL_GivePlayerResourcesToBuildUpgrade = (): NoReturn => {
  const amountOfPrismarine = QUERY_GetCampaignResource("xp_common");
  const amountOfStone = QUERY_GetCampaignResource("stone");
  if (amountOfPrismarine < 100) {
    OUTPUT_AddOrRemoveTeamResource(
      TEAM.blue as TeamName,
      "xp_common",
      100 - amountOfPrismarine,
      false,
    );
  }
  if (amountOfStone < 100) {
    OUTPUT_AddOrRemoveTeamResource(
      TEAM.blue as TeamName,
      "stone",
      100 - amountOfStone,
      false,
    );
  }
};
