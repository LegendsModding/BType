import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePeridotite
 * @description TODO: Add description for block badger:block_stone_peridotite
 * @example
 * // Example usage:
 * import { blockStonePeridotite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePeridotite = new BlockBuilder(
  "badger:block_stone_peridotite",
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

blockRegistry.addBlock("badger:block_stone_peridotite", blockStonePeridotite);

export { blockStonePeridotite };
