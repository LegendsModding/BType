import { FACTION_Personality } from "scripts_bType/consts/FACTION_Personality.ts";
import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { DECK_Empty } from "scripts_bType/deck/DECK_Empty.ts";
import { DECK_PutOnBottomOf } from "scripts_bType/deck/DECK_PutOnBottomOf.ts";
import { DECK_ShuffleGroup } from "scripts_bType/deck/DECK_ShuffleGroup.ts";
import { RANDOM_GROUP } from "scripts_bType/number/NUMBER_RandomGroup.ts";
import { OUTPOST_SpawnDefensiveWithRules } from "scripts_bType/placement/OUTPOST_SpawnDefensiveWithRules.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { CARD_Horde } from "./CARD_Horde.ts";
import { DECKNAME_FactionOutpost } from "./DECKNAME_FactionOutpost.ts";
import { FACTION_GetPersonalityName } from "./FACTION_GetPersonalityName.ts";
import { INVASION_GetAliveFactions } from "./INVASION_GetAliveFactions.ts";

/**
 *
 */
export const INVASION_ReplenishNightOutpostDeck = (): NoReturn => {
  FORESIGHT.info("Generating faction deck for night outposts.");
  OUTPUT_DebugLogInvasion("Generating faction deck for night outposts.");

  const factionDeck = DECK_Empty();
  for (const faction of INVASION_GetAliveFactions()) {
    // If this is a custom game and this horde was set to a passive behavior, then they won't be added to the outpost deck.
    if (
      QUERY_GameDifficulty() === GAME_DIFFICULTY.custom &&
      FACTION_GetPersonalityName(faction) === FACTION_Personality.PASSIVE
    ) {
      FORESIGHT.info(
        `Faction ${faction} was ignored for the outpost deck having been set to passive.`,
      );
      OUTPUT_DebugLogInvasion(
        `Faction ${faction} was ignored for the outpost deck having been set to passive.`,
      );
      continue;
    }
    FORESIGHT.info(
      `Adding card for ${faction} faction to faction invasion("horde") deck.`,
    );
    OUTPUT_DebugLogInvasion(
      `Adding card for ${faction} faction to faction invasion("horde") deck.`,
    );
    DECK_PutOnBottomOf(CARD_Horde(faction), factionDeck);
  }
  DECK_ShuffleGroup(factionDeck, RANDOM_GROUP.invasion);
  OUTPUT_SetNamedDeck(DECKNAME_FactionOutpost, factionDeck);
};

SNIPPET_HordeCardPlayed(
  "hcp_draw_horde_night_outpost",
  (factionName: FactionNameId) => {
    if (!OUTPOST_SpawnDefensiveWithRules(factionName, true)) {
      FORESIGHT.warning(
        `Horde ${factionName} couldn't build a Defensive Outpost. Placement failed!`,
      );
      return false;
    } else {
      OUTPUT_DebugLogInvasion(
        `Horde ${factionName} is building a night Outpost!`,
      );
      return true;
    }
  },
);
