/**
 * Represents the name of a placement configuration.
 *
 * This type defines a string that specifies the name of a placement. It is used to identify and
 * reference specific placement configurations.
 * type {string} PlacementName
 * @example
 * const placementName: PlacementName = "faction_1_placement";
 * @remarks
 * Use this type when you need to define placement names. Ensure that all values are descriptive and
 * follow a consistent naming convention to avoid confusion.
 */
declare type PlacementName = string;

/**
 * Represents the type of a placement configuration.
 *
 * This type defines a string that specifies the type of placement, such as "village", "fortress", or
 * other custom types. It allows developers to categorize placements based on their purpose.
 * type {string} PlacementType
 * @example
 * const placementType: PlacementType = "village";
 * @remarks
 * Use this type when you need to define placement types. Ensure that all values are descriptive and
 * follow a consistent naming convention to avoid confusion.
 */
declare type PlacementType = string;

/**
 * Represents the archetype of a world entity for placement configurations.
 *
 * This type defines a string that specifies the archetype of a world entity, such as
 * `"badger:world_center_locator"`. It ensures that placements are associated with valid entity types.
 * type {"badger:world_center_locator"} WorldEntityArchetype
 * @example
 * const worldEntityArchetype: WorldEntityArchetype = "badger:world_center_locator";
 * @remarks
 * Use this type when you need to define world entity archetypes. Ensure that all values conform to
 * the valid format to avoid runtime errors or unintended behavior.
 */
declare type WorldEntityArchetype = "badger:world_center_locator";

/** Village placement names */
type VillagePlacementName =
  | "forest_1_village"
  | "frostlands_1_village"
  | "drylands_1_village"
  | "wetlands_1_village"
  | "grasslands_1_village";

/** Mob alliance placement names */
type MobAlliancePlacementName =
  | "creeper_alliance"
  | "skeleton_alliance"
  | "zombie_alliance";

/** All placement names (Villages + Mob Alliances) */
type PlacementNameVillageAndMob =
  | VillagePlacementName
  | MobAlliancePlacementName;

type PlacementNameObject = {
  FOREST_VILLAGE: "forest_1_village";
  FROSTLANDS_VILLAGE: "frostlands_1_village";
  DRYLANDS_VILLAGE: "drylands_1_village";
  WETLANDS_VILLAGE: "wetlands_1_village";
  GRASSLANDS_VILLAGE: "grasslands_1_village";
  CREEPER_ALLIANCE: "creeper_alliance";
  SKELETON_ALLIANCE: "skeleton_alliance";
  ZOMBIE_ALLIANCE: "zombie_alliance";
};

/** Piglin base slot names */
type PiglinBaseSlotName =
  | "villageForestPiglinBaseSlot"
  | "villageFrostlandsPiglinBaseSlot"
  | "villageDrylandsPiglinBaseSlot"
  | "villageWetlandsPiglinBaseSlot"
  | "villageGrasslandsPiglinBaseSlot"
  | "creeperPiglinBaseSlot"
  | "skeletonPiglinBaseSlot"
  | "zombiePiglinBaseSlot";

/** Piglin camp slot names */
type PiglinCampSlotName =
  | "act1CampsSlotForest"
  | "act1CampsSlotFrostlands"
  | "act1CampsSlotDrylands"
  | "act1CampsSlotWetlands"
  | "act1CampsSlotGrasslands";

type AnyPiglinSlotName = PiglinBaseSlotName | PiglinCampSlotName;
type AnyPlacementSlotName =
  | VillagePlacementName
  | MobAlliancePlacementName
  | AnyPiglinSlotName;

/** Mapping of placement names to their slot names */
type PlacementNameToSlotMap = Record<PlacementName, PiglinBaseSlotName>;

/** Mapping of village placements to Piglin camp slots */
type VillageToCampSlotMap = Record<VillagePlacementName, PiglinCampSlotName>;
