import { INVASION_PiglinDrawDecks } from "./INVASION_PiglinDrawDecks.ts";
import { INVASION_UndeadDrawDecks } from "./INVASION_UndeadDrawDecks.ts";

/**
 * Aggregated invasion deck configurations for procedural generation systems.
 * @readonly
 * @remarks
 * Combines piglin and undead faction decks into unified invasion draw pool.
 * Used for coordinating multi-faction attack patterns and world state modifications.
 */
export const INVASION_FactionDrawDecks: InvasionDeck[] = [
  ...INVASION_PiglinDrawDecks,
  ...INVASION_UndeadDrawDecks,
];
