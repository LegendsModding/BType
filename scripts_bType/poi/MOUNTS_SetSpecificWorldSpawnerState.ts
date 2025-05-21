import { MOUNTS } from "../consts/MOUNTS.ts";

/**
 *
 * @param spawnerActive
 * @param mount
 */
export const MOUNTS_SetSpecificWorldSpawnerState = (
  spawnerActive: boolean,
  mount: MountArchetype,
): NoReturn => {
  const gvValue = spawnerActive ? 0 : 1;

  switch (mount) {
    case MOUNTS.TIGER:
      OUTPUT_SetGlobalVariable("disable_world_tiger_mount_spawner", gvValue);
      break;
    case MOUNTS.BIRD:
      OUTPUT_SetGlobalVariable("disable_world_bird_mount_spawner", gvValue);
      break;
    case MOUNTS.BEETLE:
      OUTPUT_SetGlobalVariable("disable_world_beetle_mount_spawner", gvValue);
      break;
    case MOUNTS.MOUNT_SIX:
      OUTPUT_SetGlobalVariable("disable_world_mount_06_spawner", gvValue);
      break;
  }
};
