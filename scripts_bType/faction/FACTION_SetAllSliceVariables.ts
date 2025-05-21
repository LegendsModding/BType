import {
  CULTURE_FactionNames,
  END_FactionNames,
  PIGLIN_FactionNames,
  UNDEAD_FactionNames,
  HOSTS_FactionNames,
} from "scripts_bType/FACTION_NAMES.ts";

import { FACTION_SetSliceVariables } from "./FACTION_SetSliceVariables.ts";

/**
 * Initializes world slice variables for all faction categories.
 * Distributes factions across predefined world slices for territorial control.
 * @param {FactionNameArray} slices Ordered list of factions controlling world slices
 * @example
 * // Assign world slices to major factions
 * FACTION_SetAllSliceVariables(["culture_forest", "undead_necropolis"]);
 * @description
 * This function coordinates multiple faction categories (culture, end, piglin, undead, host)
 * by delegating to FACTION_SetSliceVariables for each group. Maintains generation order
 * and allows per-category slice management. Used during world initialization to establish
 * faction territories. The order of factions in the array determines their slice priority.
 */
export const FACTION_SetAllSliceVariables = (
  slices: FactionNameArray,
): void => {
  // We really could just pass all the factions as an array(FACTION_ALL_NO_PLAYER) into "FACTION_SetSliceVariables" but I feel like doing it this way keeps it more organized in case we want to change things.
  FACTION_SetSliceVariables(CULTURE_FactionNames.all, slices);
  FACTION_SetSliceVariables(END_FactionNames.all, slices);
  FACTION_SetSliceVariables(PIGLIN_FactionNames.hordes, slices);
  FACTION_SetSliceVariables(UNDEAD_FactionNames.all, slices);
  FACTION_SetSliceVariables(HOSTS_FactionNames.all, slices);
};
