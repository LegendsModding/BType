import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneFelsite
 * @description TODO: Add description for block badger:block_stone_felsite
 * @example
 * // Example usage:
 * import { blockStoneFelsite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneFelsite = new BlockBuilder(
  "badger:block_stone_felsite",
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

blockRegistry.addBlock("badger:block_stone_felsite", blockStoneFelsite);

export { blockStoneFelsite };
