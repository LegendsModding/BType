import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneBrecciaVolcanic
 * @description TODO: Add description for block badger:block_stone_breccia_volcanic
 * @example
 * // Example usage:
 * import { blockStoneBrecciaVolcanic } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneBrecciaVolcanic = new BlockBuilder(
  "badger:block_stone_breccia_volcanic",
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

blockRegistry.addBlock(
  "badger:block_stone_breccia_volcanic",
  blockStoneBrecciaVolcanic,
);

export { blockStoneBrecciaVolcanic };
