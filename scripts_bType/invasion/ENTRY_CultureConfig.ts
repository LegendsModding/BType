import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { TRIGGER_TIME_IMMEDIATE } from "scripts_bType/counters/CountersTriggersConst.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { CULTURE_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { SNAPSHOT_CultureEntryStart } from "scripts_bType/snapshots/SNAPSHOT_CultureEntryStart.ts";
import { SNAPSHOT_CulturePregameStarted } from "scripts_bType/snapshots/SNAPSHOT_CulturePregameStarted.ts";
import { TRIGGER_DaysSince } from "scripts_bType/triggers/TRIGGER_DaysSince.ts";

/**
 * Configuration for cultural faction entry progression.
 * Defines how and when different cultural groups enter the game world.
 * @property {number} invasionStartAfterFirstEstablished - Delay in days before invasion starts after first faction establishment
 * @property {CultureEntry[]} cultures - Array of cultural faction configurations
 * @example
 * // Register cultural entry system
 * DIFFICULTY_RegisterConfig("culture_system", ENTRY_CultureConfig, "easy");
 */
export const ENTRY_CultureConfig = {
  invasionStartAfterFirstEstablished: 0,
  cultures: [
    // eslint-disable-next-line jsdoc/lines-before-block
    /**
     * Curselands culture configuration.
     * Represents cursed dwellers with immediate entry.
     */
    {
      id: "curselands",
      name: "faction.culture.curselands.name",
      type: "culture" as const,
      factionPool: [CULTURE_FactionNames.curselands],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_CultureEntryStart(
            CULTURE_FactionNames.curselands,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_CulturePregameStarted(
            CULTURE_FactionNames.curselands,
          ) as SnapshotGeneric,
        ),
      },
    },
    {
      id: "drylands",
      name: "faction.culture.drylands.name",
      type: "culture" as const,
      factionPool: [CULTURE_FactionNames.drylands],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_CultureEntryStart(
            CULTURE_FactionNames.drylands,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_CulturePregameStarted(
            CULTURE_FactionNames.drylands,
          ) as SnapshotGeneric,
        ),
      },
    },
    {
      id: "wetlands",
      name: "faction.culture.wetlands.name",
      type: "culture" as const,
      factionPool: [CULTURE_FactionNames.wetlands],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_CultureEntryStart(
            CULTURE_FactionNames.wetlands,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_CulturePregameStarted(
            CULTURE_FactionNames.wetlands,
          ) as SnapshotGeneric,
        ),
      },
    },
  ],
};

DIFFICULTY_RegisterConfig(
  "culture_entry_config",
  ENTRY_CultureConfig,
  GAME_DIFFICULTY.easy,
);
