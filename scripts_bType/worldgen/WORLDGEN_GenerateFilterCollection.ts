import { IsNotNull } from "scripts_bType/utility/IsNotNull.ts";

import { WORLDGEN_FilterManager } from "./WORLDGEN_FilterManager.ts";

/**
 * Generates filter collection from world definition.
 * Handles inheritance and modification chain.
 * @param {WorldDefinition} worldGenDefinition Generation rules
 * @returns {WorldGenFilterCollection} Processed filters
 * @description
 * Inheritance pattern:
 * - Starts from base definition
 * - Applies modifications recursively
 * - Allows filter manipulation
 */
export const WORLDGEN_GenerateFilterCollection = (
  worldGenDefinition: WorldDefinition,
): WorldGenFilterCollection => {
  let filters: WorldGenFilterCollection = [];

  // Inheritance step. Would run recursively till the "base" definition
  if (IsNotNull(worldGenDefinition.base)) {
    filters = WORLDGEN_GenerateFilterCollection(worldGenDefinition.base);
  }

  worldGenDefinition.modify(new WORLDGEN_FilterManager(filters));
  return filters;
};
