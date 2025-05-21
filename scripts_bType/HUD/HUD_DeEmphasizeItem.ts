import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * De-emphasizes specified HUD elements through state management.
 * @param hudItems Collection of HUD identifiers to de-emphasize (default: empty array).
 * @returns {NoReturn}
 * @remarks Iterates through provided HUD items and disables emphasis states. Uses OUTPUT_SetEmphasizedHUDItem for state changes.
 */
export const HUD_DeEmphasizeItem = (hudItems: string[] = []): void => {
  hudItems.forEach((hi) => {
    if (hi !== "") {
      FORESIGHT.info("~~~ DeEmphasizing ~~~ " + hi);
      OUTPUT_SetEmphasizedHUDItem(hi, false);
    }
  });
};
