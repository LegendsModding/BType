import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMigmatite
 * @description TODO: Add description for block badger:block_stone_migmatite
 * @example
 * // Example usage:
 * import { blockStoneMigmatite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMigmatite = new BlockBuilder(
  "badger:block_stone_migmatite",
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

blockRegistry.addBlock("badger:block_stone_migmatite", blockStoneMigmatite);

export { blockStoneMigmatite };
