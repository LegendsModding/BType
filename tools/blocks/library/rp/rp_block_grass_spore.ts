import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassSpore = createClientBlock(
  "badger:block_grass_spore",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_spore");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_spore");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_spore_side");
  },
);
