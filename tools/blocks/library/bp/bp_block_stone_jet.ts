import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneJet
 * @description TODO: Add description for block badger:block_stone_jet
 * @example
 * // Example usage:
 * import { blockStoneJet } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneJet = new BlockBuilder("badger:block_stone_jet", "badger_stone")
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

blockRegistry.addBlock("badger:block_stone_jet", blockStoneJet);

export { blockStoneJet };
