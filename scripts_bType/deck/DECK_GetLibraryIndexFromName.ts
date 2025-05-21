import { libraryIndices } from "./DeckConsts.ts";

/**
 * Retrieves the numerical index of a registered card library.
 * Throws an error if the library has not been registered.
 * @param {string} library Library identifier
 * @returns {number} Numerical library index
 * @example
 * const forestIndex = DECK_GetLibraryIndexFromName("forest_library");
 */
export const DECK_GetLibraryIndexFromName = (library: string): number => {
  return libraryIndices[library];
};
