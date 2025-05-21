import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneVolcanicSlag
 * @description TODO: Add description for block badger:block_stone_volcanic_slag
 * @example
 * // Example usage:
 * import { blockStoneVolcanicSlag } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneVolcanicSlag = new BlockBuilder(
  "badger:block_stone_volcanic_slag",
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

blockRegistry.addBlock(
  "badger:block_stone_volcanic_slag",
  blockStoneVolcanicSlag,
);

export { blockStoneVolcanicSlag };
