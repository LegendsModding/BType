import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSyenite
 * @description TODO: Add description for block badger:block_stone_syenite
 * @example
 * // Example usage:
 * import { blockStoneSyenite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSyenite = new BlockBuilder(
  "badger:block_stone_syenite",
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

blockRegistry.addBlock("badger:block_stone_syenite", blockStoneSyenite);

export { blockStoneSyenite };
