/**
 * Represents a set of block families that define how blocks can connect to other blocks.
 *
 * This type specifies the block families that are eligible for connection logic within the game.
 * Blocks in these families may share common properties or behaviors that allow them to interact
 * seamlessly with adjacent blocks. For example, blocks like carpets, geysers, or decorative elements
 * may belong to specific families to ensure consistent visual and functional integration.
 *
 * type {string}
 * @category Block Connections
 * @example
 * const connectToFamily: BlockConnectToFamilyType = "block_carpet_blue_culture01";
 * @remarks
 * - The values in this type are used to determine which block families can connect to each other.
 * - Ensure that the block families specified here align with the intended gameplay mechanics and visual design.
 */
declare type BlockConnectToFamilyType =
  | "block_barrier_boss"
  | "block_bubblerack_light"
  | "block_bubblerack_transition"
  | "block_carpet_blue_culture01"
  | "block_carpet_plant_giantlily"
  | "block_carpet_tree_mangrove_01"
  | "block_carpet_yellow_culture01"
  | "block_deco_geyser_01"
  | "block_deco_mounted_horn_defense"
  | "block_deco_slab_geyser_01"
  | "tarstripe"
  | "cloth"
  | "witch_cloth"
  | "block_netherrite_var01"
  | "block_edge_netherrite_01"
  | "block_frostice_blend_01"
  | "block_frostice_blend_02"
  | "jungle_terrace_top"
  | "block_path_attack_path"
  | "block_riverbed_blend_01"
  | "block_riverbed_blend_02"
  | "block_slab_planks_spruce_trim"
  | "block_slab_plant_coralstump_cc_w"
  | "block_deco_plant_coralfanbit_01"
  | "block_stucco_village_trim"
  | "block_slab_tree_cedar_leaves_Q2"
  | "block_tree_mangrove_01";
