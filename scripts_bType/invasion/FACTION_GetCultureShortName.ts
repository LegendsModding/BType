/**
 * @function GetMobAllianceName
 * @description Converts a mob alliance input to its corresponding name.
 * @param {MobAllianceType} mobFaction The mob alliance input to convert.
 * @returns {string | null} The name of the mob alliance or null if the input is invalid.
 */
export const FACTION_GetCultureShortName = (
  mobFaction: AnyCultureFaction,
): CultureFactionName | null => {
  switch (mobFaction) {
    case "faction.culture.curselands":
      return "curselands";
    case "faction.culture.drylands":
      return "drylands";
    case "faction.culture.wetlands":
      return "wetlands";
    default:
      return null;
  }
};
