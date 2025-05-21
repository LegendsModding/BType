import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneKyaniite
 * @description TODO: Add description for block badger:block_stone_kyanite
 * @example
 * // Example usage:
 * import { blockStoneKyaniite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneKyaniite = new BlockBuilder(
  "badger:block_stone_kyanite",
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

blockRegistry.addBlock("badger:block_stone_kyanite", blockStoneKyaniite);

export { blockStoneKyaniite };
