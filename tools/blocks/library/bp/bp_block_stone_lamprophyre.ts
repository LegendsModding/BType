import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneLamprophyre
 * @description TODO: Add description for block badger:block_stone_lamprophyre
 * @example
 * // Example usage:
 * import { blockStoneLamprophyre } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneLamprophyre = new BlockBuilder(
  "badger:block_stone_lamprophyre",
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

blockRegistry.addBlock("badger:block_stone_lamprophyre", blockStoneLamprophyre);

export { blockStoneLamprophyre };
