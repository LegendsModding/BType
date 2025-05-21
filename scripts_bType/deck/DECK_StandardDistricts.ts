import { CARD_PlacementPreference } from "scripts_bType/cards/CARD_PlacementPreference.ts";
import { DISTRICTS_DEFAULT } from "scripts_bType/consts/DISTRICTS_DEFAULT.ts";
import { PLACEMENT_CLOSE_TO_VILLAGE_START } from "scripts_bType/consts/PLACEMENT.ts";

import { DECK_Empty } from "./DECK_Empty.ts";
import { DECK_MultiplyByMultipleRules } from "./DECK_MultiplyByMultipleRules.ts";
import { DECK_PutOnBottomOf } from "./DECK_PutOnBottomOf.ts";

/**
 * @name DECK_StandardDistricts
 * @description Processes standard district configurations by applying placement rules,
 * multiplying associated zones and satellite buildable cards, and then appending all cards
 * to the given deck. For each district configuration, the function:
 *  - Multiplies the district card with placement preference rules (ensuring that the close-to-village
 *    rule is applied first and the directional rule second).
 *  - Creates and multiplies a zones card with the district and the close-to-village placement preference.
 *  - Creates and multiplies a satellite buildable card (e.g., for a pylon) with the same set of rules.
 *  - Places the district, zones, and satellite cards at the bottom of the provided deck.
 * @param {Deck} districtDeck The deck to which the processed district-related cards will be appended.
 * Defaults to an empty deck via DECK_Empty().
 * @param {Array<Object>} districtConfig An array of configuration objects. Each configuration object must include:
 * - district: The district card (e.g., created by CARD_District).
 * - zones: The zones card (e.g., created by CARD_Zones).
 * - placementRule(s): An array of placement rule identifiers. One rule should be the close-to-village rule,
 * and the other a directional placement (e.g., "placeInDirectionNorthWithRectangleBrush").
 * @returns {Deck} The updated deck containing all processed district, zones, and satellite cards.
 * @example // Given a configuration array like DISTRICTS_DEFAULT, you can process and add them to a deck:
 * const myBaseDeck = your deck
 * const myDistrictDeck = DECK_StandardDistricts();
 * DECK_PutOnBottomOf(myDistrictDeck, myBaseDeck)
 */
export const DECK_StandardDistricts = (
  districtDeck: Deck = DECK_Empty(),
  districtConfig = DISTRICTS_DEFAULT,
): Deck => {
  districtConfig.forEach(({ district, zones, locator, direction }) => {
    // Multiply the zone deck by:
    // - the district card and
    // - the placement preference to be close to the village start.
    DECK_MultiplyByMultipleRules(zones, [
      district,
      CARD_PlacementPreference(PLACEMENT_CLOSE_TO_VILLAGE_START),
    ]);

    // Multiply the locator deck (unique buildable) similarly.
    DECK_MultiplyByMultipleRules(locator, [
      district,
      CARD_PlacementPreference(PLACEMENT_CLOSE_TO_VILLAGE_START),
    ]);

    // Multiply the district deck by:
    // - the placement preference to be close to the village start and
    // - the directional rectangle placement.
    DECK_MultiplyByMultipleRules(district, [
      CARD_PlacementPreference(PLACEMENT_CLOSE_TO_VILLAGE_START),
      CARD_PlacementPreference(direction),
    ]);

    // Place each deck on the bottom of the base deck.
    DECK_PutOnBottomOf(district, districtDeck);
    DECK_PutOnBottomOf(zones, districtDeck);
    DECK_PutOnBottomOf(locator, districtDeck);
  });

  return districtDeck;
};
