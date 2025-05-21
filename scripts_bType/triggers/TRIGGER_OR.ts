/**
 * Creates a logical OR composite trigger from multiple trigger conditions.
 * @param triggers Collection of individual trigger conditions to evaluate.
 * @returns {GenericTriggerResult} Trigger object implementing OR logic evaluation.
 * @remarks Evaluates triggers sequentially until a true condition is found. Short-circuits evaluation on first successful trigger.
 */
export const TRIGGER_OR = (triggers: Trigger[]): GenericTriggerResult => {
  return {
    /**
     * Evaluates the composite OR condition.
     * @returns {boolean}
     */
    eval: function (): boolean {
      for (const trigger of triggers) {
        if (trigger.eval()) {
          return true;
        }
      }
      return false;
    },
  };
};
