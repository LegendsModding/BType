/**
 * villageSizeHierarchy.d.ts
 *
 * This declaration file provides comprehensive types, interfaces, and alternatives
 * for working with village sizes, including arrays, readonly collections, and utilities
 * for combinations and configurations.
 */

/**
 * Represents a village size identifier string.
 * Used for type-safe size comparisons and configurations.
 */
declare type VillageSizeKey =
  | "tiny"
  | "small"
  | "medium"
  | "large"
  | "huge"
  | "enormous"
  | "massive"
  | "colossal"
  | "epic"
  | "boss";

/**
 * Represents an uppercase village size key.
 * Used for configuration mapping and system references.
 */
declare type UpperVillageSizeKey = Uppercase<VillageSizeKey>;

/**
 * A type that represents any array of village size keys (can contain duplicates or be empty).
 */
declare type AnyVillageSizeKeyArray = VillageSizeKey[];

/**
 * Array type containing all village size keys.
 * Used for validation and iteration systems.
 */
type AllVillageSizeKeyArray = readonly VillageSizeKey[];

/**
 * A type that represents any array of uppercase village size keys (can contain duplicates or be empty).
 */
declare type AnyUpperVillageSizeKeyArray = UpperVillageSizeKey[];

/**
 * A type that represents an array that contains all uppercase village size keys (must have each size exactly once).
 */
declare type AllUpperVillageSizeKeyArray = [
  "TINY",
  "SMALL",
  "MEDIUM",
  "LARGE",
  "HUGE",
  "ENORMOUS",
  "MASSIVE",
  "COLOSSAL",
  "EPIC",
  "BOSS",
];

/**
 * A readonly array of all lowercase village size keys.
 */
declare const READONLY_ALL_VILLAGE_SIZE_KEYS: readonly VillageSizeKey[];

/**
 * A readonly array of all uppercase village size keys.
 */
declare const READONLY_ALL_UPPER_VILLAGE_SIZE_KEYS: readonly UpperVillageSizeKey[];

/**
 * A type that represents a tuple containing at least one village size key.
 */
declare type AtLeastOneVillageSizeKey = [VillageSizeKey, ...VillageSizeKey[]];

/**
 * A type that represents a tuple containing at least one uppercase village size key.
 */
declare type AtLeastOneUpperVillageSizeKey = [
  UpperVillageSizeKey,
  ...UpperVillageSizeKey[],
];

/**
 * A type that represents exactly two different village size keys (for pair-based logic or matching).
 */
declare type VillageSizeKeyPair = [VillageSizeKey, VillageSizeKey];

/**
 * A type that represents exactly two different uppercase village size keys.
 */
declare type UpperVillageSizeKeyPair = [
  UpperVillageSizeKey,
  UpperVillageSizeKey,
];

/**
 * A union of small-to-medium size ranges.
 */
declare type SmallToMediumVillageSizes = "tiny" | "small" | "medium";

/**
 * A union of large-to-epic size ranges.
 */
declare type LargeToEpicVillageSizes =
  | "large"
  | "huge"
  | "enormous"
  | "massive"
  | "colossal"
  | "epic";

/**
 * A union of only the "boss" village size key.
 */
declare type BossVillageSize = "boss";

/**
 * A mapping of each village size key to its display name, useful for UI or tooltips.
 */
declare type VillageSizeDisplayMap = Record<VillageSizeKey, string>;

/**
 * A flexible configuration type that allows optional properties for each village size key.
 */
declare type VillageSizeOptionalConfig = Partial<
  Record<VillageSizeKey, boolean | string | number>
>;

/**
 * A flexible configuration type that requires exactly one property from each village size key.
 */
declare type VillageSizeRequiredConfig = Required<
  Record<VillageSizeKey, boolean | string | number>
>;

/**
 * A generic configuration that maps village size keys to a specific value type.
 */
declare type VillageSizeValueMap<T> = Record<VillageSizeKey, T>;

/**
 * A comprehensive interface for a village size hierarchy.
 * This includes the sizes, their order, their display names, and configuration options.
 */
declare interface VillageSizeHierarchy {
  allSizes: AllVillageSizeKeyArray;
  allUpperSizes: AllUpperVillageSizeKeyArray;
  displayNames: VillageSizeDisplayMap;
  optionalConfig?: VillageSizeOptionalConfig;
  requiredConfig: VillageSizeRequiredConfig;
}

/**
 * Describes the key properties of a village size:
 * - Size identifier (string)
 * - Rank (number)
 * - A textual description of the size
 */
declare interface VillageSizeDetails {
  size: VillageSizeKey;
  rank: number;
  description: string;
}

/**
 * A detailed representation of a settlement or village type
 * Each village size may belong to different settlement types (e.g., village, outpost, fortress).
 */
declare interface SettlementTypeDetails {
  type: "village" | "camp" | "outpost" | "fortress" | "citadel" | "bastion";
  size: VillageSizeKey;
  description: string;
  canHaveSpecialFeatures: boolean;
}

/**
 * Details about the possible settlement types and the village sizes they support.
 * This interface helps us map different settlement types (e.g., camps, outposts, fortresses, etc.) to their
 * specific size constraints and characteristics.
 */
type SettlementSizeMapping = Record<
  string,
  {
    validSizes: VillageSizeKey[];
    description: string;
    isFlexible: boolean;
  }
>;

/**
 * The overall village hierarchy structure that encapsulates the rules for different types of settlements.
 */
declare interface VillageHierarchy {
  standardSizes: VillageSizeKey[];
  specialSizes: VillageSizeKey[];
  settlementMappings: SettlementSizeMapping;
}

/**
 * Describes the shape of an object holding stamp textures.
 * The object has a required 'factionName' property and additional properties
 * keyed by a stamp size (such as "small", "medium", etc.) whose values are strings.
 */
interface StampTextureInfo {
  factionName: string; // TODO: Make more type safe.
  [size: string]: string;
}
