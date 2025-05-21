import { OUTPUT_DisableBeaconForFaction } from "./OUTPUT_DisableBeaconForFaction.ts";

/**
 *
 * @param factions
 */
export const OUTPUT_DisableBeaconForFactions = (
  factions: FactionNameArray,
): void => {
  factions.forEach((faction) => {
    OUTPUT_DisableBeaconForFaction(faction);
  });
};
