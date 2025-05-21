/**
 * Validates if a value matches faction personality key specifications.
 * @param value Numeric value to validate.
 * @returns {boolean} True if value is 1, 2, 3, or 4.
 * @remarks Enforces valid personality key ranges for faction configurations. Returns false for out-of-range values.
 */
export const SETTING_IsFactionPersonalityKey = (
  value: number,
): value is FactionPersonalityKey =>
  value === 1 || value === 2 || value === 3 || value === 4;
