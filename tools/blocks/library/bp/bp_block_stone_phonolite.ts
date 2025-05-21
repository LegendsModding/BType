import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStonePhonolite
 * @description TODO: Add description for block badger:block_stone_phonolite
 * @example
 * // Example usage:
 * import { blockStonePhonolite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStonePhonolite = new BlockBuilder(
  "badger:block_stone_phonolite",
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

blockRegistry.addBlock("badger:block_stone_phonolite", blockStonePhonolite);

export { blockStonePhonolite };
