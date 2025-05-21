/**
 * Creates a world generation filter object.
 * @param {TagArray} tags Filter tags
 * @param {number} count Instance count
 * @returns {WorldGenFilter} Configuration object
 * @example
 * const forestFilter = WORLDGEN_Filter(["biome_forest"], 15);
 */
export const WORLDGEN_Filter = (
  tags: TagArray,
  count: number,
): {
  tags: TagArray;
  count: number;
} => {
  return { tags: tags, count: count };
};
