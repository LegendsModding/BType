import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * @function QUERY_GetFaction
 * @description Converts a piglin faction input to its corresponding name.
 * @param {PiglinFactionName} piglinFaction The piglin action input to convert.
 * @returns {PiglinFactionName | null} The name of the piglin faction or null if the input is invalid.
 */
export const FACTION_GetPiglinShortName = (
  piglinFaction: AnyPiglinFaction,
): PiglinFactionName | null => {
  switch (piglinFaction) {
    case "faction.piglin.horderunners":
      return "horderunners"; // TODO
    case "faction.piglin.unbreakables":
      return "unbreakables";
    case "faction.piglin.rotters":
      return "rotters";
    case "faction.piglin.frost":
      return "frost";
    case "faction.piglin.blaze":
      return "blaze";
    //case "faction.piglin.dbb":
    //  return "dbb";
    //case "faction.piglin.roaming":
    //  return "roaming_piglin";
    //case "faction.piglin.wof":
    //  return "wof_piglin";
    default:
      FORESIGHT.error("Invalid faction passed to GetPiglinFactionShortName!");
      return null;
  }
};
