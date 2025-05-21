/**
 * Contains icon state identifiers for map entity visualization.
 * @readonly
 * @remarks
 * Valid states include:
 * - DEFAULT: Standard icon display
 * - VISITED: Previously interacted location
 * - COMPLETED: Finished objective marker
 * - UNHURT: Undamaged structure state
 * - DAMAGED: Partially destroyed structure
 * - DESTROYED: Fully destroyed structure
 * - UNDER_ATTACK: Currently contested entity
 * - TARGETED: Selected for operations
 * - DISABLED: Non-interactive state
 * - DISABLED_ACT1: Act 1 specific disabled state
 * - DAMAGED_ACT1: Act 1 specific damaged state
 * - TARGETED_VA_ACT1: Act 1 targeted visual state
 */
export const MAP_IconState = {
  DEFAULT: "default",
  VISITED: "visited",
  COMPLETED: "completed",
  UNHURT: "unhurt",
  DAMAGED: "damaged",
  DESTROYED: "destroyed",
  UNDER_ATTACK: "under_attack",
  TARGETED: "targeted",
  DISABLED: "disabled",
  DISABLED_ACT1: "disabled_act1",
  DAMAGED_ACT1: "damaged_act1",
  TARGETED_VA_ACT1: "targeted_va_act1",
};
