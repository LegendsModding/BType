import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMarcasite
 * @description TODO: Add description for block badger:block_stone_marcasite
 * @example
 * // Example usage:
 * import { blockStoneMarcasite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMarcasite = new BlockBuilder(
  "badger:block_stone_marcasite",
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

blockRegistry.addBlock("badger:block_stone_marcasite", blockStoneMarcasite);

export { blockStoneMarcasite };
