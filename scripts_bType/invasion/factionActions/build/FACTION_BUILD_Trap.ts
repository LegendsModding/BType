/* --- Trap --- */

/**
 * @constant {FactionActionBuildTrap}
 * @description Constants for trap build actions.
 */
export const FACTION_BUILD_Trap = {
  default: "build_trap",
  pitfall: "build_trap_pitfall",
  spike: "build_trap_spike",
  net: "build_trap_net",
  freeze: "build_trap_freeze",
  explosive: "build_trap_explosive",
  ambush: "build_trap_ambush",
} as const satisfies FactionActionBuildTrap;
