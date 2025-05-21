import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneArgillite
 * @description TODO: Add description for block badger:block_stone_argillite
 * @example
 * // Example usage:
 * import { blockStoneArgillite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneArgillite = new BlockBuilder(
  "badger:block_stone_argillite",
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

blockRegistry.addBlock("badger:block_stone_argillite", blockStoneArgillite);

export { blockStoneArgillite };
