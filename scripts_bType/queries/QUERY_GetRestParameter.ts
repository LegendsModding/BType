/**
 * Ensures that rest parameters are correctly unpacked if a single array is passed.
 * For example, both of these calls are supported:
 *
 * GetAllPermutations([1, 2, 3], [4, 5])
 * GetAllPermutations([[1, 2, 3], [4, 5]])
 * @param restArg The input parameters, which may be an array of arrays.
 * @returns A correctly structured array.
 */
export const QUERY_GetRestParameter = <T>(restArg: (T | T[])[]): T[] => {
  if (restArg.length === 1 && Array.isArray(restArg[0])) {
    return restArg[0];
  }
  return restArg as T[];
};
