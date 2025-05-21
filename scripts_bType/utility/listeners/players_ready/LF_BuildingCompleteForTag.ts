import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Listens for building completion events by tag.
 * Simplifies filter-based construction tracking.
 * @param {string} snippet Listener identifier
 * @param {Tag} tag Building tag to watch
 * @param {VillageID} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village
 * @example
 * // Track portal activation
 * LF_BuildingCompleteForTag("portal_active", "ancient_portal");
 *
 * LISTENFOR_BuildingComplete({
 *   snippet: "portal_active",
 *   callback: () => {
 *     UNLOCK_NextArea();
 *   }
 * });
 * @description
 * Event triggers:
 * - Structure completion
 * - Monument activation
 * - Key building upgrades
 *
 * Filter logic:
 * - Matches all specified tags
 * - Excludes others by default
 * - Works with composite tags
 */
export const LF_BuildingCompleteForTag = (
  snippet: string,
  tag: Tag,
  ownerVillageId = OWNER_VILLAGE_OPT_OUT,
): NoReturn => {
  LISTENFOR_BuildingComplete({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
    includeTags: [tag],
  });
};
