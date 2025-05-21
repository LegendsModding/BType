import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

/**
 * Listens for villages being destroyed/despawned.
 * Can filter by size and destruction type.
 * @param {string} snippet Listener identifier
 * @param {string} villageSize Size filter ("small", "medium")
 * @param {boolean} [despawned=false] Destruction type
 * @param {number} [ownerVillageId=OWNER_VILLAGE_OPT_OUT] Owning village
 * @example
 * // Track outpost destruction
 * LF_VillageDestroyedForSize("outpost_fallen", "medium");
 *
 * LISTENFOR_VillageDestroyed({
 *   snippet: "outpost_fallen",
 *   callback: () => {
 *     UNLOCK_Achievement("destroy_outpost");
 *   }
 * });
 * @description
 * Destruction types:
 * - false: Player-caused destruction
 * - true: System despawn (base upgrade)
 * - undefined: Both types
 *
 * Size filtering enables:
 * - Progression gating (destroy X small bases)
 * - Difficulty scaling
 * - Achievement tracking
 */
export const LF_VillageDestroyedForSize = (
  snippet: string,
  villageSize: string,
  despawned: boolean = false,
  ownerVillageId: VillageID = OWNER_VILLAGE_OPT_OUT,
): void => {
  LISTENFOR_VillageDestroyed({
    snippet: snippet,
    ownerVillageId: ownerVillageId,
    villageSize: villageSize,
    despawned: despawned,
  });
};
