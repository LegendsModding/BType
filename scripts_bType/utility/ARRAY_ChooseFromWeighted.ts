import { NUMBER_RandomFloat } from "../number/NUMBER_RandomFloat.ts";

import { FORESIGHT } from "./Foresight.ts";

/**
 * Chooses one element from a weighted array based on the weight values.
 * @param array An array of objects that extend the `Weighted` interface.
 * @returns A selected element based on the weighted random choice.
 */
export function ARRAY_ChooseFromWeighted<T extends WeightedElement>(
  array: WeightedArray<T>,
): T {
  // VALIDATION: Ensure every element has a valid 'weight' property.
  for (const element of array) {
    if (typeof element.weight !== "number") {
      FORESIGHT.error(
        "ChooseFromWeightedArray - Element did not have a valid 'weight' property",
      );
      return array[0];
    }
  }

  // Calculate the total weight.
  let totalWeight = 0;
  for (const element of array) {
    totalWeight += element.weight;
  }

  // Roll a random number in the range [0, totalWeight).
  const roll = NUMBER_RandomFloat() * totalWeight;

  // Determine the element corresponding to the random roll.
  let currentWeight = 0;
  for (const element of array) {
    currentWeight += element.weight;
    if (currentWeight >= roll) {
      return element;
    }
  }

  // Fallback (should not happen).
  FORESIGHT.error(
    "ChooseFromWeightedArray - Something went wrong (this shouldn't happen), please go yell at a B-Team programmer",
  );
  return array[0];
}
