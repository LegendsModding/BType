import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLarvikite
 * @description TODO: Add description for block badger:block_stone_larvikite
 * @example
 * // Example usage:
 * import { blockStoneLarvikite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLarvikite = new BlockBuilder(
  "badger:block_stone_larvikite",
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

blockRegistry.addBlock("badger:block_stone_larvikite", blockStoneLarvikite);

export { blockStoneLarvikite };
