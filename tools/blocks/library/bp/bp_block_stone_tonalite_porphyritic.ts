import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTonalitePorphyritic
 * @description TODO: Add description for block badger:block_stone_tonalite_porphyritic
 * @example
 * // Example usage:
 * import { blockStoneTonalitePorphyritic } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTonalitePorphyritic = new BlockBuilder(
  "badger:block_stone_tonalite_porphyritic",
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
  "badger:block_stone_tonalite_porphyritic",
  blockStoneTonalitePorphyritic,
);

export { blockStoneTonalitePorphyritic };
