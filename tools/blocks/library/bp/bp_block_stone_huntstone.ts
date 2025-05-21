import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneHuntstone
 * @description TODO: Add description for block badger:block_stone_huntstone
 * @example
 * // Example usage:
 * import { blockStoneHuntstone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneHuntstone = new BlockBuilder(
  "badger:block_stone_huntstone",
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

blockRegistry.addBlock("badger:block_stone_huntstone", blockStoneHuntstone);

export { blockStoneHuntstone };
