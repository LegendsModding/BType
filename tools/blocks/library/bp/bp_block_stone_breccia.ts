import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneBreccia
 * @description TODO: Add description for block badger:block_stone_breccia
 * @example
 * // Example usage:
 * import { blockStoneBreccia } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneBreccia = new BlockBuilder(
  "badger:block_stone_breccia",
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

blockRegistry.addBlock("badger:block_stone_breccia", blockStoneBreccia);

export { blockStoneBreccia };
