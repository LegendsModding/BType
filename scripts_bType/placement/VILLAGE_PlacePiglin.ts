import { PIGLIN_FactionNames } from "scripts_bType/FACTION_NAMES.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import {
  VILLAGE_SIZE,
  VILLAGE_SizeMapping,
} from "scripts_bType/village/VILLAGE_SizeHierarchy.ts";

import { VILLAGE_TryPlacePiglin } from "./VILLAGE_TryPlacePiglin.ts";
import { VILLAGE_TryReplacePiglin } from "./VILLAGE_TryReplacePiglin.ts";

/**
 * Executes multi-stage procedural placement for piglin faction bases with escalating fallback strategies.
 * @param faction Target piglin faction identifier for base construction.
 * @param size Target base scale classification (critical for boss base placement).
 * @returns {boolean} True if placement successfully executed through any strategy.
 * @remarks
 * Implements progressive placement attempts starting with non-destructive perfect placement,
 * then replacement operations, followed by controlled stomping of non-critical structures.
 * For boss-sized bases, escalates through multiple stomp configurations:
 * 1. Initial attempts with minimal disruption (alive/dead outpost stomping)
 * 2. Intermediate phase including wellhouse stomping
 * 3. Final fallback allowing replacement of all non-essential structures while preserving one horde base
 * Uses VILLAGE_TryPlacePiglin and VILLAGE_TryReplacePiglin with varying stompOptions parameters.
 * Logs detailed placement progress through FORESIGHT for debugging visibility.
 * Maintains strategic proximity rules and biome preferences defined in VILLAGE_PlacementConfig.
 */
export const VILLAGE_PlacePiglin = (
  faction: AnyPiglinFaction,
  size: VillageSizeKey,
): boolean => {
  // Perfect place -> replace
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a perfect placement for ${faction}, ${size}`,
  );
  if (VILLAGE_TryPlacePiglin(faction, size)) {
    return true;
  }
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a perfect replacement for ${faction}, ${size}`,
  );
  if (VILLAGE_TryReplacePiglin(faction, size)) {
    return true;
  }

  // The next round of fallbacks is only for boss bases since they are critical to the game
  // TODO: Proper sizes
  if (size !== "boss") {
    return false;
  }

  // Place (stomp alive/dead outposts) -> replace
  const stompOptionsAliveDeadOutposts = {
    stompVillagesWithTextureStamps: [
      {
        factions: PIGLIN_FactionNames.hordes,
        sizes: VILLAGE_SizeMapping.outpost.validSizes,
        alive: true,
        dead: true,
        minimumPresenceToKeepFromStomping: 0,
      },
    ],
    stompWellhouses: false,
  };
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a placement (stomp alive/dead outposts) for ${faction}, ${size}`,
  );
  if (VILLAGE_TryPlacePiglin(faction, size, stompOptionsAliveDeadOutposts)) {
    return true;
  }
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a replacement (stomp alive/dead outposts) for ${faction}, ${size}`,
  );
  if (VILLAGE_TryReplacePiglin(faction, size, stompOptionsAliveDeadOutposts)) {
    return true;
  }

  // Place (stomp alive/dead outposts and wellhouses) -> replace
  const stompOptionsAliveDeadOutpostsAndWellhouses = {
    stompVillagesWithTextureStamps: [
      {
        factions: PIGLIN_FactionNames.hordes,
        sizes: VILLAGE_SizeMapping.outpost.validSizes,
        alive: true,
        dead: true,
        minimumPresenceToKeepFromStomping: 0,
      },
    ],
    stompWellhouses: true,
  };
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a placement (stomp alive/dead outposts and wellhouses) for ${faction}, ${size}`,
  );
  if (
    VILLAGE_TryPlacePiglin(
      faction,
      size,
      stompOptionsAliveDeadOutpostsAndWellhouses,
    )
  ) {
    return true;
  }
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a replacement (stomp alive/dead outposts and wellhouses) for ${faction}, ${size}`,
  );
  if (
    VILLAGE_TryReplacePiglin(
      faction,
      size,
      stompOptionsAliveDeadOutpostsAndWellhouses,
    )
  ) {
    return true;
  }

  // Place (stomp alive outposts, wellhouses and all dead bases) -> do NOT replace (already not caring about dead bases)
  const stompOptionsAliveOutpostsWellhousesAndDeadBases = {
    stompVillagesWithTextureStamps: [
      {
        factions: PIGLIN_FactionNames.hordes,
        sizes: VILLAGE_SizeMapping.outpost.validSizes,
        alive: true,
        dead: false,
        minimumPresenceToKeepFromStomping: 0,
      },
      {
        factions: PIGLIN_FactionNames.hordes,
        sizes: VILLAGE_SizeMapping.village.validSizes,
        alive: false,
        dead: true,
        minimumPresenceToKeepFromStomping: 0,
      },
    ],
    stompWellhouses: true,
  };
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a placement (stomp alive outposts, wellhouses and all dead bases) for ${faction}, ${size}`,
  );
  if (
    VILLAGE_TryPlacePiglin(
      faction,
      size,
      stompOptionsAliveOutpostsWellhousesAndDeadBases,
    )
  ) {
    return true;
  }

  // LAST RESORT
  // Place (stomp all alive/dead invasion bases, wellhouses and dead boss bases, but make sure to keep 1 horde base alive) -> do NOT replace (already not caring about dead bases)
  const stompOptionsAllBasesWellhousesAndDeadBossBases = {
    stompVillagesWithTextureStamps: [
      {
        factions: [PIGLIN_FactionNames.horderunners],
        sizes: [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE],
        alive: true,
        dead: false,
        minimumPresenceToKeepFromStomping: 1,
      },
      {
        factions: [PIGLIN_FactionNames.unbreakables],
        sizes: [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE],
        alive: true,
        dead: false,
        minimumPresenceToKeepFromStomping: 1,
      },
      {
        factions: [PIGLIN_FactionNames.rotters],
        sizes: [VILLAGE_SIZE.SMALL, VILLAGE_SIZE.MEDIUM, VILLAGE_SIZE.LARGE],
        alive: true,
        dead: false,
        minimumPresenceToKeepFromStomping: 1,
      },
      {
        factions: PIGLIN_FactionNames.hordes,
        sizes: VILLAGE_SizeMapping.outpost.validSizes,
        alive: true,
        dead: false,
        minimumPresenceToKeepFromStomping: 0,
      },
      {
        factions: PIGLIN_FactionNames.hordes,
        sizes: [
          VILLAGE_SIZE.SMALL,
          VILLAGE_SIZE.MEDIUM,
          VILLAGE_SIZE.LARGE,
          VILLAGE_SIZE.BOSS,
        ],
        alive: false,
        dead: true,
        minimumPresenceToKeepFromStomping: 0,
      },
    ],
    stompWellhouses: true,
  };
  FORESIGHT.info(
    `[LFC PLACEMENT] Attempting a placement (stomp all alive/dead invasion bases, wellhouses and dead boss bases) for ${faction}, ${size}`,
  );
  return VILLAGE_TryPlacePiglin(
    faction,
    size,
    stompOptionsAllBasesWellhousesAndDeadBossBases,
  );
};
