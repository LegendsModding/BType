import { QUERY_GetRestParameter } from "scripts_bType/queries/QUERY_GetRestParameter.ts";

import { QUERY_GetPermutation } from "./GetPermutation.ts";

/**
 * Generates all possible permutations from input sets.
 * You can call this either by passing multiple arrays or a single array of arrays.
 * @param sets Variable number of arrays to permute.
 * @returns An array of all possible permutations.
 */
export const QUERY_GetAllPermutations = <T>(
  ...sets: (ItemSet<T> | ItemSets<T>)[]
): ArrayOfArrayPermutations<T> => {
  // Here we expect the inner items to be arrays (i.e. ItemSet<T>).
  // If a single array-of-arrays was passed, unpack it.
  const normalizedSets = QUERY_GetRestParameter<ItemSet<T>>(
    sets,
  ) as ItemSets<T>;
  const resultArray: ArrayOfArrayPermutations<T> = [];
  QUERY_GetPermutation([], resultArray, normalizedSets);
  return resultArray;
};
