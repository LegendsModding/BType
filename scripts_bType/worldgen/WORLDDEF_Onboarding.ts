import { WORLDGEN_SetDefinition } from "./WORLDGEN_SetDefinition.ts";

/**
 * Onboarding-specific world generation filter configuration.
 * @readonly
 * @remarks
 * Modifies base filter collections to prioritize onboarding-related structures.
 * Appends cultural and central campaign filters with fixed counts.
 */
export const WORLDDEF_Onboarding = {
  base: null,

  /**
   * Modifies world generation filters for onboarding scenarios.
   * @param filterManager World generation filter management interface.
   * @remarks
   * Appends campaign center and cultural requirement filters with priority weighting.
   * Maintains compatibility with base game mode configurations.
   */
  modify: (filterManager: WorldGenFilterManager): void => {
    filterManager.AppendFilter(["center", "onboarding"], 1);
    filterManager.AppendFilter(
      ["culture_required_onboarding", "onboarding"],
      1,
    );
  },
};

SNIPPET_InheritsFromGameMode("onboarding", () => {
  WORLDGEN_SetDefinition(WORLDDEF_Onboarding);
});
