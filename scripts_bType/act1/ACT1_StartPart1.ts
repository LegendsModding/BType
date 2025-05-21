import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { SLICE_SUFFIX } from "../consts/SLICE_SUFFIX.ts";
import { PIGLIN_FactionNames } from "../FACTION_NAMES.ts";
import { INVASION_Deactivate } from "../invasion/INVASION_Deactivate.ts";
import { MAP_CampaignAct } from "../map/MAP_CampaignAct.ts";
import { MAP_Key } from "../map/MAP_Key.ts";
import { OUTPUT_SetRoamingInvisibleSpawnersState } from "../output/OUTPUT_SetRoamingInvisibleSpawnersState.ts";
import { PLAYER_GetPlayers } from "../player/PLAYER_GetPlayers.ts";
import { MOUNTS_SetWorldSpawnerMapKeyValue } from "../poi/MOUNTS_SetWorldSpawnerMapKeyValue.ts";
import { MOUNTS_SetWorldSpawnerState } from "../poi/MOUNTS_SetWorldSpawnerState.ts";
import { SKY_STATE_SunMoon } from "../sky/SKY_STATE_SunMoon.ts";
import { TELEMETRY_GameActIds } from "../telemetry/TELEMETRY_GameActIds.ts";
import { GV_TELEMETRY } from "../telemetry/TELEMETRY_GlobalVars.ts";
import { TELEPORT_EntitiesToEndPortal } from "../teleport/TELEPORT_EntitiesToEndPortal.ts";
import { ARRAY_Shuffle } from "../utility/ARRAY_Shuffle.ts";
import { FORESIGHT } from "../utility/Foresight.ts";
import { LOG_InfoIfShouldDoOutput } from "../utility/LOG_InfoIfShouldDoOutput.ts";

import { CAMPAIGN_Act1Val } from "./CAMPAIGN_Act1Val.ts";

//ACT FUNCTIONS

/**
 *
 */
export const ACT1_StartPart1 = (): void => {
  FORESIGHT.info("### ACT1_StartPart1 ###");
  //Begin Act 1 Part 1 at game start
  LOG_InfoIfShouldDoOutput(
    CAMPAIGN_Act1Val.announcements.announceAct1Start,
    CAMPAIGN_Act1Val.debug,
  );
  OUTPUT_SetGlobalVariable(GV_TELEMETRY.gameAct, TELEMETRY_GameActIds.ACT1);
  OUTPUT_ServerMapSetKeyValue(MAP_Key.CAMPAIGN_ACT, MAP_CampaignAct.ACT1);

  //Set Act 1 time properties: SunMoon sky state, no ambience override, don't lock time.
  OUTPUT_SetSkyState(SKY_STATE_SunMoon);
  //OUTPUT_SetAmbienceTimeOfDayOverride(0);
  OUTPUT_LockDayNightCycle(false);

  // Start with invasion system deactivated.
  INVASION_Deactivate();

  // Disable roaming piglin spawners.
  OUTPUT_SetRoamingInvisibleSpawnersState(false);

  // Enable mount POIs.
  MOUNTS_SetWorldSpawnerMapKeyValue(true);
  MOUNTS_SetWorldSpawnerState(true);

  // Teleport player to WoF because we need them to be in the center of the map before we generate bases
  LISTENFOR_CinematicEvent({
    snippet: "ce_dbb_teleport_player",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    eventName: "dbb_teleport_player",
  });

  // These listeners are responsible for building all the horde bases that will participate and starting act 2 respectively.
  // The order here matters so that the invasion system can start *after* all the bases have been introduced.
  {
    // After player teleports, generate the bases
    LISTENFOR_CinematicEvent({
      snippet: "ce_dbb_generate_act2_bases",
      ownerVillageId: OWNER_VILLAGE_OPT_OUT,
      eventName: "dbb_generate_act2_bases",
    });

    // Begin Act 2 before the end of the cine - change time, etc.
    // So that by the time cine is over, the dawn has just began
    LISTENFOR_CinematicEvent({
      snippet: "ce_dbb_start_act2",
      ownerVillageId: OWNER_VILLAGE_OPT_OUT,
      eventName: "dbb_start_act2",
    });
  }

  // Slice the world now so that horde bases can already be placed around, if we wish
  OUTPUT_SliceWorld(PIGLIN_FactionNames.hordes.length);
  // shuffle slices
  const slices = PIGLIN_FactionNames.hordes;
  ARRAY_Shuffle(slices);
  for (const piglinFaction of PIGLIN_FactionNames.hordes) {
    OUTPUT_SetGlobalVariable(
      `${piglinFaction}_${SLICE_SUFFIX}`,
      slices.indexOf(piglinFaction),
    );
  }

  // Set revealed state to false
  //for (const piglinFaction of PIGLIN_FactionNames.hordes) {
  //OUTPUT_ServerMapSetKeyValue(
  //  MAP_ArrivalKeys[piglinFaction],
  //  MAP_ArrivalState.FALSE,
  //);
  //}
};

SNIPPET_CinematicEvent("ce_dbb_teleport_player", () => {
  TELEPORT_EntitiesToEndPortal(PLAYER_GetPlayers());
});
