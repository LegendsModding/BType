import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassJungleForest = createClientBlock(
  "badger:block_grass_jungle_forest",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_jungle");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_forest");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_jungle_forest_side");
  },
);
