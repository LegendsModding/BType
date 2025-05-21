import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneJadeite
 * @description TODO: Add description for block badger:block_stone_jadeite
 * @example
 * // Example usage:
 * import { blockStoneJadeite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneJadeite = new BlockBuilder(
  "badger:block_stone_jadeite",
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

blockRegistry.addBlock("badger:block_stone_jadeite", blockStoneJadeite);

export { blockStoneJadeite };
