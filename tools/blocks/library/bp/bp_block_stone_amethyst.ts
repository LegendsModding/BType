import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAmethyst
 * @description TODO: Add description for block badger:block_stone_amethyst
 * @example
 * // Example usage:
 * import { blockStoneAmethyst } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAmethyst = new BlockBuilder(
  "badger:block_stone_amethyst",
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

blockRegistry.addBlock("badger:block_stone_amethyst", blockStoneAmethyst);

export { blockStoneAmethyst };
