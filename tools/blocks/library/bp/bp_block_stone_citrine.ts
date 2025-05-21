import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneCitrine
 * @description TODO: Add description for block badger:block_stone_citrine
 * @example
 * // Example usage:
 * import { blockStoneCitrine } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneCitrine = new BlockBuilder(
  "badger:block_stone_citrine",
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

blockRegistry.addBlock("badger:block_stone_citrine", blockStoneCitrine);

export { blockStoneCitrine };
