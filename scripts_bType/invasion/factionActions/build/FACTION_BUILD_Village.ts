/**
 * =============================================================================
 * Faction Build Actions - Villages
 * =============================================================================
 *
 * Villages represent civilian settlements with different social or economic focuses.
 */

/**
 * @constant {FactionActionBuildVillage}
 * @description Constants for faction village build actions.
 */
export const FACTION_BUILD_Village = {
  default: "build_village_default",
  agrarian: "build_village_agrarian",
  trading: "build_village_trading",
  artisan: "build_village_artisan",
  mining: "build_village_mining",
  religious: "build_village_religious",
  frontier: "build_village_frontier",
  cultural: "build_village_cultural",
} as const satisfies FactionActionBuildVillage;
