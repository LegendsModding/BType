import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneChlorite
 * @description TODO: Add description for block badger:block_stone_chlorite
 * @example
 * // Example usage:
 * import { blockStoneChlorite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneChlorite = new BlockBuilder(
  "badger:block_stone_chlorite",
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

blockRegistry.addBlock("badger:block_stone_chlorite", blockStoneChlorite);

export { blockStoneChlorite };
