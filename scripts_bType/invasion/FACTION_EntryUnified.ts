import { FACTION_ALL } from "scripts_bType/FACTION_NAMES.ts";

import { FACTION_Entry } from "./FACTION_Entry.ts";

/**
 * Create a unified FactionEntry using a global variable name that is faction agnostic.
 * Allowed values are FACTION_ALL.
 */
export const FACTION_EntryUnified = FACTION_Entry(
  "gv_faction_entry",
  FACTION_ALL,
);
