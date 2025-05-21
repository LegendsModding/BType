import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSchistMuscovite
 * @description TODO: Add description for block badger:block_stone_schist_muscovite
 * @example
 * // Example usage:
 * import { blockStoneSchistMuscovite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSchistMuscovite = new BlockBuilder(
  "badger:block_stone_schist_muscovite",
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
  "badger:block_stone_schist_muscovite",
  blockStoneSchistMuscovite,
);

export { blockStoneSchistMuscovite };
