import {
  CULTURE_FactionNames,
  END_FactionNames,
  HOSTS_FactionNames,
  PIGLIN_FactionNames,
  UNDEAD_FactionNames,
} from "scripts_bType/FACTION_NAMES.ts";

import { MAP_Key } from "./MAP_Key.ts";

/**
 * Contains faction arrival key mappings for map system interactions.
 * @readonly
 * @remarks
 * Structure includes:
 * - Culture faction arrival keys (CURSELANDS, DRYLANDS, WETLANDS)
 * - End faction arrival keys (PORTAL)
 * - Piglin horde arrival keys (HORDERUNNERS, UNBREAKABLES, ROTTERS, FROST, BLAZE)
 * - Host faction arrival keys (ACTION, FORESIGHT, KNOWLEDGE)
 * - Undead faction arrival keys (SKELETON, ZOMBIE)
 */
export const MAP_ArrivalKeys: MAP_ArrivalKeysType = {
  culture: {
    [CULTURE_FactionNames.curselands]: MAP_Key.ARRIVAL.CULTURE.CURSELANDS,
    [CULTURE_FactionNames.drylands]: MAP_Key.ARRIVAL.CULTURE.DRYLANDS,
    [CULTURE_FactionNames.wetlands]: MAP_Key.ARRIVAL.CULTURE.WETLANDS,
  } as Record<AnyCultureFaction, string>,
  end: {
    [END_FactionNames.ruinedPortal]: MAP_Key.ARRIVAL.END.PORTAL,
  } as Record<AnyEndFaction, string>,
  piglin: {
    [PIGLIN_FactionNames.horderunners]: MAP_Key.ARRIVAL.PIGLIN.HORDERUNNERS,
    [PIGLIN_FactionNames.unbreakables]: MAP_Key.ARRIVAL.PIGLIN.UNBREAKABLES,
    [PIGLIN_FactionNames.rotters]: MAP_Key.ARRIVAL.PIGLIN.ROTTERS,
    [PIGLIN_FactionNames.frost]: MAP_Key.ARRIVAL.PIGLIN.FROST,
    [PIGLIN_FactionNames.blaze]: MAP_Key.ARRIVAL.PIGLIN.BLAZE,
  } as Record<AnyPiglinMainHorde, string>,
  host: {
    [HOSTS_FactionNames.action]: MAP_Key.ARRIVAL.HOST.ACTION,
    [HOSTS_FactionNames.foresight]: MAP_Key.ARRIVAL.HOST.FORESIGHT,
    [HOSTS_FactionNames.knowledge]: MAP_Key.ARRIVAL.HOST.KNOWLEDGE,
  } as Record<AnyHostFaction, string>,
  undead: {
    [UNDEAD_FactionNames.skeleton]: MAP_Key.ARRIVAL.UNDEAD.SKELETON,
    [UNDEAD_FactionNames.zombie]: MAP_Key.ARRIVAL.UNDEAD.ZOMBIE,
  } as Record<AnyUndeadFaction, string>,
};
