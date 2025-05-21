import { VILLAGE_EmptyChest } from "scripts_bType/village/VILLAGE_EmptyChest.ts";
import { VILLAGE_ForEachWithActiveChest } from "scripts_bType/village/VILLAGE_ForEachWithActiveChest.ts";

/**
 *
 */
export const OUTPUT_EmptyAllVillageChests = (): void => {
  VILLAGE_ForEachWithActiveChest((village: EntityGroup) => {
    VILLAGE_EmptyChest(village as SingleEntity);
  });
};
