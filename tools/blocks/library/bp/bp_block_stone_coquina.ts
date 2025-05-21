import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneCoquina
 * @description TODO: Add description for block badger:block_stone_coquina
 * @example
 * // Example usage:
 * import { blockStoneCoquina } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneCoquina = new BlockBuilder(
  "badger:block_stone_coquina",
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

blockRegistry.addBlock("badger:block_stone_coquina", blockStoneCoquina);

export { blockStoneCoquina };
