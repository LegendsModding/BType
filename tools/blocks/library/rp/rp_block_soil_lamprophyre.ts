import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilLamprophyre = createClientBlock(
  "badger:block_soil_lamprophyre",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_lamprophyre");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_lamprophyre");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_lamprophyre");
  },
);
