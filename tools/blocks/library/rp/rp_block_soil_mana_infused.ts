import { createClientBlock } from "../../BlockClientBuilder.ts";

/** */
export const clientBlockSoilManaInfused = createClientBlock(
  "badger:block_soil_mana_infused",
  (builder) => {
    builder.setTexture("up", "textures/blocks/soil/tex_block_soil_mana_infused");
    builder.setTexture("down", "textures/blocks/soil/tex_block_soil_mana_infused");
    builder.setTexture("side", "textures/blocks/soil/tex_block_soil_mana_infused");
  },
);
