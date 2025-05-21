/**
 * @function GetMobAllianceName
 * @description Converts a mob alliance input to its corresponding name.
 * @param {MobAllianceType} mobFaction The mob alliance input to convert.
 * @returns {string | null} The name of the mob alliance or null if the input is invalid.
 */
export const FACTION_GetEndShortName = (
  mobFaction: AnyEndFaction,
): AnyEndName | null => {
  switch (mobFaction) {
    case "faction.end.ruined_portal":
      return "ruined_portal";
    default:
      return null;
  }
};
