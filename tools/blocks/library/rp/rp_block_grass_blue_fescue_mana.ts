import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockGrassBlueMana = createClientBlock(
  "badger:block_grass_blue_fescue_mana",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_grass_blue_fescue");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mana_infused");
    builder.setTexture("side", "textures/blocks/soil/tex_block_grass_blue_fescue_mana_side");
  },
);
