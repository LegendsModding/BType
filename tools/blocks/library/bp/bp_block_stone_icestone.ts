import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneIcestone
 * @description TODO: Add description for block badger:block_stone_icestone
 * @example
 * // Example usage:
 * import { blockStoneIcestone } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneIcestone = new BlockBuilder(
  "badger:block_stone_icestone",
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

blockRegistry.addBlock("badger:block_stone_icestone", blockStoneIcestone);

export { blockStoneIcestone };
