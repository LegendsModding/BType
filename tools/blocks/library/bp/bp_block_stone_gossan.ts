import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGossan
 * @description TODO: Add description for block badger:block_stone_gossan
 * @example
 * // Example usage:
 * import { blockStoneGossan } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGossan = new BlockBuilder(
  "badger:block_stone_gossan",
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

blockRegistry.addBlock("badger:block_stone_gossan", blockStoneGossan);

export { blockStoneGossan };
