import { CARD_Buildable } from "scripts_bType/cards/CARD_Buildable.ts";
import { CARD_District } from "scripts_bType/cards/CARD_District.ts";
import { CARD_Zones } from "scripts_bType/cards/CARD_Zones.ts";
import { PLACE_EAST_RECTANGLE } from "scripts_bType/cards/PLACE_EAST_RECTANGLE.ts";
import { PLACE_NORTH_RECTANGLE } from "scripts_bType/cards/PLACE_NORTH_RECTANGLE.ts";
import { PLACE_SOUTH_RECTANGLE } from "scripts_bType/cards/PLACE_SOUTH_RECTANGLE.ts";
import { PLACE_WEST_RECTANGLE } from "scripts_bType/cards/PLACE_WEST_RECTANGLE.ts";

/**
 * Default district configurations for world generation systems.
 * @readonly
 * @remarks
 * Contains cardinal direction-based district definitions with associated locators and placement rules.
 * Uses CARD_District and CARD_Buildable for structure generation. Direction parameters determine spatial orientation.
 */
export const DISTRICTS_DEFAULT = [
  {
    // North district: note the unique "locator" buildable card type is used.
    district: CARD_District("district_north"),
    zones: CARD_Zones("addZone", 1),
    locator: CARD_Buildable("locator_north", 1),
    direction: PLACE_NORTH_RECTANGLE,
  },
  {
    // East district
    district: CARD_District("district_east"),
    zones: CARD_Zones("addZone", 1),
    locator: CARD_Buildable("locator_east", 1),
    direction: PLACE_EAST_RECTANGLE,
  },
  {
    // South district
    district: CARD_District("district_south"),
    zones: CARD_Zones("addZone", 1),
    locator: CARD_Buildable("locator_south", 1),
    direction: PLACE_SOUTH_RECTANGLE,
  },
  {
    // West district
    district: CARD_District("district_west"),
    zones: CARD_Zones("addZone", 1),
    locator: CARD_Buildable("locator_west", 1),
    direction: PLACE_WEST_RECTANGLE,
  },
];
