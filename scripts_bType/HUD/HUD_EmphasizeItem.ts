import { FORESIGHT } from "scripts_bType/utility/Foresight.ts";

/**
 * Emphasizes specified HUD elements through state management.
 * @param hudItems Collection of HUD identifiers to emphasize (default: empty array).
 * @returns {NoReturn}
 * @remarks Iterates through provided HUD items and enables emphasis states. Uses OUTPUT_SetEmphasizedHUDItem for state changes.
 */
export const HUD_EmphasizeItem = (hudItems: string[] = []): void => {
  hudItems.forEach((hi) => {
    if (hi !== "") {
      FORESIGHT.info("~~~ Emphasizing ~~~ " + hi);
      OUTPUT_SetEmphasizedHUDItem(hi, true);
    }
  });
};
