/**
 * Type guard function to check for non-null values.
 * Validates that input is neither undefined nor null.
 * @param {unknown} input Value to check
 * @returns {boolean} True if value is valid
 * @example
 * // Validate village existence
 * if(IsNotNull(villageEntity)) {
 *   PROCESS_Village(villageEntity);
 * }
 */
export const IsNotNull = (input: unknown): input is never => {
  return input !== undefined && input !== null;
};
