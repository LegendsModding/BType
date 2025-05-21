import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassMycelium = createClientBlock(
  "badger:block_grass_mycelium",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_mycelium");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mycelium");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_mycelium_side");
  },
);
