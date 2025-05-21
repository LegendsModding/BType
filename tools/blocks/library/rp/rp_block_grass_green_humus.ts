import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassGreenHumus = createClientBlock(
  "badger:block_grass_green_humus",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_green");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_humus");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_green_humus_side");
  },
);
