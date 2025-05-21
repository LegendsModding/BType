import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassMossyMossy = createClientBlock(
  "badger:block_grass_mossy_mossy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_mossy");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mossy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_mossy_mossy_side");
  },
);
