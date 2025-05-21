import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAndradite
 * @description TODO: Add description for block badger:block_stone_andradite
 * @example
 * // Example usage:
 * import { blockStoneAndradite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAndradite = new BlockBuilder(
  "badger:block_stone_andradite",
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

blockRegistry.addBlock("badger:block_stone_andradite", blockStoneAndradite);

export { blockStoneAndradite };
