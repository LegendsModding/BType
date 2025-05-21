import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrass = createClientBlock(
  "badger:block_grass",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_grass");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil");
    builder.setTexture("side", "textures/blocks/soil/tex_block_grass_side");
  },
);
