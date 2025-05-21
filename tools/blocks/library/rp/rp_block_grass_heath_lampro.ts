import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassHeathLampro = createClientBlock(
  "badger:block_grass_heath_lampro",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_heath");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_lamprophyre");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_heath_lampro_side");
  },
);
