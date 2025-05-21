import { ACT1_FlowVal } from "../act1/ACT1_FlowVal.ts";

import { TUTORIAL_MessagePriority } from "./TUTORIAL_MessagePriority.ts";
import { TUTORIAL_ShowMessageSafe } from "./TUTORIAL_ShowMessageSafe.ts";

/**
 * Updates tutorial guidance messaging during the first skirmish sequence based on player progress and context.
 * @param playerEntity Optional player entity reference for targeted messaging.
 * @param abandoned Flag indicating if the player abandoned the skirmish.
 * @returns {string} Identifier for the triggered message.
 * @remarks Message selection depends on the global nudge tracker state. Interrupts existing messages before displaying new guidance. Maintains message priority hierarchy.
 */
export const TUTORIAL_UpdateFirstSkirmishNudge = (
  playerEntity?: SingleEntity,
  abandoned: boolean = false,
): string => {
  const tracker = QUERY_GetGlobalVariable(
    ACT1_FlowVal.firstSkirmish.global.nudgeTracker,
  );
  const message =
    tracker === 0
      ? ACT1_FlowVal.firstSkirmish.message.onboardingNudge
      : ACT1_FlowVal.firstSkirmish.message.repairFountainNudge;
  if (playerEntity === undefined) {
    TUTORIAL_ShowMessageSafe(message);
  } else if (abandoned) {
    OUTPUT_AnnounceInterruptPlayer(TUTORIAL_MessagePriority, playerEntity);
    OUTPUT_AnnouncePlayer(
      ACT1_FlowVal.firstSkirmish.message.abandonedNudge,
      [],
      playerEntity,
    );
  } else {
    OUTPUT_AnnounceInterruptPlayer(TUTORIAL_MessagePriority, playerEntity);
    OUTPUT_AnnouncePlayer(message, [], playerEntity);
  }
  return message;
};
