import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";
import { QUERY_IsCurrentAct } from "../queries/QUERY_IsCurrentAct.ts";

/**
 * Determines appropriate outpost-related tutorial messaging based on player progression state.
 * @returns {TutorialMessage} Identifier for the contextually relevant message.
 * @remarks Evaluates outpost construction status and DBB proximity flags to select guidance. Requires proper ACT1_FlowVal.destroyDBB configurations for accurate state checks.
 */
export const TUTORIAL_GetOutpostOnboardingMessage = (): TutorialMessage => {
  // TODO: Proper acts
  if (!QUERY_IsCurrentAct("act1")) {
    return "";
  }
  if (
    QUERY_GetGlobalVariable(ACT1_FlowVal.outpost.global.outpostNudgeIsActive) >
    0
  ) {
    //Triggered outpost nudge, haven't built an Outpost, haven't approached DBB
    return ACT1_FlowVal.outpost.message.onboardingNudge;
  } else if (
    QUERY_GetGlobalVariable(ACT1_FlowVal.outpost.global.hasBuiltAnOutpost) ===
      0 &&
    QUERY_GetGlobalVariable(ACT1_FlowVal.destroyDBB.global.hasApproachedDbb) ===
      0
  ) {
    //Still on the way to the DBB
    return ACT1_FlowVal.destroyDBB.message.onboardingNudge;
  } else if (
    QUERY_GetGlobalVariable(ACT1_FlowVal.outpost.global.hasBuiltAnOutpost) >
      0 &&
    QUERY_GetGlobalVariable(ACT1_FlowVal.destroyDBB.global.hasApproachedDbb) ===
      0
  ) {
    //Got the Outpost nudge. Built Outpost. Haven't approached DBB yet
    return ACT1_FlowVal.destroyDBB.message
      .onboardingNudgeAfterOutpostNoApproach;
  } else if (
    QUERY_GetGlobalVariable(ACT1_FlowVal.outpost.global.hasBuiltAnOutpost) ===
      0 &&
    QUERY_GetGlobalVariable(ACT1_FlowVal.destroyDBB.global.hasApproachedDbb) > 0
  ) {
    //No outpost DBB nudge
    return ACT1_FlowVal.destroyDBB.message.onboardingNudgeApproachNoOutpost;
  } else {
    //Approached DBB and built outpost
    return ACT1_FlowVal.destroyDBB.message
      .onboardingNudgeApproachedBuiltOutpost;
  }
};
