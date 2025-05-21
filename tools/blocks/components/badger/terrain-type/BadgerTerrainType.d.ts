/**
 * Represents the terrain type for a block in Minecraft Legends.
 *
 * This interface specifies the terrain identifier for blocks. It allows developers to define terrain
 * properties for blocks, such as surface materials or environmental interactions.
 * @interface BadgerTerrainType
 * @category Block Configuration
 * @property {BlockTerrainType} [terrain] - The terrain identifier for the block.
 * @example
 * const terrainType: BadgerTerrainType = {
 *   terrain: "grass"
 * };
 * @remarks
 * Properly configuring this setting ensures that terrain types are applied correctly.
 * Misconfigured values may lead to visual or functional inconsistencies.
 */
interface BadgerTerrainType {
  terrain?: BlockTerrainType;
}
