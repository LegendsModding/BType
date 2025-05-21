import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSchistChlorite
 * @description TODO: Add description for block badger:block_stone_schist_chlorite
 * @example
 * // Example usage:
 * import { blockStoneSchistChlorite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSchistChlorite = new BlockBuilder(
  "badger:block_stone_schist_chlorite",
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
  "badger:block_stone_schist_chlorite",
  blockStoneSchistChlorite,
);

export { blockStoneSchistChlorite };
