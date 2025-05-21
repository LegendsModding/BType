import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneShaleOil
 * @description TODO: Add description for block badger:block_stone_shale_oil
 * @example
 * // Example usage:
 * import { blockStoneShaleOil } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneShaleOil = new BlockBuilder(
  "badger:block_stone_shale_oil",
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

blockRegistry.addBlock("badger:block_stone_shale_oil", blockStoneShaleOil);

export { blockStoneShaleOil };
