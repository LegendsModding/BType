import {
  CULTURE_FactionNames as CULTURE_FactionNames,
  END_FactionNames,
  HOSTS_FactionNames,
  MOB_FactionNames as MOB_FactionNames,
  PIGLIN_FactionNames as PIGLIN_FactionNames,
  PLAYER_FactionNames,
  UNDEAD_FactionNames,
} from "scripts_bType/FACTION_NAMES.ts";

import { OUTPUT_ResetIconDistanceForFaction } from "./OUTPUT_ResetIconDistanceForFaction.ts";
import { OUTPUT_ResetIconDistanceForFactions } from "./OUTPUT_ResetIconDistanceForFactions.ts";

/**
 *
 */
export const OUTPUT_ResetIconsForEveryone = (): void => {
  OUTPUT_ResetIconDistanceForFactions(CULTURE_FactionNames.all);
  //OUTPUT_ResetIconDistanceForFactions(FACTION_POI_ALL as FactionNamesArray);
  OUTPUT_ResetIconDistanceForFactions(MOB_FactionNames.all);
  OUTPUT_ResetIconDistanceForFactions(PIGLIN_FactionNames.all);
  OUTPUT_ResetIconDistanceForFactions(PLAYER_FactionNames.all);
  OUTPUT_ResetIconDistanceForFactions([
    HOSTS_FactionNames.action,
    HOSTS_FactionNames.foresight,
    HOSTS_FactionNames.knowledge,
  ]);
  OUTPUT_ResetIconDistanceForFactions([
    UNDEAD_FactionNames.skeleton,
    UNDEAD_FactionNames.zombie,
  ]);
  OUTPUT_ResetIconDistanceForFaction(END_FactionNames.ruinedPortal);
};
