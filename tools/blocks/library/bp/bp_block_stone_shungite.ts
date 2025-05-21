import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneShungite
 * @description TODO: Add description for block badger:block_stone_shungite
 * @example
 * // Example usage:
 * import { blockStoneShungite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneShungite = new BlockBuilder(
  "badger:block_stone_shungite",
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

blockRegistry.addBlock("badger:block_stone_shungite", blockStoneShungite);

export { blockStoneShungite };
