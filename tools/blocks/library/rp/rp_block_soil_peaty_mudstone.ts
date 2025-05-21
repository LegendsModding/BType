import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilMudstone = createClientBlock(
  "badger:block_soil_peaty_mudstone",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_peaty_mudstone");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_peaty_mudstone");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_peaty_mudstone");
  },
);
