import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGarnet
 * @description TODO: Add description for block badger:block_stone_garnet
 * @example
 * // Example usage:
 * import { blockStoneGarnet } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGarnet = new BlockBuilder(
  "badger:block_stone_garnet",
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

blockRegistry.addBlock("badger:block_stone_garnet", blockStoneGarnet);

export { blockStoneGarnet };
