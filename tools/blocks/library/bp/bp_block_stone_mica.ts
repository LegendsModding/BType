import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMica
 * @description TODO: Add description for block badger:block_stone_mica
 * @example
 * // Example usage:
 * import { blockStoneMica } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMica = new BlockBuilder(
  "badger:block_stone_mica",
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

blockRegistry.addBlock("badger:block_stone_mica", blockStoneMica);

export { blockStoneMica };
