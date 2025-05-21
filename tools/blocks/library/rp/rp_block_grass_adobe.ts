import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassAdobe = createClientBlock(
  "badger:block_grass_adobe",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_adobe");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_adobe");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_adobe_side");
  },
);
