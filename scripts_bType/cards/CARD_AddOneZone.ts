import { CARD_Zones } from "./CARD_Zones.ts";

/**
 * Convenience function for single zone addition.
 * Simplifies common use case of adding one zone.
 * @returns {Deck} Single zone deck
 * @example
 * // Add expansion zone
 * const newZone = CARD_AddOneZone();
 * @description
 * Equivalent to:
 * CARD_Zones("addZone", 1);
 *
 * Used for:
 * - Area expansion mechanics
 * - Dynamic world growth
 * - Procedural content scaling
 */
export const CARD_AddOneZone = CARD_Zones("addZone", 1);
