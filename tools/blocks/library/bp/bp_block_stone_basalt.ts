import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneBasalt
 * @description TODO: Add description for block badger:block_stone_basalt
 * @example
 * // Example usage:
 * import { blockStoneBasalt } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneBasalt = new BlockBuilder(
  "badger:block_stone_basalt",
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

blockRegistry.addBlock("badger:block_stone_basalt", blockStoneBasalt);

export { blockStoneBasalt };
