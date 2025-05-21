import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMicaChlorite
 * @description TODO: Add description for block badger:block_stone_mica_chlorite
 * @example
 * // Example usage:
 * import { blockStoneMicaChlorite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMicaChlorite = new BlockBuilder(
  "badger:block_stone_mica_chlorite",
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
  "badger:block_stone_mica_chlorite",
  blockStoneMicaChlorite,
);

export { blockStoneMicaChlorite };
