import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassWildLeaf = createClientBlock(
  "badger:block_grass_wild_leaf_mulch",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_wild");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_leaf_mulch");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_wild_leaf_mulch_side");
  },
);
