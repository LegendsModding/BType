import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSchistBiotite
 * @description TODO: Add description for block badger:block_stone_schist_biotite
 * @example
 * // Example usage:
 * import { blockStoneSchistBiotite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSchistBiotite = new BlockBuilder(
  "badger:block_stone_schist_biotite",
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
  "badger:block_stone_schist_biotite",
  blockStoneSchistBiotite,
);

export { blockStoneSchistBiotite };
