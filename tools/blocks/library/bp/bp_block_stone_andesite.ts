import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAndesite
 * @description TODO: Add description for block badger:block_stone_andesite
 * @example
 * // Example usage:
 * import { blockStoneAndesite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAndesite = new BlockBuilder(
  "badger:block_stone_andesite",
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

blockRegistry.addBlock("badger:block_stone_andesite", blockStoneAndesite);

export { blockStoneAndesite };
