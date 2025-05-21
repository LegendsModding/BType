type InvasionAttackStrengthCard = {
  strength: number;
  count: number;
};
interface InvasionAttackStrengthDeck {
  phase: number;
  cards: InvasionAttackStrengthCard[];
}

type InvasionPhaseTrigger = {
  eval: () => boolean;
};

type InvasionPhaseDefinition = {
  phase: number;
  triggers: Record<string, { eval: () => boolean }>;
  actions: {
    spawnBases?: VillageSizeKey[];
    startAttacks?: boolean;
    specialBehavior?: string;
  };
};

type FactionEstablishmentState = {
  basesBuilt: Record<VillageSizeKey, number>;
  lastActionDay: number;
  phase: number;
};

type FactionPhaseConfigs = Record<
  FactionNameId,
  Record<number, InvasionPhaseDefinition>
>;

type GlobalInvasionState = {
  currentPhase: number;
  activeFactions: FactionNameId[];
  completedFactions: FactionNameId[];
};

/**
 * Interface for the ordered collection object.
 */
declare type IFactionEntry = {
  gvEntered: (faction: FactionNameId) => string;
  gvOrder: (orderNum: number) => string;
  randomGroup: () => string;
  GetOrderValue: (orderNum: number) => number;
  SetOrderValue: (orderNum: number, faction: FactionNameId) => void;
  AddNextInOrder: (faction: FactionNameId) => void;
  GetByArrivedOrder: (orderNum: number) => FactionNameId | null;
  GetOrderByName: (faction: FactionNameId) => number;
  IsEntered: (faction: FactionNameId) => boolean;
  SetEntered: (faction: FactionNameId, entered: boolean) => void;
  GetRandomEntry: (
    units: FactionNameId[],
    entered: boolean,
  ) => FactionNameId | null;
  IsAllowed: (faction: FactionNameId) => boolean;
};

type FactionActionAttackVillage = "attack_village_v2"; // TODO: Get rid of v2!
type FactionActionBuildDefensiveOutpost = "build_defensive_outpost";
type FactionActionBuildOffensiveOutpost = "build_offensive_outpost";
type FactionActionBuildNearBase = "build_near_base";
type FactionActionBuildNewOutpost = "build_new_outpost";
type FactionActionUpgradeBase = "upgrade_base";
type FactionActionOops = "oops";
type FactionActionBuildFarBase = "build_far_base";
type FactionActionEstablish = "establish_horde";
type FactionActionClaimArea = "claim_area";

// More "advanced" ones.
type FactionActionBuildDefensiveOutpostTriple =
  "build_defensive_outpost_triple";
type FactionActionBuildOffensiveOutpostDouble =
  "build_offensive_outpost_double";
type FactionActionAttackVillageDouble = "attack_village_v2_double";
type FactionActionBuildNearBaseDouble = "build_near_base_double";
type FactionActionUpgradeBaseDouble = "upgrade_base_double";
type FactionActionOopsDouble = "oops_double";
type FactionActionAttackVillageV2AttackBoss = "attack_village_v2_attack_boss";
type FactionActionAttackBossOccupation = "occupation_attack_boss";

type FactionAction =
  | FactionActionAttackVillage
  | FactionActionBuildDefensiveOutpost
  | FactionActionBuildOffensiveOutpost
  | FactionActionBuildNearBase
  | FactionActionBuildNewOutpost
  | FactionActionUpgradeBase
  | FactionActionOops
  | FactionActionBuildFarBase
  | FactionActionEstablish
  | FactionActionClaimArea
  | FactionActionBuildDefensiveOutpostTriple
  | FactionActionBuildOffensiveOutpostDouble
  | FactionActionAttackVillageDouble
  | FactionActionBuildNearBaseDouble
  | FactionActionUpgradeBaseDouble
  | FactionActionOopsDouble
  | FactionActionAttackVillageV2AttackBoss
  | FactionActionAttackBossOccupation;

interface FactionActionAmount {
  action: FactionAction;
  amount: number;
}

interface FormationByOrder {
  order: number;
  formation: FactionActionAmount[];
}

interface InvasionDeckPhase {
  phase: string;
  formationByOrder: FormationByOrder[];
}

interface InvasionDeck {
  factionName: FactionNameId;
  deckName: string;
  phases: InvasionDeckPhase[];
}

// Define a type for the result of base placement
type BasePlacementResult = {
  base: SingleEntity | null;
  fallbackUsed: boolean;
};

// Define the structure of placement rules for bases, outposts, etc.
type IPlacementRule = {
  otherFactionDistance?: number;
  wofMinDistance?: number;
  wofMaxDistance?: number;
  ownMinDistance?: number; // Minimum distance from own bases
  ownMaxDistance?: number; // Maximum distance from own bases
  outpostDistance?: number; // Distance from outposts
  otherDistance?: number; // Distance from other villages
  playerDistance?: number; // Distance from players
  villageMaxDistance?: number; // Maximum distance from culture villages
  allDistance?: number; // Distance from all villages
};

// Define the structure of faction-specific data
type IFactionData = {
  name: FactionNameId; // The faction's unique identifier
  villageArchetype: string; // Base archetype for the faction
  villageArchetypes: Record<VillageSizeKey, string>; // Archetypes for different base sizes
  firstBasePlacement: IPlacementRule[]; // Rules for placing the first base
  basePlacement: {
    newBaseAdjacents: VillageSizeKey[]; // Sizes of bases considered as "adjacent"
    ruleList: IPlacementRule[]; // General placement rules for bases
    initRuleList: IPlacementRule[]; // Placement rules for initial bases
  };
  defensiveOutpostPlacement: IPlacementRule[]; // Rules for defensive outposts
  initDefensiveOutpostPlacement: IPlacementRule[]; // Rules for initial defensive outposts
  offensiveOutpostPlacement: IPlacementRule[]; // Rules for offensive outposts
  farBasePlacement: IPlacementRule[]; // Rules for far bases
};

declare type IHordeBasesSetupConfig = {
  centralBase: {
    type: string;
    size: string;
  };
  numSmall: number;
  numMedium: number;
  numLarge: number;
  firstAttackDelayDays: number;
};

type NumberOfEntities = number;
interface StompVillageOption {
  /** The faction or factions to match (e.g. FACTION_PIGLINS or an array of faction names) */
  factions: FactionNameArray | FactionNameId[];

  /** The village size(s) to match (e.g. BASE_SIZE_OUTPOST or an array of sizes) */
  sizes: VillageSizeKey | VillageSizeKey[]; // TODO: Type fully.

  /** Whether to include villages that are alive */
  alive: boolean;

  /** Whether to include villages that are dead */
  dead: boolean;

  /**
   * The minimum number of entities that must be present
   * to avoid stomping them.
   */
  minimumPresenceToKeepFromStomping: NumberOfEntities;
}

interface StompOptionsObj {
  /**
   * An optional array of options to determine which villages
   * with texture stamps should be stomped.
   */
  stompVillagesWithTextureStamps?: StompVillageOption[];

  /**
   * If true, wellhouses will also be considered for stomping.
   */
  stompWellhouses?: boolean;
}
type StompOptions = StompOptionsObj | undefined;

/**
 * Configuration for the claimed area radius.
 * Must always have a "default" value, and optionally (for example) a value for "boss".
 * The index signature allows use of a VillageSizeKey.
 */
interface ClaimedAreaRadiusConfig {
  default: number;
  boss?: number;
  [size: string]: number | undefined;
}

/**
 * Configuration for texture stamp padding.
 * Must always have a "default" value.
 * The index signature allows looking up a base size even if it wasn’t defined.
 */
interface TextureStampPaddingConfig {
  default: number;
  [size: string]: number | undefined;
}

/**
 * Configuration for base placements.
 */
interface BasePlacementConfig {
  /** The minimum distance for the WoF (well of fate) effect (as a multiplier) */
  wofMinDistance: number;

  /** The minimum distance to players */
  playersMinDistance: number;

  /** Multiplier for ocean proximity (e.g. 0.7 means % of the claimed area) */
  oceanMinDistance: number;

  /** Extra spacing between a claimed area and friendly villages */
  minDistanceToFriendlyVillages: number;

  /** Minimum distances to mob alliance occupation bases per faction */
  minDistanceToMobAllianceOccupationBases: Record<FactionNameId, number>;

  /** Preferred biomes per faction */
  biomePreferences: Record<FactionNameId, BiomeIdentifier[]>;

  /** Maximum allowed elevation per faction */
  maxElevationAllowed: Record<FactionNameId, number>;

  /** The claimed area radius configuration per faction */
  claimedAreaRadius: Record<FactionNameId, ClaimedAreaRadiusConfig>;

  /** Texture stamp padding configuration per faction */
  textureStampPadding: Record<FactionNameId, TextureStampPaddingConfig>;
}

// Type definitions
type TriggerConfig = {
  eval: () => boolean;
};

type PhaseAction = {
  action: (faction: FactionNameId, phase: number) => void;
};

type InvasionPhaseConfig = Record<
  number,
  {
    triggers: Record<string, TriggerConfig>; // Triggers for each phase
    actions: PhaseAction[]; // Actions to perform when the phase progresses
  }
>;

// Define the structure of the invasion helper value
type IInvasionHelperValue = {
  invasionPhaseVar: string; // Variable tracking the current invasion phase
  factionObjects: Record<string, IFactionData>; // Mapping of faction keys to faction data
};

type FactionEntryMap = {
  piglin: PiglinFactionEntry;
  undead: UndeadFactionEntry;
  culture: CultureFactionEntry;
  end: EndFactionEntry;
  host: HostFactionEntry;
};
