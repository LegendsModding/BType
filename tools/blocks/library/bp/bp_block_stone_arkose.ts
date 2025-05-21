import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneArkose
 * @description TODO: Add description for block badger:block_stone_arkose
 * @example
 * // Example usage:
 * import { blockStoneArkose } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneArkose = new BlockBuilder(
  "badger:block_stone_arkose",
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

blockRegistry.addBlock("badger:block_stone_arkose", blockStoneArkose);

export { blockStoneArkose };
