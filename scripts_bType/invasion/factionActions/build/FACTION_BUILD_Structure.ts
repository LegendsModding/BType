/**
 * =============================================================================
 * Faction Build Actions - Structures
 * =============================================================================
 *
 * Structures are subdivided into eight distinct categories. Each category
 * defines six different build types. These cover a comprehensive range of
 * construction options (resource, defensive, military, civic, religious, cultural,
 * infrastructure, and commercial).
 */
/* FACTION_ACTION_BUILD_STRUCTURE */

import { FACTION_BUILD_StructureCivic } from "./FACTION_BUILD_StructureCivic.ts";
import { FACTION_BUILD_StructureCommercial } from "./FACTION_BUILD_StructureCommercial.ts";
import { FACTION_BUILD_StructureCultural } from "./FACTION_BUILD_StructureCultural.ts";
import { FACTION_BUILD_StructureDefensive } from "./FACTION_BUILD_StructureDefensive.ts";
import { FACTION_BUILD_StructureMilitary } from "./FACTION_BUILD_StructureMilitary.ts";
import { FACTION_BUILD_StructureReligious } from "./FACTION_BUILD_StructureReligious.ts";
import { FACTION_BUILD_StructureResource } from "./FACTION_BUILD_StructureResource.ts";

/**
 * @constant {FactionActionBuildStructure}
 * @description Constants for all structure build actions.
 */
export const FACTION_BUILD_Structure = {
  resources: FACTION_BUILD_StructureResource,
  defensive: FACTION_BUILD_StructureDefensive,
  military: FACTION_BUILD_StructureMilitary,
  civic: FACTION_BUILD_StructureCivic,
  religious: FACTION_BUILD_StructureReligious,
  cultural: FACTION_BUILD_StructureCultural,
  commercial: FACTION_BUILD_StructureCommercial,
} as const satisfies FactionActionBuildStructure;
