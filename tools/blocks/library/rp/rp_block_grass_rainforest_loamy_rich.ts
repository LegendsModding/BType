import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassRainforestLoamyRich = createClientBlock(
  "badger:block_grass_rainforest_loamy_rich",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_rainforest");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_loamy_rich");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_rainforest_loamy_rich_side");
  },
);
