import { TAGS_AreTagsAInB } from "scripts_bType/tags/TAG_AreTagsAInB.ts";

import { WORLDGEN_Filter } from "./WORLDGEN_Filter.ts";
import { WORLDGEN_FindFilterInCollection } from "./WORLDGEN_FindFilterInCollection.ts";

/**
 * Manager class for manipulating world generation filters.
 * Provides filter collection operations.
 * @class
 * @implements {WorldGenFilterManager}
 * @example
 * const manager = new WORLDGEN_FilterManager(baseFilters);
 * manager.ReplaceFilter(["mountain"], ["volcano"], 5);
 */
export class WORLDGEN_FilterManager implements WorldGenFilterManager {
  private collection;

  /**
   *
   */
  public constructor(collection: WorldGenFilterCollection) {
    this.collection = collection;
  }

  /**
   * Removes a filter from the collection based on tags.
   * Performs exact tag match removal.
   * @param {TagArray} tags Tags identifying the filter
   * @returns {number} Index of removed filter or -1
   * @example
   * // Remove mountain biome filter
   * manager.RemoveFilter(["biome_mountain"]);
   * @description
   * Process:
   * 1. Searches for exact tag match
   * 2. Removes filter if found
   * 3. Maintains collection order
   *
   * Use cases:
   * - Removing outdated biome distributions
   * - Adjusting world composition
   * - Debugging generation rules
   */
  public RemoveFilter(tags: TagArray): number {
    const filterIndex = WORLDGEN_FindFilterInCollection(tags, this.collection);
    if (filterIndex !== -1) {
      this.collection.splice(filterIndex, 1);
    }
    return filterIndex;
  }

  /**
   * Replaces an existing filter with new parameters.
   * Maintains collection position while updating properties.
   * @param {TagArray} oldTags Tags of filter to replace
   * @param {TagArray} newTags New filter tags
   * @param {number} newCount New instance count
   * @returns {number} Index of replaced filter or -1
   * @example
   * // Replace forest with enchanted forest
   * manager.ReplaceFilter(["biome_forest"], ["biome_enchanted"], 10);
   * @description
   * Key behavior:
   * - Preserves filter order
   * - Updates both tags and count
   * - Fails silently if not found
   */
  public ReplaceFilter(
    oldTags: TagArray,
    newTags: TagArray,
    newCount: number,
  ): number {
    const filterIndex = WORLDGEN_FindFilterInCollection(
      oldTags,
      this.collection,
    );
    if (filterIndex !== -1) {
      this.collection.splice(
        filterIndex,
        1,
        WORLDGEN_Filter(newTags, newCount),
      );
    }
    return filterIndex;
  }

  /**
   * Modifies the instance count of an existing filter.
   * Maintains all other filter properties.
   * @param {TagArray} tags Filter identifier
   * @param {number} newCount New instance count
   * @returns {number} Index of modified filter or -1
   * @example
   * // Increase desert spawn rate
   * manager.ChangeFilterCount(["biome_desert"], 25);
   * @description
   * Typical uses:
   * - Difficulty-based scaling
   * - Player progression adjustments
   * - Dynamic world balancing
   */
  public ChangeFilterCount(tags: TagArray, newCount: number): number {
    const filterIndex = WORLDGEN_FindFilterInCollection(tags, this.collection);
    if (filterIndex !== -1) {
      this.collection[filterIndex].count = newCount;
    }
    return filterIndex;
  }

  /**
   * Adds new filter to the end of the collection.
   * Maintains insertion order for procedural generation.
   * @param {TagArray} newTags Filter tags
   * @param {number} newCount Instance count
   * @returns {number} Index of new filter
   * @example
   * // Add volcanic region filter
   * manager.AppendFilter(["biome_volcano"], 5);
   * @description
   * Characteristics:
   * - Adds to collection end
   * - Allows duplicate tags
   * - Immediate effect on generation
   */
  public AppendFilter(newTags: TagArray, newCount: number): number {
    const filter = WORLDGEN_Filter(newTags, newCount);
    this.collection.push(filter);
    return WORLDGEN_FindFilterInCollection(newTags, this.collection);
  }

  /**
   * Inserts new filter at the beginning of the collection.
   * Prioritizes new filter in generation order.
   * @param {TagArray} newTags Filter tags
   * @param {number} newCount Instance count
   * @returns {number} Index of new filter
   * @example
   * // Prioritize ocean generation
   * manager.PrependFilter(["biome_ocean"], 30);
   * @description
   * Usage considerations:
   * - Affects procedural generation order
   * - Overrides existing filters
   * - Useful for mandatory features
   */
  public PrependFilter(newTags: TagArray, newCount: number): number {
    const filter = WORLDGEN_Filter(newTags, newCount);
    this.collection.splice(0, 0, filter);
    return WORLDGEN_FindFilterInCollection(newTags, this.collection);
  }

  /**
   * Inserts new filter after specified target.
   * Maintains relative positioning in generation sequence.
   * @param {TagArray} targetTags Existing filter tags
   * @param {TagArray} newTags New filter tags
   * @param {number} newCount New instance count
   * @returns {number} Index of new filter
   * @example
   * // Add hills after mountains
   * manager.AddFilterAfterTarget(["biome_mountain"], ["biome_hills"], 15);
   * @description
   * Insertion logic:
   * - Searches for target filter
   * - Places new filter after
   * - Appends if target not found
   */
  public AddFilterAfterTarget(
    targetTags: TagArray,
    newTags: TagArray,
    newCount: number,
  ): number {
    const filterIndex = WORLDGEN_FindFilterInCollection(
      targetTags,
      this.collection,
    );
    if (filterIndex === -1) {
      return this.AppendFilter(newTags, newCount);
    }

    const filter = WORLDGEN_Filter(newTags, newCount);
    this.collection.splice(filterIndex + 1, 0, filter);
    return WORLDGEN_FindFilterInCollection(newTags, this.collection);
  }

  /**
   * Inserts new filter before specified target.
   * Maintains relative positioning in generation sequence.
   * @param {TagArray} targetTags Existing filter tags
   * @param {TagArray} newTags New filter tags
   * @param {number} newCount New instance count
   * @returns {number} Index of new filter
   * @example
   * // Add beach before ocean
   * manager.AddFilterBeforeTarget(["biome_ocean"], ["biome_beach"], 20);
   * @description
   * Key features:
   * - Preserves generation flow
   * - Allows filter chaining
   * - Graceful fallback to append
   */
  public AddFilterBeforeTarget(
    targetTags: TagArray,
    newTags: TagArray,
    newCount: number,
  ): number {
    const filterIndex = WORLDGEN_FindFilterInCollection(
      targetTags,
      this.collection,
    );
    if (filterIndex === -1) {
      return this.AppendFilter(newTags, newCount);
    }

    const filter = WORLDGEN_Filter(newTags, newCount);
    this.collection.splice(filterIndex, 0, filter);
    return WORLDGEN_FindFilterInCollection(newTags, this.collection);
  }

  /**
   * Checks for filter existence in collection.
   * Performs exact tag match check.
   * @param {TagArray} tags Filter tags
   * @returns {boolean} Existence status
   * @example
   * if(manager.FilterExists(["biome_swamp"])) {
   *   // Modify swamp parameters
   * }
   * @description
   * Use cases:
   * - Prevent duplicate filters
   * - Conditional modifications
   * - Generation validation
   */
  public FilterExists(tags: TagArray): boolean {
    return WORLDGEN_FindFilterInCollection(tags, this.collection) !== -1;
  }

  /**
   * Calculates total instances of matching filters.
   * Aggregates counts from all matching filters.
   * @param {TagArray} tags Filter tags subset
   * @returns {number} Total instance count
   * @example
   * const forestCount = manager.GetFilterCount(["biome_forest"]);
   * @description
   * Matching logic:
   * - Includes partial matches
   * - Sums all matching filters
   * - Useful for balance calculations
   */
  public GetFilterCount(tags: TagArray): number {
    let totalCount = 0;
    for (const filter of this.collection) {
      if (TAGS_AreTagsAInB(tags, filter.tags)) {
        totalCount += filter.count;
      }
    }

    return totalCount;
  }
}
