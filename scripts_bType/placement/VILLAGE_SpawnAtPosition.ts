import { TEAM } from "scripts_bType/consts/TEAM.ts";
import { TEXTURE_KEYS } from "scripts_bType/consts/TEXTURE_KEYS.ts";
import { INVASION_GetFactionHelperData } from "scripts_bType/invasion/INVASION_GetFactionHelperData.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";
import { VILLAGE_GetStampForFaction } from "scripts_bType/village/VILLAGE_GetStampForFaction.ts";
import { VILLAGE_SIZE } from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

/**
 * Spawns villages or invasion bases at specified positions with faction-specific configurations.
 * @param position Target location entity for placement.
 * @param factionName Owning faction identifier.
 * @param baseSize Village scale classification.
 * @param isInvasion Flag indicating invasion base type.
 * @param invasionReason Contextual identifier for invasion tracking.
 * @returns {VillageID} Identifier for the newly created village/base.
 * @remarks
 * Applies texture stamps based on faction and size, sets upgrade potential for small/medium bases,
 * and differentiates between standard villages and invasion bases through spawning functions.
 * Registers invasion reasons in map metadata when applicable.
 */
export const VILLAGE_SpawnAtPosition = (
  position: SingleEntity,
  factionName: FactionNameId,
  baseSize: VillageSizeKey,
  isInvasion: boolean,
  invasionReason: string, // MAP_INVASION_RECAP
): VillageID => {
  OUTPUT_PlacementEntityUpdateTextureStamp(
    position,
    TEXTURE_KEYS.PRIMARY,
    VILLAGE_GetStampForFaction(factionName, baseSize) as string,
    true,
  );

  // Outposts and boss base don't have a "potential" size they will become
  // Only small and medium bases
  if (baseSize === VILLAGE_SIZE.SMALL || baseSize === VILLAGE_SIZE.MEDIUM) {
    // Set the maximum potential texture stamp size for the base
    OUTPUT_PlacementEntitySetMaximumVillageTextureStamp(
      position,
      VILLAGE_GetStampForFaction(factionName, VILLAGE_SIZE.LARGE) as string,
    );
  }

  const baseArchetype =
    INVASION_GetFactionHelperData(factionName)?.villageArchetypes[baseSize];
  let base = null;
  if (isInvasion) {
    base = OUTPUT_SpawnInvasionBase(
      position,
      baseArchetype as string,
      baseSize,
      factionName,
      TEAM.orange as TeamName,
      invasionReason,
    );
    OUTPUT_MapSetKeyValue([base], MAP_Key.INVASION_RECAP, invasionReason);
  } else {
    base = OUTPUT_SpawnVillage(
      position,
      baseArchetype as string,
      baseSize,
      factionName,
      TEAM.orange as TeamName,
    );
  }

  return base;
};
