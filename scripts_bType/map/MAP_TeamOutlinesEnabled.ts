import { MAP_Key } from "./MAP_Key.ts";
import { MAP_TeamOutlines } from "./MAP_TeamOutlines.ts";

/**
 * Controls team outline visualization on the strategic map.
 * @param enabled Activation flag for team boundary highlighting.
 * @example // Enable outlines during multiplayer match
 * MAP_TeamOutlinesEnabled(true);
 * @returns {NoReturn}
 * @remarks Modifies server map state using MAP_Key.TEAM_OUTLINES. Affects all clients' strategic awareness displays.
 */
export const MAP_TeamOutlinesEnabled = (enabled: boolean): NoReturn => {
  if (enabled) {
    OUTPUT_ServerMapSetKeyValue(
      MAP_Key.TEAM_OUTLINES,
      MAP_TeamOutlines.ENABLED,
    );
  } else {
    OUTPUT_ServerMapSetKeyValue(
      MAP_Key.TEAM_OUTLINES,
      MAP_TeamOutlines.DISABLED,
    );
  }
};
