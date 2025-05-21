import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneJasperMookaite
 * @description TODO: Add description for block badger:block_stone_jasper_mookaite
 * @example
 * // Example usage:
 * import { blockStoneJasperMookaite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneJasperMookaite = new BlockBuilder(
  "badger:block_stone_jasper_mookaite",
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

blockRegistry.addBlock(
  "badger:block_stone_jasper_mookaite",
  blockStoneJasperMookaite,
);

export { blockStoneJasperMookaite };
