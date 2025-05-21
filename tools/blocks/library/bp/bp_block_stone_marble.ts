import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMarble
 * @description TODO: Add description for block badger:block_stone_marble
 * @example
 * // Example usage:
 * import { blockStoneMarble } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMarble = new BlockBuilder(
  "badger:block_stone_marble",
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

blockRegistry.addBlock("badger:block_stone_marble", blockStoneMarble);

export { blockStoneMarble };
