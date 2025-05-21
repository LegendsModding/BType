import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassSwamp = createClientBlock(
  "badger:block_grass_swamp",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_swamp");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_swampy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_swamp_side");
  },
);
