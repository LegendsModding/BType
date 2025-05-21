import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneCryolite
 * @description TODO: Add description for block badger:block_stone_cryolite
 * @example
 * // Example usage:
 * import { blockStoneCryolite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneCryolite = new BlockBuilder(
  "badger:block_stone_cryolite",
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

blockRegistry.addBlock("badger:block_stone_cryolite", blockStoneCryolite);

export { blockStoneCryolite };
