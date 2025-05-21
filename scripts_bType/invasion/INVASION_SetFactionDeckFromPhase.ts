import { DECK_Empty } from "scripts_bType/deck/DECK_Empty.ts";
import { DECK_PutOnBottomOf } from "scripts_bType/deck/DECK_PutOnBottomOf.ts";
import { DECK_ShuffleGroup } from "scripts_bType/deck/DECK_ShuffleGroup.ts";
import { RANDOM_GROUP } from "scripts_bType/number/NUMBER_RandomGroup.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { CARD_Intention } from "./CARD_Intention.ts";
import { INVASION_GetDeckFormation } from "./INVASION_GetDeckFormation.ts";
import { INVASION_GetIntentionDeckInfo } from "./INVASION_GetIntentionDeckInfo.ts";

/**
 *
 * @param factionName
 * @param phase
 */
export const INVASION_SetFactionDeckFromPhase = (
  factionName: FactionNameId,
  phase: number,
): void => {
  const intentionInfo = INVASION_GetIntentionDeckInfo(factionName);
  const baseDeck = DECK_Empty();

  if (phase >= 0) {
    const finalFormationData = INVASION_GetDeckFormation(factionName, phase);

    for (const cardType of finalFormationData) {
      const intentions = CARD_Intention(
        factionName,
        cardType.action,
        cardType.amount,
      );
      DECK_PutOnBottomOf(intentions, baseDeck);
    }
    DECK_ShuffleGroup(baseDeck, RANDOM_GROUP.invasion);
  }
  FORESIGHT.info(`Generating deck for ${factionName}. . .`);
  OUTPUT_DebugLogInvasion("Generating deck for " + factionName + "...");
  OUTPUT_DebugLogDeck(baseDeck, false);
  if (intentionInfo) {
    OUTPUT_SetNamedDeck(intentionInfo.deckName, baseDeck);
  }
};
