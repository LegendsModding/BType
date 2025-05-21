import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassBlossom = createClientBlock(
  "badger:block_grass_blossom",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_blossom");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_blossom");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_blossom_side");
  },
);
