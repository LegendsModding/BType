import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilPeaty = createClientBlock(
  "badger:block_soil_peaty",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_peaty");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_peaty");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_peaty");
  },
);
