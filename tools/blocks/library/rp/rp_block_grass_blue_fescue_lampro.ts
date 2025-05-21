import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassBlueLampro = createClientBlock(
  "badger:block_grass_blue_fescue_lampro",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_lamprophyre");
    builder.setTexture(
      "side",
      "textures/blocks/grass/tex_block_grass_blue_fescue_lampro_side",
    );
  },
);
