/**
 * Identifier for standard campaign game mode.
 * @readonly
 * @defaultValue "campaign"
 * @remarks
 * Represents the primary narrative-driven experience with procedural content generation.
 */
export const GAME_MODE_Campaign =
  "campaign" as const satisfies GameModeCampaign;

/**
 * Identifier for conquest game mode.
 * @readonly
 * @defaultValue "conquest"
 * @remarks
 * Focuses on territorial control and faction dominance mechanics.
 */
export const GAME_MODE_Conquest =
  "conquest" as const satisfies GameModeConquest;

/**
 * Identifier for creative mode with unlimited resources.
 * @readonly
 * @defaultValue "creative"
 * @remarks
 * Enables unrestricted building and experimentation without survival constraints.
 */
export const GAME_MODE_Creative =
  "creative" as const satisfies GameModeCreative;

/**
 * Identifier for adventure mode.
 * @readonly
 * @defaultValue "adventure"
 * @remarks
 * Freeform version of campaign.
 */
export const GAME_MODE_Adventure =
  "adventure" as const satisfies GameModeAdventure;

/**
 * Valid game mode identifiers for campaign progression.
 * @readonly
 * @remarks
 * Contains all supported game modes including campaign, conquest, creative, and editor configurations. Used for mode validation and switching.
 */
export const GAME_MODE_All = [
  GAME_MODE_Campaign,
  GAME_MODE_Creative,
  GAME_MODE_Conquest,
  GAME_MODE_Adventure,
] as const satisfies GameModeAll;

/**
 * Consolidated game mode identifier registry.
 * @readonly
 * @remarks
 * Contains all valid mode identifiers for validation and mode switching systems.
 * Maintains consistency across gameplay configuration interfaces.
 */
export const GAME_MODE = {
  campaign: GAME_MODE_Campaign,
  creative: GAME_MODE_Creative,
  conquest: GAME_MODE_Conquest,
  adventure: GAME_MODE_Adventure,
} as const satisfies GameModes;
