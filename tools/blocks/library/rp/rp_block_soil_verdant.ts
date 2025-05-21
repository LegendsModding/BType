import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilVerdant = createClientBlock(
  "badger:block_soil_verdant",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_verdant");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_verdant");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_verdant");
  },
);
