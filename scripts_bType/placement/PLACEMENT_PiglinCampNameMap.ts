import { PLACEMENT_Name } from "./PLACEMENT_Name.ts";

/**
 * Mapping between village placement names and Act 1 campaign camp slots.
 * @readonly
 * @remarks
 * Connects biome-specific village placements to their corresponding campaign camp slots for procedural generation alignment.
 */
export const PIGLIN_CAMP_PLACEMENT_NAME_MAP: VillageToCampSlotMap = {
  [PLACEMENT_Name.FOREST_VILLAGE]: "act1CampsSlotForest",
  [PLACEMENT_Name.FROSTLANDS_VILLAGE]: "act1CampsSlotFrostlands",
  [PLACEMENT_Name.DRYLANDS_VILLAGE]: "act1CampsSlotDrylands",
  [PLACEMENT_Name.WETLANDS_VILLAGE]: "act1CampsSlotWetlands",
  [PLACEMENT_Name.GRASSLANDS_VILLAGE]: "act1CampsSlotGrasslands",
};
