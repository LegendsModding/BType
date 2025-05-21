import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAnorthosite
 * @description TODO: Add description for block badger:block_stone_anorthosite
 * @example
 * // Example usage:
 * import { blockStoneAnorthosite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAnorthosite = new BlockBuilder(
  "badger:block_stone_anorthosite",
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

blockRegistry.addBlock("badger:block_stone_anorthosite", blockStoneAnorthosite);

export { blockStoneAnorthosite };
