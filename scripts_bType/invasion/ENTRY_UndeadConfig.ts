import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { TRIGGER_TIME_IMMEDIATE } from "scripts_bType/counters/CountersTriggersConst.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { UNDEAD_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { SNAPSHOT_UndeadEntryStart } from "scripts_bType/snapshots/SNAPSHOT_UndeadEntryStart.ts";
import { SNAPSHOT_UndeadPregameStarted } from "scripts_bType/snapshots/SNAPSHOT_UndeadPregameStarted.ts";
import { TRIGGER_DaysSince } from "scripts_bType/triggers/TRIGGER_DaysSince.ts";

/**
 * Configuration for undead faction entries.
 * Controls zombie/skeleton faction introduction timing.
 * @property {number} invasionStartAfterFirstEstablished - Delay setting
 * @property {UndeadMobEntry[]} mobs - Undead faction configurations
 * @example
 * // Setup undead progression
 * DIFFICULTY_RegisterConfig("undead_system", ENTRY_UndeadConfig, "easy");
 */
export const ENTRY_UndeadConfig = {
  invasionStartAfterFirstEstablished: 0,
  mobs: [
    // eslint-disable-next-line jsdoc/lines-before-block
    /**
     * Skeleton undead configuration.
     * Their military primarily consists of basic ranged skeletal units.
     */
    {
      id: "skeleton",
      name: "faction.undead.skeleton.name",
      type: "undead" as const,
      factionPool: [UNDEAD_FactionNames.skeleton],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_UndeadEntryStart(
            UNDEAD_FactionNames.skeleton,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_UndeadPregameStarted(
            UNDEAD_FactionNames.skeleton,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies UndeadFactionEntry,
    {
      id: "zombie",
      name: "faction.undead.zombie.name",
      type: "undead" as const,
      factionPool: [UNDEAD_FactionNames.zombie],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_UndeadEntryStart(
            UNDEAD_FactionNames.zombie,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_UndeadPregameStarted(
            UNDEAD_FactionNames.zombie,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies UndeadFactionEntry,
  ],
};

DIFFICULTY_RegisterConfig(
  "undead_entry_config",
  ENTRY_UndeadConfig,
  GAME_DIFFICULTY.easy,
);
