import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneMonzonite
 * @description TODO: Add description for block badger:block_stone_monzonite
 * @example
 * // Example usage:
 * import { blockStoneMonzonite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneMonzonite = new BlockBuilder(
  "badger:block_stone_monzonite",
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

blockRegistry.addBlock("badger:block_stone_monzonite", blockStoneMonzonite);

export { blockStoneMonzonite };
