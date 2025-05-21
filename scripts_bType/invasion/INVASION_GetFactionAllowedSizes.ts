import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

import { FACTION_GetType } from "./FACTION_GetType.ts";
import { INVASION_AllowedSizes } from "./INVASION_AllowedSizes.ts";

/**
 * Determines allowed village sizes for specified factions during invasion events.
 * @param factionName Target faction identifier.
 * @returns {AnyVillageSizeKeyArray} Array of valid size classifications.
 * @defaultValue ["small"] when faction type resolution fails.
 * @remarks
 * Derives faction category via FACTION_GetType and maps to INVASION_AllowedSizes entries.
 * Returns fallback value when faction type is undefined with error logging.
 */
export const INVASION_GetFactionAllowedSizes = (
  factionName: FactionNameId,
): AnyVillageSizeKeyArray => {
  let allowedSizes: AnyVillageSizeKeyArray = [];
  const factionType = FACTION_GetType(factionName) as FactionCategory;
  if (factionType === undefined) {
    FORESIGHT.error(
      "[ERROR] INVASION_GetFactionAllowedSizes: factionType was undefined after calling FACTION_GetType!",
    );
    // Fallback
    return ["small"];
  } else {
    allowedSizes = INVASION_AllowedSizes[factionType] as AnyVillageSizeKeyArray;
    return allowedSizes;
  }
};
