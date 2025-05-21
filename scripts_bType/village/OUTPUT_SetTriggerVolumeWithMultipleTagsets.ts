import { OWNER_VILLAGE_OPT_OUT } from "scripts_bType/consts/OWNER_VILLAGE_OPT_OUT.ts";

import { OUTPUT_RegisterForCleanup } from "./OUTPUT_RegisterForCleanup.ts";

/**
 * Sets up a trigger volume with multiple tag sets.
 * @param lifetimeEg The lifetime entity that will trigger cleanup.
 * @param volume The volume (an array of entity IDs) to modify.
 * @param team The team name.
 * @param villageId The village ID.
 * @param stretchVertically Whether to stretch the volume vertically.
 * @param triggerTags A single trigger tag set or an array of them.
 * @returns The modified volume.
 */
export const OUTPUT_SetTriggerVolumeWithMultipleTagsets = (
  lifetimeEg: SingleEntity,
  volume: SingleEntity,
  team: TeamName,
  villageId: VillageID,
  stretchVertically: boolean,
  triggerTags: TriggerTag,
): EntityGroup => {
  OUTPUT_SetTeam(volume, team);
  if (villageId !== undefined && villageId >= 0) {
    OUTPUT_SetOwnerVillageById(volume, villageId);
    OUTPUT_SetFactionByName(
      volume,
      QUERY_GetFactionNameFromVillageID(villageId),
    );
  }
  if (stretchVertically) {
    OUTPUT_VerticallyStretchAABBToMax(volume);
  }

  // Ensure triggerTags is an array
  const tagsArray: TriggerTags[] = Array.isArray(triggerTags)
    ? triggerTags
    : [triggerTags];

  for (let i = 0; i < tagsArray.length; i++) {
    const current = tagsArray[i];
    // Provide defaults for include/exclude/alliance if undefined.
    const includeTags: TagArray = current.include ?? [];
    const excludeTags: TagArray = current.exclude ?? [];
    const allianceRule: string = current.alliance ?? "";

    if (i === 0) {
      OUTPUT_OverwriteTriggerCriteriaTags(
        volume,
        includeTags,
        excludeTags,
        allianceRule,
      );
    } else {
      OUTPUT_AppendTriggerCriteriaTags(
        volume,
        includeTags,
        excludeTags,
        allianceRule,
      );
    }
  }

  // Clean yourself up if your lifetime entity is destroyed.
  if (lifetimeEg !== undefined) {
    const ownerId = villageId ?? OWNER_VILLAGE_OPT_OUT;
    OUTPUT_RegisterForCleanup(ownerId, lifetimeEg, volume);
  }
  return volume;
};
