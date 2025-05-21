import { ACT1_FlowVal } from "scripts_bType/act1/ACT1_FlowVal.ts";
import { ACT1_GetFirstVillageEntity } from "scripts_bType/act1/ACT1_GetFirstVillageEntity.ts";
import { EMPTY_ENTITY_GROUP } from "scripts_bType/consts/EMPTY_ENTITY_GROUP.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Retrieves the village entity associated with the current onboarding step in Act 1.
 * @param currentOnboardingStep Identifier for the active tutorial phase.
 * @returns {EntityGroup} Village entity group or empty collection if no match found.
 * @remarks Maps specific onboarding steps to their corresponding village entities. Returns EMPTY_ENTITY_GROUP for invalid steps. Requires valid ACT1_FlowVal configurations.
 */
export const TUTORIAL_GetVillage = (
  currentOnboardingStep: OnboardingID,
): EntityGroup => {
  switch (currentOnboardingStep) {
    case ACT1_FlowVal.findVillageUnderAttack.id:
    case ACT1_FlowVal.firstVillageUnderAttack.id:
    case ACT1_FlowVal.repairFountain.id:
    case ACT1_FlowVal.findSecondVillage.id:
    case ACT1_FlowVal.freeSecondVillage.id:
    case ACT1_FlowVal.villageChest.id:
    case ACT1_FlowVal.buildDefensesInSecondVillage.id:
    case ACT1_FlowVal.secondSkirmish.id:
    case ACT1_FlowVal.firstSkirmish.id:
    case ACT1_FlowVal.threePiglinCamps.id:
      return ACT1_GetFirstVillageEntity();
    default:
      FORESIGHT.error("No onboarding village found " + currentOnboardingStep);
  }
  return EMPTY_ENTITY_GROUP;
};
