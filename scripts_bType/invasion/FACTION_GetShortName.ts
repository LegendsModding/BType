import { FACTION_GetCultureShortName } from "./FACTION_GetCultureShortName.ts";
import { FACTION_GetPiglinShortName } from "./FACTION_GetPiglinShortName.ts";
import { FACTION_GetPlayerShortName } from "./FACTION_GetPlayerShortName.ts";
import { FACTION_GetUndeadShortName } from "./FACTION_GetUndeadShortName.ts";

/**
 * @function GetMobAllianceName
 * @description Converts a mob alliance input to its corresponding name.
 * @param {MobAllianceType} factionName The mob alliance input to convert.
 * @returns {string | null} The name of the mob alliance or null if the input is invalid.
 */
export const FACTION_GetShortName = (
  factionName: FactionNameId,
): string | null => {
  if (factionName.includes("faction.player")) {
    const factionShortName = FACTION_GetPlayerShortName(
      factionName as AnyPlayerFaction,
    );
    return factionShortName;
  }
  if (factionName.includes("faction.culture")) {
    const factionShortName = FACTION_GetCultureShortName(
      factionName as AnyCultureFaction,
    );
    return factionShortName;
  }
  if (factionName.includes("faction.undead")) {
    const factionShortName = FACTION_GetUndeadShortName(
      factionName as AnyUndeadFaction,
    );
    return factionShortName;
  }
  if (factionName.includes("faction.piglin")) {
    const factionShortName = FACTION_GetPiglinShortName(
      factionName as AnyPiglinFaction,
    );
    return factionShortName;
  }
  return null;
};
