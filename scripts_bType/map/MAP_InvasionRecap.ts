/**
 * Contains invasion recap event identifiers for post-action reporting.
 * @readonly
 * @remarks
 * Valid recap types:
 * - ATTACK_FAILURE: Unsuccessful invasion attempt
 * - ATTACK_SUCCESS: Successful capture event
 * - ATTACK_SUCCESS_ACT1: Act 1 specific success state
 * - BUILT_OFFENSIVE_OUTPOST: Forward base construction
 * - BUILT_DEFENSIVE_OUTPOST: Defensive structure completion
 * - BUILT_NEW_BASE: New village establishment
 * - UPGRADED: Base enhancement event
 * - OOPSED: Disrupted invasion action
 * - CLAIMED_AREA: Territory acquisition
 */
export const MAP_InvasionRecap = {
  ATTACK_FAILURE: "attack_failure",
  ATTACK_SUCCESS: "attack_success",
  ATTACK_SUCCESS_ACT1: "attack_success_act1",
  BUILT_OFFENSIVE_OUTPOST: "built_offensive_outpost",
  BUILT_DEFENSIVE_OUTPOST: "built_defensive_outpost",
  BUILT_NEW_BASE: "built_new_base",
  UPGRADED: "upgraded",
  OOPSED: "oopsed",
  CLAIMED_AREA: "claimed_area",
};
