import {
  CULTURE_FactionNames,
  END_FactionNames,
  PIGLIN_FactionNames,
  PLAYER_FactionNames,
  HOSTS_FactionNames,
  UNDEAD_FactionNames,
} from "scripts_bType/FACTION_NAMES.ts";

/**
 * Determines faction category classification.
 * @param factionName Target faction identifier.
 * @returns {FactionCategory | undefined} Faction category or undefined if unclassified.
 * @remarks
 * Evaluates membership across cultural, End, piglin, player, host, and undead faction registries.
 * Returns undefined for unregistered factions. Critical for system routing and behavior differentiation.
 */
export const FACTION_GetType = (
  factionName: FactionNameId,
): FactionCategory | undefined => {
  if (CULTURE_FactionNames.all.includes(factionName as AnyCultureFaction)) {
    return "culture";
  }
  if (END_FactionNames.all.includes(factionName as AnyEndFaction)) {
    return "end";
  }
  if (PIGLIN_FactionNames.all.includes(factionName as AnyPiglinFaction)) {
    return "piglin";
  }
  if (PLAYER_FactionNames.all.includes(factionName as AnyPlayerFaction)) {
    return "player";
  }
  if (HOSTS_FactionNames.all.includes(factionName as AnyHostFaction)) {
    return "host";
  }
  if (UNDEAD_FactionNames.all.includes(factionName as AnyUndeadFaction)) {
    return "undead";
  }
  return;
};
