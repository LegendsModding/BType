import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoil = createClientBlock(
  "badger:block_soil",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil");
  },
);
