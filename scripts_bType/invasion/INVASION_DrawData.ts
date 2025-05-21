import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";

import { INVASION_DrawInfoByPhase } from "./INVASION_DrawInfoByPhase.ts";
import { INVASION_FactionDrawDecks } from "./INVASION_FactionDrawDecks.ts";

/*
-------------------------------------
----------NORMAL DIFFICULTY----------
-------------------------------------
*/

/**
 * Comprehensive invasion configuration registry for difficulty scaling.
 * @readonly
 * @remarks
 * Contains drawInfoByPhase progression parameters and hordeDrawDeck configurations.
 * Registers with easy difficulty using DIFFICULTY_RegisterConfig.
 * Note: hordeDrawDeck naming convention requires verification against backend systems.
 */
export const INVASION_DrawData = {
  /*
    >>>>> DRAW DATA BY PHASE <<<<<
    */
  drawInfoByPhase: INVASION_DrawInfoByPhase,
  /*
    >>>>> DRAW DECKS PER FACTION <<<<<
     TODO: See if we can change "hordeDrawDeck" to "factionDrawDeck" or if backend relies on "horde" name for this
    */
  hordeDrawDeck: INVASION_FactionDrawDecks,
};

DIFFICULTY_RegisterConfig(
  "invasion_draw_config",
  INVASION_DrawData,
  GAME_DIFFICULTY.easy,
);
