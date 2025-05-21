import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneRhyolite
 * @description TODO: Add description for block badger:block_stone_rhyolite
 * @example
 * // Example usage:
 * import { blockStoneRhyolite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneRhyolite = new BlockBuilder(
  "badger:block_stone_rhyolite",
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

blockRegistry.addBlock("badger:block_stone_rhyolite", blockStoneRhyolite);

export { blockStoneRhyolite };
