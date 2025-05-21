import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneTephra
 * @description TODO: Add description for block badger:block_stone_tephra
 * @example
 * // Example usage:
 * import { blockStoneTephra } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneTephra = new BlockBuilder(
  "badger:block_stone_tephra",
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

blockRegistry.addBlock("badger:block_stone_tephra", blockStoneTephra);

export { blockStoneTephra };
