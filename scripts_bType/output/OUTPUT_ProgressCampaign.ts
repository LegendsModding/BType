import { INVASION_CheckAndProgressPhase } from "scripts_bType/invasion/INVASION_CheckAndProgressPhase.ts";

/**
 *
 * @param triggerTime
 */
export const OUTPUT_ProgressCampaign = (triggerTime: TriggerTimeFull): void => {
  //INVASION_CheckAndProgressCultureEntry(triggerTime);
  //INVASION_CheckAndProgressEndEntry(triggerTime);
  //ENTRY_CheckAndProgressPiglin(triggerTime);
  //INVASION_CheckAndProgressHostEntry(triggerTime);
  //ENTRY_CheckAndProgressUndead(triggerTime);

  INVASION_CheckAndProgressPhase(triggerTime);
};
