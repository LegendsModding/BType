// A helper to map the difficulty setting to the number of claimed area sub-clusters

/**
 * Maps game difficulty settings to world subcluster counts for area distribution.
 * Determines the base number of subclusters used for territorial claims and resource allocation.
 * @returns {1 | 2 | 4 | 6} Subcluster count based on difficulty
 * @example
 * // Get subclusters for normal difficulty
 * const clusters = WORLDDEF_GetSubclusterCount();
 * @description
 * This function establishes the foundational world structure complexity:
 * Peaceful mode uses minimal clusters for simplified gameplay,
 * while higher difficulties increase cluster counts for more intricate territorial disputes.
 * The returned value directly impacts village spacing, resource density,
 * and faction interaction frequency. Uses QUERY_GameDifficulty() to determine current setting.
 */
export const WORLDDEF_GetSubclusterCount = (): 1 | 2 | 4 | 6 => {
  const difficultyString = QUERY_GameDifficulty();
  switch (difficultyString) {
    case "peaceful":
      return 1;
    case "easy":
      return 2;
    case "normal":
      return 4;
    case "hard":
      return 6;
    default:
      return 4;
  }
};
