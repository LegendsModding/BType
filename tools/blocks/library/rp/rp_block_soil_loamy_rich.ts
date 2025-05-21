import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilLoamyRich = createClientBlock(
  "badger:block_soil_loamy_rich",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_loamy_rich");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_loamy_rich");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_loamy_rich");
  },
);
