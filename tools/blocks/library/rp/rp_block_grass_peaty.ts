import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassPeaty = createClientBlock(
  "badger:block_grass_peaty",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_peaty");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_peaty");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_peaty_side");
  },
);
