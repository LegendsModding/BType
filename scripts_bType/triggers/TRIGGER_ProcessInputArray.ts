import { TRIGGER_ProcessInputString } from "./TRIGGER_ProcessInputString.ts";

/**
 * Converts an array of trigger inputs into standardized faction identifiers.
 * @param arrayInput Collection of potential faction identifiers.
 * @returns {(string | number | boolean)[]} Array of validated/processed inputs.
 * @remarks Filters and transforms inputs using TRIGGER_ProcessInputString. Removes invalid entries from the output array. Maintains input order while validating each element.
 */
export const TRIGGER_ProcessInputArray = (
  arrayInput: InputElementTrigger[],
): (string | number | boolean)[] => {
  const unpackedInput: (string | number | boolean)[] = [];
  for (const input of arrayInput) {
    const result = TRIGGER_ProcessInputString(input as FactionNameId);
    if (result !== null) {
      unpackedInput.push(result);
    }
  }
  return unpackedInput;
};
