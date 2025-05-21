import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneGranulite
 * @description TODO: Add description for block badger:block_stone_granulite
 * @example
 * // Example usage:
 * import { blockStoneGranulite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneGranulite = new BlockBuilder(
  "badger:block_stone_granulite",
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

blockRegistry.addBlock("badger:block_stone_granulite", blockStoneGranulite);

export { blockStoneGranulite };
