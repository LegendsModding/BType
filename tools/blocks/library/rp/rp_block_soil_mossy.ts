import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilMossy = createClientBlock(
  "badger:block_soil_mossy",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_mossy");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mossy");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_mossy");
  },
);
