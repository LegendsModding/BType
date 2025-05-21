import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassWildForest = createClientBlock(
  "badger:block_grass_wild_forest",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_wild");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_forest");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_wild_forest_side");
  },
);
