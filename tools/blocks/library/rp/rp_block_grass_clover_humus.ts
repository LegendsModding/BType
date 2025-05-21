import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassCloverHumus = createClientBlock(
  "badger:block_grass_clover_humus",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_clover");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_humus");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_clover_humus_side");
  },
);
