import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Configuration mappings for piglin faction central base sizes.
 * @readonly
 * @remarks
 * Contains size classifications for mobile war camps and permanent bastion structures. Used in procedural base generation and scaling calculations.
 */
export const PIGLIN_VillageSize = {
  centralBase: {
    horderunners: "horderunnersCentralBase", // Large War Camp // non-permanent, moves every night.
    unbreakables: "unbreakablesCentralBase", // Huge Bastion
    rotters: "rottersCentralBase", // Huge village.
    frost: "frostCentralBase", // Huge Fortress(ice)
    blaze: "blazeCentralBase", // Huge Citadel
  },
};

/**
 * Village type classification container.
 * @readonly
 * @remarks
 * Structure includes default and war camp type definitions. Used for village archetype differentiation in procedural systems.
 */
export const VILLAGE_TYPE = {
  camp: {
    default: "",
    war: "",
  },
};

/**
 * Configuration for Horderunners faction village setup parameters.
 * @readonly
 * @remarks
 * Defines initial base/outpost counts, establishment pacing, and attack delay timing. Central base uses mobile war camp archetype.
 */
export const HordeRunnersVillageSetup = {
  centralBase: {
    size: PIGLIN_VillageSize.centralBase.horderunners,
    type: "",
  },
  numSmall: 1,
  numMedium: 1,
  numLarge: 0,
  numInitialBases: 3,
  numInitialOutposts: 4,
  establishmentPace: 2,
  firstAttackDelayDays: 1,
};

/**
 * Configuration for Unbreakables faction village setup parameters.
 * @readonly
 * @remarks
 * Defines initial base/outpost counts, establishment pacing, and attack delay timing. Central base uses bastion archetype.
 */
export const UnbreakablesVillageSetup = {
  centralBase: {
    size: PIGLIN_VillageSize.centralBase.unbreakables,
    type: "",
  },
  numSmall: 1,
  numMedium: 1,
  numLarge: 0,
  numInitialBases: 3,
  numInitialOutposts: 4,
  establishmentPace: 2,
  firstAttackDelayDays: 1,
};

/**
 * Configuration for Rotters faction village setup parameters.
 * @readonly
 * @remarks
 * Defines initial base/outpost counts, establishment pacing, and attack delay timing. Central base uses obstacle-themed archetype.
 */
export const RottersVillageSetup = {
  centralBase: {
    size: PIGLIN_VillageSize.centralBase.rotters,
    type: "",
  },
  numSmall: 1,
  numMedium: 1,
  numLarge: 0,
  numInitialBases: 3,
  numInitialOutposts: 4,
  establishmentPace: 2,
  firstAttackDelayDays: 1,
};

/**
 * Configuration for Frost faction village setup parameters.
 * @readonly
 * @remarks
 * Defines initial base/outpost counts, establishment pacing, and attack delay timing. Central base uses ice fortress archetype.
 */
export const FrostVillageSetup = {
  centralBase: {
    size: PIGLIN_VillageSize.centralBase.frost,
    type: "",
  },
  numSmall: 1,
  numMedium: 1,
  numLarge: 0,
  numInitialBases: 3,
  numInitialOutposts: 4,
  establishmentPace: 2,
  firstAttackDelayDays: 1,
};

/**
 * Configuration for Blaze faction village setup parameters.
 * @readonly
 * @remarks
 * Defines initial base/outpost counts, establishment pacing, and attack delay timing. Central base uses volcanic citadel archetype.
 */
export const BlazeVillageSetup = {
  centralBase: {
    size: PIGLIN_VillageSize.centralBase.blaze,
    type: "",
  },
  numSmall: 1,
  numMedium: 1,
  numLarge: 0,
  numInitialBases: 3,
  numInitialOutposts: 4,
  establishmentPace: 2,
  firstAttackDelayDays: 1,
};

/**
 * Consolidated piglin faction village configuration registry.
 * @readonly
 * @remarks
 * Maps faction names to their respective village setup parameters. Used for procedural generation and faction management systems.
 */
export const ENTRY_PiglinVillagesSetup = {
  [PIGLIN_FactionNames.horderunners]: HordeRunnersVillageSetup,
  [PIGLIN_FactionNames.unbreakables]: UnbreakablesVillageSetup,
  [PIGLIN_FactionNames.rotters]: RottersVillageSetup,
  [PIGLIN_FactionNames.frost]: FrostVillageSetup,
  [PIGLIN_FactionNames.blaze]: BlazeVillageSetup,
};

/**
 * Registers difficulty-specific piglin base configuration.
 * @param configName Configuration identifier.
 * @param configData Setup parameters for piglin bases.
 * @param difficulty Target difficulty level.
 * @param debugEnabled Toggle for debug logging.
 * @remarks
 * Configures "horde_bases_setup_config" for easy difficulty with debug features enabled. Affects procedural generation parameters and AI behavior scaling.
 */
DIFFICULTY_RegisterConfig(
  "horde_bases_setup_config",
  ENTRY_PiglinVillagesSetup,
  GAME_DIFFICULTY.easy,
  true,
);
