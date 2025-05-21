import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTourmaline
 * @description TODO: Add description for block badger:block_stone_tourmaline
 * @example
 * // Example usage:
 * import { blockStoneTourmaline } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTourmaline = new BlockBuilder(
  "badger:block_stone_tourmaline",
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

blockRegistry.addBlock("badger:block_stone_tourmaline", blockStoneTourmaline);

export { blockStoneTourmaline };
