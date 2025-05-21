/**
 * Generates a namespaced global variable identifier for custom settings storage.
 * @param settingName Base identifier for the custom setting.
 * @returns {ICustomSettingGV} Formatted global variable name.
 * @remarks Constructs identifiers using "gv_custom_setting_{settingName}" pattern. Used for mod-specific configuration persistence.
 */
export const SETTING_CustomGV = (
  settingName: CustomSettingName,
): ICustomSettingGV => {
  return `gv_custom_setting_${settingName}`;
};
