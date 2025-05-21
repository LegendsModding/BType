import { SNIPPET } from "scripts_bType/CAMPAIGN_Start.ts";
import { DECK_BuildInstant } from "scripts_bType/deck/DECK_BuildInstant.ts";
import { DECK_RuinedEndPortalVillage } from "scripts_bType/deck/DECK_RuinedEndPortalVillage.ts";

SNIPPET_VillageGenerated(SNIPPET.GENERATE_END_PORTAL, (villageId) => {
  const villageDeck = DECK_RuinedEndPortalVillage();
  DECK_BuildInstant(villageId, villageDeck);
});
