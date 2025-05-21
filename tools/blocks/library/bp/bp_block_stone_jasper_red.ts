import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneJasperRed
 * @description TODO: Add description for block badger:block_stone_jasper_red
 * @example
 * // Example usage:
 * import { blockStoneJasperRed } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneJasperRed = new BlockBuilder(
  "badger:block_stone_jasper_red",
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

blockRegistry.addBlock("badger:block_stone_jasper_red", blockStoneJasperRed);

export { blockStoneJasperRed };
