import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGypsum
 * @description TODO: Add description for block badger:block_stone_gypsum
 * @example
 * // Example usage:
 * import { blockStoneGypsum } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGypsum = new BlockBuilder(
  "badger:block_stone_gypsum",
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

blockRegistry.addBlock("badger:block_stone_gypsum", blockStoneGypsum);

export { blockStoneGypsum };
