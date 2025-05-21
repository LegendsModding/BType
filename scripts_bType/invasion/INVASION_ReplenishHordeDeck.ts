import { FACTION_Personality } from "scripts_bType/consts/FACTION_Personality.ts";
import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { DECK_Empty } from "scripts_bType/deck/DECK_Empty.ts";
import { DECK_PutOnBottomOf } from "scripts_bType/deck/DECK_PutOnBottomOf.ts";
import { DECK_ShuffleGroup } from "scripts_bType/deck/DECK_ShuffleGroup.ts";
import { RANDOM_GROUP } from "scripts_bType/number/NUMBER_RandomGroup.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { CARD_Horde } from "./CARD_Horde.ts";
import { FACTION_Establishment } from "./FACTION_Establishment.ts";
import { FACTION_GetPersonalityName } from "./FACTION_GetPersonalityName.ts";
import { INVASION_GetAliveFactions } from "./INVASION_GetAliveFactions.ts";
import { INVASION_GetUnreservedFactionVillages } from "./INVASION_GetUnreservedFactionVillages.ts";
import { INVASION_HordeDeckName } from "./INVASION_HordeDeckName.ts";

/**
 *
 */
export const INVASION_ReplenishHordeDeck = (): void => {
  OUTPUT_DebugLogInvasion("Generating faction deck for invasion.");
  FORESIGHT.info("Generating faction deck for invasion.");

  const factionDeck = DECK_Empty();
  for (const faction of INVASION_GetAliveFactions()) {
    if (!FACTION_Establishment.IsEstablished(faction)) {
      continue;
    }

    const availableBases = QUERY_GetEntitiesCount(
      INVASION_GetUnreservedFactionVillages(faction),
    );

    if (availableBases === 0) {
      OUTPUT_DebugLogInvasion(
        `No more available bases for ${faction} faction.`,
      );
      FORESIGHT.info(`No more available bases for ${faction} faction.`);
      continue;
    }

    // If this is a custom game and this faction was set to a passive behavior, then they won't be added to the faction deck.
    if (
      QUERY_GameDifficulty() === GAME_DIFFICULTY.custom &&
      FACTION_GetPersonalityName(faction) === FACTION_Personality.PASSIVE
    ) {
      OUTPUT_DebugLogInvasion(
        `Faction ${faction} was ignored for the invasion deck having been set to passive.`,
      );
      FORESIGHT.info(
        `Faction ${faction} was ignored for the invasion deck having been set to passive.`,
      );
      continue;
    }

    OUTPUT_DebugLogInvasion(
      `Adding card for ${faction} faction to faction deck.`,
    );
    DECK_PutOnBottomOf(CARD_Horde(faction), factionDeck);
  }
  DECK_ShuffleGroup(factionDeck, RANDOM_GROUP.invasion);
  OUTPUT_SetNamedDeck(INVASION_HordeDeckName, factionDeck);
};
