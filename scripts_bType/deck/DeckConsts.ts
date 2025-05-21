/**
 * Global registry mapping library names to card definitions.
 * Contains all registered cards with their metadata.
 */
export const libraryFilters: Record<string, Card[]> = {};

/**
 * Global registry mapping library names to numerical indices.
 * Used for efficient deck-to-library reference resolution.
 */
export const libraryIndices: Record<string, number> = {};
