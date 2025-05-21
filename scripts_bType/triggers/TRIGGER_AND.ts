/**
 * Creates a logical AND composite trigger from multiple conditions.
 * @param triggers Collection of individual trigger conditions to evaluate.
 * @returns {GenericTriggerResult} Trigger object implementing AND logic evaluation.
 * @remarks All triggers must evaluate true for successful activation. Processes conditions sequentially without short-circuiting.
 */
export const TRIGGER_AND = (triggers: Trigger[]): GenericTriggerResult => {
  return {
    /**
     * Evaluates the composite AND condition.
     * @returns {boolean}
     */
    eval: function (): boolean {
      for (const trigger of triggers) {
        if (!trigger.eval()) {
          return false;
        }
      }
      return true;
    },
  };
};
