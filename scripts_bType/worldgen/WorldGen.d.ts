type WorldGenFilterObject = {
  tags: TagArray;
  count: number;
};
type WorldGenFilterCollection = WorldGenFilterObject[];

declare interface WorldDefinition {
  base: WorldGenFilterCollection | null;
  modify: (arg0: WorldGenFilterManager) => void;
}

type WorldGenFilter = (tags: TagArray, count: number) => WorldGenFilterObject;

// Main interface
interface WorldGenFilterManager {
  /**
   * Removes a filter matching the given tags from the collection
   * @param tags Tags to match for removal
   * @returns Index of removed filter or -1 if not found
   */
  RemoveFilter(tags: TagArray): number;

  /**
   * Replaces an existing filter with new parameters
   * @param oldTags Tags to match for replacement
   * @param newTags New tags for the filter
   * @param newCount New count value
   * @returns Index of replaced filter or -1 if not found
   */
  ReplaceFilter(oldTags: TagArray, newTags: TagArray, newCount: number): number;

  /**
   * Modifies the count of an existing filter
   * @param tags Tags to identify the filter
   * @param newCount New count value
   * @returns Index of modified filter or -1 if not found
   */
  ChangeFilterCount(tags: TagArray, newCount: number): number;

  /**
   * Appends a new filter to the end of the collection
   * @param newTags Tags for the new filter
   * @param newCount Count value for the new filter
   * @returns Index of the newly added filter
   */
  AppendFilter(newTags: TagArray, newCount: number = 1): number;

  /**
   * Prepends a new filter to the beginning of the collection
   * @param newTags Tags for the new filter
   * @param newCount Count value for the new filter
   * @returns Index of the newly added filter (0)
   */
  PrependFilter(newTags: TagArray, newCount: number): number;

  /**
   * Adds a new filter after the specified target filter
   * @param targetTags Tags to identify the target filter
   * @param newTags Tags for the new filter
   * @param newCount Count value for the new filter
   * @returns Index of the newly added filter
   */
  AddFilterAfterTarget(
    targetTags: TagArray,
    newTags: TagArray,
    newCount: number,
  ): number;

  /**
   * Adds a new filter before the specified target filter
   * @param targetTags Tags to identify the target filter
   * @param newTags Tags for the new filter
   * @param newCount Count value for the new filter
   * @returns Index of the newly added filter
   */
  AddFilterBeforeTarget(
    targetTags: TagArray,
    newTags: TagArray,
    newCount: number,
  ): number;

  /**
   * Checks if a filter with the specified tags exists
   * @param tags Tags to check
   * @returns True if filter exists, false otherwise
   */
  FilterExists(tags: TagArray): boolean;

  /**
   * Gets the total count of all filters matching the tags
   * @param tags Tags to match (using TAG_AreTagsAInB logic)
   * @returns Total count of matching filters
   */
  GetFilterCount(tags: TagArray): number;
}
