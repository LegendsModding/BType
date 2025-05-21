import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSulphur
 * @description TODO: Add description for block badger:block_stone_sulphur
 * @example
 * // Example usage:
 * import { blockStoneSulphur } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSulphur = new BlockBuilder(
  "badger:block_stone_sulphur",
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

blockRegistry.addBlock("badger:block_stone_sulphur", blockStoneSulphur);

export { blockStoneSulphur };
