import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { TRIGGER_TIME_IMMEDIATE } from "scripts_bType/counters/CountersTriggersConst.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { SNAPSHOT_PiglinEntryStart } from "scripts_bType/snapshots/SNAPSHOT_PiglinEntryStart.ts";
import { SNAPSHOT_PiglinPregameStarted } from "scripts_bType/snapshots/SNAPSHOT_PiglinPregameStarted.ts";
import { TRIGGER_DaysSince } from "scripts_bType/triggers/TRIGGER_DaysSince.ts";

/**
 * Configuration for piglin horde entries.
 * Manages hostile piglin factions and their attack patterns.
 * @property {number} invasionStartAfterFirstEstablished - Post-establishment delay
 * @property {PiglinHordeEntry[]} hordes - Horde configurations
 * @example
 * // Configure piglin invasion system
 * DIFFICULTY_RegisterConfig("piglin_invasion", ENTRY_PiglinConfig, "normal");
 */
export const ENTRY_PiglinConfig = {
  invasionStartAfterFirstEstablished: 0,
  hordes: [
    // eslint-disable-next-line jsdoc/lines-before-block
    /**
     * Horderunners piglin configuration.
     * Represents fast-moving early-game aggressors.
     */
    {
      id: "horderunners",
      name: "faction.piglin.horderunners.name",
      type: "piglin" as const,
      factionPool: [PIGLIN_FactionNames.horderunners],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_PiglinEntryStart(
            PIGLIN_FactionNames.horderunners,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_PiglinPregameStarted(
            PIGLIN_FactionNames.horderunners,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies PiglinFactionEntry,
    {
      id: "unbreakables",
      name: "faction.piglin.unbreakables.name",
      type: "piglin" as const,
      factionPool: [PIGLIN_FactionNames.unbreakables],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_PiglinEntryStart(
            PIGLIN_FactionNames.unbreakables,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_PiglinPregameStarted(
            PIGLIN_FactionNames.unbreakables,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies PiglinFactionEntry,
    {
      id: "rotters",
      name: "faction.piglin.rotters.name",
      type: "piglin" as const,
      factionPool: [PIGLIN_FactionNames.rotters],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_PiglinEntryStart(
            PIGLIN_FactionNames.rotters,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_PiglinPregameStarted(
            PIGLIN_FactionNames.rotters,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies PiglinFactionEntry,
  ],
};

DIFFICULTY_RegisterConfig(
  "piglin_entry_config",
  ENTRY_PiglinConfig,
  GAME_DIFFICULTY.easy,
);
