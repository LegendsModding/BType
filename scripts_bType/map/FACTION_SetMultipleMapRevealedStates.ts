import { FACTION_SetMapRevealedState } from "./FACTION_SetMapRevealedState.ts";

/**
 * @name FACTION_SetMultipleMapRevealedStates
 * @description Iterates over an array of faction identifiers and sets each faction's map marker state (revealed or hidden) accordingly.
 * @notes This function performs the following operations:
 *        1. Iterates through an array of faction names (of any category).
 *        2. For each faction, it calls `FACTION_SetMapRevealedState`, which:
 *           - Determines the faction's category via `FACTION_GetType`.
 *           - Retrieves the appropriate map key from `MAP_ArrivalKeys`.
 *           - Sets the map key to a state of revealed or hidden based on the `revealed` boolean.
 *        The function uses a type cast to `any` when calling `FACTION_SetMapRevealedState` because the input is a union of faction types.
 * @param {AnyFaction[]} factions An array of faction identifiers, which may belong to any faction category.
 * @param {boolean} revealed A boolean flag indicating whether the factions' arrival state should be set to revealed (true) or hidden (false).
 * @returns {NoReturn} This function does not return any value.
 * @example
 * // To reveal multiple factions on the map:
 * FACTION_SetMultipleMapRevealedStates(
 *   [
 *     "faction.culture.drylands",
 *     "faction.end.ruined_portal",
 *     "faction.piglin.horderunners"
 *   ],
 *   true
 * );
 * @see FACTION_SetMapRevealedState - The single-faction function used to update an individual faction's map state.
 */
export function FACTION_SetMultipleMapRevealedStates(
  factions: FactionNameIdNoPlayer[],
  revealed: boolean,
): NoReturn {
  // Iterate over each faction in the provided array.
  for (const faction of factions) {
    // For each faction, call the single-faction function to update its map marker state.
    // Since factions is a union of different faction types, we cast 'faction' to 'any' to let
    // the generic inference inside FACTION_SetMapRevealedState work as expected.
    FACTION_SetMapRevealedState(faction, revealed);
  }
}
