import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassMudPeatyMud = createClientBlock(
  "badger:block_grass_mud_peaty_mudstone",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_mud");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_peaty_mudstone");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_mud_peaty_mudstone_side");
  },
);
