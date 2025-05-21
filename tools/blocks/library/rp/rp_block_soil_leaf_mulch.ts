import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilLeafMulch = createClientBlock(
  "badger:block_soil_leaf_mulch",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_leaf_mulch");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_leaf_mulch");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_leaf_mulch");
  },
);
