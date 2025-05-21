/**
 * Numeric exit reason values.
 * @remarks
 * This type represents the allowed numeric exit codes.
 * @example
 * 1, 2
 */
declare type ExitReasonNumerical = 1 | 2;

/**
 * Names for exit reasons.
 * @remarks
 * This union type specifies the valid names for exit reasons.
 * @example
 * "LEAVE", "DESTROYED"
 */
declare type ExitReasonName = "LEAVE" | "DESTROYED";

/**
 * Mapping from exit reason names to their respective numeric codes.
 * @remarks
 * This mapped type uses conditional types to enforce that each exit reason name is associated
 * with its exact numeric literal value. For "LEAVE" the value is `1` (an ExitReasonNumerical),
 * and for "DESTROYED" the value is `2`.
 * @example
 * {
 *   LEAVE: 1,
 *   DESTROYED: 2
 * }
 */
declare type ExitReason = {
  [K in ExitReasonName]: K extends "LEAVE"
    ? 1
    : K extends "DESTROYED"
      ? 2
      : never;
};
