import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGneissMafic
 * @description TODO: Add description for block badger:block_stone_gneiss_mafic
 * @example
 * // Example usage:
 * import { blockStoneGneissMafic } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGneissMafic = new BlockBuilder(
  "badger:block_stone_gneiss_mafic",
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
  "badger:block_stone_gneiss_mafic",
  blockStoneGneissMafic,
);

export { blockStoneGneissMafic };
