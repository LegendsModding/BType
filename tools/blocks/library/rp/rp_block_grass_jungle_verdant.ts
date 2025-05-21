import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassJungleVerdant = createClientBlock(
  "badger:block_grass_jungle_verdant",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_jungle");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_verdant");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_jungle_verdant_side");
  },
);
