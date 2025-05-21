import {
  CULTURE_FactionNames,
  PIGLIN_FactionNames,
  PLAYER_FactionNames,
  UNDEAD_FactionNames,
} from "scripts_bType/FACTION_NAMES.ts";

/**
 * Village placement configuration parameters for procedural generation systems.
 * @readonly
 * @remarks
 * Contains spatial constraints and biome preferences for faction base placement:
 * wofMinDistance defines minimum separation from Well of Fate (730 units),
 * playersMinDistance enforces 500-unit player proximity buffer,
 * oceanMinDistance specifies 70% claimed area allowance before ocean encroachment.
 * minDistanceToFriendlyVillages maintains 50-unit buffer between allied settlements.
 * minDistanceToMobAllianceOccupationBases maps factions to occupation base distances.
 * biomePreferences contains commented placeholder entries for future biome prioritization.
 * maxElevationAllowed restricts placement based on terrain height per faction.
 * claimedAreaRadius defines influence zones with default and boss-specific values (TODO_boss indicates pending implementation).
 * textureStampPadding adjusts visual footprint spacing with default zero values for most factions.
 */
export const VILLAGE_PlacementConfig: BasePlacementConfig = {
  wofMinDistance: 730, // theoretical max radius for fatelands biome
  playersMinDistance: 500,
  oceanMinDistance: 0.7, // specific to bases -  % of claimed area before it "dips" into the ocean
  minDistanceToFriendlyVillages: 50, // how much space there is between friendly villages and a border of a claimed area
  minDistanceToMobAllianceOccupationBases: {
    [PIGLIN_FactionNames.horderunners]: 325,
    [PIGLIN_FactionNames.unbreakables]: 275,
    [PIGLIN_FactionNames.rotters]: 400,
    [PIGLIN_FactionNames.frost]: 100,
    [PIGLIN_FactionNames.blaze]: 100,
    "faction.mob.creeper": 0,
    "faction.mob.skeleton": 0,
    "faction.mob.zombie": 0,
    "faction.culture.drylands": 0,
    "faction.culture.wetlands": 0,
    "faction.culture.curselands": 0,
    "faction.player.campaign": 0,
    "faction.player.pvp": 0,
    "faction.end.ruined_portal": 0,
    "faction.host.action": 0,
    "faction.host.foresight": 0,
    "faction.host.knowledge": 0,
    "faction.undead.skeleton": 0,
    "faction.undead.zombie": 0,
  },
  biomePreferences: {
    [PIGLIN_FactionNames.horderunners]: [
      "forest",
      "frostlands",
      "grasslands",
      "drylands",
      "brokenlands",
      "brokenlands_ridge",
    ],
    [PIGLIN_FactionNames.unbreakables]: ["mountain_parent_valleys"],
    [PIGLIN_FactionNames.rotters]: ["wetlands", "jungle"],
    [PIGLIN_FactionNames.frost]: ["icy"],
    [PIGLIN_FactionNames.blaze]: ["supacold"],
    "faction.mob.creeper": [],
    "faction.mob.skeleton": [],
    "faction.mob.zombie": [],
    "faction.culture.drylands": [],
    "faction.culture.wetlands": [],
    "faction.culture.curselands": [],
    "faction.player.campaign": [],
    "faction.player.pvp": [],
    "faction.end.ruined_portal": [],
    "faction.host.action": [],
    "faction.host.foresight": [],
    "faction.host.knowledge": [],
    "faction.undead.skeleton": [],
    "faction.undead.zombie": [],
  },
  maxElevationAllowed: {
    [PIGLIN_FactionNames.horderunners]: 50,
    [PIGLIN_FactionNames.unbreakables]: 150,
    [PIGLIN_FactionNames.rotters]: 70,
    [PIGLIN_FactionNames.frost]: 155,
    [PIGLIN_FactionNames.blaze]: 128,
    "faction.mob.creeper": 0,
    "faction.mob.skeleton": 0,
    "faction.mob.zombie": 0,
    "faction.culture.drylands": 0,
    "faction.culture.wetlands": 0,
    "faction.culture.curselands": 0,
    "faction.player.campaign": 0,
    "faction.player.pvp": 0,
    "faction.end.ruined_portal": 0,
    "faction.host.action": 0,
    "faction.host.foresight": 0,
    "faction.host.knowledge": 0,
    "faction.undead.skeleton": 0,
    "faction.undead.zombie": 0,
  },
  claimedAreaRadius: {
    // specific to bases - the radius of claimed area to bring in with the base
    [PIGLIN_FactionNames.horderunners]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [PIGLIN_FactionNames.unbreakables]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [PIGLIN_FactionNames.rotters]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [PIGLIN_FactionNames.frost]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [PIGLIN_FactionNames.blaze]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [UNDEAD_FactionNames.skeleton]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [UNDEAD_FactionNames.zombie]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [CULTURE_FactionNames.curselands]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [CULTURE_FactionNames.drylands]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [CULTURE_FactionNames.wetlands]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [PLAYER_FactionNames.campaign]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    [PLAYER_FactionNames.pvp]: {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.mob.creeper": {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.mob.skeleton": {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.mob.zombie": {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.end.ruined_portal": {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.host.action": {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.host.foresight": {
      default: 350,
      ["TODO_boss"]: 500,
    },
    "faction.host.knowledge": {
      default: 350,
      ["TODO_boss"]: 500,
    },
  },
  textureStampPadding: {
    // in case the texture stamp has too much / too little padding, we can adjust the padding here
    [PIGLIN_FactionNames.horderunners]: {
      default: 0,
    },
    [PIGLIN_FactionNames.unbreakables]: {
      default: 0,
    },
    [PIGLIN_FactionNames.rotters]: {
      default: 0,
    },
    [PIGLIN_FactionNames.frost]: {
      default: 0,
    },
    [PIGLIN_FactionNames.blaze]: {
      default: 0,
    },
    [UNDEAD_FactionNames.skeleton]: {
      default: 350,
    },
    [UNDEAD_FactionNames.zombie]: {
      default: 350,
    },
    [CULTURE_FactionNames.curselands]: {
      default: 350,
    },
    [CULTURE_FactionNames.drylands]: {
      default: 350,
    },
    [CULTURE_FactionNames.wetlands]: {
      default: 350,
    },
    [PLAYER_FactionNames.campaign]: {
      default: 350,
    },
    [PLAYER_FactionNames.pvp]: {
      default: 350,
    },
    "faction.mob.creeper": {
      default: 350,
    },
    "faction.mob.skeleton": {
      default: 350,
    },
    "faction.mob.zombie": {
      default: 350,
    },
    "faction.end.ruined_portal": {
      default: 350,
    },
    "faction.host.action": {
      default: 350,
    },
    "faction.host.foresight": {
      default: 350,
    },
    "faction.host.knowledge": {
      default: 350,
    },
  },
};
