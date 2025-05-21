import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";

/**
 * Phase-based attack strength configurations for invasion systems.
 * @readonly
 * @remarks
 * Contains seven-phase progression with strength-count distributions:
 * - Phase 0: Base strength 1
 * - Phase 1: 7x strength 1, 3x strength 2
 * - Phase 2: 5x strength 1, 4x strength 2, 1x strength 3
 * - Phase 3: 3x strength 1, 4x strength 2, 2x strength 3
 * - Phase 4: 1x strength 1, 6x strength 2, 3x strength 3
 * - Phase 5: 3x strength 2, 6x strength 3
 * - Phase 6: 1x strength 3
 * Unified across all standard difficulties (easy/normal/hard) through DIFFICULTY_RegisterConfig calls.
 * Legacy configurations preserved for custom game settings.
 */
export const INVASION_AttackStrengthDecks: InvasionAttackStrengthDeck[] = [
  {
    phase: 0,
    cards: [{ strength: 1, count: 1 }],
  },
  {
    phase: 1,
    cards: [
      { strength: 1, count: 7 },
      { strength: 2, count: 3 },
    ],
  },
  {
    phase: 2,
    cards: [
      { strength: 1, count: 5 },
      { strength: 2, count: 4 },
      { strength: 3, count: 1 },
    ],
  },
  {
    phase: 3,
    cards: [
      { strength: 1, count: 3 },
      { strength: 2, count: 4 },
      { strength: 3, count: 2 },
    ],
  },
  {
    phase: 4,
    cards: [
      { strength: 1, count: 1 },
      { strength: 2, count: 6 },
      { strength: 3, count: 3 },
    ],
  },
  {
    phase: 5,
    cards: [
      { strength: 2, count: 3 },
      { strength: 3, count: 6 },
    ],
  },
  {
    phase: 6,
    cards: [{ strength: 3, count: 1 }],
  },
];

/**
 * Registers unified attack strength deck configurations across multiple difficulties.
 * @remarks
 * Applies INVASION_AttackStrengthDecks to easy/normal/hard difficulties for consistent attack patterns.
 * Maintains backward compatibility with legacy systems through explicit registrations.
 */
DIFFICULTY_RegisterConfig(
  "village_attack_strength_decks",
  INVASION_AttackStrengthDecks,
  GAME_DIFFICULTY.easy,
);
DIFFICULTY_RegisterConfig(
  "village_attack_strength_decks",
  INVASION_AttackStrengthDecks,
  GAME_DIFFICULTY.normal,
);
DIFFICULTY_RegisterConfig(
  "village_attack_strength_decks",
  INVASION_AttackStrengthDecks,
  GAME_DIFFICULTY.hard,
);
