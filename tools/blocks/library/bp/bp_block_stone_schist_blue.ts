import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSchistBlue
 * @description TODO: Add description for block badger:block_stone_schist_blue
 * @example
 * // Example usage:
 * import { blockStoneSchistBlue } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSchistBlue = new BlockBuilder(
  "badger:block_stone_schist_blue",
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

blockRegistry.addBlock("badger:block_stone_schist_blue", blockStoneSchistBlue);

export { blockStoneSchistBlue };
