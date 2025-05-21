import { FACTION_GetType } from "scripts_bType/invasion/FACTION_GetType.ts";

import { MAP_ArrivalKeys } from "./MAP_ArrivalKeys.ts";
import { MAP_ArrivalState } from "./MAP_ArrivalState.ts";

/**
 * @name FACTION_SetMapRevealedState
 * @description Sets the revealed state of a faction's map marker based on its category.
 * @notes This function performs the following operations:
 *        1. Determines the faction category by invoking `FACTION_GetType` with the provided faction name.
 *        2. Retrieves the appropriate mapping of arrival keys from `MAP_ArrivalKeys` using the faction's category.
 *        3. Selects the proper map state (true or false) based on the `revealed` boolean.
 *        4. Calls `OUTPUT_ServerMapSetKeyValue` to update the map key's value on the server.
 *        The generic type parameter T ensures that the faction name is correctly associated with its category.
 * @template T - A key of FactionCategoryToFactionNames (e.g., "culture", "end", "piglin", "host", or "undead").
 * @param {FactionCategoryToFactionNames[T]} factionName The faction identifier that must belong to the category specified by T.
 * @param {boolean} revealed A boolean flag indicating whether the faction's arrival state should be set to revealed (true) or hidden (false).
 * @returns {NoReturn} This function does not return any value.
 * @example // To reveal the drylands culture faction:
 * FACTION_SetMapRevealedState("faction.culture.drylands", true);
 * @see MAP_ArrivalKeys - Provides the mapping between faction names and their map key identifiers.
 * @see FACTION_GetType - Determines the category(type - e.g. piglin, culture, end) for a given faction name.
 * @see OUTPUT_ServerMapSetKeyValue - API function that updates the key-value pair on the server's map.
 */
export function FACTION_SetMapRevealedState<
  T extends keyof FactionCategoryToFactionNames,
>(factionName: FactionCategoryToFactionNames[T], revealed: boolean): NoReturn {
  // Retrieve the faction category using the provided faction name.
  // The helper function FACTION_GetType identifies the category (e.g., "culture", "end") to which the faction belongs.
  // We cast the result to T to ensure that the category matches the generic constraint.
  const factionType = FACTION_GetType(factionName) as T;

  // Access the corresponding mapping of faction arrival keys for the determined category.
  // MAP_ArrivalKeys is a grouped record that holds key mappings for each faction category.
  const factionTypeArrivalKeys = MAP_ArrivalKeys[factionType];

  // Declare a variable to hold the string representing the map's revealed state.
  let state = "";

  // Set the state based on the boolean parameter "revealed":
  // If true, assign the constant representing the "true" state from MAP_ArrivalState.
  // Otherwise, assign the constant representing the "false" state.
  if (revealed) {
    state = MAP_ArrivalState.TRUE;
  } else {
    state = MAP_ArrivalState.FALSE;
  }

  // Retrieve the specific map key for the faction by indexing into the category's arrival keys using the faction name.
  // Then, update the server map's key-value pair by calling OUTPUT_ServerMapSetKeyValue.
  // This effectively changes the faction's map marker state to either revealed or hidden.
  OUTPUT_ServerMapSetKeyValue(factionTypeArrivalKeys[factionName], state);
}
