import { GAME_DIFFICULTY } from "scripts_bType/consts/GAME_DIFFICULTY.ts";
import { TRIGGER_TIME_IMMEDIATE } from "scripts_bType/counters/CountersTriggersConst.ts";
import { DIFFICULTY_RegisterConfig } from "scripts_bType/difficulty/DIFFICULTY_RegisterConfig.ts";
import { HOSTS_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { SNAPSHOT_HostEntryStart } from "scripts_bType/snapshots/SNAPSHOT_HostEntryStart.ts";
import { SNAPSHOT_HostPregameStarted } from "scripts_bType/snapshots/SNAPSHOT_HostPregameStarted.ts";
import { TRIGGER_DaysSince } from "scripts_bType/triggers/TRIGGER_DaysSince.ts";

/**
 * Configuration for host faction entries.
 * Controls entry of Host factions that assist or challenge players.
 * @property {number} invasionStartAfterFirstEstablished - Invasion trigger delay
 * @property {HostEntry[]} hosts - Host faction configurations
 * @example
 * // Set up host allies
 * DIFFICULTY_RegisterConfig("host_system", ENTRY_HostConfig, "hard");
 */
export const ENTRY_HostConfig = {
  invasionStartAfterFirstEstablished: 0,
  hosts: [
    // eslint-disable-next-line jsdoc/lines-before-block
    /**
     * Action host faction configuration.
     */
    {
      id: "action",
      name: "faction.host.action.name",
      type: "host" as const,
      factionPool: [HOSTS_FactionNames.action],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_HostEntryStart(HOSTS_FactionNames.action) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_HostPregameStarted(
            HOSTS_FactionNames.action,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies HostFactionEntry,
    {
      id: "foresight",
      name: "faction.host.foresight.name",
      type: "host" as const,
      factionPool: [HOSTS_FactionNames.foresight],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_HostEntryStart(
            HOSTS_FactionNames.foresight,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_HostPregameStarted(
            HOSTS_FactionNames.foresight,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies HostFactionEntry,
    {
      id: "knowledge",
      name: "faction.host.knowledge.name",
      type: "host" as const,
      factionPool: [HOSTS_FactionNames.knowledge],
      pregame: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_HostEntryStart(
            HOSTS_FactionNames.knowledge,
          ) as SnapshotGeneric,
        ),
      },
      firstBase: {
        [TRIGGER_TIME_IMMEDIATE]: TRIGGER_DaysSince(
          0,
          SNAPSHOT_HostPregameStarted(
            HOSTS_FactionNames.knowledge,
          ) as SnapshotGeneric,
        ),
      },
    } satisfies HostFactionEntry,
  ],
};

DIFFICULTY_RegisterConfig(
  "host_entry_config",
  ENTRY_HostConfig,
  GAME_DIFFICULTY.easy,
);
