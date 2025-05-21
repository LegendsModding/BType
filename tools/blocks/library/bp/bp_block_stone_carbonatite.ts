import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneCarbonatite
 * @description TODO: Add description for block badger:block_stone_carbonatite
 * @example
 * // Example usage:
 * import { blockStoneCarbonatite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneCarbonatite = new BlockBuilder(
  "badger:block_stone_carbonatite",
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

blockRegistry.addBlock("badger:block_stone_carbonatite", blockStoneCarbonatite);

export { blockStoneCarbonatite };
