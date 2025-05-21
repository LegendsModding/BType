import { SLICE_SUFFIX } from "scripts_bType/consts/SLICE_SUFFIX.ts";

/**
 * Configures slice index variables for specific faction groups.
 * Establishes world slice ownership for procedural generation.
 * @param {FactionCategoryArray} factionNames Array of factions in category
 * @param {FactionNameArray} slices World slice configuration
 * @example
 * // Set piglin slice indices
 * FACTION_SetSliceVariables(PIGLIN_FactionNames.hordes, ["horde_red", "horde_black"]);
 * @description
 * Creates global variables in the format "{faction}_{SLICE_SUFFIX}" storing slice indices.
 * Requires prior world slicing via OUTPUT_SliceWorld(). Used for:
 * - Territory generation
 * - Resource distribution
 * - Faction boundary management
 * - AI patrol zone assignment
 */
export const FACTION_SetSliceVariables = (
  factionNames:
    | AnyPiglinMainHorde[]
    | AnyEndFaction[]
    | AnyCultureFaction[]
    | AnyUndeadFaction[]
    | AnyHostFaction[],
  slices: FactionNameId[],
): void => {
  for (const faction of factionNames) {
    OUTPUT_SetGlobalVariable(
      `${faction}_${SLICE_SUFFIX}`,
      slices.indexOf(faction),
    );
  }
};
