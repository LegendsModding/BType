import { GV_ACT_1 } from "../CAMPAIGN_GlobalVars.ts";
import { GV_GetValue } from "../GV_GetValue.ts";

/**
 * Determines if the given act is the current active act.
 * @param act The act to check.
 * @returns True if the act is currently active, otherwise false.
 */
export const QUERY_IsCurrentAct = <T extends ActKey>(act: T): boolean => {
  switch (act) {
    case "act1":
      return GV_GetValue(GV_ACT_1.started) === 0;
    default:
      return false;
  }
};
