import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneZircon
 * @description TODO: Add description for block badger:block_stone_zircon
 * @example
 * // Example usage:
 * import { blockStoneZircon } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneZircon = new BlockBuilder(
  "badger:block_stone_zircon",
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

blockRegistry.addBlock("badger:block_stone_zircon", blockStoneZircon);

export { blockStoneZircon };
