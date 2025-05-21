/**
 * Utility function to determine if a value is an object (excluding arrays).
 * @param item The value to check.
 * @returns True if the value is a plain object, false otherwise.
 */
export function OBJECT_IsObject(item: unknown): item is GenericObject {
  return item !== null && typeof item === "object" && !Array.isArray(item);
}
