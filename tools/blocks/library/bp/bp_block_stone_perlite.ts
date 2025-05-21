import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePerlite
 * @description TODO: Add description for block badger:block_stone_perlite
 * @example
 * // Example usage:
 * import { blockStonePerlite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePerlite = new BlockBuilder(
  "badger:block_stone_perlite",
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

blockRegistry.addBlock("badger:block_stone_perlite", blockStonePerlite);

export { blockStonePerlite };
