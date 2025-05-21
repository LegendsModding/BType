import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassWildMana = createClientBlock(
  "badger:block_grass_wild_mana",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_wild");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mana_infused");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_wild_mana_side");
  },
);
