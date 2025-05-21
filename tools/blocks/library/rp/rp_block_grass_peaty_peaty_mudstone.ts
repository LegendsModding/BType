import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassPeatyPeatyMud = createClientBlock(
  "badger:block_grass_peaty_peaty_mudstone",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_side");
  },
);
