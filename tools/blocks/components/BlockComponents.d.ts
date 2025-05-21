/**
 * Represents the collection of components that define various aspects of a block's behavior and appearance in Minecraft Legends.
 *
 * This interface specifies optional components that can be applied to blocks, such as shape, destruction time, terrain type,
 * effects, telemetry categories, and more. These components allow developers to create custom blocks with specific properties.
 * @interface BlockComponents
 * @category Block Configuration
 * @property {MinecraftBlockShape} ["minecraft:block_shape"] - Configuration for the block's shape, including render layers and collision properties.
 * @property {MinecraftDestroyTime} ["minecraft:destroy_time"] - Configuration for the time required to destroy the block.
 * @property {BadgerBlockDamageReceiverMaterial} ["badger:block_damage_receiver_material"] - Configuration for the material that receives damage for the block.
 * @property {BadgerTerrainType} ["badger:terrain_type"] - Configuration for the terrain type associated with the block.
 * @property {BadgerBlockType} ["badger:block_type"] - Configuration for the block's type, including tags.
 * @property {BadgerDisableBlockShadows} ["badger:disable_block_shadows"] - Configuration for disabling block shadows.
 * @property {BadgerIgnoredByPathfinding} ["badger:ignored_by_pathfinding"] - Configuration for ignoring the block during pathfinding.
 * @property {BadgerHasTeam} ["badger:has_team"] - Configuration for assigning a team to the block.
 * @property {BadgerBlockEffects} ["badger:block_effects"] - Configuration for effects applied by the block.
 * @property {BadgerTelemetryCategory} ["badger:telemetry_category"] - Configuration for the telemetry category of the block.
 * @property {MinecraftBlockLightEmission} ["minecraft:block_light_emission"] - Configuration for the light emission of the block.
 * @property {BadgerBlockEncounter} ["badger:block_encounter"] - Configuration for resources granted during encounters with the block.
 * @property {BadgerLiquid} ["badger:liquid"] - Configuration for liquid properties of the block.
 * @example
 * const blockComponents: BlockComponents = {
 *   "minecraft:block_shape": { shape: "cube", renderLayer: "opaque" },
 *   "minecraft:destroy_time": { value: 5 },
 *   "badger:block_effects": {
 *     damageAmount: 10,
 *     damageTypes: ["fire"],
 *     effectFrequency: 0.5
 *   }
 * };
 * @remarks
 * Properly configuring these settings ensures that blocks behave consistently and effectively.
 * Misconfigured components may lead to broken functionality or performance issues.
 */
interface BlockComponents {
  "minecraft:block_shape"?: MinecraftBlockShape;
  "minecraft:destroy_time"?: MinecraftDestroyTime;
  "badger:block_damage_receiver_material"?: BadgerBlockDamageReceiverMaterial;
  "badger:terrain_type"?: BadgerTerrainType;
  "badger:block_type"?: BadgerBlockType;
  "badger:disable_block_shadows"?: BadgerDisableBlockShadows;
  "badger:ignored_by_pathfinding"?: BadgerIgnoredByPathfinding;
  "badger:has_team"?: BadgerHasTeam;
  "badger:block_effects"?: BadgerBlockEffects;
  "badger:telemetry_category"?: BadgerTelemetryCategory;
  "minecraft:block_light_emission"?: MinecraftBlockLightEmission;
  "badger:block_encounter"?: BadgerBlockEncounter;
  "badger:liquid"?: BadgerLiquid;
}
