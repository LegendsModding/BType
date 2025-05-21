import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassWildVerdant = createClientBlock(
  "badger:block_grass_wild_verdant",
  (builder) => {
    builder.setTexture("up", "textures/blocks/grass/tex_block_grass_wild");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_verdant");
    builder.setTexture("side", "textures/blocks/grass/tex_block_grass_wild_verdant_side");
  },
);
