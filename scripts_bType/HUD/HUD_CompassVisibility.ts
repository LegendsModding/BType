/**
 * Controls visibility state of the compass UI element across all player interfaces.
 * @param visible Toggle flag for compass display (true shows, false hides).
 * @returns {NoReturn}
 * @remarks Affects global HUD configurations through the "hud_compass" identifier. State persists through game sessions.
 */
export const HUD_CompassVisibility = (visible: boolean): void => {
  OUTPUT_UpdateHUDVisibility("hud_compass", visible);
};
