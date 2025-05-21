import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassDuneSandy = createClientBlock(
  "badger:block_grass_dune_sandy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_dune");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_sandy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_dune_sandy_side");
  },
);
