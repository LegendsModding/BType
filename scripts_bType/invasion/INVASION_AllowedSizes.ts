import { VILLAGE_SIZE } from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

/**
 * Valid village sizes for cultural faction invasion systems.
 * @readonly
 * @defaultValue [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE]
 * @remarks
 * Restricts cultural faction bases to small/medium/large classifications during procedural generation.
 */
export const INVASION_CultureAllowedSizes = [
  VILLAGE_SIZE.SMALL,
  VILLAGE_SIZE.MEDIUM,
  VILLAGE_SIZE.LARGE,
];

/**
 * Valid village sizes for End faction invasion systems.
 * @readonly
 * @defaultValue [VILLAGE_SIZE.TINY, VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM]
 * @remarks
 * Limits End faction structures to tiny/small/medium scales for balance purposes.
 */
export const INVASION_EndAllowedSizes = [
  VILLAGE_SIZE.TINY,
  VILLAGE_SIZE.SMALL,
  VILLAGE_SIZE.MEDIUM,
];

/**
 * Valid village sizes for piglin faction invasion systems.
 * @readonly
 * @defaultValue [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE, VILLAGE_SIZE.HUGE]
 * @remarks
 * Allows piglin factions to utilize extended size classifications including huge-scale bases.
 */
export const INVASION_PiglinAllowedSizes = [
  VILLAGE_SIZE.SMALL,
  VILLAGE_SIZE.MEDIUM,
  VILLAGE_SIZE.LARGE,
  VILLAGE_SIZE.HUGE,
];

/**
 * Valid village sizes for player faction invasion systems.
 * @readonly
 * @defaultValue [VILLAGE_SIZE.TINY, VILLAGE_SIZE.SMALL]
 * @remarks
 * Restricts player-controlled invasion bases to tiny/small sizes for gameplay balance.
 */
export const INVASION_PlayerAllowedSizes = [
  VILLAGE_SIZE.TINY,
  VILLAGE_SIZE.SMALL,
];

/**
 * Valid village sizes for host faction invasion systems.
 * @readonly
 * @defaultValue [VILLAGE_SIZE.TINY, VILLAGE_SIZE.SMALL]
 * @remarks
 * Limits host-controlled entities to minimal size classifications for narrative consistency.
 */
export const INVASION_HostsAllowedSizes = [
  VILLAGE_SIZE.TINY,
  VILLAGE_SIZE.SMALL,
];

/**
 * Valid village sizes for undead faction invasion systems.
 * @readonly
 * @defaultValue [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE, VILLAGE_SIZE.HUGE]
 * @remarks
 * Allows undead factions to scale up to huge-sized bases for late-game challenge scenarios.
 */
export const INVASION_UndeadAllowedSizes = [
  VILLAGE_SIZE.SMALL,
  VILLAGE_SIZE.MEDIUM,
  VILLAGE_SIZE.LARGE,
  VILLAGE_SIZE.HUGE,
];

/**
 * Consolidated registry of faction-specific village size restrictions.
 * @readonly
 * @remarks
 * Maps faction categories (culture/end/piglin/player/host/undead) to their respective allowed size arrays.
 * Used for validation in procedural generation and invasion system coordination.
 */
export const INVASION_AllowedSizes = {
  culture: INVASION_CultureAllowedSizes,
  end: INVASION_EndAllowedSizes,
  piglin: INVASION_PiglinAllowedSizes,
  player: INVASION_PlayerAllowedSizes,
  host: INVASION_HostsAllowedSizes,
  undead: INVASION_UndeadAllowedSizes,
};
