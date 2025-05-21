import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAmphibolite
 * @description TODO: Add description for block badger:block_stone_amphibolite
 * @example
 * // Example usage:
 * import { blockStoneAmphibolite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAmphibolite = new BlockBuilder(
  "badger:block_stone_amphibolite",
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

blockRegistry.addBlock("badger:block_stone_amphibolite", blockStoneAmphibolite);

export { blockStoneAmphibolite };
