import { OWNER_VILLAGE_OPT_OUT } from "../consts/OWNER_VILLAGE_OPT_OUT.ts";
import { TEAM } from "../consts/TEAM.ts";

/**
 *
 */
export const ACT1_SetupGolemTracking = (): void => {
  LISTENFOR_EntitySpawned({
    snippet: "es_spawned_mob_wood_golem",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    includeTags: ["wood golem"],
  });
  LISTENFOR_EntitySpawned({
    snippet: "es_spawned_mob_stone_golem",
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    includeTags: ["stone_golem"],
  });
  LISTENFOR_PopCappedEntityDestroyed({
    snippet: "ed_killed_mob_stone_golem",
    destroyerTeamName: TEAM.blue as TeamName,
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    includeTags: ["stone_golem"],
    despawned: true,
  });
  LISTENFOR_PopCappedEntityDestroyed({
    snippet: "ed_killed_mob_stone_golem",
    destroyerTeamName: TEAM.blue as TeamName,
    ownerVillageId: OWNER_VILLAGE_OPT_OUT,
    includeTags: ["wood golem"],
    despawned: true,
  });
};
