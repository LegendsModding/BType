import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassSandRedSandy = createClientBlock(
  "badger:block_grass_sand_red_sandy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_sand");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_sandy_red");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_sand_sandy_red_side");
  },
);
