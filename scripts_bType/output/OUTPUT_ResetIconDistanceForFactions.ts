import { OUTPUT_ResetIconDistanceForFaction } from "./OUTPUT_ResetIconDistanceForFaction.ts";

/**
 *
 * @param factions
 */
export const OUTPUT_ResetIconDistanceForFactions = (
  factions: FactionNameArray,
): NoReturn => {
  factions.forEach((factionName: FactionNameId) => {
    OUTPUT_ResetIconDistanceForFaction(factionName);
  });
};
