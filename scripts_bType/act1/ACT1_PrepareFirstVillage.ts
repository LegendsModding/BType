import { CARD_Buildable } from "../cards/CARD_Buildable.ts";
import { CARD_PlacementPreference } from "../cards/CARD_PlacementPreference.ts";
import { CARD_Tag } from "../cards/CARD_Tag.ts";
import { CARD_ZoneFilter } from "../cards/CARD_ZoneFilter.ts";
import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { PLACEMENT } from "../consts/PLACEMENT.ts";
import { DECK_Empty } from "../deck/DECK_Empty.ts";
import { DECK_MultiplyByMultipleRules } from "../deck/DECK_MultiplyByMultipleRules.ts";
import { DECK_NAME } from "../deck/DECK_NAME.ts";
import { DECK_PutOnBottomOf } from "../deck/DECK_PutOnBottomOf.ts";
import { CULTURE_FactionNames, MOB_FactionNames } from "../FACTION_NAMES.ts";
import { MAP_IconState } from "../map/MAP_IconState.ts";
import { MAP_Key } from "../map/MAP_Key.ts";
import { OUTPUT_EmptyAllVillageChests } from "../output/OUTPUT_EmptyAllVillageChests.ts";
import { OUTPUT_EnableBeaconOnVillageEntity } from "../output/OUTPUT_EnableBeaconOnVillageEntity.ts";
import { OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity } from "../output/OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity.ts";
import { OUTPUT_ResetFountainAudioStateForAllVillages } from "../output/OUTPUT_ResetFountainAudioStateForAllVillages.ts";
import { OUTPUT_UpdateIconDistanceForEntity } from "../output/OUTPUT_UpdateIconDistanceForEntity.ts";
import { OUTPUT_UpdateIconDistanceForFactions } from "../output/OUTPUT_UpdateIconDistanceForFactions.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";
import { ACT1_GetFirstVillageEntity } from "./ACT1_GetFirstVillageEntity.ts";

/**
 *
 */
export const ACT1_PrepareFirstVillage = (): void => {
  const firstVillage = ACT1_GetFirstVillageEntity();
  OUTPUT_MapSetKeyValue(
    firstVillage,
    MAP_Key.ACT1_VILLAGE_STATE,
    MAP_IconState.UNDER_ATTACK,
  );
  OUTPUT_MapSetKeyValue(
    firstVillage,
    MAP_Key.STATE,
    MAP_IconState.DISABLED_ACT1,
  );

  OUTPUT_EmptyAllVillageChests();

  FORESIGHT.info("~~~~ _PrepareFirstVillageUnderAttack ~~~~");

  OUTPUT_UpdateIconDistanceForFactions(CULTURE_FactionNames.all, 250, 0);
  OUTPUT_UpdateIconDistanceForFactions(MOB_FactionNames.all, 0, 0);
  OUTPUT_UpdateIconDistanceForEntity(firstVillage as SingleEntity, -1, 20); //20 flashes the icon and adds a beacon to the compass icon
  OUTPUT_EnableBeaconOnVillageEntity(firstVillage as SingleEntity);
  OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity(
    firstVillage as SingleEntity,
    false,
  );
  OUTPUT_ResetFountainAudioStateForAllVillages();

  const villageId = QUERY_GetVillageIDFromEntity(firstVillage as SingleEntity);

  const cageDeck = DECK_Empty();
  FORESIGHT.info("~~~~~~ Does this get called?~~~~~");
  const cages = CARD_Buildable("mobCage", ACT1_FlowVal.misc.totalCagesNumber);
  DECK_MultiplyByMultipleRules(cages, [
    CARD_PlacementPreference(PLACEMENT.RANDOM),
    CARD_ZoneFilter("villageCageZone"),
    CARD_Tag("villageCage"),
  ]);
  DECK_PutOnBottomOf(cages, cageDeck);
  OUTPUT_SetNamedDeck(DECK_NAME.INSTA_BUILD + villageId, cageDeck);

  LISTENFOR_BuildingComplete({
    snippet: "bc_onboarding_first_village_cage",
    ownerVillageId: villageId,
    includeTags: [ACT1_FlowVal.misc.villageCageTag],
    villageId: villageId,
  });

  LISTENFOR_PlayerInteracted({
    snippet: "pi_onboarding_cage",
    ownerVillageId: villageId,
    includeTags: [ACT1_FlowVal.misc.villageCageTag],
    villageId: villageId,
  });

  LISTENFOR_CinematicFinished({
    snippet: "cf_find_first_village_under_attack_cinematic",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    cinematicName: ACT1_FlowVal.findVillageUnderAttack.cinematic,
  });
};
