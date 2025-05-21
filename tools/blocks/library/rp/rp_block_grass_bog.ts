import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassBog = createClientBlock(
  "badger:block_grass_bog",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_bog");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_swampy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_bog_swampy_side");
  },
);
