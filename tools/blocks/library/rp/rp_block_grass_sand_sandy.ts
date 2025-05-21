import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassSandSandy = createClientBlock(
  "badger:block_grass_sand_sandy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_sand");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_sandy");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_sand_sandy_side");
  },
);
