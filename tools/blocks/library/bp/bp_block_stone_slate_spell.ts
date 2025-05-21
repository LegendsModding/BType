import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneSlateSpell
 * @description TODO: Add description for block badger:block_stone_slate_spell
 * @example
 * // Example usage:
 * import { blockStoneSlateSpell } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneSlateSpell = new BlockBuilder(
  "badger:block_stone_slate_spell",
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

blockRegistry.addBlock("badger:block_stone_slate_spell", blockStoneSlateSpell);

export { blockStoneSlateSpell };
