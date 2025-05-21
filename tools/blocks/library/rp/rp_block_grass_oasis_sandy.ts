import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassOasisSandy = createClientBlock(
  "badger:block_grass_oasis_sandy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_oasis");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_sandy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_oasis_sandy_side");
  },
);
