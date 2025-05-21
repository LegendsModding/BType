/**
 * Checks for exact tag array equality.
 * Order-agnostic comparison.
 * @param {TagArray} tagsA First tag array
 * @param {TagArray} tagsB Second tag array
 * @returns {boolean} True if identical
 * @example
 * TAGS_AreEqual(["fire", "magic"], ["magic", "fire"]);
 * // Returns true
 */
export const TAGS_AreEqual = (tagsA: string[], tagsB: string[]): boolean => {
  if (tagsA.length !== tagsB.length) return false;

  const map: Record<string, number> = {};
  for (const tag of tagsA) {
    map[tag] = 1;
  }
  for (const tag of tagsB) {
    if (map[tag] === undefined) {
      return false;
    }
  }
  return true;
};
