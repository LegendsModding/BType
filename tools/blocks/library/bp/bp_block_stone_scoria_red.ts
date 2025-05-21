import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneScoriaRed
 * @description TODO: Add description for block badger:block_stone_scoria_red
 * @example
 * // Example usage:
 * import { blockStoneScoriaRed } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneScoriaRed = new BlockBuilder(
  "badger:block_stone_scoria_red",
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

blockRegistry.addBlock("badger:block_stone_scoria_red", blockStoneScoriaRed);

export { blockStoneScoriaRed };
