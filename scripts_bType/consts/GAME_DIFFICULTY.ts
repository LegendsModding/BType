/**
 * Game difficulty level identifiers.
 * @readonly
 * @remarks
 * Defines valid difficulty configurations affecting enemy strength, resource availability, and procedural generation parameters.
 */
export const GAME_DIFFICULTY = {
  peaceful: "peaceful",
  easy: "easy",
  normal: "normal",
  hard: "hard",
  custom: "custom",
} as const satisfies GameDifficulties;
