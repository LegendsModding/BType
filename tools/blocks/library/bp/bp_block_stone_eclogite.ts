import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneEclogite
 * @description TODO: Add description for block badger:block_stone_eclogite
 * @example
 * // Example usage:
 * import { blockStoneEclogite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneEclogite = new BlockBuilder(
  "badger:block_stone_eclogite",
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

blockRegistry.addBlock("badger:block_stone_eclogite", blockStoneEclogite);

export { blockStoneEclogite };
