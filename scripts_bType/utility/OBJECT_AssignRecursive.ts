import { OBJECT_IsObject } from "./OBJECT_IsObject.ts";

/**
 * Recursively merges properties from a source object into a target object.
 * Handles nested objects through deep copying while maintaining reference integrity.
 * @template T - The target object type
 * @param {T} target The object to merge properties into
 * @param {Partial<T>} source The object containing properties to merge
 * @example
 * const defaults = {
 *   audio: { volume: 50, effects: true },
 *   graphics: { resolution: "1080p" }
 * };
 *
 * const userPrefs = {
 *   audio: { volume: 75 },
 *   controls: { invertY: true }
 * };
 *
 * OBJECT_AssignRecursive(defaults, userPrefs);
 * // Result:
 * // {
 * //   audio: { volume: 75, effects: true },
 * //   graphics: { resolution: "1080p" },
 * //   controls: { invertY: true }
 * // }
 * @description
 * Key characteristics:
 * 1. Deep merges nested objects
 * 2. Shallow copies non-object values
 * 3. Preserves target object reference
 * 4. Overwrites existing properties
 *
 * Algorithm:
 * - Check if both target and source are objects
 * - Iterate through source properties
 * - Recursively merge nested objects
 * - Directly assign primitive values
 *
 * Use cases:
 * - Configuration management
 * - Default parameter merging
 * - State preservation during updates
 */
export const OBJECT_AssignRecursive = <T extends GenericObject>(
  target: T,
  source: Partial<T>,
): void => {
  const bothObjects = OBJECT_IsObject(target) && OBJECT_IsObject(source);

  if (!bothObjects) {
    // If the arguments are not objects, perform a shallow assignment.
    Object.assign(target, source);
    return;
  }

  for (const key in source) {
    if (OBJECT_IsObject(source[key])) {
      // The value at key is an object, proceed with recursion.
      if (!target[key]) {
        // If the key doesn't exist yet, create a new object.
        Object.assign(target, { [key]: {} });
      } else {
        // If the key does exist, make a shallow copy.
        target[key] = Object.assign({}, target[key]);
      }
      // Recurse further within that key.
      OBJECT_AssignRecursive(
        target[key] as GenericObject,
        source[key] as GenericObject,
      );
    } else {
      // The value at key is not an object, perform a regular assignment.
      Object.assign(target, { [key]: source[key] });
    }
  }
};
