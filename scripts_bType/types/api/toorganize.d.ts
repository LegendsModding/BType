/**
 * Represents a global event name.
 * Used for cross-system communication and synchronization.
 */
type GlobalEventName = string;

/**
 * Union type for faction category arrays.
 * Contains arrays of faction names grouped by type.
 */
type FactionCategoryArray =
  | AnyPiglinMainHorde[]
  | AnyEndFaction[]
  | AnyCultureFaction[]
  | AnyUndeadFaction[]
  | AnyHostFaction[];

/**
 * Represents a village's resource storage interface.
 * Provides type-safe access to village-specific global variables.
 */
type VillageResourceStore = {
  /** Base key prefix for variable storage */
  key: string;

  /**
   * Retrieves resource value from global storage.
   * @param {string} resourceName Resource identifier
   * @returns {number} Current resource value
   */
  Get: (resourceName: string) => number;

  /**
   * Sets resource value in global storage.
   * @param {string} resourceName Resource identifier
   * @param {number} value New resource value
   */
  Set: (resourceName: string, value: number) => void;
};

/**
 * Represents an audio phase identifier string.
 * Used for controlling environmental soundscapes and music states.
 */
type AudioPhaseName = string;

/**
 * Represents trigger tag configuration for spatial volumes.
 * Contains include/exclude tag arrays for entity filtering.
 */
type TriggerTag = {
  include: TagArray;
  exclude: TagArray;
};

/**
 * Represents village reward configuration data.
 * Contains parameters for token-based resource systems.
 */
type VillageRewardData = {
  tokenCapacity: number;
  tokenFillRate: number;
  tokenTimer: string;
  updateTime: number;
  variables: Record<string, string>;
  unlocks: Record<string, string>;
  unlockVillageRewardDays: {
    resourceName: string;
    unlockDays: number;
    cap: number;
  }[];
};

/**
 * Callback type for village chest processing.
 * Receives entity groups representing valid villages.
 */
type VillageChestCallback = (village: EntityGroup) => void;
