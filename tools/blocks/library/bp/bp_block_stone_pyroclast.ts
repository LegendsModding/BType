import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePyroclast
 * @description TODO: Add description for block badger:block_stone_pyroclast
 * @example
 * // Example usage:
 * import { blockStonePyroclast } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePyroclast = new BlockBuilder(
  "badger:block_stone_pyroclast",
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

blockRegistry.addBlock("badger:block_stone_pyroclast", blockStonePyroclast);

export { blockStonePyroclast };
