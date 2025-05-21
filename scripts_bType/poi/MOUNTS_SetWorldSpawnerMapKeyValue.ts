import { MAP_Key } from "../map/MAP_Key.ts";
import { MAP_MountWorldSpawner } from "../map/MAP_MountWorldSpawner.ts";

/**
 * Controls world mount spawner activation through server map state.
 * This sets a global flag that determines if mount spawners are active.
 * @param {boolean} spawnersActive True to enable, false to disable
 * @example
 * // Enable world mounts during daytime
 * MOUNTS_SetWorldSpawnerMapKeyValue(true);
 * @description
 * This function modifies the server map's key-value store to control mount spawning.
 * It translates the boolean parameter into system-specific enum values (ENABLED/DISABLED)
 * that the world generation system recognizes. Affects all mount spawners globally.
 */
export const MOUNTS_SetWorldSpawnerMapKeyValue = (
  spawnersActive: boolean,
): NoReturn => {
  if (spawnersActive) {
    OUTPUT_ServerMapSetKeyValue(
      MAP_Key.MOUNT_WORLD_SPAWNER,
      MAP_MountWorldSpawner.ENABLED,
    );
  } else {
    OUTPUT_ServerMapSetKeyValue(
      MAP_Key.MOUNT_WORLD_SPAWNER,
      MAP_MountWorldSpawner.DISABLED,
    );
  }
};
