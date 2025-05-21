import { MOUNTS_Val } from "scripts_bType/poi/mounts/MOUNTS_Val.ts";

import { WORLDDEF_SettingsCustom } from "./WORLDDEF_SettingsCustom.ts";

SNIPPET_GameSettingInitialized(
  "world_resource_density_tower_blast",
  (value) => {
    WORLDDEF_SettingsCustom.towerCount.blast = value.value;
  },
);

SNIPPET_GameSettingInitialized(
  "world_resource_density_tower_frost",
  (value) => {
    WORLDDEF_SettingsCustom.towerCount.frost = value.value;
  },
);

SNIPPET_GameSettingInitialized("world_resource_density_tower_stun", (value) => {
  WORLDDEF_SettingsCustom.towerCount.stun = value.value;
});

//Set the worldGenDefinitionSettings.mountCount.name to the value defined in custom settings. This enables/disables the mount.
//We also set whether or not a mount is enabled in the MOUNTS_Val file. This is referenced by another custom setting that tries to unlock all mounts.
SNIPPET_GameSettingInitialized("tools_mounts_horse", (value) => {
  WORLDDEF_SettingsCustom.mountCount.beetle = value.value;
  MOUNTS_Val.horse.enabled = value.value as boolean;
});

SNIPPET_GameSettingInitialized("tools_mounts_tiger", (value) => {
  WORLDDEF_SettingsCustom.mountCount.bird = value.value;
  MOUNTS_Val.tiger.enabled = value.value as boolean;
});

SNIPPET_GameSettingInitialized("tools_mounts_beetle", (value) => {
  WORLDDEF_SettingsCustom.mountCount.frog = value.value;
  MOUNTS_Val.beetle.enabled = value.value as boolean;
});

SNIPPET_GameSettingInitialized("tools_mounts_bird", (value) => {
  WORLDDEF_SettingsCustom.mountCount.tiger = value.value;
  MOUNTS_Val.bird.enabled = value.value as boolean;
});

SNIPPET_GameSettingInitialized("tools_mounts_frog", (value) => {
  WORLDDEF_SettingsCustom.mountCount.tiger = value.value;
  MOUNTS_Val.frog.enabled = value.value as boolean;
});
