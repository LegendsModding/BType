import { PLACEMENT_Name } from "./PLACEMENT_Name.ts";

/**
 * Mapping between placement names and piglin faction base slots.
 * @readonly
 * @remarks
 * Links village and alliance placements to their respective base slot identifiers for faction management systems.
 */
export const PLACEMENT_NameMap: PlacementNameToSlotMap = {
  [PLACEMENT_Name.FOREST_VILLAGE]: "villageForestPiglinBaseSlot",
  [PLACEMENT_Name.FROSTLANDS_VILLAGE]: "villageFrostlandsPiglinBaseSlot",
  [PLACEMENT_Name.DRYLANDS_VILLAGE]: "villageDrylandsPiglinBaseSlot",
  [PLACEMENT_Name.WETLANDS_VILLAGE]: "villageWetlandsPiglinBaseSlot",
  [PLACEMENT_Name.GRASSLANDS_VILLAGE]: "villageGrasslandsPiglinBaseSlot",
  [PLACEMENT_Name.CREEPER_ALLIANCE]: "creeperPiglinBaseSlot",
  [PLACEMENT_Name.SKELETON_ALLIANCE]: "skeletonPiglinBaseSlot",
  [PLACEMENT_Name.ZOMBIE_ALLIANCE]: "zombiePiglinBaseSlot",
};
