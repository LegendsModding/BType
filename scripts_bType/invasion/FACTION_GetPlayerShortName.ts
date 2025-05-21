/**
 * @function GetMobAllianceName
 * @description Converts a mob alliance input to its corresponding name.
 * @param {MobAllianceType} mobFaction The mob alliance input to convert.
 * @returns {string | null} The name of the mob alliance or null if the input is invalid.
 */
export const FACTION_GetPlayerShortName = (
  mobFaction: AnyPlayerFaction,
): PlayerFactionName | null => {
  switch (mobFaction) {
    case "faction.player.campaign":
      return "campaign";
    case "faction.player.pvp":
      return "pvp";
    default:
      return null;
  }
};
