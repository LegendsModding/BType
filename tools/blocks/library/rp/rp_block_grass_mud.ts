import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassMud = createClientBlock(
  "badger:block_grass_mud",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_mud");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mud");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_mud_side");
  },
);
