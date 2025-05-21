/**
 * The exit reason mapping as a constant.
 * @remarks
 * This constant is defined using `as const` to preserve the literal types for each property.
 * The `satisfies` operator then checks that the object conforms to the `ExitReason` type, which
 * internally relies on both ExitReasonName and ExitReasonNumerical for strong type-checking.
 * @example
 * console.log(ExitReason.LEAVE); // Output: 1
 */
export const EXIT_REASON: ExitReason = {
  LEAVE: 1,
  DESTROYED: 2,
} as const satisfies ExitReason;
