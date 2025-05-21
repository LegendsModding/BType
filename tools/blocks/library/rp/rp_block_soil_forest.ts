import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilForest = createClientBlock(
  "badger:block_soil_forest",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_forest");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_forest");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_forest");
  },
);
