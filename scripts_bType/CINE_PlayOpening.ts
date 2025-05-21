import { CAMPAIGN_ActsVal } from "./CAMPAIGN_ActsVal.ts";
import { SNIPPET } from "./CAMPAIGN_Start.ts";
import { END_FactionNames } from "./FACTION_NAMES.ts";
import { OUTPUT_DisableBeaconForFaction } from "./output/OUTPUT_DisableBeaconForFaction.ts";
import { QUERY_GetRuinedEndPortal } from "./queries/QUERY_GetRuinedEndPortal.ts";
import { LF_CineEnd } from "./utility/listeners/players_ready/LF_CineEnd.ts";

/**
 *
 */
export const CINE_PlayOpening = (): void => {
  const ruinedEndPortal = QUERY_GetRuinedEndPortal();
  OUTPUT_TriggerCinematic(CAMPAIGN_ActsVal.cinematics.act1.opening, [
    ruinedEndPortal as SingleEntity,
  ]);
  OUTPUT_DisableBeaconForFaction(END_FactionNames.ruinedPortal);
  LF_CineEnd(
    SNIPPET.INTRO_CINE_FINISHED,
    CAMPAIGN_ActsVal.cinematics.act1.opening,
  );
};
