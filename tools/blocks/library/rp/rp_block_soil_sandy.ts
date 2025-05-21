import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilSandy = createClientBlock(
  "badger:block_soil_sandy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_sandy");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_sandy");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_sandy");
  },
);
