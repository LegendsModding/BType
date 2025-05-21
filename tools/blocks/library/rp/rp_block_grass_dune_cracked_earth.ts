import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassDuneCracked = createClientBlock(
  "badger:block_grass_dune_cracked_earth",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_dune");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_cracked_earth");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_dune_cracked_earth_side");
  },
);
