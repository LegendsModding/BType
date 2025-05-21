import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSteatite
 * @description TODO: Add description for block badger:block_stone_steatite
 * @example
 * // Example usage:
 * import { blockStoneSteatite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSteatite = new BlockBuilder(
  "badger:block_stone_steatite",
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

blockRegistry.addBlock("badger:block_stone_steatite", blockStoneSteatite);

export { blockStoneSteatite };
