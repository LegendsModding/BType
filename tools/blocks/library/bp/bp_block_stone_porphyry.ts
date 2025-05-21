import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePorphyry
 * @description TODO: Add description for block badger:block_stone_porphyry
 * @example
 * // Example usage:
 * import { blockStonePorphyry } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePorphyry = new BlockBuilder(
  "badger:block_stone_porphyry",
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

blockRegistry.addBlock("badger:block_stone_porphyry", blockStonePorphyry);

export { blockStonePorphyry };
