import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTopaz
 * @description TODO: Add description for block badger:block_stone_topaz
 * @example
 * // Example usage:
 * import { blockStoneTopaz } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTopaz = new BlockBuilder(
  "badger:block_stone_topaz",
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

blockRegistry.addBlock("badger:block_stone_topaz", blockStoneTopaz);

export { blockStoneTopaz };
