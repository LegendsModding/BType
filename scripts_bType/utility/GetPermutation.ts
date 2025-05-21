/**
 * Recursively generates all permutations from given sets.
 * @param runningSet The current permutation being built.
 * @param resultArray The final array to store all permutations.
 * @param sets The remaining sets to permute.
 */
export const QUERY_GetPermutation = <T>(
  runningSet: ArrayPermutation<T>,
  resultArray: ArrayOfArrayPermutations<T>,
  sets: ItemSets<T>,
): void => {
  // Base case: no more sets to process.
  if (sets.length === 0) {
    return;
  }

  // If only one set remains, combine its items with the running set.
  if (sets.length === 1) {
    for (const item of sets[0]) {
      resultArray.push([...runningSet, item]);
    }
    return;
  }

  // Otherwise, for each item in the first set, add it to the running set and recurse.
  for (const item of sets[0]) {
    QUERY_GetPermutation([...runningSet, item], resultArray, sets.slice(1));
  }
};
