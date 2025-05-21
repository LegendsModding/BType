import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSchistGraphite
 * @description TODO: Add description for block badger:block_stone_schist_graphite
 * @example
 * // Example usage:
 * import { blockStoneSchistGraphite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSchistGraphite = new BlockBuilder(
  "badger:block_stone_schist_graphite",
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
  "badger:block_stone_schist_graphite",
  blockStoneSchistGraphite,
);

export { blockStoneSchistGraphite };
