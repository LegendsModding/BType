/**
 * Phase identifier indicating no active invasion progression.
 * @readonly
 * @defaultValue -1
 * @remarks
 * Represents uninitialized or inactive invasion states. Used as a base value for phase tracking systems.
 */
export const ENTRY_PHASE_NONE = -1;

/**
 * Phase identifier for pre-game initialization state.
 * @readonly
 * @defaultValue 0
 * @remarks
 * Marks the preparation phase before primary invasion systems activate. Used for setup and validation operations.
 */
export const ENTRY_PHASE_PREGAME = 0;

/**
 * Phase identifier for initial base establishment phase.
 * @readonly
 * @defaultValue 1
 * @remarks
 * Indicates the phase where factions begin constructing their first strategic bases. Triggers early-game progression systems.
 */
export const ENTRY_PHASE_FIRSTBASE = 1;
