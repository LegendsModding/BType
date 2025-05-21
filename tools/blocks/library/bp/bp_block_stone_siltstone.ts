import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSiltstone
 * @description TODO: Add description for block badger:block_stone_siltstone
 * @example
 * // Example usage:
 * import { blockStoneSiltstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSiltstone = new BlockBuilder(
  "badger:block_stone_siltstone",
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

blockRegistry.addBlock("badger:block_stone_siltstone", blockStoneSiltstone);

export { blockStoneSiltstone };
