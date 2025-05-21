import { ACT1_FlowVal } from "./ACT1_FlowVal.ts";

/**
 * Registry of Act 1 campaign progression step identifiers.
 * @readonly
 * @remarks
 * Contains sequence of mission-critical flow steps including village discovery (findVillageUnderAttack),
 * initial conflict resolution (firstVillageUnderAttack), infrastructure repair (repairFountain),
 * secondary village systems (findSecondVillage/freeSecondVillage), resource collection (villageChest),
 * defensive construction (buildDefensesInSecondVillage), skirmish scenarios (firstSkirmish/secondSkirmish),
 * outpost destruction (threePiglinCamps), Well of Fate upgrades (endPortalUpgrade), and DBB elimination (destroyDBB).
 * Used for coordinated campaign state tracking and milestone validation.
 */
export const ACT1_FlowIds = [
  ACT1_FlowVal.findVillageUnderAttack.id,
  ACT1_FlowVal.firstVillageUnderAttack.id,
  ACT1_FlowVal.repairFountain.id,
  ACT1_FlowVal.findSecondVillage.id,
  ACT1_FlowVal.freeSecondVillage.id,
  ACT1_FlowVal.villageChest.id,
  ACT1_FlowVal.buildDefensesInSecondVillage.id,
  ACT1_FlowVal.firstSkirmish.id,
  ACT1_FlowVal.threePiglinCamps.id,
  ACT1_FlowVal.endPortalUpgrade.id,
  ACT1_FlowVal.secondSkirmish.id,
  ACT1_FlowVal.destroyDBB.id,
];
