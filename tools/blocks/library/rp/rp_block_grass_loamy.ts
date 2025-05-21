import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassLoamy = createClientBlock(
  "badger:block_grass_loamy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_loamy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_loamy_side");
  },
);
