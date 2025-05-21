import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAnthracite
 * @description TODO: Add description for block badger:block_stone_anthracite
 * @example
 * // Example usage:
 * import { blockStoneAnthracite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAnthracite = new BlockBuilder(
  "badger:block_stone_anthracite",
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

blockRegistry.addBlock("badger:block_stone_anthracite", blockStoneAnthracite);

export { blockStoneAnthracite };
