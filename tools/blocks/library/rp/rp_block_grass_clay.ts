import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassClay = createClientBlock(
  "badger:block_grass_clay",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_clay");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_clay_side");
  },
);
