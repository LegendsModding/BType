/**
 * Retrieves current value of a game rule variable.
 * @param ruleName Identifier for the game rule.
 * @returns {number} Current rule value.
 * @remarks Queries "gv_game_rule_{ruleName}" global variable. Returns 0 if unset.
 */
export const GAME_GetRuleVariable = (ruleName: string): number => {
  return QUERY_GetGlobalVariable("gv_game_rule_" + ruleName);
};
