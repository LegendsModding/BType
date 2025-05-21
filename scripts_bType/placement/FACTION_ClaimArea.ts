import { MAP_ClaimedAreaVisibility } from "scripts_bType/map/MAP_ClaimedAreaVisibility.ts";
import { MAP_InvasionRecap } from "scripts_bType/map/MAP_InvasionRecap.ts";
import { MAP_Key } from "scripts_bType/map/MAP_Key.ts";

/**
 * Create a claimed area for a faction.
 * @returns The claimed area entity.
 * @param faction The faction.
 * @param positionEntity Where to create the claimed area.
 * @param areaRadius The radius of the area.
 */
export const FACTION_ClaimArea = (
  faction: FactionNameId,
  positionEntity: SingleEntity,
  areaRadius: number,
): EntityGroup => {
  const claimedArea = OUTPUT_ClaimArea(faction, positionEntity, areaRadius);
  OUTPUT_MapSetKeyValue(
    [claimedArea],
    MAP_Key.CLAIMED_AREA_VISIBILITY,
    MAP_ClaimedAreaVisibility.VISIBLE,
  );
  OUTPUT_MapSetKeyValue(
    [claimedArea],
    MAP_Key.INVASION_RECAP,
    MAP_InvasionRecap.CLAIMED_AREA,
  );
  return claimedArea;
};
