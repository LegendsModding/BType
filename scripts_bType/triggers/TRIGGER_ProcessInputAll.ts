import { TRIGGER_ProcessInputArray } from "./TRIGGER_ProcessInputArray.ts";
import { TRIGGER_ProcessInputString } from "./TRIGGER_ProcessInputString.ts";

/**
 * Processes the trigger input to return a valid array of arrays of inputs.
 * @param input An array of elements (could be individual values or nested arrays).
 * @returns An array of arrays of valid inputs (hordes, sizes, etc.).
 */
export const TRIGGER_ProcessInputAll = (
  input: InputElementTrigger[],
): ProcessedInput => {
  const result: ProcessedInput = [];
  for (const inputElem of input) {
    if (Array.isArray(inputElem)) {
      result.push(TRIGGER_ProcessInputArray(inputElem));
      continue;
    }

    const singleResult = TRIGGER_ProcessInputString(inputElem as FactionNameId);
    if (singleResult !== null) {
      result.push([singleResult]);
    }
  }

  return result;
};
