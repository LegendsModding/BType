import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilCrackedEarth = createClientBlock(
  "badger:block_soil_cracked_earth",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_cracked_earth");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_cracked_earth");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_cracked_earth");
  },
);
