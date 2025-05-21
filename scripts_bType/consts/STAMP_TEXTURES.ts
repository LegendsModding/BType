import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { VILLAGE_SIZE } from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

/**
 * Faction-specific village texture configurations.
 * @readonly
 * @see PIGLIN_FactionNames
 * @see VILLAGE_SIZE
 * @remarks
 * Maps piglin factions to their corresponding village texture assets based on size classifications. Used for visual differentiation of faction territories.
 */
export const STAMP_TEXTURES: StampTextureInfo[] = [
  {
    factionName: PIGLIN_FactionNames.horderunners,
    // Regular Bases
    [VILLAGE_SIZE.SMALL]: "piglin_attack_small_01",
    [VILLAGE_SIZE.MEDIUM]: "piglin_attack_medium_01",
    [VILLAGE_SIZE.LARGE]: "piglin_attack_large_01",
    [VILLAGE_SIZE.BOSS]: "piglin_attack_large_01",

    //[BASE_SIZE_OUTPOST]: "piglin_attack_outpost_01",

    // Village Attack Bases
    //[BASE_SIZE_FOB_SMALL]: "piglin_attack_ob",
    //[BASE_SIZE_FOB_MEDIUM]: "piglin_attack_ob",
    //[BASE_SIZE_FOB_LARGE]: "piglin_attack_ob",
    // MA Occupation Bases
    //[BASE_SIZE_PIGLIN_CREEPER]: "piglin_attack_small_01",
    //[BASE_SIZE_PIGLIN_SKELETON]: "piglin_attack_small_01",
    //[BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_attack_small_01",
  },
  {
    factionName: PIGLIN_FactionNames.unbreakables,
    // Regular Bases
    [VILLAGE_SIZE.SMALL]: "piglin_biome_defend_small",
    [VILLAGE_SIZE.MEDIUM]: "piglin_biome_defend_medium",
    [VILLAGE_SIZE.LARGE]: "piglin_defend_large_01",
    [VILLAGE_SIZE.BOSS]: "piglin_defend_boss_01",
    //[BASE_SIZE_OUTPOST]: "piglin_defend_outpost_01",
    // Village Attack Bases
    //[BASE_SIZE_FOB_SMALL]: "piglin_defend_ob",
    //[BASE_SIZE_FOB_MEDIUM]: "piglin_defend_ob",
    //[BASE_SIZE_FOB_LARGE]: "piglin_defend_ob",
    // MA Occupation Bases
    //[BASE_SIZE_PIGLIN_CREEPER]: "piglin_biome_defend_small",
    //[BASE_SIZE_PIGLIN_SKELETON]: "piglin_biome_defend_small",
    //[BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_biome_defend_small",
  },
  {
    factionName: PIGLIN_FactionNames.rotters,
    // Regular Bases
    [VILLAGE_SIZE.SMALL]: "piglin_biome_obstacle_small",
    [VILLAGE_SIZE.MEDIUM]: "piglin_biome_obstacle_medium",
    [VILLAGE_SIZE.LARGE]: "piglin_biome_obstacle_large",
    [VILLAGE_SIZE.BOSS]: "piglin_biome_obstacle_boss",
    //[BASE_SIZE_OUTPOST]: "piglin_obstacle_outpost_01",
    // Village Attack Bases
    //[BASE_SIZE_FOB_SMALL]: "piglin_obstacle_ob",
    //[BASE_SIZE_FOB_MEDIUM]: "piglin_obstacle_ob",
    //[BASE_SIZE_FOB_LARGE]: "piglin_obstacle_ob",
    // MA Occupation Bases
    //[BASE_SIZE_PIGLIN_CREEPER]: "piglin_obstacle_ma_01",
    //[BASE_SIZE_PIGLIN_SKELETON]: "piglin_obstacle_ma_01",
    //[BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_obstacle_ma_01",
  },
  {
    factionName: PIGLIN_FactionNames.blaze,
    // Regular Bases
    [VILLAGE_SIZE.SMALL]: "piglin_biome_obstacle_small",
    [VILLAGE_SIZE.MEDIUM]: "piglin_biome_obstacle_medium",
    [VILLAGE_SIZE.LARGE]: "piglin_biome_obstacle_large",
    [VILLAGE_SIZE.BOSS]: "piglin_biome_obstacle_boss",
    //[BASE_SIZE_OUTPOST]: "piglin_obstacle_outpost_01",
    // Village Attack Bases
    //[BASE_SIZE_FOB_SMALL]: "piglin_obstacle_ob",
    //[BASE_SIZE_FOB_MEDIUM]: "piglin_obstacle_ob",
    //[BASE_SIZE_FOB_LARGE]: "piglin_obstacle_ob",
    // MA Occupation Bases
    //[BASE_SIZE_PIGLIN_CREEPER]: "piglin_obstacle_ma_01",
    //[BASE_SIZE_PIGLIN_SKELETON]: "piglin_obstacle_ma_01",
    //[BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_obstacle_ma_01",
  },
  {
    factionName: PIGLIN_FactionNames.frost,
    // Regular Bases
    [VILLAGE_SIZE.SMALL]: "piglin_biome_obstacle_small",
    [VILLAGE_SIZE.MEDIUM]: "piglin_biome_obstacle_medium",
    [VILLAGE_SIZE.LARGE]: "piglin_biome_obstacle_large",
    [VILLAGE_SIZE.BOSS]: "piglin_biome_obstacle_boss",
    //[BASE_SIZE_OUTPOST]: "piglin_obstacle_outpost_01",
    // Village Attack Bases
    //[BASE_SIZE_FOB_SMALL]: "piglin_obstacle_ob",
    //[BASE_SIZE_FOB_MEDIUM]: "piglin_obstacle_ob",
    //[BASE_SIZE_FOB_LARGE]: "piglin_obstacle_ob",
    // MA Occupation Bases
    //[BASE_SIZE_PIGLIN_CREEPER]: "piglin_obstacle_ma_01",
    //[BASE_SIZE_PIGLIN_SKELETON]: "piglin_obstacle_ma_01",
    //[BASE_SIZE_PIGLIN_ZOMBIE]: "piglin_obstacle_ma_01",
  },
];
