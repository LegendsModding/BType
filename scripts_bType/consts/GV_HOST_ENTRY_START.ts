import { HOSTS_FactionNames } from "scripts_bType/FACTION_NAMES.ts";

/**
 * Global variable namespace for host faction entry tracking.
 * Maps host faction names to their respective entry start flags.
 * Used to manage AI ally/enemy faction introductions.
 * @constant
 * type {Record<AnyHostFaction, string>}
 */
export const GV_HOST_ENTRY_START: Record<AnyHostFaction, string> = {
  [HOSTS_FactionNames.action]: "gv_faction_host_action_entry_start",
  [HOSTS_FactionNames.foresight]: "gv_faction_host_foresight_entry_start",
  [HOSTS_FactionNames.knowledge]: "gv_faction_host_knowledge_entry_start",
};
