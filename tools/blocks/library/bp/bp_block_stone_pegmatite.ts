import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePegmatite
 * @description TODO: Add description for block badger:block_stone_pegmatite
 * @example
 * // Example usage:
 * import { blockStonePegmatite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePegmatite = new BlockBuilder(
  "badger:block_stone_pegmatite",
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

blockRegistry.addBlock("badger:block_stone_pegmatite", blockStonePegmatite);

export { blockStonePegmatite };
