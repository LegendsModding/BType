import { SKY_STATE_DarkSun } from "./SKY_STATE_DarkSun.ts";
import { SKY_STATE_SunMoon } from "./SKY_STATE_SunMoon.ts";
import { SKY_STATE_TwoSuns } from "./SKY_STATE_TwoSuns.ts";
import { SKY_STATE_WoF } from "./SKY_STATE_WoF.ts";
import { SKY_STATE_WoFBattle } from "./SKY_STATE_WoFBattle.ts";

/**
 * Collection of all valid sky state identifiers.
 * @readonly
 * @remarks
 * Contains references to all implemented celestial configurations.
 * Used for validation in sky transition systems and environmental effect management.
 */
export const SKY_STATE_All = [
  SKY_STATE_TwoSuns,
  SKY_STATE_DarkSun,
  SKY_STATE_SunMoon,
  SKY_STATE_WoFBattle,
  SKY_STATE_WoF,
];
