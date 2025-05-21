import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneAgate
 * @description TODO: Add description for block badger:block_stone_agate
 * @example
 * // Example usage:
 * import { blockStoneAgate } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneAgate = new BlockBuilder(
  "badger:block_stone_agate",
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

blockRegistry.addBlock("badger:block_stone_agate", blockStoneAgate);

export { blockStoneAgate };
