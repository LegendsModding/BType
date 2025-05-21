import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePhyllite
 * @description TODO: Add description for block badger:block_stone_phyllite
 * @example
 * // Example usage:
 * import { blockStonePhyllite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePhyllite = new BlockBuilder(
  "badger:block_stone_phyllite",
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

blockRegistry.addBlock("badger:block_stone_phyllite", blockStonePhyllite);

export { blockStonePhyllite };
