import { OWNER_VILLAGE_OPT_OUT } from "./consts/OWNER_VILLAGE_OPT_OUT.ts";

// For compass icon etc.

/**
 *
 * @param villageId
 * @param finalStepId
 */
export const LISTENFOR_PEV_ModulatedVillage = (
  villageId: VillageID,
  finalStepId: string,
): void => {
  LISTENFOR_PlayerEnteredVillage({
    snippet: "pev_entered_modulated_village",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    villageId: villageId,
    payloadString: finalStepId,
  });
};
