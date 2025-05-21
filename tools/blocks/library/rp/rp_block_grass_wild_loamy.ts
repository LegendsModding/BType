import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassWildLoamy = createClientBlock(
  "badger:block_grass_wild_loamy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_wild");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_loamy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_wild_loamy_side");
  },
);
