import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { OCCUPATION_Val } from "./OCCUPATION_Val.ts";

/**
 * Retrieves occupation base identifiers for specified faction types.
 * @param factionType Faction classification category.
 * @returns {VillageID[]} Array of village slot identifiers or empty array on failure.
 * @remarks
 * Maps faction categories to predefined occupation slots using internal slot registries.
 * Validates each slot's existence through placement system queries.
 * Returns empty array for undefined faction types or invalid slot configurations.
 */
export const FACTION_GetOccupationBases = (
  factionType: string,
): VillageID[] => {
  const occupationBases: VillageID[] = [];
  const factionOccupationSlots: Record<string, string[]> = {
    culture: ["drylands", "wetlands", "curselands"], // Culture factions
    end: ["ruined_portal"],
    piglin: ["horderunners", "unbreakables", "rotters", "frost", "blaze"], // Piglin factions
    player: ["campaign", "pvp"], // Player factions
    hosts: ["action", "foresight", "knowledge"],
    undead: ["skeleton", "zombie"], // Mob factions
  };

  // Retrieve the list of occupation slots for the given faction type
  const occupationSlots = factionOccupationSlots[factionType];
  if (!occupationSlots) {
    FORESIGHT.error(
      `[LFC] No occupation slots defined for faction type ${factionType}`,
    );
    return occupationBases;
  }

  // Iterate through each occupation slot and attempt to find its position
  for (const slot of occupationSlots) {
    const slotData = OCCUPATION_Val[slot] as Record<string, string>;
    const occupationBaseSlot = slotData.villageSlot;
    if (!occupationBaseSlot) {
      FORESIGHT.error(`[LFC] No base slot defined for occupation slot ${slot}`);
      continue;
    }

    OUTPUT_PlacementStart();
    OUTPUT_PlacementSlotTag(occupationBaseSlot);
    if (OUTPUT_PlacementExecute()) {
      occupationBases.push(QUERY_PlacementResultPosition());
    } else {
      FORESIGHT.error(
        `[LFC] Couldn't find the occupation base slot for ${slot}`,
      );
    }
  }

  return occupationBases;
};
