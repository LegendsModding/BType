import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGabbro
 * @description TODO: Add description for block badger:block_stone_gabbro
 * @example
 * // Example usage:
 * import { blockStoneGabbro } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGabbro = new BlockBuilder(
  "badger:block_stone_gabbro",
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

blockRegistry.addBlock("badger:block_stone_gabbro", blockStoneGabbro);

export { blockStoneGabbro };
