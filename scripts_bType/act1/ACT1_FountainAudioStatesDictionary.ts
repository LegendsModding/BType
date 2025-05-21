import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";

/**
 * Audio state mappings for fountain interaction scenarios.
 * @readonly
 * @remarks
 * Maps flow state identifiers to audio modes ("occupied"/"incoming_attack").
 * Used in audio systems for contextual sounds during village defense/attack events.
 */
export const ACT1_FountainAudioStatesDictionary = {
  [ACT1_FlowVal.findVillageUnderAttack.id]: "occupied",
  [ACT1_FlowVal.firstVillageUnderAttack.id]: "occupied",
  [ACT1_FlowVal.buildDefensesInSecondVillage.id]: "incoming_attack",
  [ACT1_FlowVal.threePiglinCamps.id]: "incoming_attack",
  [ACT1_FlowVal.secondSkirmish.id]: "occupied",
};
