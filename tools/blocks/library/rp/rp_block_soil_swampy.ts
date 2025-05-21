import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilSwampy = createClientBlock(
  "badger:block_soil_swampy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_swampy");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_swampy");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_swampy");
  },
);
