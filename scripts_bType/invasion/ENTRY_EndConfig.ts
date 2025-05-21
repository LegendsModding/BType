import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { TRIGGER_TIME_IMMEDIATE } from "scripts_bType/counters/CountersTriggersConst.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { END_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { SNAPSHOT_EndEntryStart } from "scripts_bType/snapshots/SNAPSHOT_EndEntryStart.ts";
import { SNAPSHOT_EndPregameStarted } from "scripts_bType/snapshots/SNAPSHOT_EndPregameStarted.ts";
import { TRIGGER_DaysSince } from "scripts_bType/triggers/TRIGGER_DaysSince.ts";

/**
 * Configuration for end-game faction entries.
 * Manages world-ending entities and their introduction timing.
 * @property {number} invasionStartAfterFirstEstablished - Invasion delay setting
 * @property {EndFactionEntry[]} factions - End faction configurations
 * @example
 * // Initialize end-game progression
 * DIFFICULTY_RegisterConfig("end_system", ENTRY_EndConfig, "normal");
 */
export const ENTRY_EndConfig = {
  invasionStartAfterFirstEstablished: 0,
  factions: [
    // eslint-disable-next-line jsdoc/lines-before-block
    /**
     * Ruined portal end faction configuration.
     */
    {
      id: "ruinedEndPortal",
      name: "faction.end.ruined_portal.name",
      type: "end" as const,
      factionPool: [END_FactionNames.ruinedPortal],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_EndEntryStart(
            END_FactionNames.ruinedPortal,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_EndPregameStarted(
            END_FactionNames.ruinedPortal,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies EndFactionEntry,
  ],
};

DIFFICULTY_RegisterConfig(
  "end_entry_config",
  ENTRY_EndConfig,
  GAME_DIFFICULTY.easy,
);
