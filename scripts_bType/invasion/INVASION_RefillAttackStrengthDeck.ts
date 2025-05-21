import { DECK_Empty } from "scripts_bType/deck/DECK_Empty.ts";
import { DECK_MakeFromLibraryFilteredWithCopies } from "scripts_bType/deck/DECK_MakeFromLibraryFilteredWithCopies.ts";
import { VARIATION_DECK_LIBRARY_NAME } from "scripts_bType/deck/DECK_NAME.ts";
import { DECK_ShuffleGroup } from "scripts_bType/deck/DECK_ShuffleGroup.ts";
import { DECK_Stack } from "scripts_bType/deck/DECK_Stack.ts";
import { RANDOM_GROUP } from "scripts_bType/number/NUMBER_RandomGroup.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { INVASION_AttackStrengthDecks } from "./INVASION_AttackStrengthDecks.ts";
import { INVASION_AttackStrengthDecksMeta } from "./INVASION_AttackStrengthDecksMeta.ts";
import { INVASION_GetPhase } from "./INVASION_GetPhase.ts";

/**
 *
 */
export const INVASION_RefillAttackStrengthDeck = (): void => {
  let combinedDeck = DECK_Empty();

  const phase = INVASION_GetPhase();
  // Phase can now be -1 before the act 2 begins
  if (phase >= 0) {
    const difficulty = QUERY_GameDifficulty();

    OUTPUT_DebugLogInvasion(
      `Refilling village attack strength deck with difficulty '${difficulty}' and phase '${phase}'`,
    );

    const cardData = INVASION_AttackStrengthDecks[phase];
    if (cardData === undefined || cardData.phase !== phase) {
      FORESIGHT.error(
        `\t Couldn't find village attack strength deck! Card data was ${cardData === undefined ? "undefined" : cardData.phase}`,
      );
    }

    for (const cardConfig of cardData.cards) {
      const attackStrengthCard = DECK_MakeFromLibraryFilteredWithCopies(
        VARIATION_DECK_LIBRARY_NAME,
        [
          INVASION_AttackStrengthDecksMeta.attackStrengthCardTag,
          `${cardConfig.strength}`,
        ],
        cardConfig.count,
      );
      combinedDeck = DECK_Stack(attackStrengthCard, combinedDeck);

      //TODO: (dplourde) Temp changes to catch crashes. Remove once the crash is resolved: ADO 762025
      FORESIGHT.warning(
        `\t Added x${cardConfig.count} strength ${cardConfig.strength} card(s)`,
      );
      OUTPUT_DebugLogInvasion(
        `\t Added x${cardConfig.count} strength ${cardConfig.strength} card(s)`,
      );
    }
  }

  DECK_ShuffleGroup(combinedDeck, RANDOM_GROUP.invasion);
  OUTPUT_SetNamedDeck(
    INVASION_AttackStrengthDecksMeta.attackStrengthDeckName,
    combinedDeck,
  );
};
