/**
 * Checks if all tags in A are present in B (subset check).
 * Order-agnostic comparison.
 * @param {TagArray} tagsA Subset to check
 * @param {TagArray} tagsB Superset to check against
 * @returns {boolean} True if all A tags exist in B
 * @example
 * TAGS_AreTagsAInB(["water", "deep"], ["deep", "water", "ocean"]);
 * // Returns true
 */
export const TAGS_AreTagsAInB = (tagsA: TagArray, tagsB: TagArray): boolean => {
  const map: Record<string, number> = {};
  for (const tag of tagsB) {
    map[tag] = 1;
  }
  for (const tag of tagsA) {
    if (map[tag] === undefined) {
      return false;
    }
  }
  return true;
};
