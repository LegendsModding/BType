import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneRhyodacite
 * @description TODO: Add description for block badger:block_stone_rhyodacite
 * @example
 * // Example usage:
 * import { blockStoneRhyodacite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneRhyodacite = new BlockBuilder(
  "badger:block_stone_rhyodacite",
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

blockRegistry.addBlock("badger:block_stone_rhyodacite", blockStoneRhyodacite);

export { blockStoneRhyodacite };
