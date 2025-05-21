/**
 * @function GetMobAllianceName
 * @description Converts a mob alliance input to its corresponding name.
 * @param {MobAllianceType} mobFaction The mob alliance input to convert.
 * @returns {string | null} The name of the mob alliance or null if the input is invalid.
 */
export const FACTION_GetHostShortName = (
  mobFaction: AnyHostFaction,
): AnyHostName | null => {
  switch (mobFaction) {
    case "faction.host.action":
      return "action";
    case "faction.host.foresight":
      return "foresight";
    case "faction.host.knowledge":
      return "knowledge";
    default:
      return null;
  }
};
