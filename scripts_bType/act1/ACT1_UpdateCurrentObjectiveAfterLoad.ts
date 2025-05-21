import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import {
  CULTURE_FactionNames,
  END_FactionNames,
  UNDEAD_FactionNames,
} from "../FACTION_NAMES.ts";
import { HUD_CompassVisibility } from "../HUD/HUD_CompassVisibility.ts";
import { HUD_EmphasizeItem } from "../HUD/HUD_EmphasizeItem.ts";
import { OUTPUT_DisableBeaconForFaction } from "../output/OUTPUT_DisableBeaconForFaction.ts";
import { OUTPUT_DisableBeaconForFactions } from "../output/OUTPUT_DisableBeaconForFactions.ts";
import { OUTPUT_DisableBeaconOnVillageEntity } from "../output/OUTPUT_DisableBeaconOnVillageEntity.ts";
import { OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity } from "../output/OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity.ts";
import { OUTPUT_EnableBeaconForFaction } from "../output/OUTPUT_EnableBeaconForFaction.ts";
import { OUTPUT_EnableBeaconOnVillageEntity } from "../output/OUTPUT_EnableBeaconOnVillageEntity.ts";
import { OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity } from "../output/OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity.ts";
import { OUTPUT_SetGolemHighlighting } from "../output/OUTPUT_SetGolemHighlighting.ts";
import { OUTPUT_UpdateFountainAudioState } from "../output/OUTPUT_UpdateFountainAudioState.ts";
import { OUTPUT_UpdateIconDistanceForEntity } from "../output/OUTPUT_UpdateIconDistanceForEntity.ts";
import { OUTPUT_UpdateIconDistanceForFaction } from "../output/OUTPUT_UpdateIconDistanceForFaction.ts";
import { OUTPUT_UpdateIconDistanceForFactions } from "../output/OUTPUT_UpdateIconDistanceForFactions.ts";
import { QUERY_GetVillageEntityFromFaction } from "../queries/QUERY_GetVillageEntityFromFaction.ts";
import { QUERY_HasEntities } from "../queries/QUERY_HasEntities.ts";
import { QUERY_IsCurrentAct } from "../queries/QUERY_IsCurrentAct.ts";
import { TUTORIAL_GetCurrentCarpenterNudgeAfterLoad } from "../tutorial/TUTORIAL_GetCurrentCarpenterNudgeAfterLoad.ts";
import { TUTORIAL_GetCurrentStep } from "../tutorial/TUTORIAL_GetCurrentStep.ts";
import { TUTORIAL_GetOutpostOnboardingMessage } from "../tutorial/TUTORIAL_GetOutpostOnboardingMessage.ts";
import { TUTORIAL_GivePlayerResourcesToBuildUpgrade } from "../tutorial/TUTORIAL_GivePlayerResourcesToBuildUpgrade.ts";
import { TUTORIAL_MessagePriority } from "../tutorial/TUTORIAL_MessagePriority.ts";
import { TUTORIAL_StartLinearMessages } from "../tutorial/TUTORIAL_StartLinearMessages.ts";
import { TUTORIAL_UpdateFirstSkirmishNudge } from "../tutorial/TUTORIAL_UpdateFirstSkirmishNudge.ts";
import { FORESIGHT } from "../utility/Foresight.ts";

import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";
import { ACT1_GetFirstVillageEntity } from "./ACT1_GetFirstVillageEntity.ts";

/**
 *
 */
export const ACT1_UpdateCurrentObjectiveAfterLoad = (): void => {
  let onboardingNudge = "";
  OUTPUT_AnnounceInterrupt(TUTORIAL_MessagePriority);
  const currentOnboardingId = TUTORIAL_GetCurrentStep() as OnboardingID;
  OUTPUT_SetGlobalVariable(ACT1_FlowVal.misc.activeOnboardingNudge, 0);
  OUTPUT_DisableBeaconForFactions(CULTURE_FactionNames.all);
  OUTPUT_DisableBeaconForFaction(UNDEAD_FactionNames.skeleton);
  OUTPUT_DisableBeaconForFaction(UNDEAD_FactionNames.zombie);
  if (currentOnboardingId !== undefined) {
    HUD_CompassVisibility(true);
    FORESIGHT.info(
      "~~~~~~~~~~~~~currentOnboardingId is defined~~~~~~~~~~~  " +
        currentOnboardingId,
    );
    const currentOnboardingData = ACT1_FlowVal[currentOnboardingId];
    const onboardingMessageData = currentOnboardingData.message as Record<
      string,
      string
    >;
    onboardingNudge = onboardingMessageData.onboardingNudge;
    const firstVillage = ACT1_GetFirstVillageEntity();
    //Reset unneeded icons
    OUTPUT_UpdateIconDistanceForFactions(CULTURE_FactionNames.all, 250, 0);
    //OUTPUT_UpdateIconDistanceForFactions(
    //  FACTION_POI_ALL as FactionNamesArray,
    //  250,
    //  0,
    //);
    //OUTPUT_UpdateIconDistanceForFactions(MOB_FACTION_NAMES.all, 0, 0);
    OUTPUT_UpdateFountainAudioState();
    OUTPUT_EnableBeaconOnVillageEntity(firstVillage as SingleEntity);
    OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity(
      firstVillage as SingleEntity,
      false,
    );
    //const thirdVillage = _GetThirdVillageEntity()
    OUTPUT_SetGolemHighlighting(false, false); //reset golem highlight variables
    switch (currentOnboardingId) {
      case ACT1_FlowVal.findVillageUnderAttack.id:
        break;
      case ACT1_FlowVal.firstVillageUnderAttack.id:
        OUTPUT_SetGolemHighlighting(true, false);
        break;
      case ACT1_FlowVal.repairFountain.id:
        OUTPUT_SetGolemHighlighting(false, false);
        OUTPUT_UpdateIconDistanceForEntity(
          firstVillage as SingleEntity,
          -1,
          20,
        );
        OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity(
          firstVillage as SingleEntity,
        );
        onboardingNudge =
          TUTORIAL_GetCurrentCarpenterNudgeAfterLoad() as string;
        break;
      case ACT1_FlowVal.findSecondVillage.id:
        OUTPUT_SetGlobalVariable(
          ACT1_FlowVal.findSecondVillage.hasIntroCinePlayed,
          0,
        );
        OUTPUT_UpdateIconDistanceForEntity(
          firstVillage as SingleEntity,
          -1,
          20,
        );
        break;
      case ACT1_FlowVal.freeSecondVillage.id:
        if (
          QUERY_GetGlobalVariable(
            ACT1_FlowVal.freeSecondVillage.global.fountainDisabled,
          ) > 0 &&
          QUERY_GetGlobalVariable(
            ACT1_FlowVal.freeSecondVillage.global.allPiglinsDefeated,
          ) > 0
        ) {
          onboardingNudge =
            ACT1_FlowVal.freeSecondVillage.message.repairFountain;
        }
        OUTPUT_UpdateIconDistanceForEntity(
          firstVillage as SingleEntity,
          -1,
          20,
        );
        break;
      case ACT1_FlowVal.villageChest.id:
        OUTPUT_EnableObjectiveMapDecalAndBeaconForVillageEntity(
          firstVillage as SingleEntity,
        );
        break;
      case ACT1_FlowVal.buildDefensesInSecondVillage.id:
        OUTPUT_SetGolemHighlighting(true, false);
        if (QUERY_GetGlobalVariable(ACT1_FlowVal.misc.towersBuilt) === 0) {
          HUD_EmphasizeItem(ACT1_FlowVal.buildDefensesInSecondVillage.hudItem);
        }
        OUTPUT_UpdateIconDistanceForEntity(
          firstVillage as SingleEntity,
          -1,
          20,
        );
        break;
      case ACT1_FlowVal.firstSkirmish.id:
        OUTPUT_SetGolemHighlighting(true, false);
        OUTPUT_UpdateIconDistanceForEntity(
          firstVillage as SingleEntity,
          -1,
          20,
        );
        onboardingNudge = TUTORIAL_UpdateFirstSkirmishNudge();
        break;
      case ACT1_FlowVal.threePiglinCamps.id: {
        //_UpdateIconDistanceForEntity(thirdVillage, -1, 20)
        OUTPUT_DisableBeaconOnVillageEntity(firstVillage as SingleEntity);
        OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity(
          firstVillage as SingleEntity,
        );
        OUTPUT_SetGolemHighlighting(false, false);
        OUTPUT_UpdateIconDistanceForFaction(
          UNDEAD_FactionNames.skeleton,
          -1,
          20,
        );
        OUTPUT_UpdateIconDistanceForFaction(UNDEAD_FactionNames.zombie, -1, 20);
        OUTPUT_EnableBeaconForFaction(UNDEAD_FactionNames.skeleton);
        OUTPUT_EnableBeaconForFaction(UNDEAD_FactionNames.zombie);
        const campsDestroyedCount = QUERY_GetGlobalVariable(
          ACT1_FlowVal.threePiglinCamps.global.campsDestroyed,
        );
        if (
          campsDestroyedCount <
          ACT1_FlowVal.threePiglinCamps.message.onboardingNudges.length
        ) {
          onboardingNudge =
            ACT1_FlowVal.threePiglinCamps.message.onboardingNudges[
              campsDestroyedCount
            ];
        }
        break;
      }
      case ACT1_FlowVal.endPortalUpgrade.id: {
        OUTPUT_DisableBeaconOnVillageEntity(firstVillage as SingleEntity);
        OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity(
          firstVillage as SingleEntity,
        );
        const endPortalVillage = QUERY_GetVillageEntityFromFaction(
          END_FactionNames.ruinedPortal,
        );
        OUTPUT_UpdateIconDistanceForEntity(
          endPortalVillage as SingleEntity,
          -1,
          20,
        );
        if (
          QUERY_GetGlobalVariable(
            ACT1_FlowVal.endPortalUpgrade.global.hasReturnedToEndPortal,
          ) === 0
        ) {
          OUTPUT_SetGlobalVariable(
            ACT1_FlowVal.endPortalUpgrade.global.hasPlayerOpenedSongBook,
            0,
          );
          OUTPUT_SetGlobalVariable(
            ACT1_FlowVal.misc.miscVO.fastTravel.tracker,
            0,
          );
          onboardingNudge = "";
          TUTORIAL_StartLinearMessages(ACT1_FlowVal.endPortalUpgrade);
          LISTENFOR_LocalTimer({
            snippet: "lt_fast_travel_onboarding",
            ownerVillageId: OWNER_VILLAGE_OPT_OUT,
            waitTime:
              ACT1_FlowVal.misc.miscVO.fastTravel.timers
                .timeToTellPlayerAboutFastTravel,
          });
          TUTORIAL_GivePlayerResourcesToBuildUpgrade();
        } else {
          const hotBarCheck = QUERY_GetGlobalVariable(
            ACT1_FlowVal.endPortalUpgrade.global.hasPlacedUpgradeInHotbar,
          );

          onboardingNudge =
            hotBarCheck > 0
              ? ACT1_FlowVal.endPortalUpgrade.message.buildIronUpgradeNudge
              : ACT1_FlowVal.endPortalUpgrade.message.atRuinedPortalNudge;
          if (hotBarCheck > 0) {
            OUTPUT_SetEmphasizedHUDItem("village", true);
          } else {
            OUTPUT_SetEmphasizedHUDItem("songbookTabVillage", true);
          }
          TUTORIAL_GivePlayerResourcesToBuildUpgrade();
        }
        break;
      }
      case ACT1_FlowVal.secondSkirmish.id: {
        OUTPUT_DisableBeaconOnVillageEntity(firstVillage as SingleEntity);
        OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity(
          firstVillage as SingleEntity,
        );
        const secondSkirmish = FILTER_ByVillageSize(
          FILTER_ByFactionName(QUERY_GetAllVillages(), [
            UNDEAD_FactionNames.skeleton,
          ]),
          ["small"], // TODO: Proper sizes
        );
        if (QUERY_HasEntities(secondSkirmish)) {
          OUTPUT_UpdateIconDistanceForEntity(
            secondSkirmish as SingleEntity,
            -1,
            20,
          );
        }
        if (
          QUERY_GetGlobalVariable(
            ACT1_FlowVal.secondSkirmish.global.hasUpdatedNudge,
          ) > 0
        ) {
          onboardingNudge =
            ACT1_FlowVal.secondSkirmish.message.secondOnboardingNudge;
        }
        break;
      }
      case ACT1_FlowVal.destroyDBB.id:
        OUTPUT_DisableBeaconOnVillageEntity(firstVillage as SingleEntity);
        OUTPUT_DisableObjectiveMapDecalAndBeaconForVillageEntity(
          firstVillage as SingleEntity,
        );
        onboardingNudge = TUTORIAL_GetOutpostOnboardingMessage();
        if (
          QUERY_GetGlobalVariable(
            ACT1_FlowVal.outpost.global.hasBuiltAnOutpost,
          ) === 0 &&
          QUERY_GetGlobalVariable(
            ACT1_FlowVal.destroyDBB.global.hasApproachedDbb,
          ) === 0
        ) {
          HUD_EmphasizeItem(ACT1_FlowVal.outpost.hudItem);
        }
        break;
    }
  } else if (QUERY_IsCurrentAct("act1")) {
    OUTPUT_UpdateHUDVisibility("hud_compass", true);
    onboardingNudge = TUTORIAL_GetOutpostOnboardingMessage();
    if (
      QUERY_GetGlobalVariable(ACT1_FlowVal.outpost.global.hasBuiltAnOutpost) ===
        0 &&
      QUERY_GetGlobalVariable(
        ACT1_FlowVal.destroyDBB.global.hasApproachedDbb,
      ) === 0
    ) {
      HUD_EmphasizeItem(ACT1_FlowVal.outpost.hudItem);
    }
  }
  if (onboardingNudge !== "") {
    LISTENFOR_LocalTimer({
      snippet: "lt_show_onboarding_message_after_load",
      ownerVillageId: OWNER_VILLAGE_OPT_OUT,
      waitTime: 6,
      payloadString: onboardingNudge,
    });
  }
};
