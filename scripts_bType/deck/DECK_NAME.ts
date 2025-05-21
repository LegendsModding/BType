/**
 * Deck name constant for immediate construction operations.
 * Identifies decks used for instant building placements.
 */
export const INSTANT_BUILD_DECK_NAME = "iB";

/**
 * Deck name constant for ticket-based construction systems.
 * Used in deferred building processes requiring resource tickets.
 */
export const TICKET_BUILD_DECK_NAME = "tB";

/**
 * Library name for point-of-interest card definitions.
 * Contains cards controlling landmark generation.
 */
export const POI_CARD_LIBRARY_NAME = "poi_cards";

/**
 * Deck name for POI construction operations.
 * Used when building points of interest during generation.
 */
export const POI_BUILD_DECK_NAME = "poi_build_deck";

/**
 * Identifier for invasion-related card decks.
 * Manages enemy wave composition and attack patterns.
 */
export const INVASION_DECK_NAME = "invasionDeck";

/**
 * Deck name for interior biome configurations.
 * Controls environmental settings within structures.
 */
export const DECK_NAME_BIOMESET_INSIDE = "inside_biome_deck";

/**
 * Deck name for exterior biome configurations.
 * Manages outdoor environmental generation.
 */
export const DECK_NAME_BIOMESET_OUTSIDE = "outside_biome_deck";

/**
 * Library name for biome set definitions.
 * Contains environmental presets for different regions.
 */
export const CARD_LIBRARY_BIOMESET = "biomesets";

/**
 * Library name for biome ring configurations.
 * Manages concentric environmental layers.
 */
export const CARD_LIBRARY_BIOMESET_RINGS = "biomeset_rings";

/**
 * Library name for village variation cards.
 * Controls structural diversity in settlements.
 */
export const VARIATION_DECK_LIBRARY_NAME = "baseVariationCardLibrary";

/**
 * Namespace for deck name constants.
 * Centralizes all deck identifier references.
 */
export const DECK_NAME = {
  INSTA_BUILD: INSTANT_BUILD_DECK_NAME,
  TICKET_BUILD: TICKET_BUILD_DECK_NAME,
  POI_CARD: POI_CARD_LIBRARY_NAME,
  POI_BUILD: POI_BUILD_DECK_NAME,
  INVASION: INVASION_DECK_NAME,
  INSIDE_BIOME: DECK_NAME_BIOMESET_INSIDE,
  OUTSIDE_BIOME: DECK_NAME_BIOMESET_OUTSIDE,
  BIOMESET: CARD_LIBRARY_BIOMESET,
  BIOMESET_RINGS: CARD_LIBRARY_BIOMESET_RINGS,
  VILLAGE_VARIATION: VARIATION_DECK_LIBRARY_NAME,
};
