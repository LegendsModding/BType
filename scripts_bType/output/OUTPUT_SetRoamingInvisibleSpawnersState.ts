import { GV_ROAMING_PIGLIN_SPAWNERS_CONTROL } from "scripts_bType/consts/GV_ROAMING_PIGLIN_SPAWNERS_CONTROL.ts";

/**
 *
 * @param spawnersActive
 */
export const OUTPUT_SetRoamingInvisibleSpawnersState = (
  spawnersActive: boolean,
): void => {
  let gvValue = 1;
  if (spawnersActive) {
    gvValue = 0;
  }

  // Use keyof to ensure `key` is a valid key of GV_ROAMING_PIGLIN_SPAWNERS_CONTROL
  for (const key in GV_ROAMING_PIGLIN_SPAWNERS_CONTROL) {
    if (
      Object.prototype.hasOwnProperty.call(
        GV_ROAMING_PIGLIN_SPAWNERS_CONTROL,
        key,
      )
    ) {
      const typedKey = key as keyof typeof GV_ROAMING_PIGLIN_SPAWNERS_CONTROL;
      OUTPUT_SetGlobalVariable(
        GV_ROAMING_PIGLIN_SPAWNERS_CONTROL[typedKey],
        gvValue,
      );
    }
  }
};
