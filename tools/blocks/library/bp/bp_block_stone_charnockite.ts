import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneCharnockite
 * @description TODO: Add description for block badger:block_stone_charnockite
 * @example
 * // Example usage:
 * import { blockStoneCharnockite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneCharnockite = new BlockBuilder(
  "badger:block_stone_charnockite",
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

blockRegistry.addBlock("badger:block_stone_charnockite", blockStoneCharnockite);

export { blockStoneCharnockite };
