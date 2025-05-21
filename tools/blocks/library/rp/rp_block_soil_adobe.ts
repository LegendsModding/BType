import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilAdobe = createClientBlock(
  "badger:block_soil_adobe",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_adobe");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_adobe");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_adobe");
  },
);
