import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilHumus = createClientBlock(
  "badger:block_soil_humus",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_humus");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_humus");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_humus");
  },
);
