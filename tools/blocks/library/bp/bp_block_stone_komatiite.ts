import { BlockBuilder } from "../../BlockBuilder.ts";
import { blockRegistry } from "../../BlockRegistry.ts";

/**
 * @name blockStoneKomatiite
 * @description TODO: Add description for block badger:block_stone_komatiite
 * @example
 * // Example usage:
 * import { blockStoneKomatiite } from "legends/core/crafter/blocks/BlockRegistry.ts";
 */

const blockStoneKomatiite = new BlockBuilder(
  "badger:block_stone_komatiite",
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

blockRegistry.addBlock("badger:block_stone_komatiite", blockStoneKomatiite);

export { blockStoneKomatiite };
