import { COUNTER_Generic } from "./COUNTER_Generic.ts";

/**
 * Counter controlling dusk HUD visibility during invasions.
 * @readonly
 * @defaultValue 1
 * @remarks
 * Manages display states for dusk-related UI elements during invasion events. Value persistence affects multiple game sessions.
 */
export const COUNTER_InvasionDuskHUD = COUNTER_Generic("gv_show_dusk_hud", 1);
