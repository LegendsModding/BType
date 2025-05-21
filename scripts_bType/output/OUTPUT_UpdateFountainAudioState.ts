import { ACT1_FountainAudioStatesDictionary } from "scripts_bType/act1/ACT1_FountainAudioStatesDictionary.ts";
import { QUERY_HasEntities } from "scripts_bType/queries/QUERY_HasEntities.ts";
import { TUTORIAL_GetCurrentStep } from "scripts_bType/tutorial/TUTORIAL_GetCurrentStep.ts";
import { TUTORIAL_GetVillage } from "scripts_bType/tutorial/TUTORIAL_GetVillage.ts";
import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";
import { VILLAGE_SetAudioDefault } from "scripts_bType/village/VILLAGE_SetAudioDefault.ts";

/**
 *
 */
export const OUTPUT_UpdateFountainAudioState = (): void => {
  const currentOnboardingStep = TUTORIAL_GetCurrentStep() as OnboardingID;
  if (currentOnboardingStep !== undefined) {
    const state = ACT1_FountainAudioStatesDictionary[currentOnboardingStep];
    FORESIGHT.info(
      "~~~~~ OUTPUT_UpdateFountainAudioState TUTORIAL_GetCurrentStep ~~~~ " +
        TUTORIAL_GetCurrentStep(),
    );
    if (state !== undefined) {
      if (state !== "") {
        FORESIGHT.info(
          "~~~~~ OUTPUT_UpdateFountainAudioState state~~~~ " + state,
        );
        const village = TUTORIAL_GetVillage(currentOnboardingStep);
        if (QUERY_HasEntities(village)) {
          VILLAGE_SetAudioDefault(
            QUERY_GetVillageIDFromEntity(village as SingleEntity),
            state,
          );
        }
      }
    }
  }
};
