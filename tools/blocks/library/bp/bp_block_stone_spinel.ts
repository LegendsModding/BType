import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSpinel
 * @description TODO: Add description for block badger:block_stone_spinel
 * @example
 * // Example usage:
 * import { blockStoneSpinel } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSpinel = new BlockBuilder(
  "badger:block_stone_spinel",
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

blockRegistry.addBlock("badger:block_stone_spinel", blockStoneSpinel);

export { blockStoneSpinel };
