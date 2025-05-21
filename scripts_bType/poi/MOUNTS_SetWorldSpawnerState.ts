/**
 * Manages world mount spawner states through global variables.
 * Controls multiple spawner types simultaneously.
 * @param {boolean} spawnersActive Toggle spawner activity
 * @example
 * // Disable all mount spawns during cutscenes
 * MOUNTS_SetWorldSpawnerState(false);
 * @description
 * This function sets multiple global variables (disable_world_*) to control
 * different mount spawner types. Uses a unified value (0=enabled, 1=disabled)
 * across all spawner types for consistent state management.
 */
export const MOUNTS_SetWorldSpawnerState = (
  spawnersActive: boolean,
): NoReturn => {
  const gvValue = spawnersActive ? 0 : 1;

  OUTPUT_SetGlobalVariable("disable_world_bird_mount_spawner", gvValue);
  OUTPUT_SetGlobalVariable("disable_world_beetle_mount_spawner", gvValue);
  OUTPUT_SetGlobalVariable("disable_world_tiger_mount_spawner", gvValue);
  OUTPUT_SetGlobalVariable("disable_world_mount_06_spawner", gvValue);
};
