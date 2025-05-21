import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMoonstone
 * @description TODO: Add description for block badger:block_stone_moonstone
 * @example
 * // Example usage:
 * import { blockStoneMoonstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMoonstone = new BlockBuilder(
  "badger:block_stone_moonstone",
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

blockRegistry.addBlock("badger:block_stone_moonstone", blockStoneMoonstone);

export { blockStoneMoonstone };
