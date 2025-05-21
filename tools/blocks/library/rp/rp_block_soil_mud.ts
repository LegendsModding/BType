import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilMud = createClientBlock(
  "badger:block_soil_mud",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_mud");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mud");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_mud");
  },
);
