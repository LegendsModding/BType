import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTravertine
 * @description TODO: Add description for block badger:block_stone_travertine
 * @example
 * // Example usage:
 * import { blockStoneTravertine } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTravertine = new BlockBuilder(
  "badger:block_stone_travertine",
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

blockRegistry.addBlock("badger:block_stone_travertine", blockStoneTravertine);

export { blockStoneTravertine };
