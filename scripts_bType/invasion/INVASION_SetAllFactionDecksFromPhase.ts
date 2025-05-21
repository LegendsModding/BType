import { FACTION_ALL } from "scripts_bType/FACTION_NAMES.ts";

import { INVASION_SetFactionDeckFromPhase } from "./INVASION_SetFactionDeckFromPhase.ts";

/**
 *
 * @param phase
 */
export const INVASION_SetAllFactionDecksFromPhase = (phase: number): void => {
  for (const faction of FACTION_ALL) {
    INVASION_SetFactionDeckFromPhase(faction, phase);
  }
};
