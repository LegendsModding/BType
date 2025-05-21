import { STAMP_TEXTURES } from "scripts_bType/consts/STAMP_TEXTURES.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Retrieves the stamp texture for a faction and size.
 * @param {PiglinFactionName} faction The faction name.
 * @param {string} size The size of the stamp.
 * @returns {string | undefined} The stamp texture, or undefined if not found.
 */
export const VILLAGE_GetStampForFaction = (
  faction: FactionNameId,
  size: VillageSizeKey,
): string | undefined => {
  for (const textureInfo of STAMP_TEXTURES) {
    if (textureInfo.factionName === faction) {
      const temp = textureInfo[size];
      FORESIGHT.warning(
        `Getting stamp texture for faction ${faction}, size ${size}: Result = ${temp}`,
      );
      return temp;
    }
  }
  return undefined;
};
