import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSoapstone
 * @description TODO: Add description for block badger:block_stone_soapstone
 * @example
 * // Example usage:
 * import { blockStoneSoapstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSoapstone = new BlockBuilder(
  "badger:block_stone_soapstone",
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

blockRegistry.addBlock("badger:block_stone_soapstone", blockStoneSoapstone);

export { blockStoneSoapstone };
