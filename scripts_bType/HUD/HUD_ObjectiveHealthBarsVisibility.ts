/**
 * Controls visibility state of objective health bar UI elements globally.
 * @param visible Toggle flag for health bars display (true shows, false hides).
 * @returns {NoReturn}
 * @remarks Affects "hud_objective_health_bars" visibility across all player interfaces. State persists until explicitly changed.
 */
export const HUD_ObjectiveHealthBarsVisibility = (visible: boolean): void => {
  OUTPUT_UpdateHUDVisibility("hud_objective_health_bars", visible);
};
