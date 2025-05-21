import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneHornfels
 * @description TODO: Add description for block badger:block_stone_hornfels
 * @example
 * // Example usage:
 * import { blockStoneHornfels } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneHornfels = new BlockBuilder(
  "badger:block_stone_hornfels",
  "badger_stone",
)
  .setBlockShape({
    shape: "cube",
    directionalTexture: false,
    directionalShape: false,
  })
  .setDestroyTime(10)
  .setBlockDamageReceiverMaterial("block")
  .setTerrainType("stone")
  .setBlockType(["stone"])
  .build();

blockRegistry.addBlock("badger:block_stone_hornfels", blockStoneHornfels);

export { blockStoneHornfels };
