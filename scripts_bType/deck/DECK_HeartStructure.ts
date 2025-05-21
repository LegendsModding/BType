import { CARD_Buildable } from "scripts_bType/cards/CARD_Buildable.ts";
import { CARD_ForceBuildingPlacement } from "scripts_bType/cards/CARD_ForceBuildingPlacement.ts";
import { CARD_PlacementPreference } from "scripts_bType/cards/CARD_PlacementPreference.ts";
import { FORCE_BUILDING_PLACEMENT } from "scripts_bType/consts/FORCE_BUILDING_PLACEMENT.ts";
import { PLACEMENT_CLOSE_TO_VILLAGE_START } from "scripts_bType/consts/PLACEMENT.ts";

import { DECK_Empty } from "./DECK_Empty.ts";
import { DECK_MultiplyByMultipleRules } from "./DECK_MultiplyByMultipleRules.ts";
import { DECK_PutOnBottomOf } from "./DECK_PutOnBottomOf.ts";

/**
 * Creates a structured deck for central monument generation.
 * Combines buildable cards with placement rules for core structures.
 * @param {string} buildableCard Structure type identifier
 * @param {Deck[]} [placementPreferenceCards] Positioning rule decks
 * @returns {Deck} Configured monument generation deck
 * @example
 * const monumentDeck = DECK_HeartStructure("ancient_altar");
 */
export const DECK_HeartStructure = (
  buildableCard: string,
  placementPreferenceCards: Deck[] = [
    CARD_PlacementPreference(PLACEMENT_CLOSE_TO_VILLAGE_START),
    CARD_ForceBuildingPlacement(FORCE_BUILDING_PLACEMENT),
  ],
): Deck => {
  const heartStructureDeck = DECK_Empty();
  const heartStructure = CARD_Buildable(buildableCard);
  const placementPreferences = placementPreferenceCards;
  DECK_MultiplyByMultipleRules(heartStructure, placementPreferences);
  DECK_PutOnBottomOf(heartStructure, heartStructureDeck);
  return heartStructureDeck;
};
