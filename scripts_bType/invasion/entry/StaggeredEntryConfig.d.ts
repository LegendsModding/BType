/**
 * Generic function type for processing faction entry progression.
 * Handles specific faction categories with type-safe parameters.
 * @template K - Faction category key from FactionEntryMap
 * @param {TriggerTimeFull} triggerTime The trigger time to evaluate
 * @param {FactionEntryMap[K][]} factions Array of faction entries to process
 */
type FactionProgressFunction<K extends keyof FactionEntryMap> = (
  triggerTime: TriggerTimeFull,
  factions: FactionEntryMap[K][],
) => void;

/**
 * Base interface for trigger configurations.
 * Contains the trigger time specification.
 * Unused currently, instead we use "Trigger".
 */
interface TriggerType {
  trigger: TriggerTimeFull;
}

/**
 * Type for pre-game phase trigger configurations.
 * Maps trigger times to specific Trigger instances.
 */
type FactionPregame = Partial<Record<TriggerTimeFull, Trigger>>;

/**
 * Type for first base establishment phase trigger configurations.
 * Maps trigger times to specific Trigger instances.
 */
type FactionFirstBase = Partial<Record<TriggerTimeFull, Trigger>>;

/**
 * Base interface for all faction entry configurations.
 * Contains common properties required for all faction types.
 */
interface FactionEntryBase {
  /**
   * Unique identifier for the faction entry.
   */
  id: string;

  /**
   * Display name for the faction entry (localization key).
   */
  name: string;
}

/**
 * Configuration object for the staggered faction entry system.
 * Controls how and when different factions enter the game.
 */
interface StaggeredEntryConfig {
  /**
   * The trigger time that activates progression checks.
   * Determines when to evaluate faction entry conditions.
   * @see TRIGGER_TIME_* constants
   */
  triggerTime: TriggerTimeFull;

  /**
   * Mapping of faction categories to their entry configurations.
   * Allows overriding default faction entries for specific categories.
   */
  factionProgressors: Partial<{
    [K in keyof FactionEntryMap]: FactionEntryMap[K][];
  }>;

  /**
   * Mapping of faction categories to their progression handler functions.
   * Defines how each faction category should be processed during progression.
   */
  factionProgressFunctions: Partial<{
    [K in keyof FactionEntryMap]: FactionProgressFunction<K>;
  }>;
}

/**
 * Utility type for optional trigger configurations.
 * Allows specifying triggers for specific times while leaving others undefined.
 */
type OptionalTriggerRecord = Partial<Record<TriggerTimeFull, Trigger>>;
