import { TAGS_AreEqual } from "scripts_bType/tags/TAGS_AreEqual.ts";

/**
 * Finds filter index in collection by tags.
 * @param {TagArray} tags Filter identifier
 * @param {WorldGenFilterCollection} collection Filter list
 * @returns {number} Index or -1
 */
export const WORLDGEN_FindFilterInCollection = (
  tags: TagArray,
  collection: WorldGenFilterCollection,
): number => {
  for (let i = 0; i < collection.length; i++) {
    if (TAGS_AreEqual(collection[i].tags, tags)) {
      return i;
    }
  }

  return -1;
};
