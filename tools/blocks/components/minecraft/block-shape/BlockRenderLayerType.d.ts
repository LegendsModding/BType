/**
 * Represents the render layer for a block in Minecraft Legends.
 *
 * This type specifies how the block is rendered in the game world. It supports various rendering modes
 * such as opaque, transparent, and water-like effects. It allows developers to define the visual behavior
 * of blocks.
 *
 * type {"blend" | "barrier" | "alpha_test" | "opaque_resource_block" | "opaque_liquid" | "alpha_test_single_side" | "opaque" | "water"} BlockRenderLayerType
 * @category Block Configuration
 * @example
 * const renderLayer: BlockRenderLayerType = "opaque";
 * @remarks
 * Properly configuring this setting ensures that blocks are rendered correctly.
 * Misconfigured render layers may lead to visual artifacts or performance issues.
 */
declare type BlockRenderLayerType =
  | "blend"
  | "barrier"
  | "alpha_test"
  | "opaque_resource_block"
  | "opaque_liquid"
  | "alpha_test_single_side"
  | "opaque"
  | "water";
