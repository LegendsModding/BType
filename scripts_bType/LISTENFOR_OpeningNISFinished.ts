import { CAMPAIGN_ActsVal } from "./CAMPAIGN_ActsVal.ts";
import { OWNER_VILLAGE_OPT_OUT } from "./consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 *
 */
export const LISTENFOR_OpeningNISFinished = (): void => {
  // No skip currently, don't need conditional
  //if (!QUERY_HasSkippedAct1()) {
  //Wait for opening cinematic to finish, before playing Opening transition NIS
  LISTENFOR_CinematicFinished({
    snippet: "cf_opening",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    cinematicName: CAMPAIGN_ActsVal.cinematics.act1.opening,
  });
  //}
  // Skip is disabled for now
  //else {
  //  LISTENFOR_CinematicFinished({
  //    snippet: "cf_opening_act1_skip",
  //    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
  //    cinematicName: CAMPAIGN_ACTS_VAL.cinematics.c03Opening,
  //  });
  //}
};
