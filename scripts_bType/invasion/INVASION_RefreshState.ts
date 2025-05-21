import { INVASION_GetPhase } from "./INVASION_GetPhase.ts";
import { INVASION_RefillAttackStrengthDeck } from "./INVASION_RefillAttackStrengthDeck.ts";
import { INVASION_ReplenishHordeDeck } from "./INVASION_ReplenishHordeDeck.ts";
import { INVASION_ReplenishNightOutpostDeck } from "./INVASION_ReplenishNightOutpostDeck.ts";
import { INVASION_ResetDrawCounter } from "./INVASION_ResetDrawCounter.ts";
import { INVASION_ResetPlayerActivity } from "./INVASION_ResetPlayerActivity.ts";
import { INVASION_SetAllFactionDecksFromPhase } from "./INVASION_SetAllFactionDecksFromPhase.ts";

/**
 *
 */
export const INVASION_RefreshState = (): void => {
  INVASION_ResetPlayerActivity();
  INVASION_ReplenishHordeDeck();
  INVASION_ReplenishNightOutpostDeck();
  INVASION_SetAllFactionDecksFromPhase(INVASION_GetPhase());
  INVASION_ResetDrawCounter();
  INVASION_RefillAttackStrengthDeck();
};
