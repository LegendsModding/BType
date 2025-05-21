/**
 * @function GetMobAllianceName
 * @description Converts a mob alliance input to its corresponding name.
 * @param {MobAllianceType} mobFaction The mob alliance input to convert.
 * @returns {string | null} The name of the mob alliance or null if the input is invalid.
 */
export const FACTION_GetUndeadShortName = (
  mobFaction: AnyUndeadFaction,
): AnyUndeadName | null => {
  switch (mobFaction) {
    case "faction.undead.skeleton":
      return "skeleton";
    case "faction.undead.zombie":
      return "zombie";
    default:
      return null;
  }
};
