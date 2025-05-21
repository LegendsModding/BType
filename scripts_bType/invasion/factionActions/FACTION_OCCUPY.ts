import { FACTION_OCCUPY_Area } from "./occupy/FACTION_OCCUPY_Area.ts";
import { FACTION_OCCUPY_Outpost } from "./occupy/FACTION_OCCUPY_Outpost.ts";
import { FACTION_OCCUPY_Poi } from "./occupy/FACTION_OCCUPY_Poi.ts";
import { FACTION_OCCUPY_Village } from "./occupy/FACTION_OCCUPY_Village.ts";

/**
 * Occupation action categories for territory management.
 * @readonly
 * @remarks
 * Includes area/outpost/poi/village occupation types. Used for maintaining
 * control states and validating occupation requests across different structure types.
 */
export const FACTION_OCCUPY = {
  area: FACTION_OCCUPY_Area,
  outpost: FACTION_OCCUPY_Outpost,
  poi: FACTION_OCCUPY_Poi,
  village: FACTION_OCCUPY_Village,
};
