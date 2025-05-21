import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSchist
 * @description TODO: Add description for block badger:block_stone_schist
 * @example
 * // Example usage:
 * import { blockStoneSchist } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSchist = new BlockBuilder(
  "badger:block_stone_schist",
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

blockRegistry.addBlock("badger:block_stone_schist", blockStoneSchist);

export { blockStoneSchist };
