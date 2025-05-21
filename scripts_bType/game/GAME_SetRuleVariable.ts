/**
 * Modifies game rule variable values.
 * @param ruleName Identifier for the game rule.
 * @param value New numerical value for the rule.
 * @returns {NoReturn}
 * @remarks Updates "gv_game_rule_{ruleName}" global variable. Value persistence maintained across game sessions.
 */
export const GAME_SetRuleVariable = (ruleName: string, value: number): void => {
  OUTPUT_SetGlobalVariable("gv_game_rule_" + ruleName, value);
};
