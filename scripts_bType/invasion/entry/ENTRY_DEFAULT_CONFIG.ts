import { TRIGGER_TIME_DAWN } from "scripts_bType/counters/CountersTriggersConst.ts";

import { ENTRY_CheckAndProgressCulture } from "../ENTRY_CheckAndProgressCulture.ts";
import { ENTRY_CheckAndProgressEnd } from "../ENTRY_CheckAndProgressEnd.ts";
import { ENTRY_CheckAndProgressHost } from "../ENTRY_CheckAndProgressHost.ts";
import { ENTRY_CheckAndProgressPiglin } from "../ENTRY_CheckAndProgressPiglin.ts";
import { ENTRY_CheckAndProgressUndead } from "../ENTRY_CheckAndProgressUndead.ts";
import { ENTRY_CultureConfig } from "../ENTRY_CultureConfig.ts";
import { ENTRY_EndConfig } from "../ENTRY_EndConfig.ts";
import { ENTRY_HostConfig } from "../ENTRY_HostConfig.ts";
import { ENTRY_PiglinConfig } from "../ENTRY_PiglinConfig.ts";
import { ENTRY_UndeadConfig } from "../ENTRY_UndeadConfig.ts";

/**
 * Default configuration for staggered faction entry systems.
 * @readonly
 * @remarks
 * Contains triggerTime (TRIGGER_TIME_DAWN) for phase activation timing.
 * factionProgressors maps faction categories to their respective entry configurations.
 * factionProgressFunctions links faction types to phase validation handlers.
 * Used for coordinating multi-faction invasion progression cadence.
 */
export const ENTRY_DEFAULT_CONFIG: StaggeredEntryConfig = {
  triggerTime: TRIGGER_TIME_DAWN,
  factionProgressors: {
    piglin: ENTRY_PiglinConfig.hordes,
    undead: ENTRY_UndeadConfig.mobs,
    culture: ENTRY_CultureConfig.cultures,
    end: ENTRY_EndConfig.factions,
    host: ENTRY_HostConfig.hosts,
  },
  factionProgressFunctions: {
    piglin: ENTRY_CheckAndProgressPiglin,
    undead: ENTRY_CheckAndProgressUndead,
    culture: ENTRY_CheckAndProgressCulture,
    end: ENTRY_CheckAndProgressEnd,
    host: ENTRY_CheckAndProgressHost,
  },
};
