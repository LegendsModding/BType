/**
 * Represents a set of block families that define how blocks can connect with other blocks.
 *
 * This type specifies the block families that are eligible for connection logic within the game.
 * It includes both specific block identifiers and generic categories (e.g., "cloth", "tarstripe").
 * These families are used to ensure consistent behavior and visual integration between connected blocks.
 *
 * type {string}
 * @category Block Connections
 * @example
 * const connectionFamily: BlockConnectionFamilyType = "block_carpet_plant_giantlily";
 * @remarks
 * - The values in this type are used to determine which block families can connect with each other.
 * - Generic categories like "cloth" and "tarstripe" allow for broader grouping of related blocks.
 * - Ensure that the block families specified here align with the intended gameplay mechanics and visual design.
 */
declare type BlockConnectionFamilyType =
  | "block_barrier_boss"
  | "block_bubblerack_light"
  | "block_bubblerack_transition"
  | "block_carpet_blue_culture01"
  | "block_carpet_plant_giantlily"
  | "block_carpet_tree_mangrove_01"
  | "block_carpet_yellow_culture01"
  | "block_deco_geyser_01"
  | "block_deco_mounted_horn_defense"
  | "block_deco_plant_coralfanbit_01"
  | "block_deco_slab_geyser_01"
  | "tarstripe"
  | "cloth"
  | "witch_cloth"
  | "block_edge_netherite_01"
  | "block_frostice_blend_01"
  | "block_frostice_blend_02"
  | "jungle_terrace_top"
  | "block_netherite_var01"
  | "block_path_attack_path"
  | "block_path_attack_path_var01"
  | "block_riverbed_blend_01"
  | "block_riverbed_blend_02"
  | "block_slab_planks_spruce_trim"
  | "block_slab_plant_coral_stump_cc_w"
  | "block_stucco_village_trim"
  | "block_slab_tree_cedar_leaves_Q2"
  | "block_tree_mangrove_01";
