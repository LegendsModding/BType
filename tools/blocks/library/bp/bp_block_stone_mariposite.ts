import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMariposite
 * @description TODO: Add description for block badger:block_stone_mariposite
 * @example
 * // Example usage:
 * import { blockStoneMariposite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMariposite = new BlockBuilder(
  "badger:block_stone_mariposite",
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

blockRegistry.addBlock("badger:block_stone_mariposite", blockStoneMariposite);

export { blockStoneMariposite };
