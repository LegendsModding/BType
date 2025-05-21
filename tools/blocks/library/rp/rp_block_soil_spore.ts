import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilSpore = createClientBlock(
  "badger:block_soil_spore",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_spore");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_spore");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_spore");
  },
);
