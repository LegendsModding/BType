import { CARD_LayerOfZones } from "scripts_bType/cards/CARD_LayerOfZones.ts";
import { CARD_Zones } from "scripts_bType/cards/CARD_Zones.ts";
import { CARD_ZoneTag } from "scripts_bType/cards/CARD_ZoneTag.ts";

import { DECK_Empty } from "./DECK_Empty.ts";
import { DECK_PutMultipleOnBottomOf } from "./DECK_PutMultipleOnBottomOf.ts";

/**
 * Creates a composite deck for central zone generation.
 * Combines zone creation, layering, and tagging into a unified configuration deck.
 * @param {number} numZones Number of base zones to create (default: 1)
 * @param {number} numLayers Number of vertical layers (default: 1)
 * @param {string} zoneTagCard Semantic tag identifier for zone classification (default: "center_zone")
 * @returns {Deck} Composite deck containing zone configuration cards
 * @example
 * const coreDeck = DECK_CenterZone(2, 3, "ancient_ruins");
 */
export const DECK_CenterZone = (
  numZones: number = 1,
  numLayers: number = 1,
  zoneTagCard: string = "center_zone",
): Deck => {
  const centerZoneDeck = DECK_Empty();
  const centerZone = CARD_Zones("addZone", numZones);
  const centerLayer = CARD_LayerOfZones("addLayerOfZones", numLayers);
  const centerTags = CARD_ZoneTag(zoneTagCard);
  DECK_PutMultipleOnBottomOf(centerZoneDeck, [
    centerZone,
    centerLayer,
    centerTags,
  ]);
  return centerZoneDeck;
};
