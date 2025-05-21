import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { TUTORIAL_InterruptMessage } from "./TUTORIAL_InterruptMessage.ts";
import { TUTORIAL_NudgeTracker } from "./TUTORIAL_NudgeTracker.ts";
import { TUTORIAL_ShowMessage } from "./TUTORIAL_ShowMessage.ts";

/**
 *
 * @param message
 * @param delay
 */
export const TUTORIAL_ShowMessageSafe = (
  message: TutorialMessage,
  delay = 2,
): NoReturn => {
  if (message === "") {
    return;
  }
  //We need to make sure the message doesn't interrupt itself (can happen when saving and loading)
  FORESIGHT.info(
    "@@@ QUERY_GetGlobalVariable(act1FlowVal.misc.activeOnboardingNudge) @@@ " +
      QUERY_GetGlobalVariable(ACT1_FlowVal.misc.activeOnboardingNudge) +
      " @@@ " +
      TUTORIAL_NudgeTracker[message],
  );
  if (
    QUERY_GetGlobalVariable(ACT1_FlowVal.misc.activeOnboardingNudge) !==
    TUTORIAL_NudgeTracker[message]
  ) {
    OUTPUT_SetGlobalVariable(
      ACT1_FlowVal.misc.activeOnboardingNudge,
      TUTORIAL_NudgeTracker[message],
    );
    TUTORIAL_InterruptMessage(true);

    if (delay > 0) {
      LISTENFOR_LocalTimer({
        snippet: "lt_show_onboarding_message",
        ownerVillageId: OWNER_VILLAGE_OPT_OUT,
        waitTime: delay,
        payloadString: message,
      });
    } else {
      TUTORIAL_ShowMessage(message, true);
    }
  }
};
