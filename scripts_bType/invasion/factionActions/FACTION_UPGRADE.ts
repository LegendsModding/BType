import { FACTION_UPGRADE_Cultural } from "./upgrade/FACTION_UPGRADE_Cultural.ts";
import { FACTION_UPGRADE_Economic } from "./upgrade/FACTION_UPGRADE_Economic.ts";
import { FACTION_UPGRADE_Military } from "./upgrade/FACTION_UPGRADE_Military.ts";
import { FACTION_UPGRADE_Village } from "./upgrade/FACTION_UPGRADE_Village.ts";

/**
 * Upgrade action categories for faction progression systems.
 * @readonly
 * @remarks
 * Includes cultural/economic/military/village upgrade paths.
 * Used in technology tree validation and structure enhancement systems.
 */
export const FACTION_UPGRADE = {
  CULTURAL: FACTION_UPGRADE_Cultural,
  ECONOMIC: FACTION_UPGRADE_Economic,
  MILITARY: FACTION_UPGRADE_Military,
  VILLAGE: FACTION_UPGRADE_Village,
};
