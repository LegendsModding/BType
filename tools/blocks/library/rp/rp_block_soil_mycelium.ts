import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilMycelium = createClientBlock(
  "badger:block_soil_mycelium",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_mycelium");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mycelium");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_mycelium");
  },
);
