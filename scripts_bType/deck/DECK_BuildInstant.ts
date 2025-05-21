import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { INSTANT_BUILD_DECK_NAME } from "./DECK_NAME.ts";

/**
 * Prepares an instant build deck for village generation.
 * @param {VillageID} villageId Target village
 * @param {Deck} deck Generation rules
 * @example
 * DECK_BuildInstant(5, mountainDeck);
 * @description
 * Process flow:
 * 1. Logging and validation
 * 2. Deck naming convention
 * 3. System assignment
 * 4. Immediate generation
 */
export const DECK_BuildInstant = (villageId: VillageID, deck: Deck): void => {
  FORESIGHT.info(
    `Instant building deck "${INSTANT_BUILD_DECK_NAME}+${villageId}". . .`,
  );

  // TODO: Verbose/debug based on custom settings.
  //FORESIGHT.verbose(`${deck}`);
  OUTPUT_DebugLogDeck(deck, true);

  OUTPUT_SetNamedDeck(INSTANT_BUILD_DECK_NAME + villageId, deck);
};
