import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilSlag = createClientBlock(
  "badger:block_soil_slag",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_slag");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_slag");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_slag");
  },
);
