import { INVASION_DeckSkeleton } from "./INVASION_DeckSkeleton.ts";
import { INVASION_DeckZombie } from "./INVASION_DeckZombie.ts";

/**
 * Collection of undead faction invasion decks.
 * @readonly
 * @remarks
 * Contains deck configurations for skeleton and zombie factions. Used in procedural generation systems.
 */
export const INVASION_UndeadDrawDecks = [
  INVASION_DeckSkeleton,
  INVASION_DeckZombie,
];
