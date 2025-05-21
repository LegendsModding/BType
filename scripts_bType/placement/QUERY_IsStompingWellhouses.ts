/**
 * Checks if wellhouse stomping is enabled in procedural generation options.
 * @param stompOptions Procedural generation configuration object.
 * @returns {boolean} True if stomping is explicitly enabled.
 * @remarks
 * Returns false for undefined/null configurations. Critical for determining structure replacement behavior during world generation.
 */
export const QUERY_IsStompingWellhouses = (
  stompOptions: StompOptions,
): boolean => {
  if (stompOptions === undefined) {
    return false;
  }

  if (stompOptions.stompWellhouses === undefined) {
    return false;
  }

  return stompOptions.stompWellhouses;
};
