/**
 * villageSizeHierarchy.ts
 *
 * This module defines the implementation logic for the hierarchical structure of village sizes, as well as
 * various utilities for working with different settlement types (e.g., camps, outposts, fortresses).
 */

/**
 * Identifier for tiny village size.
 * Represents the smallest possible settlement configuration.
 */
export const VILLAGE_SizeTiny = "tiny";

/**
 * Identifier for small village size.
 * Represents early-stage settlements with basic infrastructure.
 */
export const VILLAGE_SizeSmall = "small";

/**
 * Identifier for medium village size.
 * Represents established settlements with moderate complexity.
 */
export const VILLAGE_SizeMedium = "medium";

/**
 * Identifier for large village size.
 * Represents significant settlements with advanced infrastructure.
 */
export const VILLAGE_SizeLarge = "large";

/**
 * Identifier for huge village size.
 * Represents major regional settlements with economic influence.
 */
export const VILLAGE_SizeHuge = "huge";

/**
 * Identifier for enormous village size.
 * Represents city-scale settlements with political significance.
 */
export const VILLAGE_SizeEnormous = "enormous";

/**
 * Identifier for massive village size.
 * Represents capital-class settlements with military presence.
 */
export const VILLAGE_SizeMassive = "massive";

/**
 * Identifier for colossal village size.
 * Represents continent-influencing settlements with strategic importance.
 */
export const VILLAGE_SizeColossal = "colossal";

/**
 * Identifier for epic village size.
 * Represents legendary settlements with historical significance.
 */
export const VILLAGE_SizeEpic = "epic";

/**
 * Identifier for boss village size.
 * Represents final challenge areas with unique mechanics.
 */
export const VILLAGE_SizeBoss = "boss";

/**
 * Namespace for village size identifiers.
 * Provides type-safe access to size constants.
 */
export const VILLAGE_SIZE = {
  TINY: VILLAGE_SizeTiny,
  SMALL: VILLAGE_SizeSmall,
  MEDIUM: VILLAGE_SizeMedium,
  LARGE: VILLAGE_SizeLarge,
  HUGE: VILLAGE_SizeHuge,
  ENORMOUS: VILLAGE_SizeEnormous,
  MASSIVE: VILLAGE_SizeMassive,
  COLOSSAL: VILLAGE_SizeColossal,
  EPIC: VILLAGE_SizeEpic,
  BOSS: VILLAGE_SizeBoss,
} as const;

/**
 * Ordered array of all valid village sizes.
 * Used for iteration and validation purposes.
 */
export const VILLAGE_SIZE_ALL = [
  VILLAGE_SIZE.TINY,
  VILLAGE_SIZE.SMALL,
  VILLAGE_SIZE.MEDIUM,
  VILLAGE_SIZE.LARGE,
  VILLAGE_SIZE.HUGE,
  VILLAGE_SIZE.ENORMOUS,
  VILLAGE_SIZE.MASSIVE,
  VILLAGE_SIZE.COLOSSAL,
  VILLAGE_SIZE.EPIC,
  VILLAGE_SIZE.BOSS,
] as const;

/**
 * Numerical ranking system for village sizes.
 * Used for comparisons and progression logic.
 */
export const VILLAGE_SIZE_RANK = {
  [VILLAGE_SIZE.TINY]: 0,
  [VILLAGE_SIZE.SMALL]: 1,
  [VILLAGE_SIZE.MEDIUM]: 2,
  [VILLAGE_SIZE.LARGE]: 3,
  [VILLAGE_SIZE.HUGE]: 4,
  [VILLAGE_SIZE.ENORMOUS]: 5,
  [VILLAGE_SIZE.MASSIVE]: 6,
  [VILLAGE_SIZE.COLOSSAL]: 7,
  [VILLAGE_SIZE.EPIC]: 8,
  [VILLAGE_SIZE.BOSS]: 9,
} as const;

/**
 * Descriptive text for village size visualization.
 * Used in UI displays and debug logs.
 */
const villageSizeDescriptions: Record<VillageSizeKey, string> = {
  [VILLAGE_SIZE.TINY]:
    "A small encampment, often temporary, with basic infrastructure.",
  [VILLAGE_SIZE.SMALL]:
    "A growing settlement with limited resources and infrastructure.",
  [VILLAGE_SIZE.MEDIUM]:
    "A solid settlement with moderate infrastructure and social structure.",
  [VILLAGE_SIZE.LARGE]:
    "A bustling village with a vibrant economy and varied resources.",
  [VILLAGE_SIZE.HUGE]:
    "A sprawling settlement, well-established with notable influence.",
  [VILLAGE_SIZE.ENORMOUS]:
    "An immense settlement that exerts considerable regional power.",
  [VILLAGE_SIZE.MASSIVE]:
    "A grand settlement known for its cultural and military influence.",
  [VILLAGE_SIZE.COLOSSAL]:
    "An almost overwhelming settlement, a symbol of authority and might.",
  [VILLAGE_SIZE.EPIC]:
    "A legendary settlement, often with significant historical or cultural significance.",
  [VILLAGE_SIZE.BOSS]:
    "A settlement of enormous power, often a base for military or political leaders.",
};

/**
 * Compares two village sizes using their predefined ranking system.
 * This function calculates the difference between the ranks of two village sizes to determine their relative scale and strategic importance.
 * The comparison uses the VILLAGE_SIZE_RANK mapping to convert size identifiers into numerical values representing their hierarchy.
 * Returns a negative value if the first size is smaller, positive if larger, and zero if equal.
 * Essential for systems requiring size hierarchy awareness such as upgrade validation, combat scaling, and settlement interaction rules.
 * @param {VillageSizeKey} sizeA First village size identifier for comparison
 * @param {VillageSizeKey} sizeB Second village size identifier for comparison
 * @returns {number} Numerical difference indicating size relationship
 * @example
 * // Determine if a medium village can support a large structure
 * const sizeDifference = compareVillageSizes("medium", "large");
 * if(sizeDifference < 0) {
 *   SHOW_Message("Upgrade required for larger structures");
 * }
 */
export const compareVillageSizes = (
  sizeA: VillageSizeKey,
  sizeB: VillageSizeKey,
): number => VILLAGE_SIZE_RANK[sizeA] - VILLAGE_SIZE_RANK[sizeB];

/**
 * Retrieves comprehensive metadata for a specified village size.
 * Returns an object containing the size identifier, its numerical rank, and descriptive text.
 * The rank value corresponds to the strategic importance hierarchy defined in VILLAGE_SIZE_RANK.
 * The description text comes from the villageSizeDescriptions registry for UI and tooltip displays.
 * Used for systems requiring both programmatic and presentational size information.
 * @param {VillageSizeKey} size Target village size identifier
 * @returns {VillageSizeDetails} Object containing size metadata
 * @example
 * // Display village upgrade information
 * const villageDetails = getVillageSizeDetails("massive");
 * SHOW_Tooltip(`Next upgrade: ${villageDetails.description}`);
 */
export const getVillageSizeDetails = (
  size: VillageSizeKey,
): VillageSizeDetails => ({
  size,
  rank: VILLAGE_SIZE_RANK[size],
  description: villageSizeDescriptions[size],
});

/**
 * Returns all village sizes sorted by their strategic importance ranking.
 * The sorting order is determined by the 'order' parameter (ascending or descending).
 * Creates a metadata array using getVillageSizeDetails() for each size in VILLAGE_SIZE.
 * Sorted results maintain the defined size hierarchy while allowing reverse-order processing.
 * Critical for systems that require ordered size processing like tech trees or escalation mechanics.
 * @param {"asc" | "desc"} order Sorting direction (default: "asc")
 * @returns {VillageSizeDetails[]} Sorted array of village size metadata
 * @example
 * // Generate size progression display
 * const sortedSizes = getAllVillageSizesSorted("desc");
 * DISPLAY_Progression(sortedSizes.map(s => s.size));
 */
export const getAllVillageSizesSorted = (
  order: "asc" | "desc" = "asc",
): VillageSizeDetails[] => {
  const detailsArray = Object.values(VILLAGE_SIZE).map((size) =>
    getVillageSizeDetails(size),
  );
  detailsArray.sort((a, b) =>
    order === "asc" ? a.rank - b.rank : b.rank - a.rank,
  );
  return detailsArray;
};

/**
 * Retrieves village size metadata by numerical rank.
 * Searches through all registered village sizes to find a match for the given rank value.
 * Returns null if no size corresponds to the requested rank.
 * Used for progression systems that track development through numerical stages rather than size names.
 * @param {number} rank Target rank value (0 for TINY, 9 for BOSS)
 * @returns {VillageSizeDetails | null} Matching size metadata or null
 * @example
 * // Check next upgrade requirements
 * const currentRank = getVillageSizeDetails("large").rank;
 * const nextSize = getVillageSizeByRank(currentRank + 1);
 */
export const getVillageSizeByRank = (
  rank: number,
): VillageSizeDetails | null => {
  for (const size of Object.values(VILLAGE_SIZE)) {
    if (VILLAGE_SIZE_RANK[size] === rank) {
      return getVillageSizeDetails(size);
    }
  }
  return null;
};

/**
 * Determines if a smaller village size can fit within a larger size's requirements.
 * Uses the VILLAGE_SIZE_RANK system to compare strategic importance hierarchy.
 * Returns true when the numerical rank of 'smaller' is less than 'larger'.
 * Used for validation in construction systems, territory expansion, and resource allocation.
 * @param {VillageSizeKey} smaller Alleged smaller village size
 * @param {VillageSizeKey} larger Alleged larger village size
 * @returns {boolean} True if sizeA is definitively smaller than sizeB
 * @example
 * // Validate building placement
 * if(!isSizeFitting(currentVillageSize, requiredSize)) {
 *   PREVENT_Construction("Structure too large for village");
 * }
 */
export const isSizeFitting = (
  smaller: VillageSizeKey,
  larger: VillageSizeKey,
): boolean => VILLAGE_SIZE_RANK[smaller] < VILLAGE_SIZE_RANK[larger];

/**
 * Retrieves the next larger village size in the progression hierarchy.
 * Uses rank incrementation to find the subsequent size level.
 * Returns null if the current size is the maximum (BOSS).
 * Used in upgrade systems and growth mechanics for controlled progression.
 * @param {VillageSizeKey} current Current village size
 * @returns {VillageSizeKey | null} Next size identifier or null
 * @example
 * // Check upgrade eligibility
 * const nextSize = getNextVillageSize(currentSize);
 * if(nextSize) ENABLE_UpgradeOption(nextSize);
 */
export const getNextVillageSize = (
  current: VillageSizeKey,
): VillageSizeKey | null => {
  const nextRank = VILLAGE_SIZE_RANK[current] + 1;
  return getVillageSizeByRank(nextRank)?.size ?? null;
};

/**
 * Retrieves the previous smaller village size in the progression hierarchy.
 * Uses rank decrementation to find the preceding size level.
 * Returns null if the current size is the minimum (TINY).
 * Used in downgrade scenarios and resource reclamation systems.
 * @param {VillageSizeKey} current Current village size
 * @returns {VillageSizeKey | null} Previous size identifier or null
 * @example
 * // Handle village destruction consequences
 * const newSize = getPreviousVillageSize("medium");
 * if(newSize) SET_VillageSize(newSize);
 */
export const getPreviousVillageSize = (
  current: VillageSizeKey,
): VillageSizeKey | null => {
  const prevRank = VILLAGE_SIZE_RANK[current] - 1;
  return getVillageSizeByRank(prevRank)?.size ?? null;
};

/**
 * Identifies village sizes with special characteristics.
 * Currently checks for the BOSS size identifier which represents unique challenge areas.
 * Used to filter standard settlements from special encounter zones.
 * @param {VillageSizeKey} size Target village size
 * @returns {boolean} True if size has special properties
 * @example
 * // Apply special effects to boss villages
 * if(isSpecialVillageSize(village.size)) {
 *   APPLY_BossAura(village.id);
 * }
 */
export const isSpecialVillageSize = (size: VillageSizeKey): boolean =>
  size === VILLAGE_SIZE.BOSS;

/**
 * Returns all standard village sizes excluding special variants.
 * Filters the complete size list using isSpecialVillageSize().
 * Used for systems managing regular settlement growth and interactions.
 * @returns {VillageSizeDetails[]} Array of standard size metadata
 * @example
 * // Populate village upgrade UI
 * const validSizes = getStandardVillageSizes();
 * POPULATE_UpgradeMenu(validSizes.map(s => s.size));
 */
export const getStandardVillageSizes = (): VillageSizeDetails[] =>
  getAllVillageSizesSorted().filter(
    (details) => !isSpecialVillageSize(details.size),
  );

/**
 * Returns all special village sizes (currently only BOSS).
 * Filters the complete size list using isSpecialVillageSize().
 * Used for encounter systems and unique area management.
 * @returns {VillageSizeDetails[]} Array of special size metadata
 * @example
 * // Configure boss encounter triggers
 * const bossZones = getSpecialVillageSizes();
 * SETUP_EncounterZones(bossZones.map(s => s.size));
 */
export const getSpecialVillageSizes = (): VillageSizeDetails[] =>
  getAllVillageSizesSorted().filter((details) =>
    isSpecialVillageSize(details.size),
  );

/**
 * Mapping of settlement types to their size constraints and characteristics.
 * This registry defines valid size ranges and descriptions for different settlement categories.
 * @remarks
 * Contains military, civilian, and strategic settlement configurations.
 * The 'isFlexible' property indicates if size can change dynamically.
 * Used by village generation and upgrade systems for validation.
 * @see {@link VILLAGE_SIZE} for size identifiers
 * @see {@link VILLAGE_SIZE_RANK} for size hierarchy
 */
export const VILLAGE_SizeMapping: SettlementSizeMapping = {
  village: {
    validSizes: [
      VILLAGE_SIZE.SMALL,
      VILLAGE_SIZE.MEDIUM,
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.HUGE,
      VILLAGE_SIZE.ENORMOUS,
      VILLAGE_SIZE.MASSIVE,
      VILLAGE_SIZE.COLOSSAL,
      VILLAGE_SIZE.EPIC,
      VILLAGE_SIZE.BOSS,
    ],
    description:
      "Civilian settlements with various economic or social focuses.",
    isFlexible: true,
  },
  camp: {
    validSizes: [VILLAGE_SIZE.TINY, VILLAGE_SIZE.SMALL],
    description: "Temporary or basic settlements with limited infrastructure.",
    isFlexible: false,
  },
  outpost: {
    validSizes: [
      VILLAGE_SIZE.SMALL,
      VILLAGE_SIZE.MEDIUM,
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.HUGE,
    ],
    description: "Strategic settlements, often military or resource-oriented.",
    isFlexible: true,
  },
  fortress: {
    validSizes: [
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.HUGE,
      VILLAGE_SIZE.ENORMOUS,
      VILLAGE_SIZE.MASSIVE,
      VILLAGE_SIZE.COLOSSAL,
    ],
    description: "Heavily fortified military strongholds.",
    isFlexible: false,
  },
  citadel: {
    validSizes: [
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.HUGE,
      VILLAGE_SIZE.ENORMOUS,
      VILLAGE_SIZE.MASSIVE,
    ],
    description: "Central command hubs or fortified administrative centers.",
    isFlexible: true,
  },
  bastion: {
    validSizes: [
      VILLAGE_SIZE.MEDIUM,
      VILLAGE_SIZE.LARGE,
      VILLAGE_SIZE.HUGE,
      VILLAGE_SIZE.ENORMOUS,
    ],
    description:
      "Forward military strongholds focused on defense or rapid response.",
    isFlexible: true,
  },
};

/*
 * =============================================================================
 * Village Size Display
 * =============================================================================
 */

/**
 * Registry mapping village size keys to human-readable display names.
 * Contains localization-ready labels for UI presentation.
 * @remarks
 * Values are currently static strings but intended for localization.
 * Use with getVillageSizeDisplay() for proper translation handling.
 * @see {@link getVillageSizeDisplay}
 * @see {@link getAllVillageSizeDisplays}
 */
export const VILLAGE_SIZE_DISPLAY_MAP: VillageSizeDisplayMap = {
  tiny: "Tiny Settlement",
  small: "Small Village",
  medium: "Medium-Sized Village",
  large: "Large Village",
  huge: "Huge Settlement",
  enormous: "Enormous City",
  massive: "Massive Stronghold",
  colossal: "Colossal Metropolis",
  epic: "Epic Capital",
  boss: "Boss-Level Settlement",
} as const;

/**
 * Retrieves the display name for a village size.
 * Returns fallback text if size is unrecognized.
 * @param {VillageSizeKey} size Target village size identifier
 * @returns {string} Human-readable display name
 * @example
 * // Update village UI label
 * const displayName = getVillageSizeDisplay("epic");
 * UPDATE_VillageLabel(villageId, displayName);
 * @see {@link VILLAGE_SIZE_DISPLAY_MAP}
 * @see {@link getAllVillageSizeDisplays}
 */
export const getVillageSizeDisplay = (size: VillageSizeKey): string => {
  return VILLAGE_SIZE_DISPLAY_MAP[size] ?? "Unknown Size";
};

/**
 * Returns the complete village size display registry.
 * Provides all size-to-displayname mappings for UI systems.
 * @returns {VillageSizeDisplayMap} Copy of display mappings
 * @example
 * // Populate village info panel
 * const allSizes = getAllVillageSizeDisplays();
 * GENERATE_SizeLegend(allSizes);
 * @remarks
 * Returns a shallow copy to prevent unintended modifications.
 * For individual lookups, prefer getVillageSizeDisplay().
 */
export const getAllVillageSizeDisplays = (): VillageSizeDisplayMap => {
  return { ...VILLAGE_SIZE_DISPLAY_MAP };
};
