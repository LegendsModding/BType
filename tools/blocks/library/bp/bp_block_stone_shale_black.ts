import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneShaleBlack
 * @description TODO: Add description for block badger:block_stone_shale_black
 * @example
 * // Example usage:
 * import { blockStoneShaleBlack } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneShaleBlack = new BlockBuilder(
  "badger:block_stone_shale_black",
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

blockRegistry.addBlock("badger:block_stone_shale_black", blockStoneShaleBlack);

export { blockStoneShaleBlack };
