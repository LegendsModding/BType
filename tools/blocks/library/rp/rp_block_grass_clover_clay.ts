import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassCloverClay = createClientBlock(
  "badger:block_grass_clover_clay",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_clover");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_clay");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_clover_clay_side");
  },
);
