/**
 * Represents a single card in a library.
 * Contains metadata for procedural generation and system interactions.
 */
interface Card {
  /**
   * Unique index within its library.
   * Used for deck references and value lookups.
   */
  index: number;

  /**
   * Associated resource cost or probability weight.
   * Determines selection likelihood and budget impact.
   */
  value: number;

  /**
   * Semantic tags for filtering and categorization.
   * Controls card usage in different generation contexts.
   */
  tags: { tag: string }[];
}

/**
 * Represents a deck of cards used for procedural generation.
 * Each deck is an array of MultiCard instances.
 */
type Deck = MultiCard[];

/**
 * Represents a combination of SingleCards from multiple libraries.
 * Used for complex generation rules requiring layered configurations.
 */
type MultiCard = SingleCard[];

/**
 * Represents a reference to a specific card in a library.
 * Combines library index and card index for precise identification.
 */
type SingleCard = [number, number];
